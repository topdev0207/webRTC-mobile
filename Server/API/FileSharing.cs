﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Remotely.Server.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Remotely.Server.API
{
    [Route("api/[controller]")]
    public class FileSharing : Controller
    {
        public FileSharing(DataService dataService)
        {
            DataService = dataService;
        }
        public DataService DataService { get; set; }
        // GET api/<controller>/5
        [HttpGet("{id}")]
        public ActionResult Get(string id)
        {
            var sharedFile = DataService.GetSharedFiled(id);
            if (sharedFile != null)
            {
                return File(sharedFile.FileContents, sharedFile.ContentType, sharedFile.FileName);
            }
            return NotFound();
        }

        [HttpPost]
        [RequestSizeLimit(500_000_000)]
        public List<string> Post()
        {
            var fileIDs = new List<string>();
            foreach (var file in Request.Form.Files)
            {
                var id = DataService.AddSharedFile(file);
                fileIDs.Add(id);
            }
            return fileIDs;
        }
    }
}
