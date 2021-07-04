<%@ Page Title="" Language="C#" MasterPageFile="~/default.Master" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="Books.login" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <table>
        <tr>
            <td>
                <asp:Label runat="server" Text="User Name"></asp:Label>
            </td>
            <td>
                <asp:TextBox ID="UserName" runat="server"></asp:TextBox>
            </td>
            </tr>
         <tr>
            <td>
                <asp:Label runat="server">Password</asp:Label>
            </td>
            <td>
                <asp:TextBox runat="server" ID="password"></asp:TextBox>
            </td>
        </tr>
        <tr>
            <td><asp:Button ID="ligin" runat="server" Text="Login" OnClick="ligin_Click" /></td>
            <td><asp:Label ID="Status" runat="server"></asp:Label></td>
            
        </tr>
        </table>
</asp:Content>
