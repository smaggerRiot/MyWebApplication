<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 12/21/2018
  Time: 10:48 AM
  To change this template use File | Settings | File Templates.
--%>
<%
  if(response!=null)
  {
    response.setHeader("Pragma", "no-cache");
    response.setHeader("Cache-Control", "no-store");
    response.setHeader("Expires", "0");
    response.setDateHeader("Expires", -1);
    response.setStatus(404);
  }
  else {
  }

%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
<h1>Succesfully logged out</h1>
</body>
</html>
