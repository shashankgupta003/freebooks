using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Books
{
    public partial class WebForm2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            username.Text =(string) Session["userName"];
            if ((string)Session["userType"] == "1")
            {
                athority.Text = "Admin";
            }
            else {
                athority.Text = "Normal User";

            }

        }
    }
}