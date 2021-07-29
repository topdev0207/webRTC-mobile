﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Text;

namespace Remotely_Library.Models
{
    public class Drive
    {
        public DriveType DriveType { get; set; }
        public string RootDirectory { get; set; }
        public string Name { get; set; }
        public string DriveFormat { get; set; }
        public double FreeSpace { get; set; }
        public double TotalSize { get; set; }
        public string VolumeLabel { get; set; }
    }
}
