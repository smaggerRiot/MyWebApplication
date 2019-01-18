<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 12/12/2018
  Time: 6:55 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <script src="res/scripts/me/Action.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

  <script src="res/scripts/me/LoginPage.js"> </script>
  <script src="res/scripts/myTabblePanne.js"> </script>
  <script src="res/scripts/tapasPractice.js"> </script>
  <script src="res/scripts/ajax.js"> </script>
  <script src="res/scripts/validate.js"> </script>
  <script src="res/scripts/CallDetails.js" ></script>
  <script src="res/scripts/app.js" ></script>
  <script src="res/scripts/ActionBar.js"> </script>
  <script src="res/scripts/button.js"> </script>
  <script src="res/scripts/combobox.js"></script>
  <script src="res/scripts/CrossBrowser.js"> </script>
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
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>

  <style>
    .card{
      width: 573px;
      height: 354px;
      padding: 2px;
      border-radius:6px;
      box-shadow: 5px 5px 5px gray;
      border: 1px solid black;

    }
    .header{

      height: 68px;
    }
    .middle{

      height: 207px;
      padding: 15px;
      width: 444px;
      margin-left: 42px;
    }

    .fotter{

      height: 60px;
      padding:5px;
    }
    .proImg{
      width: 56px;
      height: 54px;
      margin-top: 5px;
      border-radius: 32px;
      border: solid 1px gray;
      margin-left: 5px;}
    .name{
      width: 145px;
      font-size: 18px;
      font-weight: bold;
      font-family: arial;
      color: #6464b6;
      position: absolute;
      margin-top: 13px;
      margin-left: 12px;
    }

    .loc {
      width: 12px;
      font-size: 12px;
      margin-top: 34px;
      margin-left: 21px;
      position: absolute;
    }
    .proImgmid{
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 6px;
      box-shadow: 1px 1px 1px gray;

    }
    .fottor i{
      color:blue;
    }
    .likeup{
      position:absolute;
      color: #5db2ff;
    }
    .model{
      background-color: rgba(73, 47, 85, 0.29);
      transition-delay: 10s;
      height: 71px;
      width: 100px float:right;
      right: 22%;
      width: 223px;
      padding:5px;
      position: absolute;
      right: 0%;
      display:none;


    }
    .closebtn {
      margin-left: 15px;
      color: white;
      font-weight: bold;
      float: right;
      font-size: 22px;
      line-height: 20px;
      cursor: pointer;
      transition: 0.3s;
      display:none;
    }




    .model:hover .closebtn{
      cursor:pointer;
      display:block;
      color: black;
    }

  </style>
</head>
<body>
<div class="card">
  <div class="header" >

    <img class="proImg" src="res/global/images/css/propic.jpg"><span class="name">Mayur Laishetti</span>
    <i class="fas fa-anchor" style="position: absolute;margin-top: 35px;margin-left: 7px;font-size: 11px;"></i><span class="loc">Charminar,Hyderabad</span>
  </div>
  <div class="middle">
    <img class="proImgmid" src="res/global/images/css/propic.jpg">

  </div>
  <div class="fotter">
    <c:set var="Status" value="${requestScope.Status}"/>
    <c:set var="icon" value="fa fa-thumbs-up"/>
    <c:if test="${Status == 'true'}">
      <c:set var="icon" value="fa fa-thumbs-down"/>
    </c:if>

    <i class='${icon}' style='font-size:24px;margin-left: 19px;' onclick="clklike.onlike(this)"></i>


    <i class='far fa-comment' style='font-size: 24px;margin-left: 58px;position: absolute;'></i>
    <i class='far fa-arrow-alt-circle-down' style='font-size:24px;float:right;margin-right:18px'></i>
  </div>

</div>
<div>
  <a href="redirect!sendRediret.do?">click</a>
</div>
<div class="model" id="model">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>

  <p>you liked this picture</p>

</div>

</body>
</html>
