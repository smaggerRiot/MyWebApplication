var clGoogleAuth = new function(){

    this.onClkGoogleIdentificationCode=function(){
        var isValid=true;
        isValid=Validation.checkMandatory(document.getElementById("sname"),"Name",null,true);

        return isValid;
    }

    this.onClkGoogleVerificationCode=function(){
        var isValid=true;
            isValid=Validation.checkMandatory(document.getElementById("iVerificationCode"),"Verification Code",null,true);
        return isValid;
    }

    this.onCLkGoogleConfirmation=function(){
        var isValid=true;
        isValid=Validation.checkMandatory(document.getElementById("sPassword"),"Current Password",null,true);
        return isValid;
    }

    this.onClkSaveImport = function() {
        var iVerificationCode,sPassword;
        if (this.onCLkGoogleConfirmation()) {
            iVerificationCode   = document.getElementById("iVerificationCode").value;
             sPassword = document.getElementById("sPassword").value;
            alert(iVerificationCode + " " + sPassword);
        }

    }
};
