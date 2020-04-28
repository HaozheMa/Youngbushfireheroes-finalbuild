using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace youngbushfireheroes.Controllers
{
    public class ImageController : Controller
    {
        // GET: Image
        
        public ActionResult Index()
        {
            var imageFiles = new Models.ImageModel();
            imageFiles.Images.AddRange(System.IO.Directory.GetFiles("~/Image"));

            return View(imageFiles);
        }
    }
}