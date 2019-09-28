﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace Remotely.Desktop.Unix.Services
{
    public class Executor : ICommand
    {
        public Executor(Action<object> executeAction, Predicate<object> isExecutable = null)
        {
            ExecuteAction = executeAction;
            IsExecutable = isExecutable;
        }

#pragma warning disable
        public event EventHandler CanExecuteChanged;
#pragma warning restore

        private Action<object> ExecuteAction { get; set; }

        private Predicate<object> IsExecutable { get; set; }
        public bool CanExecute(object parameter)
        {
            if (IsExecutable == null)
            {
                return true;
            }
            return IsExecutable.Invoke(parameter);
        }

        public void Execute(object parameter)
        {
            ExecuteAction.Invoke(parameter);
        }
    }
}
