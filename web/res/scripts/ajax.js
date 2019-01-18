/**
 * Created by samresh on 27-02-2018.
 */
var callAJAX = new function() {
    this.sendRequestAJAX=function(mode,url,responseArea) {
        var request;
        var ret=false;
        if(window.XMLHttpRequest){
            request=new XMLHttpRequest();
        }
        else if(window.ActiveXObject){
            request=new ActiveXObject("Microsoft.XMLHTTP");
        }
        var val;
        try{
            request.onreadystatechange=function(){
                if(request.readyState==4){
                    val=request.responseText;
                    document.getElementById(responseArea).innerHTML=val;

                }
            }//end of function
            request.open(mode,url,false);
            request.send();
           // alert(val);
            /*if(val != undefined)
                ret=true;*/

            //return ret;
        }catch(e){
            alert("Unable to connect to server");
            //return ret;
        }
    }
    };
