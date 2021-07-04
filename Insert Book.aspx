<%@ Page Title="" Language="C#" MasterPageFile="~/default.Master" AutoEventWireup="true" CodeBehind="Insert Book.aspx.cs" Inherits="Books.Insert_Book" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <table>
        <tr>
            <td>Book Name</td>
            <td>
                <asp:TextBox ID="BookName" runat="server"></asp:TextBox>
            </td>
        </tr>
         <tr>
            <td>Author Name</td>
            <td>
                <asp:TextBox ID="AuthotID" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>Book Related</td>
            <td>
                <asp:TextBox ID="RelationID" runat="server"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td>Book Upload :</td>
            <td>
                <asp:FileUpload ID="BookPDFID" runat="server" />
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
                <asp:Button ID="Upload" runat="server" Text="Upload Book" OnClick="Upload_Click" />
            </td>
        </tr>

        <tr>
            
            <td>
                <asp:GridView ID="GridID" runat="server" OnRowCommand="GridID_RowCommand" AutoGenerateColumns="false">
                    <Columns>
                        <asp:TemplateField HeaderText="Book ID">
                            <ItemTemplate>
                                <%#Eval("bookid") %>
                            </ItemTemplate>
                        </asp:TemplateField>

                        <asp:TemplateField HeaderText="Book Name">
                            <ItemTemplate>
                                <%#Eval("BookName") %>
                            </ItemTemplate>
                        </asp:TemplateField>

                        <asp:TemplateField HeaderText="author">
                            <ItemTemplate>
                                <%#Eval("author") %>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="Book Related">
                            <ItemTemplate>
                                <%#Eval("courceRelated") %>
                            </ItemTemplate>
                        </asp:TemplateField>

                        <asp:TemplateField HeaderText="book">
                            <ItemTemplate>
                             <%#Eval("Book") %>
                        </ItemTemplate>
                        </asp:TemplateField>

                       

                    <asp:TemplateField>
                        <ItemTemplate>
                           <asp:LinkButton ID="btnedit" runat="server" Text="Edit" CommandName="E" CommandArgument='<%#Eval("bookid") %>'></asp:LinkButton>
                        </ItemTemplate>
                    </asp:TemplateField>
                    </Columns>
                </asp:GridView>
            </td>
        </tr>
    </table>
</asp:Content>
