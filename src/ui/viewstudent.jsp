<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 18-12-2018
  Time: 15:53
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="focustags" uri="/tlds/fcomps" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title></title>
</head>
<body >

<form id="myform">
  <div id="combo">

  </div>

<focustags:STable  border="2" altRowColor="" specific="" scroll="true">
  <focustags:SHeader>
    <focustags:SColumn><focustags:SName>Name</focustags:SName>
    </focustags:SColumn>
    <focustags:SColumn><focustags:SName>Age</focustags:SName>
    </focustags:SColumn>
    <focustags:SColumn><focustags:SName>weight</focustags:SName>
    </focustags:SColumn>
    <focustags:SColumn><focustags:SName>City</focustags:SName>
    </focustags:SColumn>
    <focustags:SColumn><focustags:SName>DOB</focustags:SName>
    </focustags:SColumn>
  </focustags:SHeader>
 <%-- <c:forEach var="list" items="${requestScope.data}">--%>
  <focustags:SRow>
    <focustags:SCell><focustags:STextField name="name" /> </focustags:SCell>
    <focustags:SCell><focustags:STextField name="age" /> </focustags:SCell>
    <focustags:SCell>
      <focustags:SComboBox name="sb.city" masterType="58" scrollerId="combodiv" hiddenFieldName="sb.city" formName="myform" id="combo">
        <focustags:SItem key="1">hyderabad</focustags:SItem>
        <focustags:SItem key="2">Patna</focustags:SItem>
        <focustags:SItem key="3">Biahr</focustags:SItem>
        <focustags:SItem key="4">Vizag</focustags:SItem>
      </focustags:SComboBox>
    </focustags:SCell>
    <focustags:SCell><focustags:STextField name="city" /> </focustags:SCell>

  </focustags:SRow>
 <%-- </c:forEach>--%>
  <%--<c:forEach var="student" items="${requestScope.data}">
    <focustags:SRow >
      <focustags:SCell>${student.name}</focustags:SCell>
      <focustags:SCell>${student.age}</focustags:SCell>
      <focustags:SCell>${student.weight}</focustags:SCell>
      <focustags:SCell>${student.city}</focustags:SCell>
     &lt;%&ndash; <FocusTags:SCell>${student.dob}</FocusTags:SCell>&ndash;%&gt;
    </focustags:SRow>
  </c:forEach>--%>


</focustags:STable>

</form>
</body>
<script src="res/scripts/table.js"> </script>
</html>
