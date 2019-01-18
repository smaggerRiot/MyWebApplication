<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 13-03-2018
  Time: 15:38
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ taglib prefix="FocusTags" uri="/tlds/fcomps" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="Focustags" uri="/tlds/fcomps" %>
<jsp:useBean id="clTagConstants" class="tags.CLTagConstants"/>
<html>
<head>
  <style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width: 20%;
      border-radius: 5px;
    }
  </style>
  <script>
    function inputCheck(obj)
    {
      if(obj.value.length<=0)
      {
        obj.style.border="1px solid red";

        return false;
      }
      else
      {
        obj.style.border="1px solid aqua";
        return true;
      }
    }
    function register()
    {
      var result=inputCheck(document.getElementById("name"));
      var result=inputCheck(document.getElementById("mobile"));
      var result=inputCheck(document.getElementById("password"));
      var result=inputCheck(document.getElementById("zipcode"));
      var result=inputCheck(document.getElementById("address"));

      if(result)
      {
    /*   var submit=con.formData2QueryString(document.forms["frmAdd"]);*/

        alert("success");
      }
      else
      {
        alert("please fill the empty field")
      }
    }
  </script>

  <link href="res/global/styles/App.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/ActionBar.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/BoxView.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Button.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/ButtonPane.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Calendar.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Dialog.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/DropdownList.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Table.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Tabpane.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Time.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/tabmenu.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Uploadbar.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <%--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>--%>
</head>

<body>
<div style="padding-bottom: 40px;">
     <h1 align="center">Welcome Page</h1>
</div>
<div align="center" style="padding-top: 20px;">
<div class="card">

 <%-- <FocusTags:STabbedPane id="tp">
    <FocusTags:SAddTab title="Login">
     <FocusTags:STableLayout>
       <FocusTags:STrLayout>
           <FocusTags:STdLayout>Username</FocusTags:STdLayout>
         <FocusTags:STdLayout><FocusTags:STextField name="name" id="name" ></FocusTags:STextField></FocusTags:STdLayout>
         <FocusTags:STdLayout><span id="username"></span></FocusTags:STdLayout>
       </FocusTags:STrLayout>
       <FocusTags:STrLayout>
         <FocusTags:STdLayout>Password</FocusTags:STdLayout>
         <FocusTags:STdLayout><FocusTags:STextField name="password" id="password"></FocusTags:STextField></FocusTags:STdLayout>
       </FocusTags:STrLayout>
       <FocusTags:STrLayout>
         <FocusTags:STdLayout><input type="button" value="Login" onclick="CLvalidate.checkLoginValidation()"></FocusTags:STdLayout>
       </FocusTags:STrLayout>
     </FocusTags:STableLayout>
    </FocusTags:SAddTab>
    <FocusTags:SAddTab title="Registration">
     <FocusTags:STableLayout>
        <FocusTags:STrLayout>
          <FocusTags:STdLayout>Name</FocusTags:STdLayout>
          <FocusTags:STdLayout><FocusTags:STextField name="name1" id="name1"></FocusTags:STextField></FocusTags:STdLayout>
        </FocusTags:STrLayout>
       <FocusTags:STrLayout>
         <FocusTags:STdLayout>Mobile</FocusTags:STdLayout>
         <FocusTags:STdLayout><FocusTags:STextField name="mobile" id="mobile"></FocusTags:STextField></FocusTags:STdLayout>
       </FocusTags:STrLayout>
       <FocusTags:STrLayout>
         <FocusTags:STdLayout>Email</FocusTags:STdLayout>
         <FocusTags:STdLayout><FocusTags:STextField name="email" id="email"></FocusTags:STextField></FocusTags:STdLayout>
       </FocusTags:STrLayout>
       <FocusTags:STrLayout>
         <FocusTags:STdLayout>Password</FocusTags:STdLayout>
         <FocusTags:STdLayout><FocusTags:STextField name="password" id="password"></FocusTags:STextField></FocusTags:STdLayout>
       </FocusTags:STrLayout>
       <FocusTags:STrLayout>
         <FocusTags:STdLayout>ConfirmPassword</FocusTags:STdLayout>
         <FocusTags:STdLayout><FocusTags:STextField name="cpassowrd" id="cpassowrd"></FocusTags:STextField></FocusTags:STdLayout>
       </FocusTags:STrLayout>
       <FocusTags:STrLayout>
         <FocusTags:STdLayout>City</FocusTags:STdLayout>
         <FocusTags:STdLayout><FocusTags:STextField name="city" id="city"></FocusTags:STextField></FocusTags:STdLayout>
       </FocusTags:STrLayout>
       <FocusTags:STrLayout>
         <FocusTags:STdLayout><input type="button" value="Signup" onclick="CLvalidate.checkRegistervalidation()"></FocusTags:STdLayout>
       </FocusTags:STrLayout>
     </FocusTags:STableLayout>
    </FocusTags:SAddTab>
   &lt;%&ndash; <FocusTags:SAddTab title="ViewData">
      <FocusTags:STable>
        <FocusTags:SHeader>
          <FocusTags:SColumn name="fisrt" width="150">
            <FocusTags:SName>Name</FocusTags:SName>
          </FocusTags:SColumn>
          <FocusTags:SColumn name="fisrt" width="150">
            <FocusTags:SName>Mobile</FocusTags:SName>
          </FocusTags:SColumn>
          <FocusTags:SColumn name="fisrt" width="150">
            <FocusTags:SName>Email</FocusTags:SName>
          </FocusTags:SColumn>

        </FocusTags:SHeader>
      </FocusTags:STable>

    </FocusTags:SAddTab>&ndash;%&gt;
  </FocusTags:STabbedPane>--%>
</div>
  <div class="container">
    <br/>
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8">
        <form class="card card-sm">
          <div class="card-body row no-gutters align-items-center">
            <div class="col-auto">
              <i class="fas fa-search h4 text-body"></i>
            </div>
            <!--end of col-->
            <div class="col">
              <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords">
            </div>
            <!--end of col-->
            <div class="col-auto">
              <button class="btn btn-lg btn-success" type="submit">Search</button>
            </div>
            <!--end of col-->
          </div>
        </form>
      </div>
      <!--end of col-->
    </div>
  </div>
</div>
</div>
<%--<h1 align="center" style="color: blue">Welcome To Form Validation Using Javascript</h1>--%>
<%--<div align="center">
 <button onclick='CLTablejs.addRow()'>Add Row</button>
  <button onclick='CLTablejs.deleteRow()'>Delete Row</button>
  <FocusTags:STable id="table1"  specific="border='1'" rows="1" isEditable="true"  createTbody="true" scroll="auto" containerHeight="200" isGenerateSNos="false">

  <FocusTags:SHeader>
    <FocusTags:SColumn name="fisrt" width="150">
      <FocusTags:SName>FirstValue</FocusTags:SName>
    </FocusTags:SColumn>

    <FocusTags:SColumn name="second" width="150">
      <FocusTags:SName>Second Value</FocusTags:SName>
    </FocusTags:SColumn>
    <FocusTags:SColumn name="Result" width="150">
      <FocusTags:SName >Result</FocusTags:SName>
    </FocusTags:SColumn>
  </FocusTags:SHeader>
    <FocusTags:SRow>
      <FocusTags:SCell><FocusTags:STextField name="first"  id="value1" onBlur="CLTablejs.addValue()"></FocusTags:STextField></FocusTags:SCell>
      <FocusTags:SCell><FocusTags:STextField name="first"  id="value2" onBlur="CLTablejs.addValue()"></FocusTags:STextField></FocusTags:SCell>
      <FocusTags:SCell><FocusTags:STextField name="first" id="value3" onBlur="CLTablejs.addValue()"></FocusTags:STextField></FocusTags:SCell>
    </FocusTags:SRow>
  </FocusTags:STable>
</div>--%>


</body>
<script src="res/scripts/scripts/myscript/Mytable.js"></script>

<script src="res/scripts/validate.js"></script>

<script src="res/scripts/app.js" ></script>
<script src="res/scripts/ActionBar.js"> </script>
<script src="res/scripts/button.js"> </script>
<script src="res/scripts/combobox.js"></script>
<script src="res/scripts/CrossBrowser.js"> </script>
<script src="res/scripts/calendar.js"> </script>
<script src="res/scripts/calendar-en.js"> </script>
<script src="res/scripts/calendar-setup.js"> </script>
<script src="res/scripts/connect.js" ></script>
<script src="res/scripts/constants.js" ></script>
<script src="res/scripts/dialog.js" ></script>
<script src="res/scripts/dialogbox.js" ></script>
<script src="res/scripts/scripts/table.js"> </script>
<script src="res/scripts/tabmenu.js"> </script>
<script src="res/scripts/Taskpane.js"> </script>
<script src="res/scripts/tabpane.js"> </script>
<script src="res/scripts/Message.js"> </script>
<script src="res/scripts/uploadbar.js"> </script>
<script src="res/scripts/utilities.js"> </script>
<script src="res/scripts/validation.js"> </script>
<script src="res/scripts/jquery-2.0.3.js"></script>
<FocusTags:SOnLoadScript></FocusTags:SOnLoadScript>
</html>
