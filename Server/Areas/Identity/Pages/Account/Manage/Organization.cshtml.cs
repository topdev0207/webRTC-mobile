using Remotely.Shared.Models;
using Remotely.Shared.ViewModels;
using Remotely.Server.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using Remotely.Shared.ViewModels.Organization;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Identity.UI.Services;
using System;

namespace Remotely.Server.Areas.Identity.Pages.Account.Manage
{
    public class OrganizationModel : PageModel
    {
        public OrganizationModel(DataService dataService, UserManager<RemotelyUser> userManager, IEmailSender emailSender)
        {
            DataService = dataService;
            UserManager = userManager;
            EmailSender = emailSender;
        }
        public List<SelectListItem> DeviceGroups { get; } = new List<SelectListItem>();

        [Display(Name = "Invites")]
        public List<Invite> Invites { get; set; }

        [Display(Name = "Organization Name")]
        [StringLength(25)]
        public string OrganizationName { get; set; }

        [Display(Name = "Users")]
        public List<OrganizationUser> Users { get; set; }

        public class InputModel
        {
            public bool IsAdmin { get; set; }

            [EmailAddress]
            public string UserEmail { get; set; }
        }

        [BindProperty]
        public InputModel Input { get; set; } = new InputModel();

        [TempData]
        public string StatusMessage { get; set; }

        private DataService DataService { get; }

        private UserManager<RemotelyUser> UserManager { get; }
        private IEmailSender EmailSender { get; }

        public void OnGet()
        {
            PopulateViewModel();
        }

        private void PopulateViewModel()
        {
            OrganizationName = DataService.GetOrganizationName(User.Identity.Name);

            var groups = DataService.GetDeviceGroupsForUserName(User.Identity.Name);
            DeviceGroups.AddRange(groups.Select(x => new SelectListItem(x.Name, x.ID)));

            Users = DataService.GetAllUsers(User.Identity.Name)
                .Select(x => new OrganizationUser()
                {
                    ID = x.Id,
                    IsAdmin = x.IsAdministrator,
                    UserName = x.UserName
                }).ToList();

            Invites = DataService.GetAllInviteLinks(User.Identity.Name).Select(x => new Invite()
            {
                ID = x.ID,
                InvitedUser = x.InvitedUser,
                IsAdmin = x.IsAdmin,
                DateSent = x.DateSent
            }).ToList();
        }

        public async Task<IActionResult> OnPostSendInviteAsync()
        {
            var currentUser = await UserManager.FindByEmailAsync(User.Identity.Name);
            if (!currentUser.IsAdministrator)
            {
                return RedirectToPage("Index");
            }

            if (ModelState.IsValid)
            {
                if (!DataService.DoesUserExist(Input.UserEmail))
                {
                    var user = new RemotelyUser { UserName = Input.UserEmail, Email = Input.UserEmail };
                    var result = await UserManager.CreateAsync(user);
                    if (result.Succeeded)
                    {
                        if (!DataService.SetNewUserProperties(user.UserName, currentUser.OrganizationID, Input.IsAdmin))
                        {
                            ModelState.AddModelError("OrgID", "Failed to set organization ID.");
                            return Page();
                        }

                        user = await UserManager.FindByEmailAsync(Input.UserEmail);


                        await UserManager.ConfirmEmailAsync(user, await UserManager.GenerateEmailConfirmationTokenAsync(user));

                        StatusMessage = "User account created.";
                        return RedirectToPage();
                    }
                    else
                    {
                        ModelState.AddModelError("CreateUser", "Failed to create user account.");
                        return Page();
                    }
                }
                else
                {
                  
                    var invite = new Invite()
                    {
                        InvitedUser = Input.UserEmail,
                        IsAdmin = Input.IsAdmin
                    };
                    var newInvite = DataService.AddInvite(currentUser.OrganizationID, invite);

                    var inviteURL = $"{Request.Scheme}://{Request.Host}/Invite?id={newInvite.ID}";
                    await EmailSender.SendEmailAsync(invite.InvitedUser, "Invitation to Organization in Remotely",
                                $@"<img src='https://remotely.lucency.co/images/Remotely_Logo.png'/>
                            <br><br>
                            Hello!
                            <br><br>
                            You've been invited to join an organization in Remotely.
                            <br><br>
                            You can join the organization by <a href='{HtmlEncoder.Default.Encode(inviteURL)}'>clicking here</a>.");

                    StatusMessage = "Invitation sent.";

                    return RedirectToPage();
                }
            }
            return Page();
        }
    }

}