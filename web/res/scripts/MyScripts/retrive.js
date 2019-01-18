/**
 * Created by Dipak on 12/4/2018.
 */
var clkRetrive= new function(){
    this.onclkREtrive=function(){
        var lData="";
       lData="name.sName="+document.getElementById("name");
        lData="&name.sUserName="+document.getElementById("regUserName");
        lData="&name.sEmailId="+document.getElementById("emailId");
        lData="&name.sPassword="+document.getElementById("regPassword");
        lData="&name.sGender="+document.getElementById("sGender");
        lData="&name.sCity="+document.getElementById("city");
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "form.do?="+lData, true);
        xmlhttp.send();
    }

}