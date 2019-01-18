<%--
  Created by IntelliJ IDEA.
  User: admin
  Date: 14-12-2018
  Time: 11:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<style>
.model{
  border: 1px solid;
  height: 500px;
  margin-top: 10px;;
  box-shadow: 5px 5px 5px green;
}
  .model1
  {
  /*  border: 1px solid;*/
    margin: 10px;
    height: 470px;
    padding: 5px;
  }
  .header
  {
   /* border: 1px solid green;*/
    height: 10px;
  }
.content
{
 /* border: 1px solid red;*/
  height: 325px;
  margin-top: 10px;
}
.footer
{
  /*order: 1px solid green;*/
  height: 50px;
  margin-top: 10px;
}
  .card1
  {
    border:1px solid;
    height: 200px;;
    width: 100%;
  }

</style>
<head>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <script src="res/scripts/scripts/myscript/like.js"></script>
  <script src="res/scripts\scripts\ajax.js"></script>
    <title></title>
</head>
<body>
<div style="background-color: #006f7c;padding-bottom: 50px">
  <div class="col-sm-1">
    <img src="https://s.ndtvimg.com/images/entities/300/india-6.png" height="50px" width="60px">
  </div>
  <div class="col-sm-10">
    <div style="padding-top: 10px">
      <input type="search" class="form-control" placeholder="Search......................" style="width: 100%">
    </div>

  </div>
</div>
<div class="mdiv">
<div class="col-sm-4">
    <div class="card1" style="margin-top: 10px">

    </div>
  <div class="card1" style="margin-top: 10px">

  </div>

</div>
<div class="col-sm-4">
  <div class="model">

     <div class="model1">

       <div class="header">
           <h4 style="color: #006f7c;font-family: cursive">World Population Data</h4>
       </div>
       <hr>

       <div class="content">

               <div class="col-sm-12" style="margin-bottom: 20px">
                 <div >
                   <table border="2">
                     <thead>
                     <tr>
                       <th>Year</th>
                       <th>Percentage</th>
                       <th>Country</th>
                       <th>Average</th>
                       <th>Signal</th>
                     </tr>
                     </thead>
                     <tbody>
                     <tr>
                       <td>2017</td>
                       <td>64%</td>
                       <td>India</td>
                       <td>56.23%</td>
                     </tr>
                     <tr>
                       <td>2016</td>
                       <td>45%</td>
                       <td>Brazil</td>
                       <td>56.23%</td>
                     </tr>
                     <tr>
                       <td>2015</td>
                       <td>23%</td>
                       <td>US</td>
                       <td>56.23%</td>
                     </tr>
                     <tr>
                       <td>2014</td>
                       <td>50%</td>
                       <td>Uk</td>
                       <td>56.23%</td>
                     </tr>
                     <tr>
                       <td>2013</td>
                       <td>53%</td>
                       <td>S africa</td>
                       <td>36.45%</td>
                     </tr>
                     <tr>
                       <td>2012</td>
                       <td>5%</td>
                       <td>China</td>
                       <td>28.23%</td>
                     </tr>
                     </tbody>
                   </table>
                 </div>

               </div>
         <div class="col-sm-12">
           <img src="https://www.excel-easy.com/examples/images/column-chart/column-chart.png" style="width: 100%">
         </div>



       </div>
       <hr>
       <div class="footer">
         <button type="button" class="btn btn-primary">Submit Data</button>
       </div>
     </div>
  </div>

</div>
<div class="col-sm-4">
  <div class="card1" style="margin-top: 10px">

  </div>
  <div class="card1" style="margin-top: 10px">

  </div>
</div>
</div>
   </body>
</html>
