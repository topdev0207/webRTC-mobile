﻿using Remotely.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Remotely.Shared.Models.RemoteControlDtos
{
    [DataContract]
    public class MouseMoveDto : BaseDto
    {

        [DataMember(Name = "DtoType")]
        public new BinaryDtoType DtoType { get; set; } = BinaryDtoType.MouseMove;

        [DataMember(Name = "PercentX")]
        public double PercentX { get; set; }

        [DataMember(Name = "PercentY")]
        public double PercentY { get; set; }
    }
}
