<%--
  Created by IntelliJ IDEA.
  User: Dipak
  Date: 12/27/2018
  Time: 12:27 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Search Places</title>
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
<style>
  .logoDiv{
    width: 112px;
    height: 85px;
    float: left;
  }
  .logoDiv img{
    width:100%;
    height:100%
  }
  .inputDiv{
    float:right;
    width:50%
  }
  .map{
    height:100%
  }


</style>
</head>
<body>
<div class="container">
  <div class="row">
            <div class="navbar">
                      <div class="searchInp">
                          <div class="logoDiv">
                              <img src="data:image/jpeg;base64,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">
                          </div>
                        <div class="inputDiv">
                              <form class="form-inline">
                                <div class="form-group">
                                    <input type="text" class="form-control"></div>
                                <div class="form-group"> <button class="btn btn-primary"><i class="fa fa-search" style="font-size:24px"></i> Search</button></div>
                              </form>
                        </div>
                      </div>

            </div>
  </div>
  <div class="row">
              <div class="map" id="map"></div>
  </div>
  <div class="row">


                <Label for="pininfo">Pincode</Label>
              <input type="text" class="form-control" id="pininfo">
              <Label for="state">State</Label>
              <input type="text" class="form-control" id="state">
              <Label for="city">city</Label>
              <input type="text" class="form-control" id="city">
              <Label for="lat">Latitude</Label>
              <input type="text" class="form-control" id="lat">
              <Label for="long">Longitude</Label>
              <input type="text" class="form-control" id="long">
              <button class="btn btn-success">Confirm</button>

  </div>
</div>
</body>

<script src=res/scripts/MyScripts/searchLoc.js></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUQMDCCZWeEfdJ6_svkfsF_es0N51ZF0Q&callback=clMap.onclkMaps"
        async defer></script>
</html>
