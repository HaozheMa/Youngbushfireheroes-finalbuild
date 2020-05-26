using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using System.Web.Mvc;
using youngbushfireheroes.Models;

namespace youngbushfireheroes.Controllers
{
    public class HomeController : Controller
    {
        private ybhModelContainer db = new ybhModelContainer();
        public ActionResult Index(String SearchString)
        {
            StringBuilder sb = new StringBuilder();
            try
            {//md5 encryption 
                MD5 md5 = MD5.Create();
                byte[] byteOld = Encoding.UTF8.GetBytes(SearchString);
                byte[] byteNew = md5.ComputeHash(byteOld);

                foreach (byte b in byteNew)
                {
                    sb.Append(b.ToString("x2"));
                }
            }
            catch (Exception)
            {

            }
            //encryption password and check if it is correct.
            var pw = sb.ToString();
            if (pw.ToUpper() != "19DE5B94F7B83900D4B296D9FA491AEC" )
            {
                if ( pw != "") { 
                ViewBag.ErrorInfo = "Incorrect password!";}

            }
            else
            {
                return RedirectToAction("Home");
            } 
            return View();
        }
        //rondom show a species in the species detail page
        public ActionResult SpeciesDetail()
        {
            Random random = new Random();
            int id = random.Next(1, 6);
            
            Species species = db.SpeciesSet.Find(id);
            if (species == null)
            {
                return HttpNotFound();
            }
            return View(species);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Home()
        {
           

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
       
    }
}