/**
 * Created by administrator on 5/16/2017.
 */

function viewAll(){
    alert("hi view");
    var request;
    var url="controller!viewAll.do";

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }

}

function searchAll(){
    var v1=document.getElementById("mail");

    alert("search");
    var request;
    var url="controller!search.do?mail="+v1.value;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }

}

function deleteAll(){
    var url="controller!deleteAll.do";
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }

}

function DialogaddrecorJspCall(){

    var arrActions,clDlg,sUrl;
    arrActions = new Array();
    arrActions[0] = "Ok|onClkOk";
    arrActions[1] = "Cancel";//|parent.clBatchMaster.onClkHideDlg";
    //sUrl = "";//url
    sUrl="adddialog";
    clDlg = new DialogBox("adddialog","Add Record",75,75,600,400,sUrl, true, null, true,false,arrActions);
    clDlg.setCenter();

    clDlg.show();


}



function add(){
    alert("hi");
    parent.getDialogBox("adddialog").hide();
    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("dob");
    var v4=document.getElementById("mobileNo");
    var v5=document.getElementById("deptNo");
    var v6=document.getElementById("deptname");
    var v7=document.getElementById("email");
    var v8=document.getElementById("pwd");

    var isValid=false;
    isValid=Validation.checkMandatory(v1,"First name",null,false);
    isValid=Validation.checkMandatory(v2,"Last name",null,false);
    isValid=Validation.checkMandatory(v3,"DOB",null,false);
    isValid=Validation.checkMobileNo(v4,"Mobile No",null,false);
    isValid=Validation.checkMandatory(v5,"Dept no",null,false);
    isValid=Validation.checkMandatory(v6,"Dept name",null,false);
    isValid=Validation.checkEMail(v7,"E- mail",null,false);
    isValid=Validation.checkMandatory(v8,"Password",null,true);


    if(isValid)
    var url="controller!add.do?employeeDetailsDTO.fname="+v1.value+"&employeeDetailsDTO.lname="+v2.value+"&employeeDetailsDTO.dob="+v3.value+"&employeeDetailsDTO.mobileNo="+v4.value+"&employeeDetailsDTO.deptNo="+v5.value+"&employeeDetailsDTO.deptname="+v6.value+"&employeeDetailsDTO.email="+v7.value+"&employeeDetailsDTO.pwd="+v8.value;
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText >= 1) {
                    viewAll();
                }/* else {
                    document.getElementById("data").innerHTML = this.responseText;
                }*/
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }

}

function editOperation(str1,str2,str3,str4,str5,str6,str7,str8){

    var arrActions,clDlg,sUrl;
    arrActions = new Array();
    arrActions[0] = "Ok|onClkOk";
    arrActions[1] = "Cancel";//|parent.clBatchMaster.onClkHideDlg";
    //sUrl = "";//url
    sUrl="editJspdialog?fname="+str1+"&lname="+str2+"&dob="+str3+"&mobileNo="+str4+"&deptNo="+str5+"&deptname="+str6+"&email="+str7+"&pwd="+str8;
    clDlg = new DialogBox("editallred","Edit",75,75,600,400,sUrl, true, null, true,false,arrActions);
    clDlg.setCenter();

    clDlg.show();


}

function deleteByEmailid(str){
    alert("deleteByEmail");
    var request;
    var url="controller!deleteAll.do?employeeDetailsDTO.email="+str;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

                if (this.responseText >=1) {
                    viewAll();
                } else
                    document.getElementById("data").innerHTML = this.responseText;

            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }



}




function update(){

    alert("Update");
    parent.getDialogBox("editallred").hide();
    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("dob");
    var v4=document.getElementById("mobileNo");
    var v5=document.getElementById("deptNo");
    var v6=document.getElementById("deptname");
    var v7=document.getElementById("email");
    var v8=document.getElementById("pwd");

    var request;
    var url="controller!update.do?employeeDetailsDTO.fname="+v1.value+"&employeeDetailsDTO.lname="+v2.value+"&employeeDetailsDTO.dob="+v3.value+"&employeeDetailsDTO.mobileNo="+v4.value+"&employeeDetailsDTO.deptNo="+v5.value+"&employeeDetailsDTO.deptname="+v6.value+"&employeeDetailsDTO.email="+v7.value+"&employeeDetailsDTO.pwd="+v8.value;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }

}







function getCalendar(){
    var arrActions,clDlg,sUrl;
    arrActions = new Array();
    arrActions[0] = "Ok|onClkOk";
    arrActions[1] = "Cancel";//|parent.clBatchMaster.onClkHideDlg";
    //sUrl = "";//url
    //sUrl="editJspdialog?fname="+str1+"&lname="+str2+"&dob="+str3+"&mobileNo="+str4+"&deptNo="+str5+"&deptname="+str6+"&email="+str7+"&pwd="+str8;
   sUrl="calendar_jsp";
    clDlg = new DialogBox("calendar","Calendar",75,75,600,400,sUrl, true, null, true,false,arrActions);
    clDlg.setCenter();

    clDlg.show();

}








function deleteRecord(){
    var alt=confirm("are u sure to delete all record");
    if(alt)
    var url="controller!deleteAllRecord.do";

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}






function registerDetails(){
    alert("hi");

    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("dob");
    var v4=document.getElementById("mobileNo");
    var v5=document.getElementById("deptNo");
    var v6=document.getElementById("deptname");
    var v7=document.getElementById("email");
    var v8=document.getElementById("pwd");
    var v9=document.getElementById("myFile");

    alert(v9.value);

    var request;
    var url="userImage?fname="+v1.value+"&lname="+v2.value+"&dob="+v3.value+"&mobileNo="+v4.value+"&deptNo="+v5.value+"&deptname="+v6.value+"&email="+v7.value+"&pwd="+v8.value+"&image="+v9.value;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }

}


function forgetPasswordMethodCall(){

    alert("hi");
    var arrActions,clDlg,sUrl;
    arrActions = new Array();
    arrActions[0] = "Ok|onClkOk";
    arrActions[1] = "Cancel";//|parent.clBatchMaster.onClkHideDlg";
    //sUrl = "";//url
    //sUrl="editJspdialog?fname="+str1+"&lname="+str2+"&dob="+str3+"&mobileNo="+str4+"&deptNo="+str5+"&deptname="+str6+"&email="+str7+"&pwd="+str8;
    sUrl="forgetPassword";
    clDlg = new DialogBox("ChangePassword","Change Password",75,75,600,400,sUrl, true, null, true,false,arrActions);
    clDlg.show();

    clDlg.setCenter();
}

function changePassword(){
    alert("hi===");
    parent.getDialogBox("ChangePassword").hide();
    var v1=document.getElementById("username").value;
    var v2=document.getElementById("oldpwd").value;
    var v3=document.getElementById("newpwd").value;
    var v4=document.getElementById("cnfpwd").value;


    alert("chk");
    var url="login!changePassword.do?username="+v1+"&oldpwd="+v2+"&newpwd="+v3;
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("POST", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }



}



function loginUser(){
    alert("login");
    var v1=document.getElementById("uname").value;
    var v2=document.getElementById("pwd").value;
    alert(v1);
    alert(v2);

    var url="login!loginUser.do?homeDTO.uname="+v1+"&homeDTO.pwd="+v2;
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("POST", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }

}

 function SignUp(){
     alert("hi");
     var arrActions,clDlg,sUrl;
     arrActions = new Array();
     arrActions[0] = "Ok|onClkOk";
     arrActions[1] = "Cancel";//|parent.clBatchMaster.onClkHideDlg";
     //sUrl = "";//url
     //sUrl="editJspdialog?fname="+str1+"&lname="+str2+"&dob="+str3+"&mobileNo="+str4+"&deptNo="+str5+"&deptname="+str6+"&email="+str7+"&pwd="+str8;
     sUrl="signUp";
     clDlg = new DialogBox("SinUp","SignUP",75 ,75,600,400,sUrl, true, null, true,false,arrActions);
     clDlg.setCenter();

     clDlg.show();
 }



function signUpForm(){
    alert("h1 signup");
    parent.getDialogBox("SinUp").hide();

    var v1=document.getElementById("uname");
    var v2=document.getElementById("pwd");
    var v3=document.getElementById("fname");
    var v4=document.getElementById("lname");

    var v5=document.getElementById("dob");
    var v6=document.getElementById("mobileNo");
    var v7=document.getElementById("job");
    var v8=document.getElementById("email");
    alert("hi");
    var url="login!signUPMethod.do?homeDTO.uname="+v1.value+"&homeDTO.pwd="+v2.value+"&homeDTO.fname="+v3.value+"&homeDTO.lname="+v4.value+"&homeDTO.dob="+v5.value+"&homeDTO.email="+v8.value+"&homeDTO.mobileNo="+v6.value+"&homeDTO.job="+v7.value;

    alert("hi sign up")

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }


}



function regiterOntab(){
    alert("h1");
    var v1=document.getElementById("fname").value;
    var v2=document.getElementById("lname").value;
    var v3=document.getElementById("dob").value;
    var v4=document.getElementById("mobileNo").value;
    var v5=document.getElementById("deptNo").value;
    var v6=document.getElementById("deptname").value;
    var v7=document.getElementById("email").value;
    var v8=document.getElementById("pwd1").value;
    var url="tab_byBoostrap!register.do?dao.fname="+v1+"&dao.lname="+v2+"&dao.dob="+v3+"&dao.mobileNo="+v4+"&dao.deptNo="+v5+"&dao.deptname="+v6+"&dao.email="+v7+"&dao.pwd1="+v8;
    var request;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}


function tabbePanne1(str1,str2){

    var v1=document.getElementById("userName");
    var v2=document.getElementById("userpwd");

    var isvalid=false;
    isvalid=Validation.checkMandatory(v1,"UserName",null,false);
    isvalid=Validation.checkMandatory(v2,"Password",null,true);

    if(isvalid)
    tabbedPane.selectTab(str1,str2);
}
function tabbePanne2(str1,str2){

    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("dob");
    var v4=document.getElementById("mobileNo");
    var v5=document.getElementById("mail");

    var isValid=false;
    isValid=Validation.checkMandatory(v1,"Fist name",null,false);
    isValid=Validation.checkMandatory(v2,"Last name",null,false);
    isValid=Validation.checkMandatory(v3,"DOB",null,false);
    isValid=Validation.checkMobileNo(v4,"Mobile No",null,false);
    isValid=Validation.checkEMail(v5,"E-mail",null,true);
    //alert((isValid));
    if(isValid)
    tabbedPane.selectTab(str1,str2);

}
function tabbePanne3(str1,str2){

    var v1=document.getElementById("hqlfy");
    var v2=document.getElementById("yearOfpass");
    var v3=document.getElementById("clg");
    var v4=document.getElementById("percentage");
    var v5=document.getElementById("uniname");


    var isValid=false;
    isValid=Validation.checkMandatory(v1,"Qualification ",null,false);
    isValid=Validation.checkMandatory(v2,"year of pass",null,false);
    isValid=Validation.checkMandatory(v3,"College name",null,false);
    isValid=Validation.checkMandatory(v4,"percentage",null,false);
    isValid=Validation.checkMandatory(v5,"Univercity name",null,true);
    if(isValid)
    tabbedPane.selectTab(str1,str2);
}

function tabbePanne4(str1,str2){
    var v1=document.getElementById("father");
    var v2=document.getElementById("mother");
    var v3=document.getElementById("homePhoneNo");
    var v4=document.getElementById("village");
    var v5=document.getElementById("dist");
    var v6=document.getElementById("pinCode");

    var isValid=false;
    isValid=Validation.checkMandatory(v1,"Father name",null,false);
    isValid=Validation.checkMandatory(v2,"mother name",null,false);
    isValid=Validation.checkMobileNo(v3,"Mobile no",null,false);
    isValid=Validation.checkMandatory(v4,"Village",null,false);
    isValid=Validation.checkMandatory(v5,"dist",null,false);
    isValid=Validation.checkMandatory(v6,"Pin code",null,true);
    if(isValid)
    tabbedPane.selectTab(str1,str2);

}

function tabbePanne5(str1,str2){
    var v1=document.getElementById("stateName");
    var v2=document.getElementById("countryName");
    var v3=document.getElementById("lang");

    var isValid=false;
    isValid=Validation.checkMandatory(v1,"State name",null,false);
    isValid=Validation.checkMandatory(v2,"Country name",null,false);
    isValid=Validation.checkMandatory(v3,"language",null,false);
    if(isValid)
    tabbedPane.selectTab(str1,str2);
}

function tabbePanne7(){

    var v1=document.getElementById("userName");
    var v2=document.getElementById("userpwd");
    var v3=document.getElementById("fname");
    var v4=document.getElementById("lname");
    var v5=document.getElementById("dob");
    var v6=document.getElementById("mobileNo");
    var v7=document.getElementById("mail");
    var v8=document.getElementById("hqlfy");
    var v9=document.getElementById("yearOfpass");
    var v10=document.getElementById("clg");
    var v11=document.getElementById("percentage");
    var v12=document.getElementById("uniname");
    var v13=document.getElementById("father");
    var v14=document.getElementById("mother");
    var v15=document.getElementById("homePhoneNo");
    var v16=document.getElementById("village");
    var v17=document.getElementById("dist");
    var v18=document.getElementById("pinCode");
    var v19=document.getElementById("stateName");
    var v20=document.getElementById("countryName");
    var v21=document.getElementById("lang");
    var request;
    var v22=document.getElementById("image")
/*

    var filePath = $('#file').val();
    $("#image").attr('src',filePath);
    alert(filePath);
*/


    alert(v22.value);
    var url="tabbepanneWithComplete!registerINFO.do?infoDTO.userName="+v1.value+"&infoDTO.userpwd="+v2.value+"&infoDTO.fname="+v3.value+"&infoDTO.lname="+v4.value+"&infoDTO.dob="+v5.value+"&infoDTO.mobileNo="+v6.value+'&infoDTO.mail='+v7.value+"&infoDTO.hqlfy="+v8.value+"&infoDTO.yearOfpass="+v9.value+
        "&infoDTO.clg="+v10.value+"&infoDTO.percentage="+v11.value+"&infoDTO.uniname="+v12.value+"&infoDTO.father="+v13.value+"&infoDTO.mother="+v14.value+"&infoDTO.homePhoneNo="+v15.value+"&infoDTO.village="+v16.value+"&infoDTO.dist="+v17.value+"&infoDTO.pinCode="+v18.value+"&infoDTO.stateName="+v19.value+"&infoDTO.countryName="+v20.value+"&infoDTO.lang="+v21.value+"&infoDTO.image="+v22.value;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}




function tabbePanne6(str1,str2){
    tabbedPane.selectTab(str1,str2);
}

function tabbePanne8(){

    alert("h1");
var v1=document.getElementById("name").value;
    alert(v1);
    var request;
    var url="tabbepanneWithComplete!getINFOByName.do?name="+v1;


    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}



function viewAppTabbePanneDetails(){
    var url="tabbepanneWithComplete!viewAll.do";
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }

}

function taskPanne1(str1){
    var v1=document.getElementById("userName");
    var v2=document.getElementById("userpwd");

    alert(str1)
    var isValid=false;
    isValid=Validation.checkMandatory(v1,"user name",null,false);
    isValid=Validation.checkMandatory(v2,"User Password",null,true);
    if(isValid)
    clTaskPane.showTaskPane(true,str1);
}
 function taskPanne2(str1){
     var v1=document.getElementById("fname");
     var v2=document.getElementById("lname");
     var v3=document.getElementById("mobileNo");
     var v4=document.getElementById("mail");
     var v5=document.getElementById("gen");
     var v6=document.getElementById("dob");
     alert(str1);
     var isValid=false;
     isValid=Validation.checkMandatory(v1,"First name",null,false);
     isValid=Validation.checkMandatory(v2,"Last name",null,false);
     isValid=Validation.checkMobileNo(v3,"Mobile No",null,false);
     isValid=Validation.checkEMail(v4,"E-mail",null,false);
     isValid=Validation.checkMandatory(v5,"Gendar" ,null,false);
     isValid=Validation.checkMandatory(v6,"DOB",null,true);

     if(isValid)
     clTaskPane.showTaskPane(true,str1);
 }

function taskPanne3(str1){
    var v1=document.getElementById("hqlfy");
    var v2=document.getElementById("yearOfPass");
    var v3=document.getElementById("percentage");
    var v4=document.getElementById("clg");
    var v5=document.getElementById("uniname");

    var isValid=false;
    isValid=Validation.checkMandatory(v1,"Qualification",null,false);
    isValid=Validation.checkMandatory(v2,"Year of pass",null,false);
    isValid=Validation.checkMandatory(v3,"percentage",null,false);
    isValid=Validation.checkMandatory(v4,"College",null,false);
    isValid=Validation.checkMandatory(v5,"Univercity",null,false);
    if(isValid)
    clTaskPane.showTaskPane(true,str1);
}

function taskPanne4(str1){
    var v1=document.getElementById("father");
    var v2=document.getElementById("mother");
    var v3=document.getElementById("homeMobileNO");
    var v4=document.getElementById("village");
    var v5=document.getElementById("dist");
    var v6=document.getElementById("pinCode");

    var isValid=false;
    isValid=Validation.checkMandatory(v1,"father name",null,false);
    isValid=Validation.checkMandatory(v2,"mother",null,false);
    isValid=Validation.checkMobileNo(v3,"Mobile No",null,false);
    isValid=Validation.checkMandatory(v4,"Village",null,false);
    isValid=Validation.checkMandatory(v5,"College",null,false);
    isValid=Validation.checkMandatory(v6,"Dist name",null,true);

    if(isValid)
    clTaskPane.showTaskPane(true,str1);

}

function taskPanne5(){
    var v1=document.getElementById("userName");
    var v2=document.getElementById("userpwd");
    var v3=document.getElementById("fname");
    var v4=document.getElementById("lname");
    var v5=document.getElementById("mobileNo");
    var v6=document.getElementById("mail");
    var v7=document.getElementById("gen");
    var v8=document.getElementById("dob");
    var v9=document.getElementById("hqlfy");
    var v10=document.getElementById("yearOfPass");
    var v11=document.getElementById("percentage");
    var v12=document.getElementById("clg");
    var v13=document.getElementById("uniname");
    var v14=document.getElementById("father");
    var v15=document.getElementById("mother");
    var v16=document.getElementById("homeMobileNO");
    var v17=document.getElementById("village");
    var v18=document.getElementById("dist");
    var v19=document.getElementById("pinCode");

    alert(v18.value);
    var v20=document.getElementById("stateName");
    var v21=document.getElementById("countryName");
    var v22=document.getElementById("lang");


    var isValid=false;

    isValid=Validation.checkMandatory(v1,"userName",null,false);
    isValid=Validation.checkMandatory(v2,"userpwd",null,false);
    isValid=Validation.checkMandatory(v3,"fname",null,false);
    isValid=Validation.checkMandatory(v4,"lname",null,false);
    isValid=Validation.checkMobileNo(v5,"mobileNo",null,false);
    isValid=Validation.checkEMail(v6,"mail",null,false);
    isValid=Validation.checkMandatory(v7,"gen",null,false);
    isValid=Validation.checkMandatory(v8,"dob",null,false);
    isValid=Validation.checkMandatory(v9,"hqlfy",null,false)
    isValid=Validation.checkMandatory(v10,"yearOfPass",null,false);
    isValid=Validation.checkMandatory(v11,"percentage",null,false);
    isValid=Validation.checkMandatory(v12,"clg",null,false);
    isValid=Validation.checkMandatory(v13,"uniname",null,false);
    isValid=Validation.checkMandatory(v14,"father",null,false);
    isValid=Validation.checkMandatory(v15,"mother",null,false);
    isValid=Validation.checkMobileNo(v16,"Home Mobile No",null,false);
    isValid=Validation.checkMandatory(v17,"Village",null,false);
    isValid=Validation.checkMandatory(v18,"Dist",null,false);
    isValid=Validation.checkMandatory(v19,"Pin Code ",null,false);

    isValid=Validation.checkMandatory(v19,"State name",null,false);
    isValid=Validation.checkMandatory(v20,"Country name",null,false);
    isValid=Validation.checkMandatory(v21,"language",null,true);

    if(isValid)
    var url="taskpanneCompleteInfo!registerUser.do?infoDTO.userName="+v1.value+"&infoDTO.userpwd="+v2.value+"&infoDTO.fname="+v3.value+
        "&infoDTO.lname="+v4.value+"&infoDTO.mobileNo="+v5.value+"&infoDTO.mail="+v6.value+"&infoDTO.gen="+v7.value+"&infoDTO.dob="+v8.value+"&infoDTO.hqlfy="+v9.value+"" +
        "&infoDTO.yearOfPass="+v10.value+"&infoDTO.percentage="+v11.value+"&infoDTO.clg="+v12.value+"&infoDTO.uniname="+v13.value+"&infoDTO.father="+v14.value+"&infoDTO.mother="+v15.value+"" +
        "&infoDTO.homeMobileNO="+v16.value+"&infoDTO.village="+v17.value+"&infoDTO.dist="+v18.value+"&infoDTO.pinCode="+v19.value+"&infoDTO.stateName="+v20.value+"&infoDTO.countryName="+v21.value+"&infoDTO.lang="+v22.value;

    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}

function ViewAllTaskPanne(){


    var request;
    var url="taskpanneCompleteInfo!ViewAllTaskPanne.do"
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}

function addRow(str1) {
    var v1 = prompt("enter how many rows do u want to add ");

    alert(v1);
    for (var i = 1; i <= v1; i++) {

    var clTable = new sTable(str1);
    clTable.addRow();
  }
}

function deleterow(str){

 var v1= confirm("do u want to delete!");

    var iRow,clTable;
    if(v1)
    clTable = new sTable(str);
    //iRow = str.parentNode.parentNode.rowIndex-1;
    clTable.deleteRow(clTable.getCurrentRow(),true,false);
}


function employeeINFO(){

    alert("h1");
    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("mail");
    var v4=document.getElementById("pwd");
    var v5=document.getElementById("dob");
    var v6=document.getElementById("mobileNo");
    var v7=document.getElementById("gen");
    var v8val=document.getElementsByName("statm");
    var v8;
    for(var i=0;i<v8val.length;i++){
        if(v8val[i].checked){
         v8=v8val[i].value ;
        }
    }

    alert(v8);



    var v9=document.getElementById("pinCode");
    var v10=document.getElementById("stat");
    var v11=document.getElementById("country");
    var v12=document.getElementById("company");
    var v13=document.getElementById("deptname");

    var isValid=false;
    isValid=Validation.checkMandatory(v1,"First name",null,false);
    isValid=Validation.checkMandatory(v2,"last name",null,false);
    isValid=Validation.checkEMail(v3,"E-mail",null,false);
    isValid=Validation.checkMandatory(v4,"password",null,false);
    isValid=Validation.checkMandatory(v5,"DOB",null,false);
    isValid=Validation.checkMobileNo(v6,"Mobile No",null,false);
    isValid=Validation.checkMandatory(v7,"gendar",null,false);
    isValid=Validation.checkMandatory(v9,"PIN code",null,false);
    isValid=Validation.checkMandatory(v10,"State" ,null,false);
    isValid=Validation.checkMandatory(v11,"Country",null,false);
    isValid=Validation.checkMandatory(v12,"Company name",null,false);
    isValid=Validation.checkMandatory(v13,"Department name",null,true);
    alert(v7.value);




    var request;
    if(isValid)
var url="employeeINFO?fname="+v1.value+"&lname="+v2.value+"&mail="+v3.value+"&pwd="+v4.value+"&dob="+v5.value+"&mobileNo="+v6.value+"&gen="+v7.value+"" +
    "&statm="+v8+"&pinCode="+v9.value+"&stat="+v10.value+"&country="+v11.value+"&company="+v12.value+"&deptname="+v13.value;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }



}


function useFocusConnectjs(){


    var v1=document.getElementById("uname");
    var v2=document.getElementById("pass");

    //var url="focusConnectUrl";

    //var sUrl = con.getStruts2Url("common", "locTracker.do", "saveLinkAccountToTagInfo");
    var sSubmitData = "uname=" + v1.value + "&pass=" + v2.value;// + "&index=" + iIndex + "&sTagName=" + sCBItem;
    con.sendPostRequest("focusConnectUrl!getData.do", sSubmitData,null,"funcHandle");



    //con.sendPostRequest("focusConnectUrl!getHomePage.do?menuId="+iMenuId,null,null,me.arhHomeRes,null,0,null,false,false,ACTION_LOADING);
//con.sendPostRequest("focusConnectUrl?uname="+v1.value+"&pass="+v2.value,null,null,me.arhHomeRes,null,0,null,false,false,ACTION_LOADING);


}

function funcHandle(response){
    alert(response)
}


function registermapJsp(){
        var v1=document.getElementById("fname");
        var v2=document.getElementById("lname");
        var v3=document.getElementById("deptname");
        var v4=document.getElementById("deptno");
        var v5=document.getElementById("jobtype");
    alert(v1.value)
    var url="registerWithmap!registerWithMap.do?registerWithMapDTO.fname="+v1.value+"&registerWithMapDTO.lname="+v2.value+"" +
        "&registerWithMapDTO.deptname="+v3.value+"&registerWithMapDTO.deptno="+v4.value+"&registerWithMapDTO.jobtype="+v5.value;
    var request;

  //  var url="registerWithmap?fname="+v1.value+"&lname="+v2.value+"&deptname="+v3.value+"&deptno="+v4.value+"&jobtype="+v5.value
    alert(url);
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}


function loginExecandWait(){
    alert("hi")
    var v1=document.getElementById("uname").value;
    var v2=document.getElementById("pwd").value;
    var request;
    var url="loginbyexecandwait!login.do?uname="+v1+"&pwd="+v2;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }


}





function tabbePane1(str1,str2){

    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("mobileNo");
    var v4=document.getElementById("phoneNo");
    var v5=document.getElementById("mail");
    var v6=document.getElementById("gen");
    var v7=document.getElementById("dob");


    var isValid=false;
    isValid=Validation.checkMandatory(v1,"First name",null,false);
    isValid=Validation.checkMandatory(v2,"Last name",null,false);
    isValid=Validation.checkMobileNo(v3,"Mobile",null,false);
    isValid=Validation.checkPhoneNo(v4,"Phone ",null,false);
    isValid=Validation.checkEMail(v5,"Email",null,false);
    isValid=Validation.checkMandatory(v6,"Gendar",null,false);
    isValid=Validation.checkMandatory(v7,"DOB",null,true);

alert(isValid);
    if(isValid)
    tabbedPane.selectTab(str1,str2);

}

function tabbePane2(str1,str2){





    var v1=document.getElementById("qlfy");
    var v2=document.getElementById("yearOfPass");
    var v3=document.getElementById("percent");
    var v4=document.getElementById("college");
    var v5=document.getElementById("grade");

   var isValid1=false;

    isValid1=Validation.checkMandatory(document.getElementById("fname"),"First name",null,false);
    isValid1=Validation.checkMandatory(document.getElementById("lname"),"Last name",null,false);
    isValid1=Validation.checkMobileNo(document.getElementById("mobileNo"),"Mobile",null,false);
    isValid1=Validation.checkPhoneNo(document.getElementById("phoneNo"),"Phone ",null,false);
    isValid1=Validation.checkEMail(document.getElementById("mail"),"Email",null,false);
    isValid1=Validation.checkMandatory(document.getElementById("gen"),"Gendar",null,false);
    isValid1=Validation.checkMandatory(document.getElementById("dob"),"DOB",null,true);

    if(isValid1!=true)
    tabbedPane.selectTab("Redistration",0);

    var isValid=false;
    isValid=Validation.checkMandatory(v1,"Qualification",null,false);
    isValid=Validation.checkMandatory(v2,"Year of Pass",null,false);
    isValid=Validation.checkMandatory(v3,"Percentage",null,false);
    isValid=Validation.checkMandatory(v4,"College",null,false);
    isValid=Validation.checkMandatory(v5,"grade",null,true);

    if(isValid && isValid1)
    tabbedPane.selectTab(str1,str2);
}
function tabbePane4(str1,str2){
    tabbedPane.selectTab(str1,str2);
}



function tabbePane3(){


    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("mobileNo");
    var v4=document.getElementById("phoneNo");
    var v5=document.getElementById("mail");
    var v6=document.getElementById("gen");
    var v7=document.getElementById("dob");

    var v8=document.getElementById("qlfy");
    var v9=document.getElementById("yearOfPass");
    var v10=document.getElementById("percent");
    var v11=document.getElementById("college");
    var v12=document.getElementById("grade");

    var v13=document.getElementById("statename");
    var v14=document.getElementById("countryname");
    var v15=document.getElementById("pinCode");


    var isValid1=false;

    isValid1=Validation.checkMandatory(document.getElementById("fname"),"First name",null,false);
    isValid1=Validation.checkMandatory(document.getElementById("lname"),"Last name",null,false);
    isValid1=Validation.checkMobileNo(document.getElementById("mobileNo"),"Mobile",null,false);
    isValid1=Validation.checkPhoneNo(document.getElementById("phoneNo"),"Phone ",null,false);
    isValid1=Validation.checkEMail(document.getElementById("mail"),"Email",null,false);
    isValid1=Validation.checkMandatory(document.getElementById("gen"),"Gendar",null,false);
    isValid1=Validation.checkMandatory(document.getElementById("dob"),"DOB",null,true);
    if(isValid1!=true)
    tabbedPane.selectTab("Redistration",0);
        var isValid2=false;

    isValid2=Validation.checkMandatory(document.getElementById("qlfy"),"Qualification",null,false);
    isValid2=Validation.checkMandatory(document.getElementById("yearOfPass"),"Year of Pass",null,false);
    isValid2=Validation.checkMandatory(document.getElementById("percent"),"Percentage",null,false);
    isValid2=Validation.checkMandatory(document.getElementById("college"),"College",null,false);
    isValid2=Validation.checkMandatory(document.getElementById("grade"),"grade",null,true);


    if(isValid2!=true)
    tabbedPane.selectTab("Redistration",1);
    var isValid3=false;

    isValid3=Validation.checkMandatory(v13,"State name",null,false);
        isValid3=Validation.checkMandatory(v14,"Country name",null,false);
        isValid3=Validation.checkMandatory(v15,"Pin code",null,true);

    if(isValid1&&isValid2&&isValid3){
    alert("hi");
        var url="tabbeDisability!register.do?featureDTO.fname="+v1.value+"&featureDTO.lname="+v2.value+"&featureDTO.mobileNo="+v3.value+"" +
            "&featureDTO.phoneNo="+v4.value+"&featureDTO.mail="+v5.value+"&featureDTO.dob="+v6.value+"&featureDTO.gen="+v7.value+"&featureDTO.qlfy="+v8.value+"" +
            "&featureDTO.yearOfPass="+v9.value+"&featureDTO.percent="+v10.value+"&featureDTO.college="+v11.value+"&featureDTO.grade="+v12.value+"" +
            "&featureDTO.stateName="+v13.value+"&featureDTO.countryname="+v14.value+"&featureDTO.pinCode="+v15.value;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }

        try {
            request.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("data").innerHTML = this.responseText;
                }
            };
            request.open("GET", url, true);
            request.send();
        }
        catch (e) {
            alert("Unable to connect to server");
        }
    }



}


function addRowInTable(str1){
    var v1 = prompt("enter how many rows do u want to add ");

    alert(v1);
    for (var i = 1; i <= v1; i++) {


        clTable.addRow();
    }
}

function deleteRowInTable(str){

    var v1= confirm("do u want to delete!");

    var iRow,clTable;
    if(v1)
        clTable = new sTable(str);
    //iRow = str.parentNode.parentNode.rowIndex-1;
    clTable.deleteRow(clTable.getCurrentRow(),true,false);
}

function propertyMethod(){
    alert("hi");
    var v1=document.getElementById("fname");
    var v2=document.getElementById("pwd");
    var v3=document.getElementById("mail");
    var v4=document.getElementById("dob");
    var v5=document.getElementById("marriedStatus");
    var v6=document.getElementById("mobileNo");
    var v7=document.getElementById("phoneNo");
    var v8=document.getElementById("gen");




   /* isValid=Validation.checkMandatory(v1,"Forst name",null,false);
    isValid=Validation.checkMandatory(v2,"Password",null,false);
    isValid=Validation.checkEMail(v3,"E-mail",null,false);
    isValid=Validation.checkMandatory(v4,"DOB",null,false);
    isValid=Validation.checkMandatory(v5,"Marital status",null,false);
    isValid=Validation.checkMobileNo(v6,"Mobile No",null,false);
    isValid=Validation.checkPhoneNo(v7,"Phone NO",null,false);
    isValid=Validation.checkMandatory(v8,"Gendar",null,true);
*/
    var request;

    var url="propertyExample!register.do?fname="+v1.value+"&pwd="+v2.value+"&mail="+v3.value+"&dob="+v4.value+"&marriedStatus="+v5.value+"&mobileNo="+v6.value+"&phoneNo="+v7.value+"&gen="+ v8.value
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}

function strutsvalidateMethod(){
    alert("hi")
    var v1=document.getElementById("uname").value;
    var v2=document.getElementById("pwd").value;
    var request;
    var url="Strutsvalidate.do?uname="+v1+"&pwd="+v2;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}

function logonByAnnotation(){

    var v1=document.getElementById("uname").value;
    var v2=document.getElementById("pwd").value;

    var request;
    var url="loginByAnnotation.do?uname="+v1+"&pwd="+v2;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}