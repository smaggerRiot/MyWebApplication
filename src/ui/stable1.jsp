<%@ taglib prefix="FocusTags" uri="/tlds/fcomps" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 12/28/2018
  Time: 3:22 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <title></title>
</head>
<body>
<c:set var="index" value="${requestScope.index}"/>
<FocusTags:STable  id="tableList${index}" isGenerateSNos="true"  border="1" colTypes="combobox" valuesAsObjectList="${requestScope.tableData}" createTbody="true" specific="style='box-shadow: 0px -7px 17px gray;
border: 1px solid gray;'" cellpadding="5" width="50%"  rows="2" isEditable="true"
                   isDynamic="true" scroll="auto">

  <FocusTags:SHeader indexedRowName="list.tabList[${index}].tableList">
    <FocusTags:SColumn>
      <FocusTags:SName>Name</FocusTags:SName>
      <FocusTags:STextColumn name="name"/>
    </FocusTags:SColumn>
    <FocusTags:SColumn>
      <FocusTags:SName>User ID</FocusTags:SName>
      <FocusTags:SNumericColumn name="uname"/>
    </FocusTags:SColumn>
    <%--<FocusTags:SColumn>
      <FocusTags:SName>EmailID</FocusTags:SName>
      <FocusTags:STextColumn name="emailId"/>
    </FocusTags:SColumn>
    <FocusTags:SColumn>
      <FocusTags:SName>Salary</FocusTags:SName>
      <FocusTags:SFloatColumn name="salary"/>
    </FocusTags:SColumn>
    <FocusTags:SColumn>
      <FocusTags:SName>City</FocusTags:SName>
      <FocusTags:SComboColumn name="city" formName="myform" scrollerId="error" hiddenFieldName="city" masterType="58">
        <FocusTags:SItem key="1">Hyderabad</FocusTags:SItem>
        <FocusTags:SItem key="2">Mumbai</FocusTags:SItem>
        <FocusTags:SItem key="3">kolkata</FocusTags:SItem>
        <FocusTags:SItem key="4">chennai</FocusTags:SItem>
      </FocusTags:SComboColumn>

    </FocusTags:SColumn>--%>
  </FocusTags:SHeader>

</FocusTags:STable>
</body>
</html>
