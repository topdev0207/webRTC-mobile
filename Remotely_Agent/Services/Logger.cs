﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading.Tasks;

namespace Remotely_Agent.Services
{
    public static class Logger
    {
        public static void Write(string message)
        {
            var path = Path.Combine(Path.GetTempPath(), "Remotely_Logs.txt");
            if (!File.Exists(path))
            {
                File.Create(path).Close();
                if (RuntimeInformation.IsOSPlatform(OSPlatform.Linux))
                {
                    Process.Start("sudo", $"chmod 666 {path}").WaitForExit();
                }
            }
            var jsoninfo = new
            {
                Type = "Info",
                Timestamp = DateTime.Now.ToString(),
                Message = message
            };
            if (File.Exists(path))
            {
                var fi = new FileInfo(path);
                while (fi.Length > 1000000)
                {
                    var content = File.ReadAllLines(path);
                    File.WriteAllLines(path, content.Skip(10));
                    fi = new FileInfo(path);
                }
            }
            File.AppendAllText(path, JsonConvert.SerializeObject(jsoninfo) + Environment.NewLine);
        }

        public static void Write(Exception ex)
        {
            var exception = ex;
            var path = Path.Combine(Path.GetTempPath(), "Remotely_Logs.txt");

            while (exception != null)
            {
                var jsonError = new
                {
                    Type = "Error",
                    Timestamp = DateTime.Now.ToString(),
                    Message = exception?.Message,
                    Source = exception?.Source,
                    StackTrace = exception?.StackTrace,
                };
                if (File.Exists(path))
                {
                    var fi = new FileInfo(path);
                    while (fi.Length > 1000000)
                    {
                        var content = File.ReadAllLines(path);
                        File.WriteAllLines(path, content.Skip(10));
                        fi = new FileInfo(path);
                    }
                }
                File.AppendAllText(path, JsonConvert.SerializeObject(jsonError) + Environment.NewLine);
                exception = exception.InnerException;
            }
        }
    }
}
