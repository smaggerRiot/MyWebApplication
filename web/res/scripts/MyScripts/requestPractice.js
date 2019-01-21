/**
 * Created by Dipak on 1/21/2019.
 */
var clkRequest=new function()
{
    this.onClkSendRequest=function(option)
    {

            alert();
        var surl="reqSend.do?option="+option;
        callAJAX.sendRequestAJAX("GET",surl,"view")
    }
}