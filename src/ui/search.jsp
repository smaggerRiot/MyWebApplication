<%@ taglib prefix="focustags" uri="/tlds/fcomps" %>
<%@ taglib prefix="C" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 12/12/2018
  Time: 12:27 PM
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
  <style>
    .has-search .form-control {
      padding-left: 3.375rem;    }

    .has-search .form-control-feedback {
      position: relative;
      z-index: 2;
      display: block;
      width: 3.375rem;
      height: 1.375rem;
      line-height: 6.375rem;
      text-align: center;
      pointer-events: none;
      color: blueviolet;
    }
    .form-control{
      display: block;
      width: 100%;
      height: 37px;
      padding: 4px 21px;
      font-size: 19px;
      line-height: 13.429;
      color: #595959;
      background-color: #ffffff;
      background-image: none;
      border: 1px solid #0f0909;
      border-radius: 8px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
      box-shadow: inset 128px 1px 1px rgba(0,0,0,.075);
      -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
      -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
      transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    }
    .img{
      position: relative;
      width: 37%;
      height: 34%;
      margin-left: 119px;
    }

  </style>
</head>
<body>
<div class="container">
  <div class="row">
  <div class="col-sm-2 col-xs-2 col-md-2 col-lg-2 " style="height:23%">
    <img class="img" src="res/global/images/css/index.png">
  </div>

  <div class="col-sm-8 col-xs-8 col-md-8 col-lg-8">
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search" id="search" onkeyup="CLSerach.onClkSearch(this)">
        <div id="responsearea" style="border: 1px solid">

        </div>
      </div>
    </div>
  <div class="col-sm-2 col-xs-2 col-md-2 col-lg-2" style="height:72%"></div>
  </div>
</div>


</body>
<script src="res/scripts/me/search.js"></script>
</html>
