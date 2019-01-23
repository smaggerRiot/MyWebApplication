<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="FocusTags" uri="/tlds/fcomps" %>
<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 1/21/2019
  Time: 12:29 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
<c:set value="${requestScope.result}" var="result"/>

<c:choose>
  <c:when test="${result=='1'}">
    <div class="div1" style="width: 330px;height: 290px">
      <img src="https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg" style="height: 100%;width: 100%">
    </div>
  </c:when>
  <c:when test="${result=='2'}">
    <div class="div2" style="width: 330px;height: 290px">
      <img src="https://www.w3schools.com/howto/img_forest.jpg" style="height: 100%;width: 100%">
    </div>
  </c:when>
  <c:when test="${result=='3'}">
    <div class="div3"  style="width: 330px;height: 290px">
      <img src="https://i.pinimg.com/originals/94/dd/57/94dd573e4b4de604ea7f33548da99fd6.jpg" style="height: 100%;width: 100%">
    </div>
  </c:when>

</c:choose>
</body>

</html>
