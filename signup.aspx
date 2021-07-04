<%@ Page Title="" Language="C#" MasterPageFile="~/default.Master" AutoEventWireup="true" CodeBehind="signup.aspx.cs" Inherits="Books.signup" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    
       
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
    <table>
        <tr>
            <td>
                <asp:Label runat="server">User Name</asp:Label>
            </td>
            <td>
                <asp:TextBox ID="UserName" runat="server"></asp:TextBox>
            </td>
            <td><asp:Button ID="check_user_name" runat="server" OnClick="check_user_name_Click" Text="check user name"/></td>
        </tr>
        <tr>
            <td>
                <asp:Label runat="server">Age</asp:Label>
            </td>
            <td>
                <asp:TextBox ID="Age" runat="server"></asp:TextBox>
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
            <td>
                <asp:Label runat="server">confirm Password</asp:Label>
            </td>
            <td>
                <asp:TextBox runat="server" ID="confirmpass"></asp:TextBox>
            </td>
        </tr>
         <tr>
            
            <td>
                <asp:Button ID="singup" runat="server" Text="signup"  OnClick="singup_Click" />
            </td>
             <td>
                 <asp:Label ID="sucess" runat="server"></asp:Label>
             </td>
        </tr>
    </table>
</asp:Content>
