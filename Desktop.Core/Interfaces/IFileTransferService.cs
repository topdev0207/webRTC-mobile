﻿using Remotely.Desktop.Core.Models;
using Remotely.Desktop.Core.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Remotely.Desktop.Core.Interfaces
{
    public interface IFileTransferService
    {
        string GetBaseDirectory();

        Task ReceiveFile(byte[] buffer, string fileName, string messageId, bool endOfFile, bool startOfFile);
        void OpenFileTransferWindow(Viewer viewer);
        Task UploadFile(FileUpload file, Viewer viewer);
    }
}
