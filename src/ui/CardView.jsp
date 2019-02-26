<%@ page import="java.util.List" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <%--<link rel="stylesheet" type="text/css" href="res/global/styles/Topbar.css">--%>
 <%-- <link href="res/global/styles/css/bootstrap.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/css/bootstrap.min.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/css/bootstrap-grid.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/css/bootstrap-grid.min.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/css/bootstrap-reboot.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/css/bootstrap-reboot.min.css" rel="stylesheet" type="text/css">
--%>

<%--
  <link href="res/global/styles/index.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/App.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/ActionBar.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/BoxView.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Button.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/ButtonPane.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Calendar.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Dialog.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/DropdownList.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Table.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Tabpane.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Time.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/tabmenu.css" rel="stylesheet" type="text/css">
  <link href="res/global/styles/Uploadbar.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
--%>
  <%--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">--%>
  <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
  <%--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">--%>

  <title>CardView</title>
<%--<script>
  function loadCont()
  {
    alert("called");
    var count=${requestScope.cardList}
    for(var i=0;i<count.length;i++)
    {
      document.getElementById("titleLogo").setAttribute("class","${requestScope.cardList.titleLogo}");
      document.getElementById("titleName").innerHTML="${requestScope.cardList.title}";
      document.getElementById("description").innerHTML="${requestScope.cardList.description}";
      document.getElementById("status").value="${requestScope.cardList.buttonValue}";
    }
  }
</script>--%>
  <style>
    .partdiv{
        height:150px;
    }
    .outerDiv{
      height: 100%;
      width: 100%;
      padding: 12px;
    border:1px solid rgba(0, 0, 0, 0.2)

    }
    .outerDiv:hover{
      box-shadow: 4px 4px 19px gray;

    }
    .headerDiv{
      height:40px ;
    }
    .headerDiv i{
      font-size: 25px;
      color: rgba(49, 108, 248, 0.53);
      display: inline-block;
      position: relative;
      right: -59px;
    }
    .headerDiv h6{
      float: right;
      position: relative;
      left: -77px;
    }
    .middle p{
      text-align: center;
    }
    .middle{
      height: 40px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: "----------";
    }

    .footer button{
      padding:3px;
      padding-left:8px;
      padding-right:8px;

    }
    .footer{
      margin-left: auto;
      margin-right: auto;
      display: table;
    }

  </style>
</head>
<body>

<div class="container">
    <div class="row" style="margin-top: 10px">
      <c:forEach items="${requestScope.cardList}" var="cardlist">
        <div class="col-lg-3 col-sm-12 col-xs-3 col-md-3 partdiv" >
            <div class="outerDiv">
              <div class="headerDiv">
                <i class="${cardlist.titleLogo}"></i>
                <h6 >${cardlist.title}</h6>
              </div>
              <div class="middle">
                <p>"${cardlist.description}"</p>
              </div>
              <div class="footer">

                <div class="btn-group">
                <c:forEach var="x" items="${cardlist.clActionBean}" varStatus="j">

                  <c:choose>

                    <c:when test="${j.index ==0}">
                      <c:set var="btn" value="btn btn-default"/>
                    </c:when>
                      <c:otherwise>
                        <c:set var="btn" value="btn btn-primary"/>
                      </c:otherwise>

                  </c:choose>

                  <button class=" ${btn}" onclick="${x.action}">${x.label}</button>
                </c:forEach>
                </div>

              </div>
            </div>
        </div>
      </c:forEach>
    </div>

</div>
</body>
<%--
<script src="res/scripts/js/bootstrap.bundle.js"> </script>
<script src="res/scripts/js/bootstrap.bundle.min.js"> </script>
<script src="res/scripts/js/bootstrap.js"> </script>
<script src="res/scripts/js/bootstrap.min.js"> </script>
--%>






<script src="res/scripts/ajax.js"> </script>
<%--
<script src="res/scripts/MyScripts/Form.js"> </script>
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
<script src="res/scripts/CommonScripts.js"> </script>
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

<FocusTags:SOnLoadScript></FocusTags:SOnLoadScript>
--%>

</html>
