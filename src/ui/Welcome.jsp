<%@ taglib prefix="s" uri="/struts-tags" %>
<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 12/21/2018
  Time: 10:22 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<

<html>
<head>
    <title></title>

  <script type="text/javascript">
    function preventBack() { window.history.forward(); }
    setTimeout("preventBack()", 0);
    window.onunload = function () { null };
  </script>

</head>
<body>
Welcome to Profile, ${sessionScope.username}
<a href="login!logout.do"> log out</a>
</body>
</html>
