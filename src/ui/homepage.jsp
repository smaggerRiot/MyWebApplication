<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 12/14/2018
  Time: 10:12 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>

<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.5.0/css/all.css' integrity='sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU' crossorigin='anonymous'>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<head>
    <script src="res/scripts/MyScripts/sample.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="res/scripts/MyScripts/LoginPage.js"> </script>
    <script src="res/scripts/myTabblePanne.js"> </script>
    <script src=res/scripts/bootstrap-min.js"></script>
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
    <script type="text/javascript">
        function preventBack() { window.history.forward(); }
        setTimeout("preventBack()", 0);
        window.onunload = function () { null };
    </script>

    <title>HomePage</title>
          <style>


                .header{

                  height: 68px;
              }
              .middle{

                  height: 50%;
                  padding: 0px;
                  width: 100%;
              }

              .fotter{

                  height: 60px;
                  padding:5px;
                  display:inline-table;
                  width: 100%;



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






              .topnav
                 {
                    height: 7%;
                    box-shadow: -3px 2px 8px gray;
                    background-color: rgb(59,89,152);
                  }
                .icon
                {

                  padding: 6px;
                  color:white;
                  top:2px
                }
                .search{

                  border-radius: 3px;

                  top:2px;
                }
              .search input {
                width: 40%;
                border-radius: 14px;
                padding-left:8px;

              }


              .icon-bar a:hover{
                  color: rgba(84, 84, 84, 0.77);

                }
              .icon-bar
              {
                font-size:20px;
                top:2px;
                float:right;

              }
            .icon-bar a{
              width:100%;
              color:white;
              padding-left:5px;
            }
             .dropdown {
                 float:left;
                 color:white;
                 top:10px;

             } /*.coverpic
              {
                  height: 350px;
                  padding: 0px 5px 5px 5px;
                  background-color: whitesmoke;
                  border: 1px solid darkgray;


              }
              .coverpic .cover{
                  width:100%;
                  height:100% !important;
                  border:1px solid lightgray;
              }
              .barbtn button{
                  width: 129px;
                  display: inline-table;
              }*/
                .img-card{
                    position:relative;
                    overflow: hidden;
                    text-align: center;
                }
                .img-card .bk-img{
                    height:300px;
                    margin-top: 31px;
                }
                .bk-img img{
                    height: 100%;
                    width: 100%;
                }
                .img-card .pro-img{
                    position:absolute;
                    top: 252px;
                    left: 32px;
                }
                .pro-img img{
                    width: 100px;
                    height: 100px;
                    max-width: 100px;
                    max-height: 100px;
                    -webkit-border-radius: 50%;
                    -moz-border-radius: 50%;
                    border-radius: 50%;
                    border: 5px solid rgba(255, 255, 255, 0.5);
                }
                .img-card .pro-name{
                    position:absolute;
                    overflow: hidden;
                    font-size: 12px;
                    line-height: 20px;
                    color: #737373;
                    text-overflow: ellipsis;
                    bottom: 66px;
                    left: 145px;
                }
                .pro-name .card-title{
                    font-size: 20px;
                    line-height: 1;
                    color: white;
                }


              .textbtn button{
                  width:25%
              }
              .about{
                  padding:5px;
              }
              .row .card{
                  padding: 5px;
                  height:auto;
              }
              .txt{
                  padding:5px;
              }
              .btn-bar{
                  width: 80%;
                  left: 90px;
              }
              .btn-bar button{
                  width:20%
              }
              .chat-side {
                  height: 100%;
                  width: 0;
                  position: fixed;
                  z-index: 1;
                  top: 6px;
                  right: 0;
                  background-color:white;
                  overflow-x: hidden;
                  transition: 0.5s;
                  padding-top: 60px;
                  border:1px solid darkslategray;
              }
              .chat-side a{
                  padding: 8px 8px 8px 8px;
                  text-decoration: none;
                  font-size: 15px;
                  color: #818181;
                  display: block;
                  transition: 0.3s;
              }
              .chat-side input{
                  bottom:0px;
                  position:fixed;
                  margin-left:auto;
                  margin-right:auto;
              }
              .dropdown:hover{
                  cursor: pointer;;
                  color:black;


              }

                .upload-pic{
                    position: absolute;
                    top: 57px;
                    left: 6px;
                    height: 34px;
                    background-color: #0b010180;
                    color: white;
                    border-bottom-right-radius: 50px;
                    border-bottom-left-radius: 50px;
                    width: 87px;
                    display:none;

                }
                .pro-img img:hover+ .upload-pic{
                    display:block;

                }
                .modal{
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);

                }



              /*    .chat{
                      float:right;
                      position:fixed;
                  }
    */
          </style>
    </head>
    <body>
    <div class="main">
     <div class="container-fluid">
      <div class="row  navbar-fixed-top topnav">
        <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6 search">
            <div class="group">
            <i class='fab fa-facebook-f icon'></i>
            <input type="search" class="search">
            </div>
        </div>

        <div class="col-sm-5 col-xs-5 col-md-4 col-lg-4">
          <div class="icon-bar">
          <a href="front.do"><i class="fa fa-home "></i></a>
          <a href="#"><i class="fa fa-envelope"></i></a>
          <a href="#"><i class="fa fa-globe"></i></a>


          </div>

        </div>
          <div class="col-sm-1 col-xs-1 col-md-2 col-lg-2">
              <div class="dropdown">
                  <span  data-toggle="dropdown" style="font-size: 60px;" class="caret" ></span>
                  <ul class="dropdown-menu">
                      <li><a href="#"><i class="fa fa-bell"></i> Notifications</a></li>
                      <li><a href="#"><i class="fa fa-shield"></i> Privacy Control</a></li>
                      <li><a href="#"><i class="fa fa-wrench"></i> setting</a></li>
                      <li><a href="#"><i class="fa fa-warning"></i> blocking</a></li>
                      <li><a href="login!logout.do"><i class="fa fa-close"></i> Log-out</a></li>
                      <li><a href="#"><i class="fa fa-info"></i> help</a></li>


                  </ul>
              </div>
              <span class="glyphicon glyphicon-comment" style="font-size:20px;color:white;float:right;left:-20px "onclick="Clclick.openChat(this)"></span>
          </div>
      </div>
      <div class="row imgGrid">
        <div class="col-xs-0 col-sm-0 col-md-1 col-lg-1" ></div>
         <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8" style="border:1px solid lightgray;border-radius: 10px;padding: 20px">

             <div class="img-card">
           <div class="bk-img"><img src="res/global/images/css/cover pic.jpg" class="cover"></div>
             <div class="pro-img"><img src="res/global/images/css/i3.jpg" class="img-responsive propic">
                 <div class="upload-pic" data-toggle="modal" data-target="#pro-pic-modal">Upload pic</div>
                 <div class="modal fade" id="pro-pic-modal" role="dialog">
                     <div class="modal-dialog">
                         <div class="modal-content">
                             <div class="modal-header">
                                 <button type="button" class="close close-icon"  data-dismiss="modal">&times;</button>
                                 <p class="modal-title">change profile pic</p>
                             </div>
                             <div class="modal-body">

                             </div>
                             <div class="modal-footer">
                                 <button type="button" class="btn btn-default">save</button>

                                 <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>

                 <div class="pro-name"><span class="card-title">Mayur Laishetti</span></div>
             <div class="btn-group btn-bar">
                    <button type="button" class="btn btn-default" >Timeline</button>
                    <button type="button" class="btn btn-default">About</button>

                    <button type="button" class="btn btn-default">Friends</button>
                    <button type="button" class="btn btn-default">Photos</button>
                    <button type="button" class="btn btn-default">More</button>
                </div>



         </div>

      <div class="col-xs-0 col-sm-0 col-md-3 col-lg-3"></div>
  </div>
    </div>
        </div>
<div class="container-fluid">

    <div class="row navbar">
        <div class="main">
        <div class="col-xs-0 col-sm-0 col-md-1 col-lg-1"></div>
        <div class="col-xs-0 col-sm-0 col-md-3 col-lg-3">
        <div class="about" style="border: 1px solid darkgray;padding: 5px;">
            <div class="brand" style="background-color: lightgray;"> <strong>About</strong></div>
            <li><a href="#"><i class='fas fa-map-marker-alt' style='font-size:15px'> Lives at</i></a> Charminar,Hyderabad.</li>
            <li><a href="#"><i class='fas fa-suitcase' style='font-size:15px'> Working at </i></a> Focus Softnet.</li>
            <li><a href="#"><i class='fas fa-graduation-cap' style='font-size:15px'> Studied at</i></a> JBIT</li>


        </div>
        </div>

        <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
           <div class="txt">
            <div class="btn-group textbtn" style=" width:100%">
                <button type="button" class="btn btn-default"><i class='far fa-edit' style='font-size:20px'></i><div class="hidden-xs"> Status</div></button>
                <button type="button" class="btn btn-default"><i class="fa fa-file-photo-o" style="font-size:20px"></i><div class="hidden-xs"> photos</div></button>
                <button type="button" class="btn btn-default"><i class='far fa-map' style='font-size:20px'></i><div class="hidden-xs"> place</div></button>
                <button type="button" class="btn btn-default"><i class="fa fa-birthday-cake" style="font-size:20px"></i><div class="hidden-xs"> events</div></button>
            </div>
            <textarea class="form-control" rows="3" placeholder="What's on your mind?.."></textarea>
           </div>
            <div class="row card">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid gray">
            <div class="card">
                <div class="header" >
                    <img class="proImg" src="res/global/images/css/propic.jpg"><span class="name">Mayur Laishetti</span>
                    <i class="fas fa-anchor" style="position: absolute;margin-top: 35px;margin-left: 7px;font-size: 11px;"></i><span class="loc">Charminar,Hyderabad</span>

                </div>
                <div class="middle">
                    <img class="proImgmid" src="res/global/images/css/propic.jpg">

                </div>
                <div class="fotter">
                    <i class='fa fa-thumbs-up'  style='font-size:24px;margin-left: 19px;' onclick="Clclick.clLike(this)"></i>

                    <i class='far fa-comment' style='font-size:24px;margin-left: 10px;' onclick="Clclick.clComment(this)"></i>
                    <a class='far fa-arrow-alt-circle-down' style='font-size:24px;float:right' href="res/global/images/css/propic.jpg" download="pro-pic"></a>
                </div>

            </div>
                </div>
                </div>
                            <div class="row card">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid gray">
                            <div class="card">
                                <div class="header" >
                                    <img class="proImg" src="res/global/images/css/propic.jpg"><span class="name">Mayur Laishetti</span>
                                    <i class="fas fa-anchor" style="position: absolute;margin-top: 35px;margin-left: 7px;font-size: 11px;"></i><span class="loc">Charminar,Hyderabad</span>

                                </div>
                                <div class="middle">
                                    <img class="proImgmid" src="res/global/images/css/i1.jpg">

                                </div>
                                <div class="fotter">
                                    <i class='fa fa-thumbs-up'  style='font-size:24px;margin-left: 19px;' onclick="Clclick.clLike(this)"></i>
                                    <i class='far fa-comment' style='font-size:24px;margin-left: 10px;' onclick="Clclick.clComment(this)"></i>
                                    <a class='far fa-arrow-alt-circle-down' style='font-size:24px;float:right' href="res/global/images/css/i1.jpg" download="pro-pic"></a>
                                   <div id="com"></div>
                                </div>
                                </div>
                                    </div>

                            </div>
                            <div class="row card">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid darkslategray">
                            <div class="card">
                                <div class="header" >
                                    <img class="proImg" src="res/global/images/css/propic.jpg"><span class="name">Mayur Laishetti</span>
                                    <i class="fas fa-anchor" style="position: absolute;margin-top: 35px;margin-left: 7px;font-size: 11px;"></i><span class="loc">Charminar,Hyderabad</span>

                                </div>
                                <div class="middle">
                                    <img class="proImgmid" src="res/global/images/css/i2.jpg">

                                </div>
                                <div class="fotter">
                                    <i class='fa fa-thumbs-up'  style='font-size:24px;margin-left: 19px;' onclick="Clclick.clLike(this)"></i>
                                    <i class='far fa-comment' style='font-size:24px;margin-left: 10px;' onclick="Clclick.clComment(this)"></i>
                                    <a class='far fa-arrow-alt-circle-down' style='font-size:24px;float:right' href="res/global/images/css/i2.jpg" download="pro-pic"></a>
                                </div>
                                </div>
                                    </div>

                            </div>
                            <div class="row card">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid darkslategray;">
                            <div class="card">
                                <div class="header" >
                                    <img class="proImg" src="res/global/images/css/propic.jpg"><span class="name">Mayur Laishetti</span>
                                    <i class="fas fa-anchor" style="position: absolute;margin-top: 35px;margin-left: 7px;font-size: 11px;"></i><span class="loc">Charminar,Hyderabad</span>

                                </div>
                                <div class="middle">
                                    <img class="proImgmid" src="res/global/images/css/i3.jpg">

                                </div>
                                <div class="fotter">
                                    <i class='fa fa-thumbs-up'  style='font-size:24px;margin-left: 19px;' onclick="Clclick.clLike(this)"></i>
                                    <i class='far fa-comment' style='font-size:24px;margin-left: 10px;' onclick="Clclick.clComment(this)"></i>
                                    <a class='far fa-arrow-alt-circle-down' style='font-size:24px;float:right' href="res/global/images/css/i3.jpg" download="pro-pic"></a>
                                </div>
                                </div>
                                    </div>

                            </div>
                            <div class="row card"  >
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid darkslategray;">
                            <div class="card">
                                <div class="header" >
                                    <img class="proImg" src="res/global/images/css/propic.jpg"><span class="name">Mayur Laishetti</span>
                                    <i class="fas fa-anchor" style="position: absolute;margin-top: 35px;margin-left: 7px;font-size: 11px;"></i><span class="loc">Charminar,Hyderabad</span>

                                </div>
                                <div class="middle">
                                    <img class="proImgmid" src="res/global/images/css/i4.jpg">

                                </div>
                                <div class="fotter">
                                    <i class='fa fa-thumbs-up'  style='font-size:24px;margin-left: 19px;' onclick="Clclick.clLike(this)"></i>
                                    <i class='far fa-comment' style='font-size:24px;margin-left: 10px;' onclick="Clclick.clComment(this)"></i>
                                    <a class='far fa-arrow-alt-circle-down' style='font-size:24px;float:right' href="res/global/images/css/i4.jpg" download="pro-pic"></a>
                                </div>
                                </div>
                                    </div>

                            </div>
                            <div class="row card">
                                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="border: 1px solid darkslategray">
                                                        <div class="card">
                                                            <div class="header" >
                                                                <img class="proImg" src="res/global/images/css/propic.jpg"><span class="name">Mayur Laishetti</span>
                                                                <i class="fas fa-anchor" style="position: absolute;margin-top: 35px;margin-left: 7px;font-size: 11px;"></i><span class="loc">Charminar,Hyderabad</span>

                                                            </div>
                                                            <div class="middle">
                                                                <img class="proImgmid" src="res/global/images/css/propic.jpg">

                                                            </div>
                                                            <div class="fotter">
                                                                <i class='fa fa-thumbs-up'  style='font-size:24px;margin-left: 19px;' onclick="Clclick.clLike(this)"></i>
                                                                <i class='far fa-comment' style='font-size:24px;margin-left: 10px;' onclick="Clclick.clComment(this)"></i>
                                                                <a class='far fa-arrow-alt-circle-down' style='font-size:24px;float:right' href="res/global/images/css/propic.jpg" download="pro-pic"></a>
                                                                <%--<input type="text" class="form-control comment" id="comment">--%>

                                                            </div>

                                                        </div>
                                            </div>
                                        </div>
        </div>
        </div>
                         <div class="col-xs-0 col-sm-0 col-md-3 col-lg-3">
                                    <div ng-app="myApp" ng-controller="listCtl"  id="chat-side" class="chat-side">
                                        <a ng-repeat="x in names | filter:test" <%--onclick="Clclick.dropOnSerach(this)"--%>><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp; {{x}}</a>
                                                <%-- <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;sameer</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;shoeb</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;smaggerriot</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;pubgavenger</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;pubglover</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;shadrach</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;sallem</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;sagar</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;sheshu</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;salman</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;sharukh</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;sonu</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;pubgavenger</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;pubglover</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;shadrach</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;sallem</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;sagar</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;sheshu</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;salman</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;sharukh</a>
                                                 <a href="#"><i class="fa fa-circle" style="color:green"></i>&nbsp;&nbsp;sonu</a>--%>

                                       <%-- </ul>--%>



                                                    <div id="input-group" class="inputSearch">

                                                        <input type="text" name="search" ng-model="test"  id="search"  placeholder="search for names..." class="form-control" onkeyup="Clclick.searchChatList(this)">
                                                    </div>
                                    </div>
                          </div>

        </div>
    </div>



</div>
</body>

