<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Import Namespace="Microsoft.SharePoint.ApplicationPages" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=14.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="New.aspx.cs" Inherits="mminformatics.Layouts.mminformatics.New" DynamicMasterPageFile="~masterurl/default.master" %>

<asp:Content ID="PageHead" ContentPlaceHolderID="PlaceHolderAdditionalPageHead" runat="server">
    
       <script type="text/javascript" src="http://sv-ctssql01/sites/medicalManagementResources/informatics/_layouts/1033/init.js"></script>
    <script  type="text/javascript" src="http://sv-ctssql01/sites/medicalManagementResources/informatics/_layouts/MicrosoftAjax.js"></script>
    <script  type="text/javascript" src="http://sv-ctssql01/sites/medicalManagementResources/informatics/_layouts/sp.core.js"></script>
    <script  type="text/javascript" src="http://sv-ctssql01/sites/medicalManagementResources/informatics/_layouts/sp.runtime.js"></script>
    <script  type="text/javascript" src="http://sv-ctssql01/sites/medicalManagementResources/informatics/_layouts/sp.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <%--  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/remarkable/1.6.2/remarkable.min.js"></script>--%>
    <script src="Scripts/bootstrap.min.js"></script>
    <link type="text/css"  rel="Stylesheet"  href="Scripts/bootstrap.min.css" />
    <script data-main="Scripts/config.js" src="scripts/require.js"></script>

</asp:Content>

<asp:Content ID="Main" ContentPlaceHolderID="PlaceHolderMain" runat="server">
    <div class="container-fluid">
        <div class="row-fluid">
            <div class="col-md-12" id="main">

              </div>
            </div>
        </div>
</asp:Content>

<asp:Content ID="PageTitle" ContentPlaceHolderID="PlaceHolderPageTitle" runat="server">
Application Page
</asp:Content>

<asp:Content ID="PageTitleInTitleArea" ContentPlaceHolderID="PlaceHolderPageTitleInTitleArea" runat="server" >
My Application Page
</asp:Content>
