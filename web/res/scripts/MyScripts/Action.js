/**
 * Created by Dipak on 12/6/2018.
 */
/**
 * Created by Dipak on 12/6/2018.
 */
/*var flag="true";*/
var clklike=new function(){
    this.onlike=function(x){
        var cl1=x.className;

        var value='';
        if(x.getAttribute("class")=="fa fa-thumbs-up") {
            document.getElementById("model").style.display="block";
            x.setAttribute("class", "fa fa-thumbs-down");
            value = true;
        }
        else {
            x.setAttribute("class", "fa fa-thumbs-up");
            value = false;
        }


        /*callAJAX.sendRequestAJAX("GET","like!like.do?Status="+value);*/
        con.sendGetRequest("like!like.do",value)
    };

};