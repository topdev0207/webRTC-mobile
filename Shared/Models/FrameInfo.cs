﻿using Remotely.Shared.Enums;
using System.Runtime.Serialization;

namespace Remotely.Shared.Models
{
    [DataContract]
    public class FrameInfo : IDynamicDto
    {
        [DataMember(Name = "DtoType")]
        public DynamicDtoType DtoType { get; set; }

        [DataMember(Name = "EndOfFrame")]
        public bool EndOfFrame { get; set; }

        [DataMember(Name = "Height")]
        public int Height { get; set; }

        [DataMember(Name = "ImageBytes")]
        public byte[] ImageBytes { get; set; }

        [DataMember(Name = "ImageQuality")]
        public long ImageQuality { get; set; }

        [DataMember(Name = "Left")]
        public int Left { get; set; }
        [DataMember(Name = "Top")]
        public int Top { get; set; }
        [DataMember(Name = "Width")]
        public int Width { get; set; }
    }
}
