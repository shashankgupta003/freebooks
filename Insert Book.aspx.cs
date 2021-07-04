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
    public partial class Insert_Book : System.Web.UI.Page
    {
        SqlConnection connection = new SqlConnection("Data Source = MSI\\SQLEXPRESS; Database=bookDB;Integrated Security = true");
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                Display();
                clear();
            }
        }
        protected void Display()
        {
            connection.Open();
            SqlCommand command = new SqlCommand("BookProc", connection);
            command.CommandType = CommandType.StoredProcedure;
            command.Parameters.AddWithValue("@action", "GET");
            SqlDataAdapter da = new SqlDataAdapter(command);
            DataTable dt = new DataTable();
            da.Fill(dt);
            connection.Close();
            GridID.DataSource = dt;
            GridID.DataBind();
        }
        protected void clear()
        {
            BookName.Text = "";
            AuthotID.Text = "";
            RelationID.Text = "";
            Upload.Text = "Upload";
        }

        protected void Upload_Click(object sender, EventArgs e)
        {
            if (Session["userType"].ToString() == null || Session["userType"].ToString()=="0")
            {
                Response.Redirect("Home.aspx");
            }
            else
            {
                
                if (Upload.Text == "Upload")
                {
                    string FN = DateTime.Now.Ticks.ToString()+Path.GetFileName(BookPDFID.PostedFile.FileName);
                    BookPDFID.SaveAs(Server.MapPath("Books" + "\\" + FN));
                    connection.Open();
                    SqlCommand cmd = new SqlCommand("BookProc", connection);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@action", "INSERT");
                    cmd.Parameters.AddWithValue("@BookName", BookName.Text);
                    cmd.Parameters.AddWithValue("@author", AuthotID.Text);
                    cmd.Parameters.AddWithValue("@courceRelated", RelationID.Text);
                    cmd.Parameters.AddWithValue("@book", FN);
                    cmd.ExecuteNonQuery();
                    connection.Close();
                    Display();
                    clear();
                }
                else
                {
                    string FN =  Path.GetFileName(BookPDFID.PostedFile.FileName);

                    connection.Open();
                    SqlCommand cmd = new SqlCommand("BookProc", connection);
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@action", "UPDATE");
                    cmd.Parameters.AddWithValue("@bookid", ViewState["IDD"]);
                    cmd.Parameters.AddWithValue("@BookName", BookName.Text);
                    cmd.Parameters.AddWithValue("@author", AuthotID.Text);
                    cmd.Parameters.AddWithValue("@courceRelated", RelationID.Text);
                    if (FN != "")
                    {
                        FN = DateTime.Now.Ticks.ToString()+FN;
                        cmd.Parameters.AddWithValue("@book", FN);
                        BookPDFID.SaveAs(Server.MapPath("books" + "\\" + FN));
                        File.Delete(Server.MapPath("books" + "\\" + ViewState["book"]));
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("@book", ViewState["book"]);
                    }
                    cmd.ExecuteNonQuery();
                    connection.Close();
                    Display();
                    clear();
                }
            }


        }

        protected void GridID_RowCommand(object sender, GridViewCommandEventArgs e)
        {
            if (Session["userType"].ToString() == null || Session["userType"].ToString() == "0")
            {
                Response.Redirect("Home.aspx");
            }
            else
            {
                connection.Open();
                SqlCommand cmd = new SqlCommand("BookProc", connection);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@action", "EDIT");
                cmd.Parameters.AddWithValue("@bookid", e.CommandArgument);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                DataTable dt = new DataTable();
                da.Fill(dt);
                connection.Close();
                BookName.Text = dt.Rows[0]["BookName"].ToString();
                AuthotID.Text = dt.Rows[0]["author"].ToString();

                RelationID.Text = dt.Rows[0]["courceRelated"].ToString();
                ViewState["book"] = dt.Rows[0]["book"].ToString();
                Upload.Text = "UPDATE";
                ViewState["IDD"] = e.CommandArgument;
            }
        }
    }
}