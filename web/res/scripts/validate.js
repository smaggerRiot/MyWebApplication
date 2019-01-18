/**
 * Created by samresh on 13-04-2017.
 */

function valid1(){
    alert("hi");
    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("pno");
    var v4=document.getElementById("mail");
    var v5=document.getElementById("pwd");
    var v6=document.getElementById("clg");

    var request;
    var v9=document.getElementById("country");
    var v10="";
    var v11=document.getElementById("cal");
    var v12=document.getElementById("branch");


    var hh=document.getElementsByName("hobbies");
    for(var i=0;i<hh.length;i++) {
        if (hh[i].checked) {
            v10 = v10 + hh[i].value;
        }
    }


    //v3=validation.checkPhoneNo()


    var v7;
    var arrGender = document.getElementsByName("gen");
    for (var i = 0; i < arrGender.length; i++) {
        if (arrGender[i].checked) {
            v7 = arrGender[i].value;
        }
    }
    var v8;
    var arrQualfy=document.getElementsByName("qlfy");
    for(var i=0;i<arrQualfy.length;i++){
        if(arrQualfy[i].checked){
            v8=arrQualfy[i].value;
        }
    }



    Validation.checkMandatory(v1,"First Name",null,true);
    Validation.checkMandatory(v2,"Second Name",null,true);
    Validation.checkMobileNo(v3,"Mobile No ",null,true);
    Validation.checkEMail(v4,"Email ",null,true);
    Validation.checkMandatory(v5,"Password",null,true);
    Validation.checkMandatory(v6,"College Name",null,true);
   // Validation.checkMandatory(v7,"Qualification is required..",null,true);
   // V//alidation.checkMandatory(v8,"Branch ",null,true);
    Validation.checkMandatory(v9,"Country..",null,true);
  //  Validation.checkMandatory(v10,"Hobbies",null,true);
    Validation.checkDate(v11,"Date ",null,true);




    var url="hell?fname="+v1.value+"&lname="+v2.value+"&pno="+v3.value+"&mail="+v4.value+"&pwd="+v5.value+"&clg="+v6.value+"&gen="+v7+"&qlfy="+v8+"&country="+v9.value+"&hobbies="+v10+"&cal="+v11.value+"&branch="+v12.value;
    alert(v1);
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





/*
* This method is used for email validtaion used by boostTrap
* and this method is belong to other class (Login.java )
*
* */


function emailValidate(){
    alert("hi");

    var v1=document.getElementById("email");
    var v2=document.getElementById("pwd");
    var v3=document.getElementById("table");
  // alert(v1);
  //  alert(v2)
    var request;
    var isvalid=false;

    Validation.checkEMail(v1,"Email",null,false);
    Validation.checkMandatory(v2,"Password",null,false);
    isvalid=Validation.checkMandatory(v3,"select ",null,true);


    if(isvalid)
    var url="login?email="+v1.value+"&pwd="+v2.value+"&table="+v3.value;

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


function userDetails(){


    var v1=document.getElementById("ename").value;
    var v2=document.getElementById("empno").value;
    var v3=document.getElementById("deptNo").value;
    var v4=document.getElementById("sal").value;
    var v5=document.getElementById("email").value;
    var v6=document.getElementById("pwd").value;
    var v7=document.getElementById("cname").value;
    var v8=document.getElementById("wLocation").value;
    var v9=document.getElementById("state").value;
    var  v10=document.getElementById("pinCode").value;
    var v11=document.getElementById("country").value;

  /*  Validation.checkMandatory(v1,"Name",null,true);
    Validation.checkMandatory(v2,"Empno",null,true);
    Validation.checkMandatory(v3,"Dept no",null,true);
    Validation.checkMandatory(v4,"salary",null,true);
    Validation.checkMandatory(v5,"email",null,true);
    Validation.checkMandatory(v6,"password",null,true);
    Validation.checkMandatory(v7,"company name",null,true);
    Validation.checkMandatory(v8,"Work location",null,true);
    Validation.checkMandatory(v9,"state",null,true);
    Validation.checkMandatory(v10,"pincode",null,true);
    Validation.checkMandatory(v11,"country",null,true);

*/

    alert(v1);
    alert(v2);

    var request ;
    var url="userDetails?ename="+v1+"&empno="+v2+"&deptNo="+v3+"&sal="+v4+"&email="+v5+"&pwd="+v6+"&cname="+v7+"&wLocation="+v8+"&state="+v9+"&pinCode="+v10+"&country="+v11;

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


function validationbyFocus(){

    alert("h1");
    var v1=document.getElementById("email");
    var v2=document.getElementById("pwd");
    var request ;


    Validation.checkEMail(v1,"Email",null,true);
    Validation.checkMandatory(v2,"Password ",null,true);



    var url="loginByfocus?email="+v1.value+"&pwd="+v2.value;

    alert(v1)
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








function insert(){
    alert("hi");
    var v1=document.getElementById("sno").value;
    var v2=document.getElementById("sname").value;
    var v3=document.getElementById("sadd").value;

    var request;
/*

    Validation.checkMandatory(v1,"Student Number",null,true);
    Validation.checkMandatory(v2,"Student Name",null,true);
    Validation.checkMandatory(v3,"Student Address",null,true);

*/



   /* var url="insert?sno="+v1.value+"&sname="+v2.value+"&sadd="+v3.value;
*/
    var url="insert?sno="+v1+"&sname="+v2+"&sadd="+v3;
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

function reg(){
    alert("reg");


    var v1=document.getElementById("email").value;
    var v2=document.getElementById("pwd").value;
    var v3=document.getElementById("mno").value;
    var request;


    /*Validation.checkEMail(v1,"mail",null,true);
    Validation.checkMandatory(v2,"Password",null,true);
    Validation.checkMobileNo(v3,"Mobile No",null,true);
*/

    if(v2==null||v2==""||v2.length<0){
        alert("invalid plz try again..");
        return false;
    }
    if(v3==null||v2==""||v3.length<0){
        alert("invalid plz try again..");
        return false;
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v1)==false){
        alert("Email is not valid... try again.....");
        return false;
    }

  Validation.checkMobileNo(v3,"Mobile no ",null,true);




    var url="bootstraoE?email="+v1+"&pwd="+v2+"&mno="+v3;
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

function getINFO(){
    alert("getINFO");
    var v1=document.getElementById("empno").value;
    var v2=document.getElementById("tb").value;
    var request;

    var url="getINFO?empno="+v1+"&tb="+v2;

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


function applyfresher(){
    alert("applyfresher");
    var v1=document.getElementById("fname").value;
    var v2=document.getElementById("lname").value;
    var v3=document.getElementById("mn").value;
    var v4=document.getElementById("mail").value;
    var v5=document.getElementById("dob").value;
    //var v6=document.getElementById("resume").value;

    var url="fresher?fname="+v1+"&lname="+v2+"&mn="+v3+"&mail="+v4+"&dob="+v5;//+"&resume="+v6;
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

function appllyExperience(){


   alert("appllyExperience");
    var v1=document.getElementById("Efname").value;
    var v2=document.getElementById("Elname").value;
    var v3=document.getElementById("Emn").value;
    var v4=document.getElementById("Email").value;
    var v5=document.getElementById("Edob").value;
    var v6=document.getElementById("noE").value;
    var v7=document.getElementById("cname").value;
    var v8=document.getElementById("eon").value;
    //var v9=document.getElementById("Eresume").value;
    var request;
    alert("hiex");
    var url="eperience?Efname="+v1+"&Elname="+v2+"&Emn="+v3+"&Email="+v4+"&Edob="+v5+"&noE="+v6+"&cname="+v7+"&eon="+v8;/*//+"&Eresume="+v9;*/

    alert(v1);
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




function loginBYEF(){
    alert("loginBYEF");
    var v1=document.getElementById("lmail").value;
    var v2=document.getElementById("no").value;
    var v3=document.getElementById("typeoflogin").value;
    var request;
    var url="FElogin?lmail="+v1+"&no="+v2+"&typeoflogin="+v3;

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






function allINFO(){
    alert("h1");
    var v1=document.getElementById("all").value;
    var url="getAll?all="+v1;
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

function delRecord(){

    var v1=document.getElementById("delrec").value;
    var v2=document.getElementById("del").value
    var request;
    var url="delete?delrec="+v1+"&del="+v2;
    alert(v1);
    alert(v2);
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

function editTable(){
    var  v1=document.getElementById("edt").value;
    var v2=document.getElementById("edttab").value;
    var request;
    var url="edit?edt="+v1+"&edttab="+v2;
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

function validateStudentINFO(){

    alert("hi");

    var v1=document.getElementById("sno").value;
    var v2=document.getElementById("sname").value;
    var v3=document.getElementById("scollege").value;
    var v4=document.getElementById("sadd").value;
    var v5=document.getElementById("smobileNo").value;

  /*  Validation.checkMandatory(v1,"Student no",null,true);
    Validation.checkMandatory(v2,"Student Name",null,true);
    Validation.checkMandatory(v3,"Student College ",null,true);
    Validation.checkMandatory(v4,"Student address",null,true);
    Validation.checkMobileNo(v5,"Mobile no ",null,true);
*/


    if(v1==""|| v1==null){
        alert("its required....");
        return false;
    }
    if(v2=="" ||v2==null){
        alert("its required...");
        return false;


    }
    if(v3==""|| v3==null){
        alert("its required...");

        return false;
    }


    if(v4==""||v4==null){
        alert("its required..");
        return false;

    }
    if(v5==""||v5==null){
        alert("its required..");
        return false;
    }




 var request;
    var url="studentinfo?sno="+v1+"&sname="+v2+"&scollege="+v3+"&sadd="+v4+"&smobileNo="+v5;


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



function jqueryValidation(){

    $(function(){
        $("#hi").validate({
            rules:{
                empNo:"required",
                empName:"required",
                dob:"required",
                email:{
                    required:true,
                    email:true
                },
                pwd: {
                    required:true,
                    minlength:6
                },
                pNumber:{
                    required:true,
                    minlength:13,
                  //  maxLength:13

               },
                dept:"required",
                wrkon:"required",
                agree:"required"
            },

            messages:{
                empNo:"Please Enter Employee number",
                empName:"Please Enter epmloyee name",
                dob:"Please enter date od birth..",
                email:{
                    required:"Please enter valid email address",
                    agree:"Please accept our policy "
                },
                pwd: {
                    required:"Please provide password",
                    minlength:"password should maximum 6 digits"
                },
                pNumber:{
                    required:"Please enter mobile number",
                    minlength:"Please nomber should be 13 digits ",
                   // maxLength:"number should be 13 only"
                },
                dept:"Pealse enter Department..",
                wrkon:"Please enter Woring Domain",

            },
            submitHandler: function(form) {
                form.submit();
            }


        });

    });
    var v1=document.getElementById("empNo").value;
    var v2=document.getElementById("empName").value;
    var v3=document.getElementById("dob").value;
    var v4=document.getElementById("email").value;
    var v5=document.getElementById("pwd").value;
    var v6=document.getElementById("pNumber").value;
    var v7=document.getElementById("dept").value;
    var v8=document.getElementById("wrkon").value;
    var request;
    alert(v6);
    var url="employeeform?empNo="+v1+"&empName="+v2+"&dob="+v3+"&email="+v4+"&pwd="+v5+"&pNumber="+v6+"&dept="+v7+"&wrkon="+v8;


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
function focustagsvalidationForm(){

        var v1=document.getElementById("empNo");
        var v2=document.getElementById("empName");
        var v3=document.getElementById("departName");
        var v4=document.getElementById("deptNo");
        var v5=document.getElementById("email");
        var v6=document.getElementById("dob");
        var v7=document.getElementById("comName");
        var v8=document.getElementById("salary");
        var v9=document.getElementById("gender");
        var v10=document.getElementById("marital");
        var v11=document.getElementById("mobileNo");
        var v12=document.getElementById("state");
        var v13=document.getElementById("country");
        var v14=document.getElementById("pinCode");
        var v15=document.getElementById("images");

  /*  var v9;
       var v9arr =document.getElementsByName("gender");
        for(var i=0;i<v9arr.length;i++){
            if(v9arr[i].checked){
            v9=v9arr[i].value;
            }
        }

    var v10;
    var v10arr=document.getElementsByName("marital");
    for(var i=0;v10arr.length;i++){
        if(v10arr[i].checked){
            v10=v10arr[i].value;

        }
    }*/

    var isValid=false;
    Validation.checkMandatory(v1,"Empno" ,null,false);
    Validation.checkMandatory(v2,"Name",null,false);
    Validation.checkMandatory(v3,"Deparment name",null,false);
    Validation.checkMandatory(v4,"Department No",null,false);
    Validation.checkEMail(v5,"mail",null,false);
    Validation.checkMandatory(v6,"Date of Birth",null,false);
    Validation.checkMandatory(v7,"Company Name",null,false);
    Validation.checkMandatory(v8,"Salary",null,false);
   Validation.checkMandatory(v9,"Gender",null,false);
   Validation.checkMandatory(v10,"Marital ",null,false);
    Validation.checkMobileNo(v11,"Mobile no ",null,false);
    Validation.checkMandatory(v12,"state",null,false);
    Validation.checkMandatory(v13,"Country Name",null,false);
    isValid=Validation.checkMandatory(v14,"Pincode",null,true);









    var request;
    if(isValid)
    var url="focusEmpRegistration?empNo="+v1.value+"&empName="+v2.value+"&departName="+v3.value+"&deptNo="+v4.value+"&email="+v5.value+"&dob="+v6.value+"&comName="+v7.value+"&salary="+v8.value+"&gender="+v9.value+"&marital="+v10.value+"&mobileNo="+v11.value+"&state="+v12.value+"&country="+v13.value+"&pinCode="+v14.value;


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


function registerPanne(){

    var v1=document.getElementById("name");
    var v2=document.getElementById("mailr");
    var v3=document.getElementById("mobileNo")
    var v4=document.getElementById("pwdr");
    var v5=document.getElementById("dob");

    var isValid=false;
    Validation.checkEMail(v1,"Name",null,false);
    Validation.checkEMail(v2,"E-mail",null,false);
    Validation.checkMobileNo(v3,"Mobile no",null,false);
    Validation.checkMandatory(v4,"Password",null,false);
    isValid=   Validation.checkMandatory(v5,"Date of birth.",null,true);





    var request;
    if(isValid)
    var url="registerpPanne?name="+v1.value+"&mobileNo="+v3.value+"&mailr="+v2.value+"&pwdr="+v4.value+"&dob="+v5.value;

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





function getInfo_Panne(){
    alert("hi");
    var v1=document.getElementById("mailu");
    var v2=document.getElementById("pwdu");
    var v3=document.getElementById("table1");
    var request;
   var isValid=false;
    Validation.checkEMail(v1,"E-Mail",null,false);
    Validation.checkMandatory(v3,"select ",null,false);
    isValid=Validation.checkMandatory(v2,"Password",null,true);
    alert(isValid)
    if(isValid)

        var url = "getInfo_Panne?mailu=" + v1.value + "&pwdu=" + v2.value + "&table1=" + v3.value;

        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }

        try {
            request.onreadystatechange = function () {
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

function panne_register_Fresher(){
    var v1=document.getElementById("namef");
    var v2=document.getElementById("mobileNof");
    var v3=document.getElementById("mailf");
    var v4=document.getElementById("pwdf");
    var v5=document.getElementById("dobf");

    var request;

    var isValid=false;
    Validation.checkMandatory(v1,"name",null,false);
    Validation.checkMobileNo(v2,"Mobile No",null,false);
    Validation.checkEMail(v3,"E-mail",null,false);
    Validation.checkMandatory(v4,"Password",null,false);
    isValid=Validation.checkMandatory(v5,"Date o Birth ",null,true);
    if(isValid)
    var url="panne_fresher?namef="+v1.value+"&mobileNof="+v2.value+"&mailf="+v3.value+"&pwdf="+v4.value+"&dobf="+v5.value;


    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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


function register_panne_experience(){
    var v1=document.getElementById("nameex");
    var v2=document.getElementById("mobileNoex");
    var v3=document.getElementById("mailex");
    var v4=document.getElementById("pwdex");
    var v5=document.getElementById("dobex");
    var v6=document.getElementById("noenper");
    var v7=document.getElementById("enperno");

    var request;
    var isValid=false;
    Validation.checkMandatory(v1,"name",null,false);
    Validation.checkMobileNo(v2,"Mobile no",null,false);
    Validation.checkEMail(v3,"E-mail",null,false);
    Validation.checkDate(v5,"Date of birth",null,false);
   Validation.checkMandatory(v6,"Experience",null,false);
    isValid=Validation.checkNumeric(v7,"Experience",true,"null");
    alert(isValid);
    if(isValid)
    var url="exper_panne_register?nameex="+v1.value+"&mobileNoex="+v2.value+"&mailex="+v3.value+"&&pwdex="+v4.value+"&dobex="+v5.value+"&noenper="+v6.value+"&enperno="+v7.value;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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


function getFormbyDialodBox(){
    var arrActions,clDlg,sUrl;
    arrActions = new Array();
    arrActions[0] = "Ok|clBatchDetails.onClkOk";
    arrActions[1] = "Cancel";//|parent.clBatchMaster.onClkHideDlg";
    sUrl = "";//url
    sUrl += "dialog";
    clDlg = new DialogBox("formdialog","Login",75,75,760,400,sUrl, true, null, true,false,arrActions);
    clDlg.setCenter();
    clDlg.show();
}




function dialogLogin(){
    var v1=document.getElementById("dmail");
    var v2=document.getElementById("dpwd");

    var isValid=false;
    Validation.checkEMail(v1,"E-mail",null,false);
    isValid= Validation.checkMandatory(v2,"Password",null,true);
    var request;

    if(isValid)
    var url="dialogLogin?dmail="+v1.value+"&dpwd="+v2.value;


    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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



function task_panne_paersonal(){
    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname")
    var v3=document.getElementById("pmail");
    var v4=document.getElementById("ppwd");
    var v5=document.getElementById("pmobile");
    var v6;
    var v6value=document.getElementsByName("gen");

    for(var i=0;i<v6value.length;i++){
        if(v6value[i].checked==true){
            v6=v6value[i].value;
        }
    }
    var v7=document.getElementById("pdob");


    var isValid=false;
    Validation.checkMandatory(v1,"First Name",null,false);
    Validation.checkMandatory(v2,"Last Name",null,false);
    Validation.checkEMail(v3,"E-mail",null,false);
    Validation.checkMandatory(v4,"Password",null,false);
    Validation.checkMobileNo(v5,"Mobile No",null,false);
    isValid=Validation.checkMandatory(v7,"DOB",null,true);

    if(isValid)
    var url="paskpanne_personal?fname="+v1.value+"&lname="+v2.value+"&pmail="+v3.value+"&ppwd="+v4.value+'&pmobile='+v5.value+"&gen="+v6+"&pdob="+v7.value;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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


function task_panne_educational() {
    clTaskPane.hideActivePane("Personal Info");
    var v1 = document.getElementById("hqname");
    var v2 = document.getElementById("hqpercent");
    var v3 = document.getElementById("hyopass");
    var v4 = document.getElementById("hqcname");
    var v5 = document.getElementById("hqcountry");


    var request;


    var isValid = false;
    Validation.checkMandatory(v1, "Q Name", null, true);
    Validation.checkMandatory(v2, "Q percentage", null, true);
    Validation.checkMandatory(v3, "Q year of pass", null, true);
    Validation.checkMandatory(v4, "College Name", null, true);
    isValid = Validation.checkMandatory(v5, "Country", null, true);

    if (isValid)
        var url = "taskpanneeducation?hqname=" + v1.value + "&hqpercent=" + v2.value + "&hyopass=" + v3.value + "&hqcname=" + v4.value + "&hqcountry=" + v5.value;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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
    function taskpanne_address(){
        var v1=document.getElementById("fathername");
        var v2=document.getElementById("mothername");
        var v3=document.getElementById("hmobileno");
        var v4=document.getElementById("addrs");
        var request;
        var isValid=false;
        Validation.checkMandatory(v1,"Father name",null,false);
        Validation.checkMandatory(v2,"Mother name",null,false);
        Validation.checkMobileNo(v3,"home Mobile No",null,false);
        isValid=Validation.checkMandatory(v4,"Address ",null,true);
        if(isValid)
        var url="taskpanneAddress?fathername="+v1+"&mothername="+v2+"&hmobileno="+v3+"&addrs="+v4;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }

        try {
            request.onreadystatechange = function () {
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

function task_panne_login(){
    var arrActions,clDlg,sUrl;
    arrActions = new Array();
    arrActions[0] = "Ok|clBatchDetails.onClkOk";
    arrActions[1] = "Cancel";//|parent.clBatchMaster.onClkHideDlg";
    sUrl = "";//url
    sUrl += "dialog";
    clDlg = new DialogBox("formdialog","taskpannelogin",75,75,760,400,sUrl, true, null, true,false,arrActions);
    clDlg.setCenter();
    clDlg.show();
}

function forADDempnew(){
    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("dob");
    var v4=document.getElementById("mobileNo");
    var v5=document.getElementById("deptNo");
    var v6=document.getElementById("deptname");
    var v7=document.getElementById("email");
    var v8=document.getElementById("pwd");
    var request;
    var isValid=false;

/*
    Validation.checkMandatory(v1,"Fname",null,true);
    Validation.checkMandatory(v2,"Lname",null,true);
    Validation.checkMandatory(v3,"DOB",null,true);
    Validation.checkMobileNo(v4,"Mobile",null,true);
    Validation.checkNumeric(v5,"Department no",null,true);
    Validation.checkMandatory(v6,"Deprtment name",null,true)
    Validation.checkMandatory(v7,"Department name",null,true);
    isValid=Validation.checkMandatory(v8,"Password",null,true);

    if(isValid)*/
    var url="empNew?fname="+v1.value+"&lname="+v2.value+"&dob="+v3.value+"&mobileNo="+v4.value+"&deptNo="+v5.value+"&deptname="+v6.value+"&email="+v7.value+"&pwd="+v8.value;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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


function GetINfobyEmail(){
    alert("hi");
    var v1=document.getElementById("gmail").value;

    alert(v1);
    var request;
    var url="getEmpbyEmailid?gmail="+v1;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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

function updateByEmailId(){
    alert("hi");

    parent.getDialogBox("editallred").hide();
    var v1=document.getElementById("ufname");
    var v2=document.getElementById("ulname");
    var v3=document.getElementById("udob");
    var v4=document.getElementById("umobileNo");
    var v5=document.getElementById("udeptno");
    var v6=document.getElementById("udeptname");
    var v7=document.getElementById("umail");
    var v8=document.getElementById("upwd");

    var request;
    var url="updatebyemailid?ufname="+v1.value+"&ulname="+v2.value+"&udob="+v3.value+"&umobileNo="+v4.value+"&udeptno="+v5.value+"&udeptname="+v6.value+"&umail="+v7.value+"&upwd="+v8.value;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText>=1)
                {
                    getRecord();
                }
                else {
                    document.getElementById("data").innerHTML = this.responseText;
                }
            }
        };
        request.open("GET", url, true);
        request.send();

    }
    catch (e) {
        alert("Unable to connect to server");
    }



}













function getINFOAll(){
    alert("hi");
var request;
    var url="alldata";

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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

function DeleteOperation(str) {
alert("h1");
 //   var v1 = document.getElementById("vdmail").value;
    alert(str);

    var request;
    var url;


    url = "deletebyPB?vdmail=" + str;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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






function editOpreation(str1,str2,str3,str4,str5,str6,str7,str8){

    alert("in");


    var arrActions,clDlg,sUrl;
    arrActions = new Array();
    arrActions[0] = "Ok|formdialog.onClkOk";
    arrActions[1] = "Cancel";//|parent.clBatchMaster.onClkHideDlg";
    //sUrl = "";//url
    sUrl="editid?fname="+str1+"&lname="+str2+"&dob="+str3+"&mobileNo="+str4+"&deptNo="+str5+"&deptname="+str6+"&umail="+str7+"&pwd="+str8;
    clDlg = new DialogBox("formdialog","Login",100,0,250,250,sUrl, true, null, true,false,arrActions);
    clDlg.setCenter();
    clDlg.show();


/*

    if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }

        try {
            request.onreadystatechange = function () {
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
*/

}

//from here taskPanne operation


















function getRecord(){
    var request;
    var url="allrecord";
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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

function editAllRecoard(str1,str2,str3,str4,str5,str6,str7,str8){

    var arrActions,clDlg,sUrl;
    arrActions = new Array();
    arrActions[0] = "Ok|onClkOk";
    arrActions[1] = "Cancel";//|parent.clBatchMaster.onClkHideDlg";
    //sUrl = "";//url
    sUrl="editAllRecoard?fname="+str1+"&lname="+str2+"&dob="+str3+"&mobileNo="+str4+"&deptNo="+str5+"&deptname="+str6+"&email="+str7+"&pwd="+str8;
    clDlg = new DialogBox("editallred","Login",75,75,600,400,sUrl, true, null, true,false,arrActions);
    clDlg.setCenter();

    clDlg.show();



}


function deleteAllRecord(str){
    var arrActions,clDlg,sUrl;
    arrActions = new Array();
    arrActions[0] = "Ok|clBatchDetails.onClkOk";
    arrActions[1] = "Cancel";//|parent.clBatchMaster.onClkHideDlg";
    //sUrl = "";//url
    sUrl="deleteAllRecord";
    clDlg = new DialogBox("formdialog","Login",75,75,250,250,sUrl, true, null, true,false,arrActions);
    clDlg.setCenter();
    clDlg.show();
}




function getInfo(){
    alert("hi1");
    var request;
    //var url="multimethod!getInfo.action";
    var url="multimethod!getInfo.do";
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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


function deleteInfo(str){
    alert("hi");
alert(str);
    var request;
    var url="multimethod!deleteInfo.do?email="+str;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText>=1)
                {
                    getInfo();
                }
                else {
                    document.getElementById("data").innerHTML = this.responseText;
                }
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}



function editInfo(str1,str2,str3,str4,str5,str6,str7,str8){
    alert("hi")
alert(str1+"qwert")

    var arrActions,clDlg,sUrl;
    arrActions = new Array();
    arrActions[0] = "Ok|onClkOk";
    arrActions[1] = "Cancel";//|parent.clBatchMaster.onClkHideDlg";
    //sUrl = "";//url
    sUrl="dialog?fname="+str1+"&lname="+str2+"&dob="+str3+"&mobileNo="+str4+"&deptNo="+str5+"&deptname="+str6+"&email="+str7+"&pwd="+str8;
    clDlg = new DialogBox("EditDetails","Edit Details",75,75,600,400,sUrl, true, null, false,false,arrActions);
    clDlg.setCenter();

    clDlg.show();

    //alert(parent.getDialogBox("EditDetails").innerHTML);// = str1;


    /*  var request;
    var url="multimethod!editInfo.do";
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("data").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }*/
}


function loginInfo(){
    alert("login");
    var v1=document.getElementById("email").value;
    var v2=document.getElementById("lpwd").value;
    alert(v1);
    alert(v2);
    alert("hi");
    var request;

    var url="multimethod!loginInfo.do?email="+v1+"&lpwd="+v2;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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

function saveInfo(){
    alert("save");
    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("dob");
    var v4=document.getElementById("mobileNo");
    var v5=document.getElementById("deptNo");
    var v6=document.getElementById("deptname");
    var v7=document.getElementById("email");
    var v8=document.getElementById("pwd");


    var isValid=false;
    isValid= Validation.checkMandatory(v1,"Fisrt name ",null,false);
    isValid=Validation.checkMandatory(v2,"last name",null,false);
    isValid=Validation.checkMandatory(v3,"DOB",null,false);
    isValid=Validation.checkMobileNo(v4,"Mobile No",null,false);
    isValid=Validation.checkNumeric(v5,"Dept No",null,false);
    isValid=Validation.checkMandatory(v6,"Dept name ",null,false);
    isValid=Validation.checkEMail(v7,"E-mail",null,false);
   isValid= Validation.checkMandatory(v8,"Password",null,true);


    var request;
    if(isValid)
    var url="multimethod!saveInfo.do?get_inFo_dto.fname="+v1.value+"&get_inFo_dto.lname="+v2.value+"&get_inFo_dto.dob="+v3.value+"&get_inFo_dto.mobileNo="+v4.value+"&get_inFo_dto.deptNo="+v5.value+"&get_inFo_dto.deptname="+v6.value+"&get_inFo_dto.email="+v7.value+"&get_inFo_dto.pwd="+v8.value;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText >=1) {
                    getInfo();
                } else {
                    document.getElementById("data").innerHTML = this.responseText;
                }
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}





function updateInfo(){

    alert(" u are goingto update");
    parent.getDialogBox("EditDetails").hide();
    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("dob");
    var v4=document.getElementById("mobileNo")
    var v5=document.getElementById("deptNo");
    var v6=document.getElementById("deptname");
    var v7=document.getElementById("email");
    var v8=document.getElementById("pwd");

    var request;
   /* var isValid=false;

    isValid= Validation.checkMandatory(v1,"Fisrt name ",null,false);
    isValid=Validation.checkMandatory(v2,"last name",null,false);
    isValid=Validation.checkMandatory(v3,"DOB",null,false);
    isValid=Validation.checkMobileNo(v4,"Mobile No",null,false);
    isValid=Validation.checkNumeric(v5,"Dept No",null,false);
    isValid=Validation.checkMandatory(v6,"Dept name ",null,false);
    isValid=Validation.checkEMail(v7,"E-mail",null,false);
    isValid= Validation.checkMandatory(v8,"Password",null,true);
    alert(isValid);
    if(isValid)*/
    var url="multimethod!updateInfo.do?get_inFo_dto.fname="+v1.value+"&get_inFo_dto.lname="+v2.value+"&get_inFo_dto.dob="+v3.value+"&get_inFo_dto.mobileNo="+v4.value+"&get_inFo_dto.deptNo="+v5.value+"&get_inFo_dto.deptname="+v6.value+"&get_inFo_dto.email="+v7.value+"&get_inFo_dto.pwd="+v8.value;


    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText >=1) {
                    getInfo();
                } /*else {
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


function tabpanneValidation(str1,str2)
{


  //  alert("hi"+str1+"--"+str2);
    var v1=document.getElementById("name");
    var v2=document.getElementById("dob");
    var v3=document.getElementById("email");
    var v4=document.getElementById("mobileNo");
    var v5=document.getElementById("pwd");
    var cpwd=document.getElementById("cpwd");


    if(cpwd.value!= v5.value){
        alert("password is not matching");
        return false;
    }
    var isValid=false;

    isValid=Validation.checkMandatory(v1,"Full name",null,false);

    isValid=Validation.checkMandatory(v2,"DOB",null,false);
    isValid=Validation.checkEMail(v3,"E-mail",null,false);
    isValid=Validation.checkMobileNo( v4,"Mobile No",null, false);
    isValid=Validation.checkMandatory(cpwd,"Confirm",null,false);
    isValid=Validation.checkMandatory(v5,"password",null,true);


    if(isValid)
        tabbedPane.selectTab(str1, str2);



}
function TabbePannenextCity(str1,str2){
    isValid=false;
    var v6=document.getElementById("college");

    var v7=document.getElementById("qlfy");
    var v8=document.getElementById("percent");
    var v9=document.getElementById("yearPass");
    isValid= Validation.checkMandatory(v6,"College name",null,false);



    isValid=Validation.checkMandatory(v7,"Qualification ",null,false);
    isValid=Validation.checkMandatory(v8,"Percentages",null,false);
    isValid=Validation.checkMandatory(v9,"Year of PassOut",null,true);
    if(isValid)
    tabbedPane.selectTab(str1,str2)
}

function finalSubmistion(){

alert("final");
    var v1=document.getElementById("name");
    var v2=document.getElementById("dob");
    var v3=document.getElementById("email");
    var v4=document.getElementById("mobileNo");
    var v5=document.getElementById("pwd");
    var cpwd=document.getElementById("cpwd");

    var v6=document.getElementById("college");

    var v7=document.getElementById("qlfy");
    var v8=document.getElementById("percent");
    var v9=document.getElementById("yearPass");
    var v10=document.getElementById("city");

    var v11=document.getElementById("state");
    var v12=document.getElementById("country");
    var v13=document.getElementById("pinCode");

    var isValid=false;
    isValid=Validation.checkMandatory(v10,"City" ,null,false);
    isValid=Validation.checkMandatory(v11,"State",null,false);
    isValid=Validation.checkMandatory(v12,"Country",null,false);
    isValid=Validation.checkMandatory(v13,"PinCode",null,true);
    var request;
    alert(isValid);
    if (isValid)
      var url = "multiTabblePanneAction?multiTabblePanneActionPersonalDTO.name=" + v1.value + "&multiTabblePanneActionPersonalDTO.dob=" + v2.value + "&multiTabblePanneActionPersonalDTO.email=" + v3.value + "&multiTabblePanneActionPersonalDTO.mobileNo=" + v4.value + "&multiTabblePanneActionPersonalDTO.pwd=" + v5.value + "&multiTabblePanneActionEducationalDTO.college=" + v6.value + "&multiTabblePanneActionEducationalDTO.qlfy=" + v7.value + "multiTabblePanneActionEducationalDTO.percent=" + v8.value + "&multiTabblePanneActionEducationalDTO.yearPass=" + v9.value + "&multiTabblePanneActionAddressDTO.city=" + v10.value + "&multiTabblePanneActionAddressDTO.state=" + v11.value + "&multiTabblePanneActionAddressDTO.country=" + v12.value + "&multiTabblePanneActionAddressDTO.pinCode=" + v13.value;

  //  var url="multiTabblePanneAction";

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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

function getInfoStable(){

    var request;
    var url="stable";

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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


function divlayout(){
    alsert("hi");

    var v1=document.getElementById("name");
    var v2=document.getElementById("pwd");



    var isValid=false;
  //  isValid=Validation.checkMandatory(v1,"name" ,null,false);
  //  isValid=Validation.checkUserPassword(v2,"Password",null,true);
    if(isValid)
    var url="divlayout?name="+v1.value+"&pwd="+v2.value;

    var request;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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

function student_profile(){
    alert("hi");
    var v1=document.getElementById("fname");
    var v2=document.getElementById("lname");
    var v3=document.getElementById("dob");
    var v4=document.getElementById("mobileNo");
    var v5=document.getElementById("deptNo");
    var v6=document.getElementById("deptname");
    var v7=document.getElementById("deptname");
    var v8=document.getElementById("pwd");
    var v9=document.getElementById("blah");

    /*var isValid=false;
    isValid=Validation.checkMandatory(v1,"Fist name",null,false);
    isValid=Validation.checkMandatory(v2,"Last name",null,false);
    isValid=Validation.checkDate(v3,"DOB",null,false);
    isValid=Validation.checkMobileNo(v4,"Mobile No",null,false);
    isValid=Validation.checkMandatory(v5,"Dept no",null,false);
    isValid=Validation.checkMandatory(v6,"Dept name",null,false);
    isValid=Validation.checkEMail(v7,"E-mail",null,true);
    isValid=Validation.checkMandatory(v8,"password",null,true);
*/
    var request;
  //  alert(isValid);
   // if(isValid)
    var url="studentprofile?fname="+v1.value+"&lname="+v2.value+"&dob="+v3.value+"&mobileNo="+v4.value+"&deptNo="+v5.value+"&deptname="+v6.value+"&email="+v7.value+"&pwd="+v8.value+"&image="+v9.value;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function () {
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
