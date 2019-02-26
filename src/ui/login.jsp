<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 12/21/2018
  Time: 10:15 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login Form</title>
  <script src="res/scripts/MyScripts,/sample.js"></script>
  <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="res/global/styles/mine/LoginPage.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <script src="res/scripts/MyScripts/LoginPage.js"> </script>
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


</head>
<body>

  <div class="container">
    <%--<div class="d-flex justify-content-center">--%>
      <div class="card">
          <div class="card-header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0dx0fW5xoV-ztjP0fIUKyAF1JDYpvYDOYGMAAVkrpfR4JWvtvw">
          </div>
          <div class="card-body">
            <form action="login!login.do" method="post">
               <div class="input-group form-group">

                   <span class="input-group-addon"><i class="fas fa-user"></i></span><input class="form-control" type="text" name="csb.username" id="csb.username">


               </div>
               <div class="input-group form-group">

                  <span class="input-group-addon"><i class="fas fa-key"></i></span><input class="form-control" type="password" name="csb.password" id="csb.password">
                 </div>


               <div class="remember">
                 <input type="checkbox">Remember me
               </div>
               <div class="form-group">
                 <input type="submit" value="Log-in" class="btn float-right login-btn">
               </div>
            </form>
          </div>
          <div class="card-fotter">
            <div class="d-flex justify-content-center links">
              Do u have an account?<a href="#">Sign-up</a>
            </div>
            <div class="d-flex justify-content-center">
              <a href="#">forgot password?</a>
            </div>
          </div>

      </div>
<%--
    </div>
--%>
  </div>

</body>
</html>
