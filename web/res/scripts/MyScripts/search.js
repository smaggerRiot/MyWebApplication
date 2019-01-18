/**
 * Created by Dipak on 12/12/2018.
 */
var CLSerach=new function(){
  this.onClkSearch=function(obj){

      var search = obj.value;
      if(search.length>0)
      {
          callAJAX.sendRequestAJAX("GET","search!searchDetail.do?name="+search,"responsearea");

      }else{

         document.getElementById("responsearea").innerHTML="";

      }

     /* var search = "name="+obj.value;
      var xhttp = new XMLHttpRequest();
      if (this.readyState == 4 && this.status == 200) {
          xhttp.onreadystatechange = function() {
              alert(this.responseText)
              document.getElementById("sugg").innerHTML = this.responseText;
          }
      };
      xhttp.open("GET","search!searchDetail.do?"+search,true);
      xhttp.send();
 */ };
};