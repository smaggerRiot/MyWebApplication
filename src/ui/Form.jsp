
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="FoccusTags" uri="/tlds/fcomps" %>
<%@ taglib prefix="FocusTags" uri="/tlds/fcomps" %>

<jsp:useBean id="clTagConstants" class="tags.CLTagConstants"/>
<html>
<head>
  <title>Resume Builder</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="res/global/styles/Topbar.css">
    <%--<link href="res/global/styles/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="res/global/styles/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="res/global/styles/css/bootstrap-grid.css" rel="stylesheet" type="text/css">
    <link href="res/global/styles/css/bootstrap-grid.min.css" rel="stylesheet" type="text/css">
    <link href="res/global/styles/css/bootstrap-reboot.css" rel="stylesheet" type="text/css">
    <link href="res/global/styles/css/bootstrap-reboot.min.css" rel="stylesheet" type="text/css">
--%>

  <link href="res/global/styles/index.css" rel="stylesheet" type="text/css">
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
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <style>
    .navbar-header{
        width: 200px;
        height:50px ;
    }
    .navbar-header img{
        width: 50%;
        height:100% ;
        background-color: whitesmoke;
    }
    .responsediv{
        display:none;
    }
    .listrow{
        height: 250px;

    }
    .tablerow{
        height: 250px;
        overflow: hidden;
        padding:10px;
    }
    .btn{
        height: 36px;
        width: 74px;
        font-size:15px ;
    }
    /*.btn:hover{
        background-color: white;
        color: #261eff;
    }*/
    .listside{
        width:30px;
        height:100%;
        left:0px;
        position:fixed;
        background-color: rgba(0, 0, 0, 0.15);
    }

    .listside .fa{
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left:5px;
        padding-right:5px;
        font-size: 24px;
        color:black;
    }
   /* .fa:hover{
        color:white;
    }*/
    .moreInfo{
        height: 100%;
        width:0;
        position: fixed;
        z-index: 1;

        left: 30px;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;

    }
    .moreInfo li{
        font-size: 17px;
        color: #ffffff;
        margin-top: 30px;
        margin-left: 10px;
        display: block;

    }
    .logo-img{
        width:100%;
        height:31%;
        padding:5px;
        border:1px solid black;
        background-color: white;
    }
    .logo-img img{
        width:100%;
        height:60%;

    }
    .moreInfo a:hover{
        color:white;
    }
    #main{
        transition: 0.5s;
    }
    .subHeading
    {
        height:30px;
    }
    #formFeilds{
        margin-top:20px;
    }
    #dataView{
        margin-top:20px;
    }.login{
             display: none; /* Hidden by default */
             position: fixed; /* Stay in place */
             z-index: 1; /* Sit on top */
             left: 0;
             top: 0;
             width: 100%; /* Full width */
             height: 100%; /* Full height */
             overflow: auto; /* Enable scroll if needed */
             background-color: rgb(0,0,0); /* Fallback color */
             background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
             padding-top: 60px;
         }
    .img-container{
        text-align: center;
        margin: 24px 0 12px 0;
        position: relative;
    }
        .img-container img{
            height:130px;
            border-radius: 50%;
            background-color: darkgrey;
        }
        .login span.psw {
            float: right;
            padding-top: 16px;
        }
        .login .close {
            position: absolute;
            right: 25px;
            top: 0;
            color: #000;
            font-size: 35px;
            font-weight: bold;
        }
    .login .modal-content {
        background-color: #fefefe;
        margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
        border: 1px solid #888;
        width: 80%; /* Could be more or less, depending on screen size */
    }
    .login input[type=text], input[type=password] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }




    .animate {
        -webkit-animation: animatezoom 0.6s;
        animation: animatezoom 0.6s
    }

    @-webkit-keyframes animatezoom {
        from {-webkit-transform: scale(0)}
        to {-webkit-transform: scale(1)}
    }

    @keyframes animatezoom {
        from {transform: scale(0)}
        to {transform: scale(1)}
    }



    .close:hover,
    .close:focus {
        color: red;
        cursor: pointer;
    }
    .container{width: 100%}



    </style>
    </head>
<body>
<nav class="navbar navbar-inverse">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <img src="res/global/images/CRM_LOGO.png">
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
            <div class="nav navbar-nav navbar-right">
                <ul class="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">Settings <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="#">Account privacy</a></li>
                        <li><a href="#">reset password</a></li>
                        <li><a href="#">security</a></li>
                    </ul>
                </li>
                <li><a href="#">graphs</a></li>
                <li><a href="#">Notification</a></li>


                <li><a href="#" ><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                <li><a href="#" onclick="document.getElementById('login').style.display='block'"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>

                <div class="input-group" style="top:8px">

                    <input  type="text" class="form-control" name="search" placeholder="search" style="height: 100%;">
                    <div class="input-group-btn" >

                        <button class="btn btn-danger fa fa-search"  type="submit">

                        </button>


                    </div>

                </div>

            </div>
        </div>

    </div>
    </div>
</nav>
<div class="container-fluid">
    <div class="row" style="margin-top:-20px">
        <div class="col-sm-1 col-xs-1 col-lg-1 col-md-1">
            <div class="side-nav fixed listside">

                <i  class="fa fa-bars" onclick="clRegistration.sideNavToggle()"></i>
                <i  class="fa fa-bell" ></i>
                <i  class="fa fa-calendar" ></i>
                <i  class="fa fa-comments" ></i>
                <i  class="fa fa-info-circle" ></i>
            </div>
            <div class="side-nav moreInfo" id="moreInfo">
                <div class="logo-img"><img src="res/global/images/admin-icon.png">
                <div class="txt-user" style="text-align: center; color: #000FF0" >
                    <h6>Sandeep Kishan</h6>
                    <h4>METRO.LTD</h4>
                </div>
                </div>
                <ul style="display: contents;">
                <li data-toggle="collapse" data-target="#demo"><i class="fa fa-angle-up" onclick="clRegistration.arrowChange(this)"></i>  Home</li>
                   <div id="demo" class="collapse">
                       <ul>
                    <li data-toggle="collapse" data-target="#demo1"><i class="fa fa-angle-up" onclick="clRegistration.arrowChange(this)"></i> Networks </li>
                           <div id="demo1" class="collapse">
                               <ul>
                                   <li>magazines</li>
                                   <li>Stock list</li>
                                   <li>Marketing</li>
                                   <li>Shopping</li>
                                   <li>Payement center</li>

                               </ul>
                               </div>
                    <li> manuals </li>
                    <li> root sourses </li>
                    <li> checkings </li>
                       </ul>
                   </div>
                <li>About</li>
                <li>Services</li>
                <li >Data Entry</li>
                <li>Contacts</li>

                <li onclick="clRegistration.openDataDiv()">Social Tabs</li>
                <li> Settings</li>

                </ul>
            </div>
        </div>
        <%-- <div class="row">
                 <div class="navbar-fixed-top topnav">
                         <div class="group">
                             <i class='fab fa-facebook-f icon'></i>
                             <input type="search" class="search">
                         </div>
                     </div>

         </div>
         <div class="row">--%>
        <div class="col-sm-11 col-xs-11 col-lg-11 col-md-11" id="main">

            <div class="modal login" id="login">
                <div class="modal-content animate">
                    <div class="img-container">
                        <span onclick="document.getElementById('login').style.display='none'" class="close" title="Close Modal">&times;</span>
                        <img src="res/global/images/admin-icon.png" alt="Avatar" class="avatar">
                    </div>
                    <div class="container">
                        <label for="mUsername">Username</label>
                        <input type="text" id="mUsername">
                        <label for="mPassword">Password</label>
                        <input type="text" id="mPassword">
                        <button type="submit" class="btn btn-primary" style="margin-bottom: 10px">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember"> Remember me
                        </label>
                    </div>
                    <div class="container">
                        <button type="button" onclick="document.getElementById('login').style.display='none'"  style="margin-bottom: 10px" class="btn btn-danger cancelbtn">Cancel</button>
                        <span class="psw">Forgot <a href="#">password?</a></span>
                    </div>

                </div>

            </div>

            <form id="regForm" name="myform" method="post" action="form!register.do" method="post">

                <div id="error" style="color: red;background: rgba(170, 160, 170, 0)"></div>
                <div class="row ">
                    <div class="col-sm-11 col-xs-11 col-lg-11 col-md-11 listrow">
                        <div class="input-group" style="width: 100px;float: right;"><div class="checkbox" onclick="clRegistration.disableFeilds(this)">
                            <label><input type="checkbox"> enable/disable</label>
                        </div></div>

                        <FocusTags:STaskPane id="formFeilds" isMandatory="true"   width="100" isCollapsible="true" title="Registration"  specific="style='background-color:lightgray'  disabled='true'" >

                            <FocusTags:STableLayout specific="width='100%' border=0 cellpadding='6' align='center' " >
                                <FocusTags:STrLayout >
                                    <FocusTags:STdLayout>Name</FocusTags:STdLayout>
                                    <FocusTags:STdLayout><FocusTags:STextField  name="list.name" id="name"></FocusTags:STextField></FocusTags:STdLayout>

                                    <FocusTags:STdLayout>UserId</FocusTags:STdLayout>
                                    <FocusTags:STdLayout><FocusTags:SNumericField name="list.uname" id="uname"></FocusTags:SNumericField></FocusTags:STdLayout>
                                </FocusTags:STrLayout>
                                <FocusTags:STrLayout>
                                    <FocusTags:STdLayout>EmailID</FocusTags:STdLayout>
                                    <FocusTags:STdLayout><FocusTags:STextField name="list.emailId" id="emailId"></FocusTags:STextField></FocusTags:STdLayout>
                                    <FocusTags:STdLayout>salary</FocusTags:STdLayout>
                                    <FocusTags:STdLayout><FocusTags:SFloatField name="list.salary" id="salary"/></FocusTags:STdLayout>
                                </FocusTags:STrLayout>
                                <FocusTags:STrLayout>
                                    <FocusTags:STdLayout>City</FocusTags:STdLayout>
                                    <FocusTags:STdLayout>
                                        <FocusTags:SComboBox name="list.city" id="city" scrollerId="error" hiddenFieldName="list.city"  masterType="58" formName="myform" styleClass="inputs">
                                            <FocusTags:SItem key="1">Hyderabad</FocusTags:SItem>
                                            <FocusTags:SItem key="2">Mumbai</FocusTags:SItem>
                                        </FocusTags:SComboBox>
                                    </FocusTags:STdLayout>

                                </FocusTags:STrLayout>
                            </FocusTags:STableLayout>
                        </FocusTags:STaskPane>

                    </div>
                </div>
                <div class="row ">
                    <div class="col-sm-11 col-xs-11 col-lg-11 col-md-11 tablerow">
                        <FocusTags:STaskPane id="dataView"  isMandatory="true"  width="100" isCollapsible="true" title="Data View" specific="style='background-color:lightgray'">
                            <%-- <i class="fa fa-plus" style="font-size: 20px ;color:blue;" onclick="clRegistration.addRow()"></i>&nbsp;&nbsp;
                             <i class="fa fa-trash" style="font-size: 20px ;color:blue;" onclick="clRegistration.deleteRow()"></i>&nbsp;&nbsp;--%>

                            <i class="fa fa-plus" id="addTab" type="button" style="font-size: 20px ;color:blue;" onclick="clRegistration.clkAddTab()"></i>

                            <FoccusTags:STabbedPane id="infotab" specific="style='overflow:hidden'">
                                <FoccusTags:SAddTab title="table" >
                                    <FocusTags:STable  id="tableList" isGenerateSNos="true" altRowColor="true"  border="1" colTypes="combobox"  createTbody="true" specific="style='box-shadow: 0px -7px 17px gray;
                                                    border: 1px solid gray;'class='table-condensed'" cellpadding="5" width="50%"  rows="2" isEditable="true"
                                                       isDynamic="true" scroll="auto"  >

                                        <FocusTags:SHeader indexedRowName="list.tabList[0].tableList">
                                            <FocusTags:SColumn>
                                                <FocusTags:SName>Name</FocusTags:SName>
                                                <FocusTags:STextColumn name="name"/>
                                            </FocusTags:SColumn>
                                            <FocusTags:SColumn>
                                                <FocusTags:SName>User ID</FocusTags:SName>
                                                <FocusTags:SNumericColumn name="uname"/>
                                            </FocusTags:SColumn>
                                            <%--<FocusTags:SColumn>
                                              <FocusTags:SName>EmailID</FocusTags:SName>
                                              <FocusTags:STextColumn name="emailId"/>
                                            </FocusTags:SColumn>
                                            <FocusTags:SColumn>
                                              <FocusTags:SName>Salary</FocusTags:SName>
                                              <FocusTags:SFloatColumn name="salary"/>
                                            </FocusTags:SColumn>
                                            <FocusTags:SColumn>
                                              <FocusTags:SName>City</FocusTags:SName>
                                              <FocusTags:SComboColumn name="city" formName="myform" scrollerId="error" hiddenFieldName="city" masterType="58">
                                                <FocusTags:SItem key="1">Hyderabad</FocusTags:SItem>
                                                <FocusTags:SItem key="2">Mumbai</FocusTags:SItem>
                                                <FocusTags:SItem key="3">kolkata</FocusTags:SItem>
                                                <FocusTags:SItem key="4">chennai</FocusTags:SItem>
                                              </FocusTags:SComboColumn>

                                            </FocusTags:SColumn>--%>
                                        </FocusTags:SHeader>

                                    </FocusTags:STable>
                                </FoccusTags:SAddTab>
                                <%-- <FoccusTags:SAddTab title="table1" >--%>

                                <%--<FocusTags:STable  id="stable2" isGenerateSNos="true" altRowColor="true"  border="1" colTypes="combobox"  createTbody="true" specific="style='box-shadow: 0px -7px 17px gray;
                            border: 1px solid gray;'" cellpadding="5" width="50%"  rows="2" isEditable="true"
                                                   isDynamic="true" scroll="auto" >

                                <FocusTags:SHeader  indexedRowName="list.tableList1" >
                                    <FocusTags:SColumn>
                                      <FocusTags:SName>Name</FocusTags:SName>
                                      <FocusTags:STextColumn name="name"/>
                                    </FocusTags:SColumn>
                                    <FocusTags:SColumn>
                                      <FocusTags:SName>User ID</FocusTags:SName>
                                      <FocusTags:SNumericColumn name="uname"/>
                                    </FocusTags:SColumn>
                                    <FocusTags:SColumn>
                                      <FocusTags:SName>EmailID</FocusTags:SName>
                                      <FocusTags:STextColumn name="emailId"/>
                                    </FocusTags:SColumn>
                                    <FocusTags:SColumn>
                                      <FocusTags:SName>Salary</FocusTags:SName>
                                      <FocusTags:SFloatColumn name="salary"/>
                                    </FocusTags:SColumn>
                                    <FocusTags:SColumn>
                                      <FocusTags:SName>City</FocusTags:SName>
                                      <FocusTags:SComboColumn name="city" formName="myform" scrollerId="error" hiddenFieldName="city" masterType="58">
                                        <FocusTags:SItem key="1">Hyderabad</FocusTags:SItem>
                                        <FocusTags:SItem key="2">Mumbai</FocusTags:SItem>
                                        <FocusTags:SItem key="3">kolkata</FocusTags:SItem>
                                        <FocusTags:SItem key="4">chennai</FocusTags:SItem>
                                      </FocusTags:SComboColumn>

                                    </FocusTags:SColumn>
                                  </FocusTags:SHeader>

                                </FocusTags:STable>--%>
                                <%--</FoccusTags:SAddTab>--%>
                                <div id="responsediv" class="responsediv"></div>
                            </FoccusTags:STabbedPane>
                            <%--
                                <div><input type="submit" value="update" onclick="clRegistration.clkRegister()" style="width:auto"></div>
                            --%>
                            <button type="submit" style="width:auto" class="btn btn-primary">Register</button>
                        </FocusTags:STaskPane>

                    </div>
                </div>

            </form>
            <div  id="view"></div>
        </div>
        <%--</div>--%>

    </div>
</div>



</body>
<%--
<script src="res/scripts/js/bootstrap.bundle.js"> </script>
<script src="res/scripts/js/bootstrap.bundle.min.js"> </script>
<script src="res/scripts/js/bootstrap.js"> </script>
<script src="res/scripts/js/bootstrap.min.js"> </script>
--%>







<script src="res/scripts/MyScripts/Form.js"> </script>
<script src="res/scripts/myTabblePanne.js"> </script>
<script src="res/scripts/tapasPractice.js"> </script>
<script src="res/scripts/ajax.js"> </script>
<script src="res/scripts/validate.js"> </script>
<script src="res/scripts/CallDetails.js" ></script>
<script src="res/scripts/app.js" ></script>
<script src="res/scripts/ActionBar.js"> </script>
<script src="res/scripts/button.js"> </script>
<script src="res/scripts/combobox.js"></script>
<script src="res/scripts/CrossBrowser.js"> </script>
<script src="res/scripts/CommonScripts.js"> </script>
<script src="res/scripts/calendar.js"> </script>
<script src="res/scripts/calendar-en.js"> </script>
<script src="res/scripts/calendar-setup.js"> </script>
<script src="res/scripts/connect.js" ></script>
<script src="res/scripts/constants.js" ></script>
<script src="res/scripts/dialog.js" ></script>
<script src="res/scripts/dialogbox.js" ></script>
<script src="res/scripts/table.js"> </script>
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
