/**
 * Created by Dipak on 12/18/2018.
 */
var clRegistration =new function()
{
   this.clkRegister=function()
   {
        alert("called");
       var isValid=true;


       var objName=document.getElementById("name");
       var objuname=document.getElementById("uname");
       var objemail=document.getElementById("emailId");
       var objsalary=document.getElementById("salary");
       var objcity=document.getElementById("city");



       isValid= Validation.checkMandatory(objName, "name", 0, false);
       isValid= Validation.checkMandatory(objuname,"username", 1, false);
       isValid=Validation.checkEMail(objemail, "email", false);
       isValid= Validation.checkMandatory(objsalary, "salary ", 1,false);
       isValid=Validation.checkMandatory(objcity, "City", 0,true);
       alert(isValid);



       if(isValid)
       {
           var data=con.formData2QueryString(document.forms["myform"]);
           alert(data)
           callAJAX.sendRequestAJAX("POST","form!register.do?"+data,"view")
           document.getElementById("myform").submit();
       }



   };

    this.addRow=function()
    {
        alert("show")
        var rAdd= new sTable("stable1");
        rAdd.addRow();
    };
    this.deleteRow=function()
    {
        var tbl=new sTable("stable1");
        alert(tbl.getCurrentRow())
        tbl.deleteRow(tbl.getCurrentRow());

    };
     var i=0;
    this.clkAddTab=function()
    {
       i++;
        alert("called")
        callAJAX.sendRequestAJAX("POST","tab!addTab.do?index="+i,"responsediv");
        var resContDiv=document.getElementById("responsediv").innerHTML
        tabbedPane.addTab("infotab","table"+i,resContDiv)
        return i;
    };
    this.disableFeilds=function(action)
    {
        alert("called")
        var textCol=document.getElementsByTagName("input");
        alert(textCol)
        if(action.checked||textCol.enabled)
        {
            for(var i=0;i<textCol.length;i++)
            {
                textCol[i].disabled = true;
                action.disabled = false;
            }
        }
        else{
            for(var i=0;i<textCol.length;i++)
            {
                textCol[i].disabled=false;
            }
        }
    }
    var flag=true;
    this.sideNavToggle=function()
    {


        if(flag) {
            document.getElementById("moreInfo").style.width = "200px";
            document.getElementById("main").style.marginLeft = "300px";
            flag=false;
        }else
        {
            document.getElementById("moreInfo").style.width = "0";
            document.getElementById("main").style.marginLeft = "120";
            flag=true;
        }
    };
    this.openDataDiv=function()
    {
        alert("called");
        callAJAX.sendRequestAJAX("GET","card.do","main");
    }
    this.arrowChange=function(obj)
    {

        if(obj.getAttribute("class")=="fa fa-angle-up") {

            obj.setAttribute("class", "fa fa-angle-down")
        }else{
            obj.setAttribute("class","fa fa-angle-up")
        }
    }
    this.openGraphDiv=function()
    {
        callAJAX.sendRequestAJAX("GET","visual.do","main");
    }


};