<%@ taglib prefix="margin-left" uri="/struts-tags" %>
<%@ taglib prefix="https" uri="/struts-tags" %>
<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 12-12-2018
  Time: 12:10
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="res/scripts/scripts/myscript/search.js"></script>
<script src="res/scripts\scripts\ajax.js"></script>
<script src="res/scripts/scripts/connect.js"></script>
<script src="res/scripts/scripts/app.js"></script>
<script src="res/scripts/scripts/constants.js"></script>
<script src="res/scripts/scripts/utilities.js"></script>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<style>
    .viewdiv
    {
        position: absolute;
    }
</style>

<!------ Include the above in your HEAD tag ---------->

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">

<div style="float: right;padding-top: 20px;margin-right: 30px;">
    <span><a href="#">Gmail</a></span>
    <span style="margin-left: 20px;"><a href="#">Images</a></span>
</div>

<div class="container" style="padding-top: 50px;padding-left: 290px">
  <br/>

  <div class="row justify-content-center">
    <div class="col-12 col-md-10 col-lg-8">
      <%--<form class="">--%>
        <div class="card-body row no-gutters align-items-center">
          <div class="col-au">

          </div>
          <!--end of col-->
          <div class="col">
           <div align="center"> <img src="https://logos.textgiraffe.com/logos/logo-name/12673628-designstyle-basket-m.png" height="200px;;;;" width="350"></div>
              <div class="inputdiv">
                  <input class="form-control form-control-lg form-control-borderless" type="search"  onkeyup="CLSearch.searchContent(this)" >
                  <div id="viewdiv">

                  </div>
              </div>

           <div style="padding-top: 20px;margin-left: 200px;" ><span> <button class="btn btn-lg btn-secondary"   style="background-color:#92BEBB" >Ranjan Search</button></span>

             <span> <button class="btn btn-lg btn-secondary" type="submit" style="background-color:#92BEBB">I'm feeling lucky</button></span>
           </div>

          </div>
          <!--end of col-->
          <div class="col-auto" style="padding-top: 130px;">

          </div>
          <!--end of col-->
        </div>
      <%--</form>--%>
    </div>
    <!--end of col-->
  </div>

</div>
<div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content" >
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Data</h4>
            </div>
            <div class="modal-body" id="v">
                <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
        </div>

    </div>
</div>

