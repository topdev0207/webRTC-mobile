﻿using Remotely.Desktop.Core.Interfaces;
using Remotely.Desktop.Core.Models;
using System;
using Remotely.Shared.Win32;
using static Remotely.Shared.Win32.User32;
using System.Windows.Forms;
using System.Threading;
using Remotely.Desktop.Core.Services;
using System.Collections.Concurrent;
using System.Threading.Tasks;
using Remotely.Desktop.Core;
using System.Runtime.InteropServices;
using Remotely.Shared.Utilities;

namespace Remotely.Desktop.Win.Services
{
    public class KeyboardMouseInputWin : IKeyboardMouseInput
    {
        private volatile bool inputBlocked;

        public KeyboardMouseInputWin()
        {
            StartInputProcessingThread();
        }

        private CancellationTokenSource CancelTokenSource { get; set; }
        private ConcurrentQueue<Action> InputActions { get; } = new ConcurrentQueue<Action>();

        public Tuple<double, double> GetAbsolutePercentFromRelativePercent(double percentX, double percentY, IScreenCapturer capturer)
        {
            var absoluteX = (capturer.CurrentScreenBounds.Width * percentX) + capturer.CurrentScreenBounds.Left - capturer.GetVirtualScreenBounds().Left;
            var absoluteY = (capturer.CurrentScreenBounds.Height * percentY) + capturer.CurrentScreenBounds.Top - capturer.GetVirtualScreenBounds().Top;
            return new Tuple<double, double>(absoluteX / capturer.GetVirtualScreenBounds().Width, absoluteY / capturer.GetVirtualScreenBounds().Height);
        }

        public Tuple<double, double> GetAbsolutePointFromRelativePercent(double percentX, double percentY, IScreenCapturer capturer)
        {
            var absoluteX = (capturer.CurrentScreenBounds.Width * percentX) + capturer.CurrentScreenBounds.Left;
            var absoluteY = (capturer.CurrentScreenBounds.Height * percentY) + capturer.CurrentScreenBounds.Top;
            return new Tuple<double, double>(absoluteX, absoluteY);
        }

        public void SendKeyDown(string key, Viewer viewer)
        {
            TryOnInputDesktop(() =>
            {
                var keyCode = ConvertJavaScriptKeyToVirtualKey(key);
                var union = new InputUnion()
                {
                    ki = new KEYBDINPUT()
                    {
                        wVk = keyCode,
                        wScan = (ScanCodeShort)MapVirtualKeyEx((uint)keyCode, VkMapType.MAPVK_VK_TO_VSC, GetKeyboardLayout()),
                        time = 0,
                        dwExtraInfo = GetMessageExtraInfo()
                    }
                };
                var input = new INPUT() { type = InputType.KEYBOARD, U = union };
                SendInput(1, new INPUT[] { input }, INPUT.Size);
            });
        }

        public void SendKeyUp(string key, Viewer viewer)
        {
            TryOnInputDesktop(() =>
            {
                var keyCode = ConvertJavaScriptKeyToVirtualKey(key);
                var union = new InputUnion()
                {
                    ki = new KEYBDINPUT()
                    {
                        wVk = keyCode,
                        wScan = (ScanCodeShort)MapVirtualKeyEx((uint)keyCode, VkMapType.MAPVK_VK_TO_VSC, GetKeyboardLayout()),
                        time = 0,
                        dwFlags = KEYEVENTF.KEYUP,
                        dwExtraInfo = GetMessageExtraInfo()
                    }
                };
                var input = new INPUT() { type = InputType.KEYBOARD, U = union };
                SendInput(1, new INPUT[] { input }, INPUT.Size);
            });
        }

        public void SendLeftMouseDown(double percentX, double percentY, Viewer viewer)
        {
            TryOnInputDesktop(() =>
            {
                var xyPercent = GetAbsolutePercentFromRelativePercent(percentX, percentY, viewer.Capturer);
                // Coordinates must be normalized.  The bottom-right coordinate is mapped to 65535.
                var normalizedX = xyPercent.Item1 * 65535D;
                var normalizedY = xyPercent.Item2 * 65535D;
                var union = new InputUnion() { mi = new MOUSEINPUT() { dwFlags = MOUSEEVENTF.ABSOLUTE | MOUSEEVENTF.LEFTDOWN | MOUSEEVENTF.VIRTUALDESK, dx = (int)normalizedX, dy = (int)normalizedY, time = 0, mouseData = 0, dwExtraInfo = GetMessageExtraInfo() } };
                var input = new INPUT() { type = InputType.MOUSE, U = union };
                SendInput(1, new INPUT[] { input }, INPUT.Size);
            });
        }

        public void SendLeftMouseUp(double percentX, double percentY, Viewer viewer)
        {
            TryOnInputDesktop(() =>
            {
                var xyPercent = GetAbsolutePercentFromRelativePercent(percentX, percentY, viewer.Capturer);
                // Coordinates must be normalized.  The bottom-right coordinate is mapped to 65535.
                var normalizedX = xyPercent.Item1 * 65535D;
                var normalizedY = xyPercent.Item2 * 65535D;
                var union = new InputUnion() { mi = new MOUSEINPUT() { dwFlags = MOUSEEVENTF.ABSOLUTE | MOUSEEVENTF.LEFTUP | MOUSEEVENTF.VIRTUALDESK, dx = (int)normalizedX, dy = (int)normalizedY, time = 0, mouseData = 0, dwExtraInfo = GetMessageExtraInfo() } };
                var input = new INPUT() { type = InputType.MOUSE, U = union };
                SendInput(1, new INPUT[] { input }, INPUT.Size);
            });
        }

        public void SendMouseMove(double percentX, double percentY, Viewer viewer)
        {
            TryOnInputDesktop(() =>
            {
                var xyPercent = GetAbsolutePercentFromRelativePercent(percentX, percentY, viewer.Capturer);
                // Coordinates must be normalized.  The bottom-right coordinate is mapped to 65535.
                var normalizedX = xyPercent.Item1 * 65535D;
                var normalizedY = xyPercent.Item2 * 65535D;
                var union = new InputUnion() { mi = new MOUSEINPUT() { dwFlags = MOUSEEVENTF.ABSOLUTE | MOUSEEVENTF.MOVE | MOUSEEVENTF.VIRTUALDESK, dx = (int)normalizedX, dy = (int)normalizedY, time = 0, mouseData = 0, dwExtraInfo = GetMessageExtraInfo() } };
                var input = new INPUT() { type = InputType.MOUSE, U = union };
                SendInput(1, new INPUT[] { input }, INPUT.Size);
            });
        }

        public void SendMouseWheel(int deltaY, Viewer viewer)
        {
            TryOnInputDesktop(() =>
            {
                if (deltaY < 0)
                {
                    deltaY = -120;
                }
                else if (deltaY > 0)
                {
                    deltaY = 120;
                }
                var union = new User32.InputUnion() { mi = new User32.MOUSEINPUT() { dwFlags = MOUSEEVENTF.WHEEL, dx = 0, dy = 0, time = 0, mouseData = deltaY, dwExtraInfo = GetMessageExtraInfo() } };
                var input = new User32.INPUT() { type = InputType.MOUSE, U = union };
                SendInput(1, new User32.INPUT[] { input }, INPUT.Size);
            });
        }

        public void SendRightMouseDown(double percentX, double percentY, Viewer viewer)
        {
            TryOnInputDesktop(() =>
            {
                var xyPercent = GetAbsolutePercentFromRelativePercent(percentX, percentY, viewer.Capturer);
                // Coordinates must be normalized.  The bottom-right coordinate is mapped to 65535.
                var normalizedX = xyPercent.Item1 * 65535D;
                var normalizedY = xyPercent.Item2 * 65535D;
                var union = new InputUnion() { mi = new MOUSEINPUT() { dwFlags = MOUSEEVENTF.ABSOLUTE | MOUSEEVENTF.RIGHTDOWN | MOUSEEVENTF.VIRTUALDESK, dx = (int)normalizedX, dy = (int)normalizedY, time = 0, mouseData = 0, dwExtraInfo = GetMessageExtraInfo() } };
                var input = new INPUT() { type = InputType.MOUSE, U = union };
                SendInput(1, new INPUT[] { input }, INPUT.Size);
            });
        }

        public void SendRightMouseUp(double percentX, double percentY, Viewer viewer)
        {
            TryOnInputDesktop(() =>
            {
                var xyPercent = GetAbsolutePercentFromRelativePercent(percentX, percentY, viewer.Capturer);
                // Coordinates must be normalized.  The bottom-right coordinate is mapped to 65535.
                var normalizedX = xyPercent.Item1 * 65535D;
                var normalizedY = xyPercent.Item2 * 65535D;
                var union = new InputUnion() { mi = new MOUSEINPUT() { dwFlags = MOUSEEVENTF.ABSOLUTE | MOUSEEVENTF.RIGHTUP | MOUSEEVENTF.VIRTUALDESK, dx = (int)normalizedX, dy = (int)normalizedY, time = 0, mouseData = 0, dwExtraInfo = GetMessageExtraInfo() } };
                var input = new INPUT() { type = InputType.MOUSE, U = union };
                SendInput(1, new INPUT[] { input }, INPUT.Size);
            });
        }

        public void SendText(string transferText, Viewer viewer)
        {
            TryOnInputDesktop(() =>
            {
                SendKeys.SendWait(transferText);
            });
        }

        public void SetKeyStatesUp()
        {
            TryOnInputDesktop(() =>
            {
                var thread = new Thread(() =>
                {
                    foreach (VirtualKey key in Enum.GetValues(typeof(VirtualKey)))
                    {
                        try
                        {
                            var state = GetKeyState(key);
                            if (state == -127)
                            {
                                var union = new InputUnion()
                                {
                                    ki = new KEYBDINPUT()
                                    {
                                        wVk = key,
                                        wScan = 0,
                                        time = 0,
                                        dwFlags = KEYEVENTF.KEYUP,
                                        dwExtraInfo = GetMessageExtraInfo()
                                    }
                                };
                                var input = new INPUT() { type = InputType.KEYBOARD, U = union };
                                SendInput(1, new INPUT[] { input }, INPUT.Size);
                            }
                        }
                        catch { }
                    }
                });
                thread.SetApartmentState(ApartmentState.STA);
                thread.Start();
            });
        }

        public void ToggleBlockInput(bool toggleOn)
        {
            InputActions.Enqueue(() =>
            {
                inputBlocked = toggleOn;
                var result = BlockInput(toggleOn);
                Logger.Write($"Result of ToggleBlockInput set to {toggleOn}: {result}");
            });
        }

        private void CheckQueue(CancellationToken cancelToken)
        {
            while (!Environment.HasShutdownStarted &&
                    !cancelToken.IsCancellationRequested)
            {
                try
                {
                    if (InputActions.TryDequeue(out var action))
                    {
                        action();
                    }
                }
                finally
                {
                    Thread.Sleep(1);
                }
            }

            Logger.Write($"Stopping input processing on thread {Thread.CurrentThread.ManagedThreadId}.");
        }

        private VirtualKey ConvertJavaScriptKeyToVirtualKey(string key)
        {
            VirtualKey keyCode;
            switch (key)
            {
                case "Down":
                case "ArrowDown":
                    keyCode = VirtualKey.DOWN;
                    break;
                case "Up":
                case "ArrowUp":
                    keyCode = VirtualKey.UP;
                    break;
                case "Left":
                case "ArrowLeft":
                    keyCode = VirtualKey.LEFT;
                    break;
                case "Right":
                case "ArrowRight":
                    keyCode = VirtualKey.RIGHT;
                    break;
                case "Enter":
                    keyCode = VirtualKey.RETURN;
                    break;
                case "Esc":
                case "Escape":
                    keyCode = VirtualKey.ESCAPE;
                    break;
                case "Alt":
                    keyCode = VirtualKey.MENU;
                    break;
                case "Control":
                    keyCode = VirtualKey.CONTROL;
                    break;
                case "Shift":
                    keyCode = VirtualKey.SHIFT;
                    break;
                case "PAUSE":
                    keyCode = VirtualKey.PAUSE;
                    break;
                case "BREAK":
                    keyCode = VirtualKey.PAUSE;
                    break;
                case "Backspace":
                    keyCode = VirtualKey.BACK;
                    break;
                case "Tab":
                    keyCode = VirtualKey.TAB;
                    break;
                case "CapsLock":
                    keyCode = VirtualKey.CAPITAL;
                    break;
                case "Delete":
                    keyCode = VirtualKey.DELETE;
                    break;
                case "Home":
                    keyCode = VirtualKey.HOME;
                    break;
                case "End":
                    keyCode = VirtualKey.END;
                    break;
                case "PageUp":
                    keyCode = VirtualKey.PRIOR;
                    break;
                case "PageDown":
                    keyCode = VirtualKey.NEXT;
                    break;
                case "NumLock":
                    keyCode = VirtualKey.NUMLOCK;
                    break;
                case "Insert":
                    keyCode = VirtualKey.INSERT;
                    break;
                case "ScrollLock":
                    keyCode = VirtualKey.SCROLL;
                    break;
                case "F1":
                    keyCode = VirtualKey.F1;
                    break;
                case "F2":
                    keyCode = VirtualKey.F2;
                    break;
                case "F3":
                    keyCode = VirtualKey.F3;
                    break;
                case "F4":
                    keyCode = VirtualKey.F4;
                    break;
                case "F5":
                    keyCode = VirtualKey.F5;
                    break;
                case "F6":
                    keyCode = VirtualKey.F6;
                    break;
                case "F7":
                    keyCode = VirtualKey.F7;
                    break;
                case "F8":
                    keyCode = VirtualKey.F8;
                    break;
                case "F9":
                    keyCode = VirtualKey.F9;
                    break;
                case "F10":
                    keyCode = VirtualKey.F10;
                    break;
                case "F11":
                    keyCode = VirtualKey.F11;
                    break;
                case "F12":
                    keyCode = VirtualKey.F12;
                    break;
                case "Meta":
                    keyCode = VirtualKey.LWIN;
                    break;
                case "ContextMenu":
                    keyCode = VirtualKey.MENU;
                    break;
                default:
                    keyCode = (VirtualKey)VkKeyScan(Convert.ToChar(key));
                    break;
            }
            return keyCode;
        }
        private void StartInputProcessingThread()
        {
            CancelTokenSource?.Cancel();
            CancelTokenSource?.Dispose();

            var newThread = new Thread(() =>
            {
                Logger.Write($"New input processing thread started on thread {Thread.CurrentThread.ManagedThreadId}.");
                CancelTokenSource = new CancellationTokenSource();
                if (inputBlocked)
                {
                    ToggleBlockInput(true);
                }
                CheckQueue(CancelTokenSource.Token);
            });

            newThread.SetApartmentState(ApartmentState.STA);
            newThread.Start();
        }

        private void TryOnInputDesktop(Action inputAction)
        {
            InputActions.Enqueue(() =>
            {
                try
                {
                    if (!Win32Interop.SwitchToInputDesktop())
                    {
                        Logger.Write("Desktop switch failed during input processing.");

                        // Thread likely has hooks in current desktop.  SendKeys will create one with no way to unhook it.
                        // Start a new thread for processing input.
                        StartInputProcessingThread();
                        return;
                    }
                    inputAction();
                }
                catch (Exception ex)
                {
                    Logger.Write(ex);
                }
            });
        }
    }
}
