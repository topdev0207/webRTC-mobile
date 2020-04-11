﻿using System;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Remotely.Shared.Models
{
    public class InviteLink
    {
        [Key]
        public string ID { get; set; } = Guid.NewGuid().ToString();
        public string InvitedUser { get; set; }
        public bool IsAdmin { get; set; }
        public DateTimeOffset DateSent { get; set; }
        [JsonIgnore]
        public Organization Organization { get; set; }
        public string OrganizationID { get; set; }
        public string ResetUrl { get; set; }
    }
}
