using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using System.Data;
using System.Data.SqlClient;
using System.IO;

namespace Books
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        SqlConnection connection = new SqlConnection("Data Source = MSI\\SQLEXPRESS; Database=bookDB;Integrated Security = true");
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected void Display()
        {
            connection.Open();
            SqlCommand command = new SqlCommand("BookProc", connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@action", "SEARCH");
            command.Parameters.AddWithValue("@find", name.Text);
            SqlDataAdapter da = new SqlDataAdapter(command);
            DataTable dt = new DataTable();
            da.Fill(dt);
            connection.Close();
            Grid1.DataSource = dt;
            Grid1.DataBind();
        }

        protected void Grid1_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            Response.Clear();
            Response.Write(e.CommandArgument);
            Response.ContentType = "application/octect-stream";
            Response.AppendHeader("content-disposition", "filename=" + e.CommandArgument);
            Response.TransmitFile(Server.MapPath("~/Books/") + e.CommandArgument);
            Response.End();
        }

        protected void Search_Click(object sender, EventArgs e)
        {
            Display();
        }
    }
}