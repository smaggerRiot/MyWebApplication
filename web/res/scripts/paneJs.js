function personalInfo(){
    var v1=document.getElementById("name").value;
    var v2=document.getElementById("mail").value;
    var v3=document.getElementById("dob").value;
    var v4=document.getElementById("qlfy").value;
    var request;
    var url="pane1?name="+v1+"&mail="+v2+"&dob="+v3+"&qlfy="+v4;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    try {
        request.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("pane1out").innerHTML = this.responseText;
            }
        };
        request.open("GET", url, true);
        request.send();
    }
    catch (e) {
        alert("Unable to connect to server");
    }
}




    function personalDetails(){
        var v1=document.getElementById("fname").value;
        var v2=document.getElementById("mname").value;
        var v3=document.getElementById("details").value;
        var v4=document.getElementById("cntry").value;
        var v5=document.getElementById("state").value;
        var v6=document.getElementById("pincode").value;

        var request;
        var url="pane2?fname="+v1+"&mname="+v2+"&details="+v3+"&cntry="+v4+"&state="+v5+"&pincode="+v6;
        if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        }
        else if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }

        try {
            request.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("pane2out").innerHTML = this.responseText;
                }
            };
            request.open("GET", url, true);
            request.send();
        }
        catch (e) {
            alert("Unable to connect to server");
        }

}