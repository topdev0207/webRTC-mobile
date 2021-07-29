﻿using Remotely.Shared.Enums;
using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.Text;

namespace Remotely.Shared.Models.RemoteControlDtos
{
    [DataContract]
    public class AudioSampleDto : BaseDto
    {
        public AudioSampleDto(byte[] buffer)
        {
            Buffer = buffer;
        }

        [DataMember(Name = "Buffer")]
        public byte[] Buffer { get; }


        [DataMember(Name = "DtoType")]
        public new BinaryDtoType DtoType { get; } = BinaryDtoType.AudioSample;

    }
}
