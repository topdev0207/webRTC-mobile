﻿using Remotely_ScreenCast.Core;
using Remotely_ScreenCast.Core.Capture;
using Remotely_ScreenCast.Core.Utilities;
using Remotely_ScreenCast.Linux.Capture;
using Remotely_ScreenCast.Linux.Input;
using Remotely_ScreenCast.Linux.X11Interop;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Remotely_ScreenCast.Linux
{
    public class Program
    {
        public static Conductor Conductor { get; private set; }
        //public static CursorIconWatcher CursorIconWatcher { get; private set; }

        public static void Main(string[] args)
        {
            try
            {
                ScreenCastInitiated(null, new Tuple<string, string>("asdf", "asdf"));
                AppDomain.CurrentDomain.UnhandledException += CurrentDomain_UnhandledException;
                Conductor = new Conductor();
                Conductor.ProcessArgs(args);
                Conductor.Connect().Wait();
                Conductor.SetMessageHandlers(new X11Input());
                Conductor.ScreenCastInitiated += ScreenCastInitiated;
                //CursorIconWatcher = new CursorIconWatcher(Conductor);
                //CursorIconWatcher.OnChange += CursorIconWatcher_OnChange;
                Conductor.OutgoingMessages.SendDeviceInfo(Conductor.ServiceID, Environment.MachineName).Wait();
                Conductor.OutgoingMessages.NotifyRequesterUnattendedReady(Conductor.RequesterID).Wait();
                Conductor.StartWaitForViewerTimer();
                while (true)
                {
                    System.Threading.Thread.Sleep(100);
                }
            }
            catch (Exception ex)
            {
                Logger.Write(ex);
            }
        }

        private static void ScreenCastInitiated(object sender, Tuple<string, string> viewerAndRequester)
        {
            ICapturer capturer;
            try
            {
                capturer = new X11Capture();
                //await Conductor.OutgoingMessages.SendCursorChange(CursorIconWatcher.GetCurrentCursor(), new List<string>() { viewerAndRequester.Item1 });
                ScreenCaster.BeginScreenCasting(viewerAndRequester.Item1, viewerAndRequester.Item2, Conductor.OutgoingMessages, capturer, Conductor);
            }
            catch (Exception ex)
            {
                Logger.Write(ex);
            }
        }

        //public static async void CursorIconWatcher_OnChange(object sender, CursorInfo cursor)
        //{
        //    await Conductor.OutgoingMessages.SendCursorChange(cursor, Conductor.Viewers.Keys.ToList());
        //}

        private static void CurrentDomain_UnhandledException(object sender, UnhandledExceptionEventArgs e)
        {
            Logger.Write((Exception)e.ExceptionObject);
        }
    }
}
