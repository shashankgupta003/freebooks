<%@ Page Title="" Language="C#" MasterPageFile="~/default.Master" AutoEventWireup="true" CodeBehind="RequestForABook.aspx.cs" Inherits="Books.RequestForABook" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <table>
         <tr>
            <td>Request For Book</td>
        </tr>
        <tr>
        <td><asp:TextBox   ID="sugg" runat="server" Height="100px" Width="200px" BorderColor="Black" BorderWidth="1px"></asp:TextBox></td>
            <td><asp:Button ID="post" runat="server" Text="post"  OnClick="post_Click"/></td>
    </tr>
     <tr> <td><asp:GridView ID="Grid2" runat="server" AutoGenerateColumns="false" OnRowCommand="Grid2_RowCommand">
                    <Columns>
                        <asp:TemplateField HeaderText="suggestion ID" >
                           <ItemTemplate>
                                <%#Eval("suggestionnID") %>
                               
                            </ItemTemplate>
                            
                        </asp:TemplateField>
                        <asp:TemplateField HeaderText="suggest" >
                            <ItemTemplate>
                                <%#Eval("suggest") %>
                            </ItemTemplate>
                            
                        </asp:TemplateField>
                        
                        <asp:TemplateField HeaderText="Download" >
                            <itemtemplate>
                                <asp:LinkButton ID="delete" Text="delete" runat="server" CommandName="D" CommandArgument='<%#Eval("suggestionnID") %>'></asp:LinkButton>
                            </ItemTemplate>
                            
                        </asp:TemplateField>
                       
                       
                    </Columns>
                </asp:GridView>
           </td>
        </tr>
     </table>
</asp:Content>
