<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="FocusTags" uri="/tlds/fcomps" %>
<%@ taglib prefix="s" uri="/struts-tags" %>

<jsp:useBean id="clTagConstants" class="tags.CLTagConstants"/>

<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 12/11/2018
  Time: 4:06 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>

    </title>
</head>
<body>
<FocusTags:STaskPane id="dataView" isMandatory="true"  width="100" isCollapsible="true" title="Data View" specific="style='background-color:#FFA03E'">
<form name="viewForm">
    <div name="error"></div>

    <FocusTags:STable  id="stable1" border="1" specific="style='background-color:#FFA03E' cellpadding=5" width="50%"  rows="5" isEditable="true"
                   isDynamic="true" scroll="auto">
    <FocusTags:SHeader>
        <FocusTags:SColumn>
            <FocusTags:SName>Name</FocusTags:SName>
        </FocusTags:SColumn>
        <FocusTags:SColumn>
            <FocusTags:SName>Username</FocusTags:SName>
        </FocusTags:SColumn>
        <FocusTags:SColumn>
            <FocusTags:SName>Email</FocusTags:SName>
        </FocusTags:SColumn>
        <FocusTags:SColumn>
            <FocusTags:SName>Password</FocusTags:SName>
        </FocusTags:SColumn>
        <FocusTags:SColumn>
            <FocusTags:SName>Salary</FocusTags:SName>
        </FocusTags:SColumn>
        <FocusTags:SColumn>
<%--
            <FocusTags:SName>date</FocusTags:SName>
        </FocusTags:SColumn>
        <FocusTags:SColumn>
--%>
            <FocusTags:SName>city</FocusTags:SName>
        </FocusTags:SColumn>
    </FocusTags:SHeader>

    <c:forEach var="list" items="${requestScope.tableData}">
        <FocusTags:SRow>
            <FocusTags:SCell><FocusTags:STextField name="name" defaultValue="${list.name}"/> </FocusTags:SCell>
            <FocusTags:SCell><FocusTags:STextField name="uname" defaultValue="${list.uname}"/> </FocusTags:SCell>
            <FocusTags:SCell><FocusTags:STextField name="email" defaultValue="${list.emailId}"/> </FocusTags:SCell>
            <FocusTags:SCell><FocusTags:STextField name="password" defaultValue="${list.password}"/> </FocusTags:SCell>
            <FocusTags:SCell><FocusTags:STextField name="salary" defaultValue="${list.salary}"/> </FocusTags:SCell>
            <FocusTags:SCell>
                <FocusTags:SComboBox name="city" id="city" scrollerId="error"  masterType="58" formName="viewForm" styleClass="inputs">
                     <FocusTags:SItem key="1">Hyderabad</FocusTags:SItem>
                    <FocusTags:SItem key="2">Mumbai</FocusTags:SItem>
            </FocusTags:SComboBox></FocusTags:SCell>

          </FocusTags:SRow>
    </c:forEach>
    </FocusTags:STable>
</form>
    </FocusTags:STaskPane>
</body>
    <script src="res/scripts/me/form.js"> </script>
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
