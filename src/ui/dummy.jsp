<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 1/9/2019
  Time: 12:22 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title></title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</head>
<body>
<button onclick="myfunction() ">click</button>
<div  id="outerDiv" style="width:50%; height:50%;border:1px solid black;margin: auto 10px auto 10px;border-radius:5px;-webkit-box-shadow: 5px 5px 5px  gray;display:none">
  <div id="intro" style="overflow: auto;width:100%;height:85%;padding:5px;position:relative;margin: auto"></div>
  <div style="bottom:2px position: relative;"><button type="submit" class="btn btn-danger" style="position: relative;bottom: 2px;left:2px">Submit</button></div>

</div>
</body>
<script>
  function myfunction(){

    alert("called");
    var outerdv=document.getElementById("outerDiv")
    outerdv.style.display="block";
    if(outerdv.style.display=="block") {
      var divEl = document.createElement("div");
      divEl.setAttribute("id", "innerDiv");
      divEl.style.position = "relative";
      divEl.style.height = "50%";
      divEl.style.width = "100%";

      divEl.style.textAlign = "center";
      var divImg = document.createElement("img");
      divImg.setAttribute("src", "res/global/images/admin-icon.png");
      var element = document.getElementById("intro");
      divImg.style.borderRadius = "130px";
      divImg.style.border = "1px solid blue";
      divImg.style.height = "100px";
      divImg.style.margin = "10px"
      divImg.style.width = "100px";
      divEl.appendChild(divImg);
      element.appendChild(divEl);
      var plus = document.createElement("i");
      plus.setAttribute("class", "fa fa-plus");
      plus.setAttribute("onClick", "addTab()");
      plus.style.position = "relative";
      plus.style.fontsize = "22px";
      plus.style.color = "blue";
      plus.style.left = "29px";
      plus.style.bottom = "-35px";

      divEl.appendChild(plus);
      var para = document.createElement("div");
      para.style.backgroundColor = "gray"
      para.style.padding = "10px"
      para.style.margin = "5px"
      addTab();

    }
  }
  function addTab()
  {
    var para=document.createElement("div");
    para.style.backgroundColor="gray"
    para.style.padding="10px"
    para.style.margin="5px"

    var userdiv=document.createElement("input");
    userdiv.style.margin="5px";
    var userLabel=document.createElement("LABEL");
    userLabel.setAttribute("for","uname")
    var labelUserText=document.createTextNode("name");

    userLabel.appendChild(labelUserText);
    userdiv.setAttribute("id","uname");


    userdiv.setAttribute("type","text");
    userdiv.setAttribute("placeHolder","name");

    var passdiv=document.createElement("input");
    passdiv.style.margin="5px";

    var passLabel=document.createElement("LABEL");
    passLabel.setAttribute("for","pass")
    var labelpassText=document.createTextNode("userID");
    passLabel.appendChild(labelpassText);
    passdiv.setAttribute("id","pass");

    passdiv.setAttribute("type","text");
    passdiv.setAttribute("placeHolder","userId");


    para.append(userdiv);
    para.append(passdiv);


    para.insertBefore(userLabel,userdiv);
    para.insertBefore(passLabel,passdiv);
    var targetDiv=document.getElementById("intro");
    targetDiv.appendChild(para);
  }
</script>

</html>
