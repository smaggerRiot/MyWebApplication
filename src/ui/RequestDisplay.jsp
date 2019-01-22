<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 1/21/2019
  Time: 12:29 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
<c:set value="${requestScope.result}" var="result"/>
<img src="https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg" style="height: 100%;width: 100%">
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
  <c:when test="${result=='0'}">
    <div class="div3"  style="width: 330px;height: 290px">
      <img style="height: 100%;width: 100%" src="data:image/jpeg;base64,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">
    </div>

  </c:when>
</c:choose>
</body>
<script src="res/scripts/MyScripts/requestPractice.js"></script>
<script src="res/scripts/connect.js" ></script>
<script src="res/scripts/constants.js" ></script>
<script src="res/scripts/DynamicIncResources.js"></script>
<script src="res/scripts/ajax.js"></script>
<script src="res/scripts/MyScripts/Form.js"> </script>

<script src="res/scripts/ajax.js"> </script>
<script src="res/scripts/validate.js"> </script>

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
