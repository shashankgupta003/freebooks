using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;


namespace Books
{
    public partial class login : System.Web.UI.Page
    {
        SqlConnection connection = new SqlConnection("Data Source = MSI\\SQLEXPRESS; Database=bookDB;Integrated Security = true");
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void ligin_Click(object sender, EventArgs e)
        {
            connection.Open();
            SqlCommand command = new SqlCommand("loginProc", connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@action", "Get");
            command.Parameters.AddWithValue("@userName", UserName.Text);

            SqlDataAdapter adapter = new SqlDataAdapter(command);
            DataTable datattable = new DataTable();
            adapter.Fill(datattable);
            if (datattable.Rows.Count>0)
            {
                
                
                if(password.Text == datattable.Rows[0]["UserPassword"].ToString())
                {
                    Session["userName"] = UserName.Text;
                    Session["password"] = password.Text;
                    Session["userType"] = datattable.Rows[0]["userType"].ToString();
                    Status.Text = "login Sucessfull";
                    Response.Redirect("Insert Book.aspx");
                }
                else
                {
                    Status.Text = "login Failed";
                }
            }
            connection.Close();
        }
    }
}