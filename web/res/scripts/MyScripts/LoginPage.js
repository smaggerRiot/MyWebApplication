/**
 * Created by Dipak on 12/3/2018.
 */

var clLoginPage = new function(){

    this.onClkLogin = function(){

        var isValid = true;

        isValid = Validation.checkMandatory(document.getElementById("username"),"Username",0,false);
        isValid = Validation.checkMandatory(document.getElementById("password"),"Password",0,true);
        if(isValid){
            document.getElementById("frmLogin").submit();
        }


    };

};
var cLRegistration=new function() {

    this.onClkRegister = function () {
        var objMain="";
        var isRight = false;
        var gRadio=document.getElementsByName("sGender");

        var objName = document.getElementById("sName");
        var objUname = document.getElementById("sUserName");
        var objEmail = document.getElementById("sEmailId");
        var objPwd = document.getElementById("sPassword");
        var objCPwd = document.getElementById("CofPassword");
        var objCity = document.getElementById("sCity");

        Validation.checkMandatory(objName, "name", 0, true);
        Validation.checkMandatory(objUname,"username", 0, true);
        Validation.checkEMail(objEmail, "email", false);
        Validation.checkMandatory(objPwd, "password", 0, false);
        Validation.checkMandatory(objCPwd, "conform password", 0,false);
        Validation.checkMandatory(objCity, "City", 0,false);


        if((util.trim(objName.value.length) > 0) && (util.trim(objUname.value.length) > 0) && (util.trim(objEmail.value.length) > 0)
        && (util.trim(objPwd.value.length) > 0) && (util.trim(objCPwd.value.length) > 0)){
            isRight = true;
        }

        var cbCity = getComboInstance("sCity").getSelectedItem();

        alert(cbCity)

        var val = "";
        if(isRight){
            for(var i=0;i<gRadio.length;i++)
            {
                if(gRadio[i].checked)
                {
                    isRight =true;
                    val = gRadio[i].value;
                    break;
                }
                else {
                    isRight = false;
                }
            }
        }
        if(isRight && this.checkPassword()){
            var formData="";
            formData +="regData.sName="+objName.value;
            formData +="&regData.sUserName="+objUname.value;
            formData +="&regData.sEmailId="+objEmail.value;
            formData +="&regData.sPassword="+objPwd.value;
            formData +="&regData.sGender="+val;
            formData +="&regData.sCity="+cbCity;
            alert(formData);
            var xhttp = new XMLHttpRequest();
            if (this.readyState == 4 && this.status == 200) {
                xhttp.onreadystatechange = function() {
                    document.getElementById("view").innerHTML =
                        this.responseText;
                }
            };
            xhttp.open("get","form!register.do?"+formData,true);
            xhttp.send(formData);
            document.getElementById("regForm").submit();


        }


    };
    this.checkPassword = function(){
        var chkPassword=document.getElementById("sPassword").value;
        var confChkPass=document.getElementById("CofPassword").value;
        if(chkPassword != confChkPass){
            Validation.showMessage("password doesn't match",0,null,0,true,"error");
            return false;
        }
        else{
            return true;
        }

    };

};
