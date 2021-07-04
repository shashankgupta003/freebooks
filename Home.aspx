<%@ Page Title="" Language="C#" MasterPageFile="~/default.Master" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="Books.WebForm1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <table>
        <tr>
            <td><asp:Label runat="server">Search by Book Name</asp:Label></td>
            <td><asp:TextBox ID="name" runat="server"></asp:TextBox></td>
             <td><asp:Button ID="Search" runat="server" Text="Search" OnClick="Search_Click" /></td>
        </tr>
       <tr> <td><asp:GridView ID="Grid1" runat="server" AutoGenerateColumns="false" OnRowCommand="Grid1_RowCommand">
                    <Columns>
                        <asp:TemplateField HeaderText="Book Name" >
                           <ItemTemplate>
                                <%#Eval("BookName") %>
                               
                            </ItemTemplate>
                            
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Author Name" >
                            <ItemTemplate>
                                <%#Eval("author") %>
                            </ItemTemplate>
                            
                        </asp:TemplateField>
                        
                        <asp:TemplateField HeaderText="Download" >
                            <itemtemplate>
                                <asp:LinkButton ID="Download" Text="Download" runat="server" CommandName="D" CommandArgument='<%#Eval("book") %>'></asp:LinkButton>
                            </ItemTemplate>
                            
                        </asp:TemplateField>
                       
                       
                    </Columns>
                </asp:GridView>
           </td>
        </tr>
           
         
    </table>

</asp:Content>
