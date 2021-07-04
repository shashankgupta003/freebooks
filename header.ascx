<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="header.ascx.cs" Inherits="Books.header" %>

<table>
    <tr>
        <td>
            <asp:Image ID="Bookimg" runat="server" ImageUrl="~/bookimg.jpg" Width="50px" />Free Books
        </td>
        
		<td ><a href="login.aspx">Login</a> 
		<a href="signup.aspx">sign up</a> </td>
		

    </tr>
	<tr>
		<td><asp:Label ID="Usernamelvl" runat="server"></asp:Label></td>
	</tr>
    <tr>
        <td><div id="menu">
		<ul class="menu">
			<li><a href="Home.aspx" class="parent"><span>Home</span></a>
				
			</li>
			<li><a href="Insert Book.aspx" ><span>Insert a Book</span></a>
				
			</li>
			<li><a href="Profile.aspx"><span>Profile</span></a></li>
			<li class="last"><a href="RequestForABook.aspx"><span>Request For Book</span></a></li>
		</ul>
	</div></td>
    </tr>
    
</table>
