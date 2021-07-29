﻿using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Remotely_Shared.Models
{
    public class CursorInfo
    {

        public CursorInfo(byte[] imageBytes, Point hotspot, string cssOverride = null)
        {
            ImageBytes = imageBytes;
            HotSpot = hotspot;
            CssOverride = cssOverride;
        }

        public byte[] ImageBytes { get; set; }
        public Point HotSpot { get; set; }
        public string CssOverride { get; set; }
    }
}
