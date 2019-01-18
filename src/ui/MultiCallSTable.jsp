<%@ taglib prefix="FocusTags" uri="/tlds/fcomps" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 1/3/2019
  Time: 12:01 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
</head>
<body>
<c:set var="index" value="${requestScope.index}"/>
<FocusTags:STable  id="tabletabs${index}" border="1" isGenerateSNos="true"  specific="' cellpadding=5" width="100%"  rows="2" isEditable="true"
                   isDynamic="true" scroll="auto" >
  <FocusTags:SHeader indexedRowName="list.tabList[${index}].tableList">
    <FocusTags:SColumn>
      <FocusTags:SName>Name</FocusTags:SName>
      <FocusTags:STextColumn name="name"></FocusTags:STextColumn>
    </FocusTags:SColumn>
    <FocusTags:SColumn><FocusTags:SName>user ID</FocusTags:SName>
      <FocusTags:SNumericColumn name="uid"></FocusTags:SNumericColumn>
    </FocusTags:SColumn>
    </FocusTags:SHeader>
</FocusTags:STable>
</body>
</html>
