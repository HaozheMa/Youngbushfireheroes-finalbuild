using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace youngbushfireheroes.Models
{
    public class ImageModel
    {
        List<string> _images = new List<string>();

        public ImageModel()
        {
            _images = new List<string>();
        }

        public List<string> Images
        {
            get { return _images; }
            set { _images = value; }
        }
    }
}