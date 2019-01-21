<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 1/21/2019
  Time: 11:03 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <script src="res/scripts/ajax.js"></script>


  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>
<body  onload="clkRequest.onClkSendRequest(1)">


<div class="view" id="view"></div>
<button class="btn-primary" id="1" onclick="clkRequest.onClkSendRequest(1)">get 1</button>
<button class="btn-primary"  id="2" onclick="clkRequest.onClkSendRequest(2)">get 2</button>
<button class="btn-primary" id="3" onclick="clkRequest.onClkSendRequest(3)">get 3</button>
</body>
<script src="res/scripts/MyScripts/requestPractice.js"></script>
<script src="res/scripts/ajax.js"></script>
</html>
