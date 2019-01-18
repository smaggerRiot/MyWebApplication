var clGoogleVerification = new function(){
  this.checkNumber = function(){
    var val = document.getElementById("iVerificationCode").value;
    if(isNaN(val)){
       document.getElementById("iVerificationCode").value="";
    }
  }
};


