﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace Remotely_Library.Models
{
    public class CommandContext
    {
        [Key]
        public string ID { get; set; } = Guid.NewGuid().ToString();
        public string CommandMode { get; set; }
        public string CommandText { get; set; }
        public string SenderUserID { get; set; }
        public string SenderConnectionID { get; set; }
        public string[] TargetDeviceIDs { get; set; }
        public ICollection<PSCoreCommandResult> PSCoreResults { get; set; } = new List<PSCoreCommandResult>();
        public ICollection<GenericCommandResult> CommandResults { get; set; } = new List<GenericCommandResult>();
        public DateTime TimeStamp { get; set; } = DateTime.Now;
        [IgnoreDataMember]
        public virtual Organization Organization { get; set; }
        public string OrganizationID { get; set; }
    }
}
