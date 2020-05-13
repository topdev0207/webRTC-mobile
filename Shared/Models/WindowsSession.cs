﻿using System.Runtime.Serialization;

namespace Remotely.Shared.Models
{
    [DataContract]
    public enum SessionType
    {
        [EnumMember(Value = "Console")]
        Console = 0,
        [EnumMember(Value = "RDP")]
        RDP = 1
    }

    [DataContract]
    public class WindowsSession
    {
        [DataMember(Name = "ID")]
        public uint ID { get; set; }
        [DataMember(Name = "Name")]
        public string Name { get; set; }
        [DataMember(Name = "Type")]
        public SessionType Type { get; set; }
        [DataMember(Name = "Username")]
        public string Username { get; set; }
    }
}
