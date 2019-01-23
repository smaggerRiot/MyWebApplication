/**
 * Created by Dipak on 1/21/2019.
 */
var clkRequest=new function()
{
    this.onClkSendRequest=function(option)
    {

            alert();
  /*      var surl="reqSend!reqSend.do?option="+option;
        callAJAX.sendRequestAJAX("GET",surl,"view")*/
/*
        con.sendGetRequest("reqSend.do?option="+option,null,null,"clkRequest.onDisplay");
*/
        con.sendGetRequest("xyz!reqSend.do?option="+option,null,null,"clkRequest.onDisplay");
    }
    this.onDisplay =function(res)
    {
        document.getElementById("view").innerHTML=res;
    }
}