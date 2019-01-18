<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 1/9/2019
  Time: 3:46 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.5/angular.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.7.5/angular-sanitize.js"></script>

</head>
<body >
<div ng-app="myapp" ng-controller="mycontroller">
  <button type="button" ng-click="count=count+1"  >+</button>
  <button type="button" ng-click="addNumber()" >-</button>
  <div ng-bind-html="count"></div>
</div>
<script>
  var app=angular.module("myapp",['ngSanitize'])
          app.controller("mycontroller",function($scope){
            $scope.count=0;
           $scope.addNumber=function()
           {
             $scope.count--;


           }


  });

</script>

</body>
</html>
