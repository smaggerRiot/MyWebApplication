<% String list = null; %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page import="java.lang.reflect.Array" %>
<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 1/14/2019
  Time: 5:58 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%--<c:set var="list" value="${requestScope.jsondata}"/>--%>

<html>

<head>
    <title></title>
  <script>
    var arry = [
      { "Id": "5", "Name": "abc", "Parent": "3", "attr": "abc" },
      { "Id": "2", "Name": "abc", "Parent": "1", "attr": "abc" },
      { "Id": "4", "Name": "abc", "Parent": "2", "attr": "abc" },
      { "Id": "3", "Name": "abc", "Parent": "2", "attr": "abc" },
      { "Id": "1", "Name": "abc", "Parent": "", "attr": "abc" }
    ];

 function convert(array){

   var map = {}
   for(var i = 0; i < array.length; i++){
     var obj = array[i]
     if(!(obj.Id in map)){
       map[obj.Id] = obj
       map[obj.Id].children = []
     }

     if(typeof map[obj.Id].Name == 'undefined'){
       map[obj.Id].Id = obj.Id
       map[obj.Id].Name = obj.Name
       map[obj.Id].attr = obj.attr
       map[obj.Id].Parent= obj.Parent
     }

     var parent = obj.Parent || '-';
     if(!(parent in map)){
       map[parent] = {}
       map[parent].children = []
     }

     map[parent].children.push(map[obj.Id])
   }
   return map['-']
 }
 console.log(JSON.stringify(convert(arry)))


  </script>
</head>
<body>


<%--<button onclick="convert()">Link</button>--%>
</body>
</html>
