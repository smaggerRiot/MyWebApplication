<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.List" %>
<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 12/4/2018
  Time: 4:38 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ taglib prefix="FocusTags" uri="/tlds/fcomps" %>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="Focustags" uri="/tlds/fcomps" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="FocusTAgs" uri="/tlds/fcomps" %>
<jsp:useBean id="clTagConstants" class="tags.CLTagConstants"/>


<head>
    <style>
        .result{
            font-size:10px;
            color: #000000
        }
    </style>
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
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


</head>

<%--
<button onclick="clTable.add()">add</button>
<FocusTags:STable  id="stable1" border="1" specific="style='background-color:#ccc' cellpadding=5" width="50%"  rows="5" isEditable="true"
                   isDynamic="true" scroll="auto">
  <FocusTags:SHeader>

    <FocusTags:SColumn>
      <FocusTags:SName>Name</FocusTags:SName>
    </FocusTags:SColumn>
    <FocusTags:SColumn>
      <FocusTags:SName>Course</FocusTags:SName>
    </FocusTags:SColumn>

    <FocusTags:SColumn>
      <FocusTags:SName>Delete</FocusTags:SName>
    </FocusTags:SColumn>

  </FocusTags:SHeader>
--%>



 <%-- <%
    ArrayList list = (ArrayList) request.getAttribute("students");
    for (Object obj : list){
      CLStudentDTO studentDTO = (CLStudentDTO) obj;

      %>

  <FocusTags:SRow>
    <FocusTags:SCell><%=studentDTO.getName()%></FocusTags:SCell>
    <FocusTags:SCell><%=studentDTO.getCourse()%></FocusTags:SCell>
    <FocusTags:SCell specific="align='center'"><i class="fa fa-close" style="font-size: 20px" ></i></FocusTags:SCell>
    <FocusTags:SCell specific="align='center'"><i class="fa fa-file-text" style="font-size:18px"></i></FocusTags:SCell>
  </FocusTags:SRow>

      <%
    }
  %>--%>
  <%--<c:forEach var="student" items="${requestScope.students}">
    <FocusTags:SRow>
      <FocusTags:SCell>${student.name}</FocusTags:SCell>
      <FocusTags:SCell>${student.course}</FocusTags:SCell>
      <FocusTags:SCell specific="align='center'"><i class="fa fa-close" style="font-size: 20px" onclick="clTable.delete('${student.name}')" ></i></FocusTags:SCell>
    </FocusTags:SRow>
  </c:forEach>

</FocusTags:STable>

</body>
--%>
<FocusTAgs:SDivLayout specific="class='box'">
    <FocusTags:SAddComponent>
            <FocusTags:STable id="stableSum" specific="cellpadding=5 " width="50%"  rows="1" isEditable="true"
                              isDynamic="true" scroll="auto" border="1" >
            <i class="fa fa-plus" style="font-size: 20px ;color:blue;" onclick="ClTable.add()"></i>&nbsp;&nbsp;
             <i class="fa fa-trash" style="font-size: 20px;color:red;" onclick="ClTable.delete()"></i>

                <FocusTags:SHeader>
            <FocusTags:SColumn displayType="0">
            <FocusTags:SName>1st Number</FocusTags:SName>
               <FocusTags:SNumericColumn name="first" id="first" onBlur="ClTable.addValue()" defaultValue="0"/>
            </FocusTags:SColumn>
            <FocusTags:SColumn>
            <FocusTags:SName>2nd Number</FocusTags:SName>
                <FocusTags:SNumericColumn name="second" id="second" onBlur="ClTable.addValue()" defaultValue="0"/>
            </FocusTags:SColumn>
            <FocusTags:SColumn>
            <FocusTags:SName>SUM</FocusTags:SName>
                <FocusTags:SDisplayColumn name="sum"/>
            </FocusTags:SColumn>
           </FocusTags:SHeader>
          <%--  <FocusTags:SRow>
            <FocusTags:SCell>

            <FocusTags:SNumericField name="first" id="first" onBlur="ClTable.addValue()"/>
            </FocusTags:SCell>
            <FocusTags:SCell>
            <FocusTags:SNumericField name="second" id="second" onBlur="ClTable.addValue()" />
            </FocusTags:SCell>
            <FocusTags:SCell styleClass="result" specific="align='center'"  id="result"/>


            </FocusTags:SRow>--%>
       </FocusTags:STable>
    </FocusTags:SAddComponent>
</FocusTAgs:SDivLayout>
<script src="res/scripts/me/stable.js"> </script>
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

<FocusTags:SOnLoadScript></FocusTags:SOnLoadScript>
</html>
