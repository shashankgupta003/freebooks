using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;
namespace Books
{
    public partial class RequestForABook : System.Web.UI.Page
    {
        SqlConnection connection = new SqlConnection("Data Source = MSI\\SQLEXPRESS; Database=bookDB;Integrated Security = true");

        protected void Page_Load(object sender, EventArgs e)
        {
            Display();
        }
        protected void Display()
        {
            connection.Open();
            SqlCommand command = new SqlCommand("suggProc", connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@action", "get");
            SqlDataAdapter da = new SqlDataAdapter(command);
            DataTable dt = new DataTable();
            da.Fill(dt);
            connection.Close();
            Grid2.DataSource = dt;
            Grid2.DataBind();
        }
        protected void Grid2_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            connection.Open();
            SqlCommand cmd = new SqlCommand("suggProc", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@action", "DELETE");
            cmd.Parameters.AddWithValue("@suggestionnID", e.CommandArgument);
            cmd.ExecuteNonQuery();
            connection.Close();
            Display();
        }

        protected void post_Click(object sender, EventArgs e)
        {
            connection.Open();
            SqlCommand cmd = new SqlCommand("suggProc", connection);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("@action", "INSERT");
            cmd.Parameters.AddWithValue("@suggest", sugg.Text);
            cmd.ExecuteNonQuery();
            connection.Close();
            Display();
        }
    }
}