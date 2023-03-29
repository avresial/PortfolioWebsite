using Microsoft.AspNetCore.Mvc;
using System.Drawing;
using System.Drawing.Imaging;

namespace PortfolioWebsite.Models
{
    public class IndexViewModel
    {
        public string GetImageSrc() 
        {
            string src = @"Images/Test.jpg";
            bool imageExists = File.Exists(src);
            return src;
        }

        //public ActionResult Image()
        //{
        //    Bitmap bitmap = new Bitmap(GetImageSrc());
        //    var bitmapBytes = BitmapToBytes(bitmap); //Convert bitmap into a byte array
        //    return File(bitmapBytes, "image/jpeg"); //Return as file result
        //}

        //// This method is for converting bitmap into a byte array
        //private static byte[] BitmapToBytes(Bitmap img)
        //{
        //    using (MemoryStream stream = new MemoryStream())
        //    {
        //        img.Save(stream, ImageFormat.Png);
        //        return stream.ToArray();
        //    }
        //}
    }
}
