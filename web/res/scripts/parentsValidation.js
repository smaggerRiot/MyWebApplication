function parentsValidation(){

    var request;
    var v1=document.getElementById("fname").value;
    var v2=document.getElementById("mname").value;
    var v3=document.getElementById("pno").value;
    var v4=document.getElementById("pcode").value;
    var v5=document.getElementById("hno").value;
    var url="parentDetails?fname="+v1+"&mname"+v2+"&pno="+v3+"&pcode="+v4+"&hno="+v5;

    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("dipak").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }

}