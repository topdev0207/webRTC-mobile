﻿using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Runtime.InteropServices;
using System.Windows;
using System.Windows.Forms;
using Win32;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Drawing.Drawing2D;
using System.Diagnostics;
using System.Runtime.Serialization.Formatters.Binary;
using Remotely_ScreenCast.Utilities;
using System.Threading;

namespace Remotely_ScreenCast.Capture
{
    public class BitBltCapture : ICapturer
    {
        public Bitmap CurrentFrame { get; set; }
        public Bitmap PreviousFrame { get; set; }
        public bool IsCapturing { get; set; }
        public bool CaptureFullscreen { get; set; } = true;
        public int PauseForMilliseconds { get; set; }
        public EventHandler<Rectangle> ScreenChanged { get; set; }
        private Stopwatch FramerateTimer { get; } = Stopwatch.StartNew();
        private object ScreenLock { get; } = new object();
        public int SelectedScreen
        {
            get
            {
                return selectedScreen;
            }
            set
            {
                if (value == selectedScreen)
                {
                    return;
                }
                lock (ScreenLock)
                {
                    if (Screen.AllScreens.Length >= value + 1)
                    {
                        selectedScreen = value;
                    }
                    else
                    {
                        selectedScreen = 0;
                    }
                    CurrentScreenBounds = Screen.AllScreens[selectedScreen].Bounds;
                    CaptureFullscreen = true;
                    Init();
                    ScreenChanged?.Invoke(this, CurrentScreenBounds);
                }
            }
        }
        public Rectangle CurrentScreenBounds { get; set; } = Screen.PrimaryScreen.Bounds;
        private int selectedScreen = Screen.AllScreens.ToList().IndexOf(Screen.PrimaryScreen);
        private Graphics graphic;


        public BitBltCapture()
        {
            Init();
        }

        private void Init()
        {
            CurrentFrame = new Bitmap(CurrentScreenBounds.Width, CurrentScreenBounds.Height, PixelFormat.Format32bppArgb);
            PreviousFrame = new Bitmap(CurrentScreenBounds.Width, CurrentScreenBounds.Height, PixelFormat.Format32bppArgb);
            graphic = Graphics.FromImage(CurrentFrame);     
        }

        public void Capture()
        {
            // Keep framerate below 30 FPS.
            if (FramerateTimer.Elapsed.TotalMilliseconds > 33)
            {
                Thread.Sleep((int)FramerateTimer.Elapsed.TotalMilliseconds);
            }
            FramerateTimer.Restart();


            try
            {
                lock (ScreenLock)
                {
                    PreviousFrame = (Bitmap)CurrentFrame.Clone();                   
                    graphic.CopyFromScreen(CurrentScreenBounds.Left, CurrentScreenBounds.Top, 0, 0, new Size(CurrentScreenBounds.Width, CurrentScreenBounds.Height));
                }
            }
            catch (Exception ex)
            {
                Logger.Write(ex);
                Init();
            }
        }

        public void Dispose()
        {
            graphic.Dispose();
            CurrentFrame.Dispose();
            PreviousFrame.Dispose();
        }
    }
}
