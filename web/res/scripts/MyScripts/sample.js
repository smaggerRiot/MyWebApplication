var Clclick=new function(){
  this.clLike=function(x)
  {

      if(x.style.color==="black") {

          //x.setAttribute("class", "fa fa-thumbs-down");
          x.style.color="red";

      }
      else {
          //x.setAttribute("class", "fa fa-thumbs-up");
          x.style.color="black";
      }

  };

    this.clComment=function(obj)
    {

        var pobj = obj.parentElement;

            pobj.innerHTML = pobj.innerHTML + "<div style='border:1px solid gainsboro'><input type='text' class='form-control comment' placeholder='write comments'><button class='btn btn-primary '>Add comment</button></div>";

    }
    this.openChat=function() {
        var x = true;
        if (x) {

            document.getElementById("chat-side").style.width = "250px";
/*
            document.getElementsByTagName("div").style.backgroundColor = "rgba(0,0,0,0.4)";
*/
            x = false;
        }
            else{
            alert();
            document.getElementById("chat-side").style.width = "0px";
/*
            document.getElementsByTagName("div").style.backgroundColor = "rgba(0,0,0,0.4)";
*/
            }

    };
   this.searchChatList=function(obj)
   {
       var searchVal=obj.value.toUpperCase();
       var chatList=document.getElementById("chat-side").getElementsByTagName("a");
       for(var i=0;i<chatList.length;i++)
       {

          a=chatList[i];

           textVal= a.textContent|| a.innerText;
           if(textVal.toUpperCase().indexOf(searchVal)>-1)
           {
              chatList[i].style.display="block";
           }else
           {
               chatList[i].style.display="none";
           }
       }
   }
    /*this.dropOnSerach=function(obj)
    {
        alert(obj.value)
        obj.innerHTML=obj.innerHTML+"<div class='dropdown'><a href='#' data-toggle='dropdown'> <ul class='dropdown-menu'> <li><a href='#'>Start Chat</a></li> <li><a href='#'>voice chat</a></li> <li><a href='#'>Video call</a></li> </ul> </div>"
    }*/
    angular.module('myApp', []).controller('listCtl', function($scope) {
        $scope.names=[
            'Mayur',
            'ranjan',
            'Tapas',
            'ranjith',
            'Massom Ali',
            'Saleem',
            'Jani',
            'Carl',
            'Margareth'



        ]






    });
};