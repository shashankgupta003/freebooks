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
    public partial class signup : System.Web.UI.Page

    {
        SqlConnection connection = new SqlConnection("Data Source = MSI\\SQLEXPRESS; Database=bookDB;Integrated Security = true");
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        

        protected void singup_Click(object sender, EventArgs e)
        {

            if (check_user_name.Text == "Go Ahead") {
                connection.Open();
                SqlCommand command = new SqlCommand("loginProc", connection);
                command.CommandType = CommandType.StoredProcedure;
                command.Parameters.AddWithValue("@action", "INSERT");
                command.Parameters.AddWithValue("@userName", UserName.Text);
                command.Parameters.AddWithValue("@age", Age.Text);
                command.Parameters.AddWithValue("@UserPassword", password.Text);
                command.ExecuteNonQuery();

                connection.Close();
                check_user_name.Text = "check user name";
                sucess.Text = "Regester sussesfully";
                reset();
            }
        }

        protected void check_user_name_Click(object sender, EventArgs e)
        {
            connection.Open();
            SqlCommand command = new SqlCommand("loginProc", connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@action", "Get");
            command.Parameters.AddWithValue("@userName", UserName.Text);
            SqlDataReader dr = command.ExecuteReader();
            
            if(!dr.HasRows) {
                check_user_name.Text = "Go Ahead";
                
            }
            connection.Close();



        }
        protected void reset()
        {
            UserName.Text = "";
            Age.Text = "";
            password.Text = "";
            confirmpass.Text = "";

        }
    }
}