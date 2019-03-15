﻿using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Remotely_ScreenCast.Capture
{
    public interface ICapturer : IDisposable
	{
        bool CaptureFullscreen { get; set; }
        Bitmap CurrentFrame { get; set; }
        Rectangle CurrentScreenBounds { get; }
        Bitmap PreviousFrame { get; set; }
        EventHandler<Rectangle> ScreenChanged { get; set; }
        int SelectedScreen { get; set; }
        void Capture();
        void Init();
    }
}
