<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 13-12-2018
  Time: 09:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<style>
  .maindiv{
    padding-top: 0px;;
  }
  textarea {
    width: 100%;
    height: 50px;
  }
  .card
  {
    width: 600px;
    border: 1px solid;
    height: 377px;
    padding: 5px;
    box-shadow: 5px 5px 5px green;
  }
  .header{
    width: 100%;
   /* border: 1px solid;*/
  }
  .content
  {
    width: 100%;
    border: 1px solid;
    margin-top: 10px;
    height: 300px;
  }
  .action{
  /*  border: 1px solid;*/
    margin-top: 10px;
  }
  .container1 {
    position: relative;
    font-family: Arial;
  }
  .text-block {
    position: absolute;
    bottom: 20px;
    right: 20px;
  /*  background-color: #008AFF;*/
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    float: left;
    margin-right: 572px;
    font-family: bold;
  }
  .frirndrequestcard
  {
   /* border: 1px solid;*/
    width: 100%;
    height: 350px;;
    padding: 5px;
  }
  .frirndrequestcard .card1
  {

    height: 50px;;
    margin-top: 10px;;
  }
  .text-block1{
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: aqua;
    color: red;
    padding-left: 20px;
    padding-right: 20px;
    float: left;
    font-family: bold;
  }

  .sidenav
  {
    height: 100%;
    width: 160px;
    position: fixed;
    z-index: 1;
    top: 0;

    overflow-x: hidden;
    padding-top: 20px;
  }
  .firstchatbox
  {
    height: 30px;
    margin-top: 10px
  }
</style>
<title>Fecebook Template
</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="res/scripts/scripts/myscript/like.js"></script>
<script src="res/scripts/scripts/myscript/ajax.js"></script>

<head>

</head>
<body>
<div class="upperdiv" style="padding-top: 10px;background-color: rgb(26, 13, 171);;padding-bottom: 30px">
  <div class="col-sm-1">
    <span>  <img data-no-retina="" class="" src="https://mysearchofsummer.files.wordpress.com/2011/05/facebook_logo.jpeg" height="30px" width="50px" alt="profilepic" style="width: 100%"></span>
  </div>
  <div class="col-sm-10">
  <input type="search" placeholder="search" style="width: 100%" class="form-contr">
  </div>

</div>
<%--<div style="padding: 5px;background-color:#333; ">
 &lt;%&ndash; <div class="col-lg-1">

  </div>&ndash;%&gt;
  <div class="col-lg-6">
1
 </div>
   <div class="col-lg-6">
     1
   </div>


</div>--%>
<div class="maindiv">
  <div class="col-sm-3">
    <div style="margin-left: 50px;">
      <img data-no-retina="" class="img-circle img-responsive img-bordered-primary"
           src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="250px" width="200" alt="profilepic">
    </div>
    <div>
      <h3 align="center">Ranjan </h3>
    </div>
    <div>
      <a href="#" class="btn btn-info text-center btn-block">View Profile</a>
    </div>
    <div style="margin-top: 20px;">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">

          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">About</a></li>
            <li><a href="#">Photos</a></li>
            <li><a href="#">Friends</a></li>
          </ul>
        </div></nav>
    </div>
    <div class="frirndrequestcard">
      <div class="card1">

        <div class="col-sm-4">
          <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
        </div>
          <div class="col-sm-8">
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
      </div>
      <div class="card1">

        <div class="col-sm-4">
          <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
        </div>
        <div class="col-sm-8">
          <button type="button" class="btn btn-primary">Friend Request</button>
        </div>
      </div>
      <div class="card1">

        <div class="col-sm-4">
          <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
        </div>
        <div class="col-sm-8">
          <button type="button" class="btn btn-primary">Friend Request</button>
        </div>
      </div>
      <div class="card1">

        <div class="col-sm-4">
          <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
        </div>
        <div class="col-sm-8">
          <button type="button" class="btn btn-primary">Friend Request</button>
        </div>
      </div>
      <div class="card1">

        <div class="col-sm-4">
          <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
        </div>
        <div class="col-sm-8">
          <button type="button" class="btn btn-primary">Friend Request</button>
        </div>
      </div>
      <div class="card1">

        <div class="col-sm-4">
          <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
        </div>
        <div class="col-sm-8">
          <button type="button" class="btn btn-primary">Friend Request</button>
        </div>
      </div> <div class="card1">

      <div class="col-sm-4">
        <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
      </div>
      <div class="col-sm-8">
        <button type="button" class="btn btn-primary">Friend Request</button>
      </div>
    </div> <div class="card1">

      <div class="col-sm-4">
        <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
      </div>
      <div class="col-sm-8">
        <button type="button" class="btn btn-primary">Friend Request</button>
      </div>
    </div>



    </div>
  </div>
  <div class="col-sm-7">
    <div class="container1">
      <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" width="100%" height="300" border="2px">
      <div class="text-block">
       <img src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" width="130" height="150" border="5">
      </div>
      <div class="text-block1">
        <h3 ><a href="#">Add Friend</a></h3>
      </div>
    </div>
    <div style="width: 100%">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">Timeline</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">About</a></li>
            <li><a href="#">Photos(345)</a></li>
            <li><a href="#">Friends(456)</a></li>
            <li><a href="#">Friend Request(56)</a></li>
          </ul>
        </div>
      </nav>
      <div style="padding-top: 0px;">
        <textarea placeholder="writesomething....................."></textarea>
      </div>
      <div style="padding-bottom: 10px;">
        <button type="button" class="btn btn-success">Post</button>
      </div>
      <div class="card">
        <div class="header">
          <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
          <span>Ranjan kumar jha</span>
        </div>
        <div class="content">

          <img data-no-retina=""  src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612" height="100%" width="100%" alt="profilepic">
        </div>
        <div class="action">
           <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
          <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
          <c:set var="Status" value="${requestScope.Status}"/>
          <c:set var="icon" value="fa fa-thumbs-up"/>
          <c:if test="${Status == 'true'}">
            <c:set var="icon" value="fa fa-thumbs-down"/>
          </c:if>

          <i class='${icon}' style='font-size:24px;margin-left: 19px;' onclick="CLlike.myfunction(this)"></i>

        </div>
      </div>
      <div class="card" style="margin-top: 50px;">
        <div class="header">
          <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
          <span>Ranjan kumar jha</span>
        </div>
        <div class="content">
          <img data-no-retina=""  src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612" height="100%" width="100%" alt="profilepic">
        </div>
        <div class="action">
          <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
          <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
        </div>
      </div>
      <div class="card" style="margin-top: 50px;">
        <div class="header">
          <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>

          <span>Ranjan kumar jha</span>
        </div>
        <div class="content">
          <img data-no-retina=""  src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612" height="100%" width="100%" alt="profilepic">
        </div>
        <div class="action">
          <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
          <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
        </div>
      </div>
      <div class="card" style="margin-top: 50px;">
        <div class="header">
          <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
          <span>Ranjan kumar jha</span>
        </div>
        <div class="content">
          <img data-no-retina=""  src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612" height="100%" width="100%" alt="profilepic">
        </div>
        <div class="action">
          <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
          <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
        </div>
      </div>
      <div class="card" style="margin-top: 50px;">
        <div class="header">
          <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
          <span>Ranjan kumar jha</span>
        </div>
        <div class="content">
          <img data-no-retina=""  src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612" height="100%" width="100%" alt="profilepic">
        </div>
        <div class="action">
          <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
          <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
        </div>
      </div>
      <div class="card" style="margin-top: 50px;">
        <div class="header">
          <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
          <span>Ranjan kumar jha</span>
        </div>
        <div class="content">
          <img data-no-retina=""  src="https://www.w3schools.com/howto/img_nature_wide.jpg" height="100%" width="100%" alt="profilepic">
        </div>
        <div class="action">
          <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
          <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
        </div>
      </div>
      <div class="card" style="margin-top: 50px;">
        <div class="header">
          <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
          <span>Ranjan kumar jha</span>
        </div>
        <div class="content">
          <img data-no-retina=""  src="https://www.gstatic.com/webp/gallery/2.sm.jpg" height="100%" width="100%" alt="profilepic">
        </div>
        <div class="action">
          <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
          <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="chatmaindiv" style="height: 500px;margin-top: 10px;padding: 5px";>
        <div class="firstchatbox" >
          <div class="col-sm-2">
            <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
          </div>
          <div class="col-sm-7">
            Rohit
          </div>
          <div class="col-sm-2" style="margin-top: 7px">
            <i class="fa fa-circle" style="font-size:10px;color: green"></i>
          </div>

    </div>
      <div class="firstchatbox" >
          <div class="col-sm-2">
            <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
          </div>
        <div class="col-sm-7">
          Mahesh
        </div>
        <div class="col-sm-2" style="margin-top: 7px">
          <i class="fa fa-circle" style="font-size:10px;color: green"></i>
        </div>
      </div>
      <div class="firstchatbox">
        <div class="col-sm-2">
          <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
        </div>
        <div class="col-sm-7">
          Ranjan
        </div>
        <div class="col-sm-2" style="margin-top: 7px">
          <i class="fa fa-circle" style="font-size:10px;color: green"></i>
        </div>

      </div> <div class="firstchatbox">
      <div class="col-sm-2">
        <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
      </div>
      <div class="col-sm-7">
        Tapas
      </div>
      <div class="col-sm-2" style="margin-top: 7px">
        <i class="fa fa-circle" style="font-size:10px;color: green"></i>
      </div>

    </div>
      <div class="firstchatbox" >
        <div class="col-sm-2">
          <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
        </div>
        <div class="col-sm-7">
          Mayur
        </div>
        <div class="col-sm-2" style="margin-top: 7px">
          <i class="fa fa-circle" style="font-size:10px;color: green"></i>
        </div>

      </div>
      <div class="firstchatbox">
        <div class="col-sm-2">
          <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
        </div>
        <div class="col-sm-7">
          Manish
        </div>
        <div class="col-sm-2" style="margin-top: 7px">
          <i class="fa fa-circle" style="font-size:10px;color: green"></i>
        </div>

      </div>
      <div class="firstchatbox" >
        <div class="col-sm-2">
          <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
        </div>
        <div class="col-sm-7">
          Ramesh
        </div>
        <div class="col-sm-2" style="margin-top: 7px">
          <i class="fa fa-circle" style="font-size:10px;color: green"></i>
        </div>

      </div>
      <div class="firstchatbox" >

      <div class="col-sm-2">
        <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
      </div>
      <div class="col-sm-7">
        Aalok
      </div>
      <div class="col-sm-2" style="margin-top: 7px">
        <i class="fa fa-circle" style="font-size:10px;color: green"></i>
      </div>
    </div>
      <div class="firstchatbox" >
        <div class="col-sm-2">
          <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
        </div>
        <div class="col-sm-7">
          Vicky
        </div>
        <div class="col-sm-2" style="margin-top: 7px">
          <i class="fa fa-circle" style="font-size:10px;color: green"></i>
        </div>
    </div> <div class="firstchatbox">
      <div class="col-sm-2">
        <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
      </div>
      <div class="col-sm-7">
        Mayur
      </div>
      <div class="col-sm-2" style="margin-top: 7px">
        <i class="fa fa-circle" style="font-size:10px;color: green"></i>
      </div>
    </div>
      <div class="firstchatbox" >
        <div class="col-sm-2">
          <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
        </div>
        <div class="col-sm-7">
          Shrree
        </div>
        <div class="col-sm-2" style="margin-top: 7px">
          <i class="fa fa-circle" style="font-size:10px;color: green"></i>
        </div>
      </div>
      <div class="firstchatbox" >
        <div class="col-sm-2">
          <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
        </div>
        <div class="col-sm-7">
          Rama
        </div>
        <div class="col-sm-2" style="margin-top: 7px">
          <i class="fa fa-circle" style="font-size:10px;color: green"></i>
        </div>
      </div>
      <div class="firstchatbox" >
        <div class="col-sm-2">
          <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
        </div>
        <div class="col-sm-7">
          Ajay
        </div>
        <div class="col-sm-2" style="margin-top: 7px">
          <i class="fa fa-circle" style="font-size:10px;color: green"></i>
        </div>
      </div>
      <div class="firstchatbox">
        <div class="col-sm-2">
          <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
        </div>
        <div class="col-sm-7">
          Amit
        </div>
        <div class="col-sm-2" style="margin-top: 7px">
          <i class="fa fa-circle" style="font-size:10px;color: green"></i>
        </div>
      </div>







    </div>
   <%-- <div class="chatmaindiv" style="border: 1px solid;height: 300px;margin-top: 10px" >
      <div class="firstchatbox">
        <div class="col-sm-2">
          <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic">
        </div>
         <div class="col-sm-7" >
           Ranjan
         </div>
         <div class="col-sm-2" style="margin-top: 7px">
           <i class="fa fa-circle" style="font-size:10px;color: green"></i>
         </div>
      </div>

      <div class="firstchatbox" style="border: 1px solid;height: 20px">
dxf
      </div>



    </div>--%>

  </div>
   <%-- <div class="col-lg-3 sidenav leftdiv">
     <div style="margin-left: 50px;">
       <img data-no-retina="" class="img-circle img-responsive img-bordered-primary" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="250px" width="200" alt="profilepic">
     </div>
      <div>
        <h3 align="center">Ranjan </h3>
      </div>
      <div>
        <a href="#" class="btn btn-info text-center btn-block">View Profile</a>
      </div>
      <div style="margin-top: 20px;">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">

            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">About</a></li>
              <li><a href="#">Photos</a></li>
              <li><a href="#">Friends</a></li>
            </ul>
          </div></nav>
      </div>
      <div class="frirndrequestcard">
          <div class="card1">
            <div class="col-lg-4">
             <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
            </div>
            <div >
              <button type="button" class="btn btn-primary">Friend Request</button>
            </div>
          </div>
        <div class="card1">
          <div class="col-lg-4">
            <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
          </div>
          <div >
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
        </div>
        <div class="card1">
          <div class="col-lg-4">
            <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
          </div>
          <div >
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
        </div>
        <div class="card1">
          <div class="col-lg-4">
            <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
          </div>
          <div >
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
        </div>
        <div class="card1">
          <div class="col-lg-4">
            <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
          </div>
          <div >
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
        </div>
        <div class="card1">
          <div class="col-lg-4">
            <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
          </div>
          <div >
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
        </div>
        <div class="card1">
          <div class="col-lg-4">
            <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
          </div>
          <div >
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
        </div>
        <div class="card1">
          <div class="col-lg-4">
            <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
          </div>
          <div >
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
        </div>
        <div class="card1">
          <div class="col-lg-4">
            <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
          </div>
          <div >
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
        </div>
        <div class="card1">
          <div class="col-lg-4">
            <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
          </div>
          <div >
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
        </div> <div class="card1">
        <div class="col-lg-4">
          <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
        </div>
        <div >
          <button type="button" class="btn btn-primary">Friend Request</button>
        </div>
      </div> <div class="card1">
        <div class="col-lg-4">
          <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
        </div>
        <div >
          <button type="button" class="btn btn-primary">Friend Request</button>
        </div>
      </div> <div class="card1">
        <div class="col-lg-4">
          <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
        </div>
        <div >
          <button type="button" class="btn btn-primary">Friend Request</button>
        </div>
      </div> <div class="card1">
        <div class="col-lg-4">
          <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
        </div>
        <div >
          <button type="button" class="btn btn-primary">Friend Request</button>
        </div>
      </div>

        <div class="card1">
          <div class="col-lg-4">
            <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
          </div>
          <div >
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
        </div>
        <div class="card1">
          <div class="col-lg-4">
            <img class="img-circle" src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612"  height="40px" width="40px">
          </div>
          <div >
            <button type="button" class="btn btn-primary">Friend Request</button>
          </div>
        </div>
      </div>
    </div>--%>
   <%-- <div class="col-lg-7 sidenav ">
      <div class="container1">
        <img src="https://www.w3schools.com/howto/img_nature_wide.jpg" width="100%" height="300" border="2px">
        <div class="text-block">
         <h3 style="color: #990000">Ranjan Kumar Jha</h3>
        </div>
        <div class="text-block1">
          <h3 ><a href="#">Add Friend</a></h3>
        </div>
      </div>
      <div style="width: 100%">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <a class="navbar-brand" href="#">Timeline</a>
            </div>
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">About</a></li>
              <li><a href="#">Photos(345)</a></li>
              <li><a href="#">Friends(456)</a></li>
              <li><a href="#">Friend Request(56)</a></li>
            </ul>
          </div>
        </nav>
        <div style="padding-top: 0px;">
        <textarea placeholder="writesomething....................."></textarea>
      </div>
        <div style="padding-bottom: 10px;">
          <button type="button" class="btn btn-success">Post</button>
        </div>
        <div class="card">
          <div class="header">
            <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
            <span>Ranjan kumar jha</span>
          </div>
          <div class="content">

            <img data-no-retina=""  src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612" height="100%" width="100%" alt="profilepic">
          </div>
          <div class="action">
           &lt;%&ndash; <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
            <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>&ndash;%&gt;
             <c:set var="Status" value="${requestScope.Status}"/>
             <c:set var="icon" value="fa fa-thumbs-up"/>
             <c:if test="${Status == 'true'}">
               <c:set var="icon" value="fa fa-thumbs-down"/>
             </c:if>

             <i class='${icon}' style='font-size:24px;margin-left: 19px;' onclick="CLlike.myfunction(this)"></i>

          </div>
        </div>
        <div class="card" style="margin-top: 50px;">
          <div class="header">
            <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
            <span>Ranjan kumar jha</span>
          </div>
          <div class="content">
            <img data-no-retina=""  src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612" height="100%" width="100%" alt="profilepic">
          </div>
          <div class="action">
            <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
            <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
          </div>
        </div>
        <div class="card" style="margin-top: 50px;">
          <div class="header">
            <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>

            <span>Ranjan kumar jha</span>
          </div>
          <div class="content">
            <img data-no-retina=""  src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612" height="100%" width="100%" alt="profilepic">
          </div>
          <div class="action">
            <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
            <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
          </div>
        </div>
        <div class="card" style="margin-top: 50px;">
          <div class="header">
            <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
            <span>Ranjan kumar jha</span>
          </div>
          <div class="content">
            <img data-no-retina=""  src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612" height="100%" width="100%" alt="profilepic">
          </div>
          <div class="action">
            <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
            <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
          </div>
        </div>
        <div class="card" style="margin-top: 50px;">
          <div class="header">
            <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
            <span>Ranjan kumar jha</span>
          </div>
          <div class="content">
            <img data-no-retina=""  src="https://media.gettyimages.com/photos/new-delhi-india-indian-president-dr-apj-abdul-kalam-addressed-the-on-picture-id73101369?s=612x612" height="100%" width="100%" alt="profilepic">
          </div>
          <div class="action">
            <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
            <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
          </div>
        </div>
        <div class="card" style="margin-top: 50px;">
          <div class="header">
            <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
            <span>Ranjan kumar jha</span>
          </div>
          <div class="content">
            <img data-no-retina=""  src="https://www.w3schools.com/howto/img_nature_wide.jpg" height="100%" width="100%" alt="profilepic">
          </div>
          <div class="action">
            <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
            <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
          </div>
        </div>
        <div class="card" style="margin-top: 50px;">
          <div class="header">
            <span>  <img data-no-retina=""  src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
            <span>Ranjan kumar jha</span>
          </div>
          <div class="content">
            <img data-no-retina=""  src="https://www.gstatic.com/webp/gallery/2.sm.jpg" height="100%" width="100%" alt="profilepic">
          </div>
          <div class="action">
            <i class='fas fa-heart' onclick="CLlike.myfunction(this)" style='font-size:20px;color:red'></i>
            <span style="padding-left: 20px"><i class='far fa-comment' style='font-size:20px'></i></span>
          </div>
        </div>
    </div>
    </div>--%>
   <%-- <div class="col-lg-2 sidenav rightdiv">
       <div class="chatmaindiv" style="background-color: #">
         <div class="firstchatbox">
             <div class="col-lg-2">

             </div>
           <div class="col-lg-8">
             Ranjan kumar
           </div>
           <div class="col-lg-2" style="margin-top: 7px">
             <i class="fa fa-circle" style="font-size:10px;color: green"></i>
           </div>
         </div>
         <div class="firstchatbox" style="padding-top: 30px">
           <div class="col-lg-2">
             <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
           </div>
           <div class="col-lg-8">
             Anup bangale
           </div>
           <div class="col-lg-2" style="margin-top: 7px">
             <i class="fa fa-circle" style="font-size:10px;color: green"></i>
           </div>
         </div>
         <div class="firstchatbox" style="padding-top: 30px">
           <div class="col-lg-2">
             <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
           </div>
           <div class="col-lg-8">
             Sanjay kuamr
           </div>
           <div class="col-lg-2" style="margin-top: 7px">
             <i class="fa fa-circle" style="font-size:10px;color: green"></i>
           </div>
         </div>
         <div class="firstchatbox" style="padding-top: 30px">
           <div class="col-lg-2">
             <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
           </div>
           <div class="col-lg-8">
             Sudheer jha
           </div>
           <div class="col-lg-2" style="margin-top: 7px">
             <i class="fa fa-circle" style="font-size:10px;color: green"></i>
           </div>
         </div>
         <div class="firstchatbox" style="padding-top: 30px">
           <div class="col-lg-2">
             <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
           </div>
           <div class="col-lg-8">
             Rousan
           </div>
           <div class="col-lg-2" style="margin-top: 7px">
             <i class="fa fa-circle" style="font-size:10px;color: green"></i>
           </div>
         </div>
         <div class="firstchatbox" style="padding-top: 30px">
           <div class="col-lg-2">
             <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
           </div>
           <div class="col-lg-8">
             Umesh Rao
           </div>
           <div class="col-lg-2" style="margin-top: 7px">
             <i class="fa fa-circle" style="font-size:10px;color: green"></i>
           </div>
         </div>
         <div class="firstchatbox" style="padding-top: 30px">
           <div class="col-lg-2">
             <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
           </div>
           <div class="col-lg-8">
             Rohit kumar
           </div>
           <div class="col-lg-2" style="margin-top: 7px">
             <i class="fa fa-circle" style="font-size:10px;color: green"></i>
           </div>
         </div> <div class="firstchatbox" style="padding-top: 30px">
         <div class="col-lg-2">
           <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
         </div>
         <div class="col-lg-8">
           Sumit
         </div>
         <div class="col-lg-2" style="margin-top: 7px">
           <i class="fa fa-circle" style="font-size:10px;color: green"></i>
         </div>
       </div>
         <div class="firstchatbox" style="padding-top: 30px">
           <div class="col-lg-2">
             <span><img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
           </div>
           <div class="col-lg-8">
             mayur
           </div>
           <div class="col-lg-2" style="margin-top: 7px">
             <i class="fa fa-circle" style="font-size:10px;color: green"></i>
           </div>
         </div>
         <div class="firstchatbox" style="padding-top: 30px">
           <div class="col-lg-2">
             <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
           </div>
           <div class="col-lg-8">
             Ajay
           </div>
           <div class="col-lg-2" style="margin-top: 7px">
             <i class="fa fa-circle" style="font-size:10px;color: green"></i>
           </div>
         </div> <div class="firstchatbox" style="padding-top: 30px">
         <div class="col-lg-2">
           <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
         </div>
         <div class="col-lg-8">
           Vikaram
         </div>
         <div class="col-lg-2" style="margin-top: 7px">
           <i class="fa fa-circle" style="font-size:10px;color: green"></i>
         </div>
       </div>
         <div class="firstchatbox" style="padding-top: 30px">
           <div class="col-lg-2">
             <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
           </div>
           <div class="col-lg-8">
             Mahesh
           </div>
           <div class="col-lg-2" style="margin-top: 7px">
             <i class="fa fa-circle" style="font-size:10px;color: green"></i>
           </div>
         </div>
         <div class="firstchatbox" style="padding-top: 30px">
         <div class="col-lg-2">
           <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
         </div>
         <div class="col-lg-8">
           Amit
         </div>
         <div class="col-lg-2" style="margin-top: 7px">
           <i class="fa fa-circle" style="font-size:10px;color: green"></i>
         </div>
       </div>
         <div class="firstchatbox" style="padding-top: 30px">
           <div class="col-lg-2">
             <span>  <img data-no-retina="" class="img-circle" src="https://lh3.googleusercontent.com/-hxlI0wXCsaE/AAAAAAAAAAI/AAAAAAAAAHU/rQ_YoQz1_50/s110-p-k/photo.jpg" height="25px" width="" alt="profilepic"></span>
           </div>
           <div class="col-lg-8">
             Rama
           </div>
           <div class="col-lg-2" style="margin-top: 7px">
             <i class="fa fa-circle" style="font-size:10px;color: green"></i>
           </div>
         </div>
         <div class="firstchatbox" style="padding-top: 30px">
           <div class="col-lg-12" style="width: 100%">
             <input type="search" placeholder="typing.....">
           </div>
         </div>
       </div>
    </div>--%>
</div>

</body>
</html>

