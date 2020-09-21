﻿using Remotely.Desktop.Core.Interfaces;
using Remotely.Desktop.Core.Services;
using Remotely.Desktop.Core.ViewModels;
using Remotely.Desktop.Win.Services;
using Remotely.Shared.Win32;
using System;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Windows.Input;

namespace Remotely.Desktop.Win.ViewModels
{
    public class FileTransferWindowViewModel : ViewModelBase
    {
        private readonly IFileTransferService _fileTransferService;
        private readonly Viewer _viewer;
        private string _viewerConnectionId;
        private string _viewerName;

        public FileTransferWindowViewModel() { }

        public FileTransferWindowViewModel(
            Viewer viewer,
            IFileTransferService fileTransferService)
        {
            _fileTransferService = fileTransferService;
            _viewer = viewer;
            ViewerName = viewer.Name;
            ViewerConnectionId = viewer.ViewerConnectionID;
        }

        public ObservableCollection<FileUpload> FileUploads { get; } = new ObservableCollection<FileUpload>();

        public ICommand OpenFileUploadDialog => new Executor(async (param) =>
        {
            // Change initial directory so it doesn't open in %userprofile% path
            // for SYSTEM account.
            var rootDir = Path.GetPathRoot(Environment.SystemDirectory);
            var userDir = Path.Combine(rootDir, 
                "Users", 
                Win32Interop.GetUsernameFromSessionId((uint)Process.GetCurrentProcess().SessionId));
            
            var ofd = new OpenFileDialog
            {
                Title = "Upload File via Remotely",
                Multiselect = true,
                CheckFileExists = true,
                InitialDirectory = Directory.Exists(userDir) ? userDir : rootDir
            };
            
            var result = ofd.ShowDialog();
            if (result == DialogResult.Cancel)
            {
                return;
            }
            foreach (var file in ofd.FileNames)
            {
                if (File.Exists(file))
                {
                    await UploadFile(file);
                }
            }
        });

        public string ViewerConnectionId
        {
            get
            {
                return _viewerConnectionId;
            }
            set
            {
                _viewerConnectionId = value;
                FirePropertyChanged(nameof(ViewerConnectionId));
            }
        }

        public string ViewerName
        {
            get
            {
                return _viewerName;
            }
            set
            {
                _viewerName = value;
                FirePropertyChanged(nameof(ViewerName));
            }
        }

        public async Task UploadFile(string filePath)
        {
            await App.Current.Dispatcher.InvokeAsync(async () =>
            {
                var fileUpload = new FileUpload()
                {
                    FilePath = filePath
                };
                FileUploads.Add(fileUpload);
                await _fileTransferService.UploadFile(fileUpload, _viewer);
            });
        }

        public ICommand RemoveFileUpload => new Executor((param) =>
        {
            if (param is FileUpload fileUpload)
            {
                FileUploads.Remove(fileUpload);
            }
        });
    }
}