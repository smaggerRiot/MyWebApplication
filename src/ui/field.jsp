<%@ page import="java.util.List" %>
<%--<%@ page import="com.focus.beans.StudentBean" %>--%>
<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 18-12-2018
  Time: 10:54
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="FocusTags" uri="/tlds/fcomps"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<style>
  .secondTaskPain
  {
    margin-top: 30px;
  }
</style>
<head>
  <script>
  </script>
    <title></title>
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
</head>
<body>
<div class="firstTaskpan">
  <div id="resRegDv" align="center" style="color: green;font-size: 20px">
  </div>
<FocusTags:STaskPane id="formFeilds" isMandatory="true"  width="100" isCollapsible="true" title="Text"  specific="style='background-color:pink' disabled='true'">
        <form id="myform"  method="POST">
          <div id="combodiv"> </div>
        <div class="content" align="center">
          <FocusTags:STableLayout>
            <FocusTags:STrLayout>
              <FocusTags:STdLayout><label>Name</label></FocusTags:STdLayout><br>
              <FocusTags:STdLayout><FocusTags:STextField name="formDto.name" id="name"></FocusTags:STextField></FocusTags:STdLayout>
            </FocusTags:STrLayout>
            <FocusTags:STrLayout>
              <FocusTags:STdLayout><label>Age</label></FocusTags:STdLayout><br>
              <FocusTags:STdLayout><FocusTags:STextField name="formDto.age" id="age"></FocusTags:STextField></FocusTags:STdLayout>
            </FocusTags:STrLayout>
            <FocusTags:STrLayout>
              <FocusTags:STdLayout><label>Weight</label></FocusTags:STdLayout><br>
              <FocusTags:STdLayout><FocusTags:STextField name="formDto.weight" id="weight"></FocusTags:STextField></FocusTags:STdLayout>
            </FocusTags:STrLayout>
            <FocusTags:STrLayout>
              <FocusTags:STdLayout><label>City</label></FocusTags:STdLayout><br>
              <FocusTags:STdLayout>
                <FocusTags:SComboBox name="sb.city" masterType="58" scrollerId="combodiv" hiddenFieldName="formDto.city" formName="myform" id="combo">
                  <FocusTags:SItem key="1">Hyderabad</FocusTags:SItem>
                  <FocusTags:SItem key="2">Mumbai</FocusTags:SItem>
                  <FocusTags:SItem key="3">kolkata</FocusTags:SItem>
                  <FocusTags:SItem key="4">chennai</FocusTags:SItem>
                  <FocusTags:SItem key="5">Bengaluru</FocusTags:SItem>
                  <FocusTags:SItem key="6">Pune</FocusTags:SItem>
                  <FocusTags:SItem key="7">varanashi</FocusTags:SItem>
                  <FocusTags:SItem key="8">Delhi</FocusTags:SItem>
                  <FocusTags:SItem key="9">Dehradun</FocusTags:SItem>
                </FocusTags:SComboBox>
              </FocusTags:STdLayout>
            </FocusTags:STrLayout>
            <FocusTags:STrLayout>
              <FocusTags:STdLayout><label>Date</label></FocusTags:STdLayout>
              <FocusTags:STdLayout>
                <FocusTags:STextField name="formDto.dob" id="dob"/>
              </FocusTags:STdLayout>
            </FocusTags:STrLayout>
            <%--<FocusTags:STrLayout>
              <FocusTags:STdLayout> <button class="btn-btn-primary" type="button" onclick="myfunction()">Register</button></FocusTags:STdLayout>
            </FocusTags:STrLayout>--%>
          </FocusTags:STableLayout>
        </div>
</FocusTags:STaskPane>
</div>
<div class="secondTaskPain">
<FocusTags:STaskPane id="formFeilds" isMandatory="true"  width="100" isCollapsible="true" title="Editable Stable"  specific="style='background-color:pink' disabled='true'">
<div class="formcotrl" align="center">

    <div id="scombo"> </div>
    <c:set var="updaterow" value="<i class='fa fa-edit' onclick='updateRow()' style='font-size:14px;color:brown;'></i>"/>
    <%--<i class="fa fa-plus" style="font-size: 14px ;color:green;" onclick="addstableRow()">Add Row</i>&nbsp;&nbsp;--%>


<FocusTags:STable  id="stable1" border="1" isGenerateSNos="true"  specific="' cellpadding=5" width="50%"  rows="5" isEditable="true"
                   isDynamic="true" scroll="auto">
  <FocusTags:SHeader indexedRowName="formDto.tableDtos">
    <FocusTags:SColumn>
      <FocusTags:SName>Name</FocusTags:SName>
      <FocusTags:STextColumn name="name"/>
    </FocusTags:SColumn>
    <FocusTags:SColumn>
      <FocusTags:SName>Age</FocusTags:SName>
      <FocusTags:SNumericColumn name="age"/>
    </FocusTags:SColumn>
    <FocusTags:SColumn>
      <FocusTags:SName>Weight</FocusTags:SName>
      <FocusTags:SFloatColumn name="weight"/>
    </FocusTags:SColumn>
    <FocusTags:SColumn>
      <FocusTags:SName>City</FocusTags:SName>
      <FocusTags:SComboColumn name="city" formName="myform" scrollerId="scombo" hiddenFieldName="city" masterType="58">
        <FocusTags:SItem key="1">Hyderabad</FocusTags:SItem>
        <FocusTags:SItem key="2">Mumbai</FocusTags:SItem>
        <FocusTags:SItem key="3">kolkata</FocusTags:SItem>
        <FocusTags:SItem key="4">chennai</FocusTags:SItem>
        <FocusTags:SItem key="5">Bengaluru</FocusTags:SItem>
        <FocusTags:SItem key="6">Pune</FocusTags:SItem>
        <FocusTags:SItem key="7">varanashi</FocusTags:SItem>
        <FocusTags:SItem key="8">Delhi</FocusTags:SItem>
        <FocusTags:SItem key="9">Dehradun</FocusTags:SItem>
      </FocusTags:SComboColumn>
    </FocusTags:SColumn>
   <FocusTags:SColumn>
      <FocusTags:SName>DOB</FocusTags:SName>
      <FocusTags:STextColumn name="dob"/>
    </FocusTags:SColumn>
   <FocusTags:SColumn>
      <FocusTags:SName>Action</FocusTags:SName>
      <FocusTags:SDisplayColumn value="<i class='fa fa-plus' onclick='addstableRow()'style='font-size:16px;color:green;'></i>&nbsp&nbsp&nbsp<i class='fa fa-trash' onclick='deletetableRow()'style='font-size:16px;color:red;'></i>"></FocusTags:SDisplayColumn>
    </FocusTags:SColumn>
  </FocusTags:SHeader>
</FocusTags:STable>

  <%--<input name="formDto.tableDtos[0].name" type="text">--%>
</form>
</div>
</FocusTags:STaskPane>
</div>
<button onclick="myfunction()">Submit</button>
</body>
<script src="res/scripts/myvalidation.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="res/scripts/scripts/calendar.js"> </script>
<script src="res/scripts/myTabblePanne.js"> </script>
<script src="res/scripts/validate.js"> </script>
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
<script src="res/scripts/table.js"> </script>
<script src="res/scripts/tabmenu.js"> </script>
<script src="res/scripts/Taskpane.js"> </script>
<script src="res/scripts/tabpane.js"> </script>
<script src="res/scripts/Message.js"> </script>
<script src="res/scripts/uploadbar.js"> </script>
<script src="res/scripts/utilities.js"> </script>
<script src="res/scripts/validation.js"> </script>
<script src="res/scripts/jquery-2.0.3.js"></script>
<script src="res/scripts/scripts/calendar-setup.js"></script>
<script src="res/scripts/calendar-en.js"></script>
<script src="res/scripts/myscript/index.js"></script>
<script src="res/scripts/myscript/ajax.js"></script>
<script src="res/scripts/validate.js"> </script>
<script src="res/scripts/CallDetails.js" ></script>
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
<script src="res/scripts/table.js"> </script>
<script src="res/scripts/tabmenu.js"> </script>
<script src="res/scripts/Taskpane.js"> </script>
<script src="res/scripts/tabpane.js"> </script>
<script src="res/scripts/Message.js"> </script>
<script src="res/scripts/uploadbar.js"> </script>
<script src="res/scripts/utilities.js"> </script>
<script src="res/scripts/validation.js"> </script>
<script src="res/scripts/jquery-2.0.3.js"></script>
<script src="res/scripts/me/LoginPage.js"> </script>
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
<script src="res/scripts/scripts/ajax.js"></script>

<FocusTags:SOnLoadScript></FocusTags:SOnLoadScript>
</html>
