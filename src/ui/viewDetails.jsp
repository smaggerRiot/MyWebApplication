<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 12/12/2018
  Time: 5:06 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
    <title></title>
</head>
<body>
<c:forEach items="${requestScope.Std}" var="v">
      <div style="border: 1px solid">
          ${v.name}

              ${v.id}
              ${v.course}

      </div>
</c:forEach>
</body>
</html>
