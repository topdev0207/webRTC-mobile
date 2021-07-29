﻿using PropertyChanged;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Remotely.Desktop.Win.ViewModels
{
    [AddINotifyPropertyChangedInterface]
    public class HostNamePromptViewModel
    {
        public static HostNamePromptViewModel Current { get; private set; }
        public HostNamePromptViewModel()
        {
            Current = this;
        }
        public string Host { get; set; }
    }
}
