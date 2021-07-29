﻿import { ShowModal, ValidateInput, FloatMessage } from "../UI.js";

document.getElementById("permissionHelpButton").addEventListener("click", (ev) => {
    ShowModal("Permissions", `Permission groups can be used to restrict access to computers.<br><br>
        A computer with no permission groups will be accessible by anyone.  If permissions groups
        are applied, only users with one or more matching groups can access it.
        <br><br>
        All permission groups for the organization are managed in this list.`);
});

document.getElementById("usersHelpButton").addEventListener("click", (ev) => {
    ShowModal("Users", `All users for the organization are managed here.<br><br>
        Administrators will have access to this management screen as well as all computers.
        <br><br>
        Users with no permission groups will only have access to computers that also have
        no permission groups.
        <br><br>
        Users with permission groups will also have access to computers with the same
        permission group.`);
});
document.getElementById("invitesHelpButton").addEventListener("click", (ev) => {
    ShowModal("Invitations", `All pending invitations will be shown here and can be revoked by deleting them.<br><br>
        If a user does not exist, sending an invite will create their account and send them a password reset email too.
        The password reset must be completed before accepting the invitation.
        <br><br>
        The Admin checkbox determines if the new user will have administrator privileges in this organization
        after they accept the invitation.`);
});

document.getElementById("organizationNameInput").addEventListener("input", (ev) => {
    var addon = (ev.currentTarget as HTMLInputElement).parentElement.querySelector(".fa");
    addon.classList.remove("fa-check-circle");
    addon.classList.add("fa-edit");
});
document.getElementById("organizationNameInput").addEventListener("blur", (ev) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status == 200) {
            var addon = (ev.target as HTMLInputElement).parentElement.querySelector(".fa");
            addon.classList.remove("fa-edit");
            addon.classList.add("fa-check-circle");
        }
        else if (xhr.status == 400) {
            ShowModal("Invalid Request", xhr.responseText);
        }
        else {
            showError(xhr);
        }
    }
    xhr.onerror = () => {
        showError(xhr);
    }
    xhr.open("put", location.origin + "/api/OrganizationManagement/Name");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify((ev.currentTarget as HTMLInputElement).value));
});

document.getElementById("removePermissionButton").addEventListener("click", (ev) => {
    var selectList = document.getElementById("permissionList") as HTMLSelectElement;
    for (var i = 0; i < selectList.selectedOptions.length; i++) {
        let selectedValue = selectList.selectedOptions[i].value;
        let xhr = new XMLHttpRequest();
        xhr.onload = (ev) => {
            console.log(ev.srcElement);
            if (xhr.status == 200) {
                document.querySelectorAll(`.all-permissions-list option[value='${selectedValue}']`).forEach(option => {
                    option.remove();
                })
                document.querySelectorAll(`.user-permissions-list option[value='${selectedValue}']`).forEach(option => {
                    option.remove();
                })
            }
            else if (xhr.status == 400) {
                ShowModal("Invalid Request", xhr.responseText);
            }
            else {
                showError(xhr);
            }
        }
        xhr.onerror = () => {
            showError(xhr);
        }
        xhr.open("delete", location.origin + "/api/OrganizationManagement/Permission");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(selectedValue));
    }
    
});
document.getElementById("permissionInput").addEventListener("keypress", (e) => {
    if (e.key.toLowerCase() == "enter") {
        document.getElementById("addPermissionButton").click();
    }
})
document.getElementById("addPermissionButton").addEventListener("click", () => {
    var input = document.getElementById("permissionInput") as HTMLInputElement;

    if (input.checkValidity() && input.value.length > 0) {
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status == 200) {
                document.querySelectorAll(`.all-permissions-list`).forEach((list: HTMLSelectElement) => {
                    var newOption = new Option(input.value, xhr.responseText);
                    list.options.add(newOption);
                })
                input.value = "";
            }
            else if (xhr.status == 400) {
                ShowModal("Invalid Request", xhr.responseText);
            }
            else {
                showError(xhr);
            }
        }
        xhr.onerror = () => {
            showError(xhr);
        }
        xhr.open("post", location.origin + "/api/OrganizationManagement/Permission");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({ Name: input.value }));
    }
})

document.querySelectorAll(".remove-permission-from-user-button").forEach((removeButton: HTMLButtonElement) => {
    removeButton.addEventListener("click", (ev) => {
        var userID = removeButton.getAttribute("user");
        var userPermissionList = document.querySelector(`div.modal[user='${userID}'] .user-permissions-list`) as HTMLSelectElement;
        for (var i = 0; i < userPermissionList.selectedOptions.length; i++) {
            let selectedValue = userPermissionList.selectedOptions[i].value;
            let xhr = new XMLHttpRequest();
            xhr.onload = () => {
                if (xhr.status == 200) {
                    userPermissionList.querySelector(`option[value='${selectedValue}']`).remove();
                }
                else if (xhr.status == 400) {
                    ShowModal("Invalid Request", xhr.responseText);
                }
                else {
                    showError(xhr);
                }
            }
            xhr.onerror = () => {
                showError(xhr);
            }
            xhr.open("delete", `${location.origin}/api/OrganizationManagement/RemovePermissionFromUser/${userID}/${selectedValue}`);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send();
        }
    })
})
document.querySelectorAll(".add-permission-to-user-button").forEach((addButton: HTMLButtonElement) => {
    addButton.addEventListener("click", (ev) => {
        var userID = addButton.getAttribute("user");
        var userPermissionList = document.querySelector(`div.modal[user='${userID}'] .user-permissions-list`) as HTMLSelectElement;
        var allPermissionsList = document.querySelector(`div.modal[user='${userID}'] .all-permissions-list`) as HTMLSelectElement;
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status == 200) {
                var newOption = new Option(allPermissionsList.selectedOptions[0].text, allPermissionsList.selectedOptions[0].value);
                userPermissionList.options.add(newOption);
            }
            else if (xhr.status == 400) {
                ShowModal("Invalid Request", xhr.responseText);
            }
            else {
                showError(xhr);
            }
        }
        xhr.onerror = () => {
            showError(xhr);
        }
        xhr.open("post", location.origin + `/api/OrganizationManagement/AddUserPermission/${userID}`);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify(allPermissionsList.selectedOptions[0].value));
    })

})
document.querySelectorAll(".user-is-admin-checkbox").forEach((checkbox: HTMLInputElement) => {
    checkbox.addEventListener("change", (ev) => {
        var userID = checkbox.getAttribute("user");
        var xhr = new XMLHttpRequest();
        xhr.onload = () => {
            if (xhr.status == 200) {
                
            }
            else if (xhr.status == 400) {
                ShowModal("Invalid Request", xhr.responseText);
            }
            else {
                showError(xhr);
            }
        }
        xhr.onerror = () => {
            showError(xhr);
        }
        xhr.open("post", location.origin + `/api/OrganizationManagement/ChangeIsAdmin/${userID}`);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify((ev.currentTarget as HTMLInputElement).checked));
    })
});
document.querySelectorAll(".remove-user-button").forEach((removeButton: HTMLButtonElement) => {
    removeButton.addEventListener("click", (ev) => {
        var result = confirm("Are you sure you want to remove this user from the organization?");
        if (result) {
            var userID = removeButton.getAttribute("user");
            var xhr = new XMLHttpRequest();
            xhr.onload = () => {
                if (xhr.status == 200) {
                    document.querySelector(`tr[user='${userID}']`).remove();
                }
                else if (xhr.status == 400) {
                    ShowModal("Invalid Request", xhr.responseText);
                }
                else {
                    showError(xhr);
                }
            }
            xhr.onerror = () => {
                showError(xhr);
            }
            xhr.open("delete", `${location.origin}/api/OrganizationManagement/RemoveUserFromOrganization/${userID}`);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send();
        }
    })
});

document.getElementById("sendInviteButton").addEventListener("click", (ev) => {
    var inviteUserInput = document.querySelector("#inviteUserInput") as HTMLInputElement;
    if (!ValidateInput(inviteUserInput)) {
        return;
    }
    var invitedUser = inviteUserInput.value;
    inviteUserInput.value = "";
    var isAdmin = (document.getElementById("inviteIsAdmin") as HTMLInputElement).checked;
    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status == 200) {
            var newInvite = JSON.parse(xhr.responseText);
            var tbody = document.querySelector("#invitesTable tbody");
            var newRow = document.createElement("tr");
            newRow.setAttribute("invite", newInvite.ID);
            newRow.innerHTML = `<td class="middle-aligned"><label class="control-label">${newInvite.InvitedUser}</label></td>
                                <td class="middle-aligned text-center"><input type="checkbox" disabled ${newInvite.IsAdmin ? "checked" : ""}/></td>
                                <td class="middle-aligned"><label class="control-label">${location.origin}/Invite/?id=${newInvite.ID}</label></td>
                                <td><button type="button" class="btn btn-danger delete-invite-button" invite="${newInvite.ID}">Delete</button></td>`;
            tbody.appendChild(newRow);
            newRow.querySelector(".delete-invite-button").addEventListener("click", (ev:MouseEvent) => {
                deleteInvite(ev);
            })
        }
        else if (xhr.status == 400) {
            ShowModal("Invalid Request", xhr.responseText);
        }
        else {
            showError(xhr);
        }
    }
    xhr.onerror = () => {
        showError(xhr);
    }
    xhr.open("post", location.origin + `/api/OrganizationManagement/SendInvite/`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ InvitedUser: invitedUser, IsAdmin: isAdmin }));
    FloatMessage("Sending invite...");
});
document.getElementById("inviteUserInput").addEventListener("keypress", (e) => {
    if (e.key.toLowerCase() == "enter") {
        document.getElementById("sendInviteButton").click();
    }
})

document.querySelectorAll(".delete-invite-button").forEach((deleteButton: HTMLButtonElement) => {
    deleteButton.addEventListener("click", (ev) => {
        deleteInvite(ev);
    })
})

function deleteInvite(ev: MouseEvent) {
    var inviteID = (ev.currentTarget as HTMLButtonElement).getAttribute("invite");
    var xhr = new XMLHttpRequest();
    xhr.onload = () => {
        if (xhr.status == 200) {
            var row = document.querySelector(`tr[invite='${inviteID}']`);
            row.remove();
        }
        else if (xhr.status == 400) {
            ShowModal("Invalid Request", xhr.responseText);
        }
        else {
            showError(xhr);
        }
    }
    xhr.onerror = () => {
        showError(xhr);
    }
    xhr.open("delete", location.origin + `/api/OrganizationManagement/DeleteInvite/`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(inviteID));
}
function showError(xhr: XMLHttpRequest) {
    console.error(xhr);
    ShowModal("Error", "There was an error saving the data.", "", () => { location.reload(); });
}