﻿using Remotely.Shared.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;

namespace Remotely.Agent.Services
{
    public class ConfigService
    {
        private static object fileLock = new object();
        private ConnectionInfo connectionInfo;
        private string debugGuid = "f2b0a595-5ea8-471b-975f-12e70e0f3497";

        public ConnectionInfo GetConnectionInfo()
        {
            if (Program.IsDebug && Debugger.IsAttached)
            {
                return new ConnectionInfo()
                {
                    DeviceID = debugGuid,
                    Host = "https://localhost:5001"
                };
            }

            if (connectionInfo == null)
            {
                lock (fileLock)
                {
                    if (!File.Exists("ConnectionInfo.json"))
                    {
                        Logger.Write(new Exception("No connection info available.  Please create ConnectionInfo.json file with appropriate values."));
                        return null;
                    }
                    connectionInfo = JsonConvert.DeserializeObject<ConnectionInfo>(File.ReadAllText("ConnectionInfo.json"));
                }
            }

            return connectionInfo;
        }


        public void SaveConnectionInfo(ConnectionInfo connectionInfo)
        {
            lock (fileLock)
            {
                File.WriteAllText("ConnectionInfo.json", JsonConvert.SerializeObject(connectionInfo));
            }
        }

        public bool TryGetDeviceSetupOptions(out DeviceSetupOptions options)
        {
            if (File.Exists("DeviceSetupOptions.json"))
            {
                options = JsonConvert.DeserializeObject<DeviceSetupOptions>(File.ReadAllText("DeviceSetupOptions.json"));
                File.Delete("DeviceSetupOptions.json");
                return true;
            }

            options = null;
            return false;
        }
    }
}
