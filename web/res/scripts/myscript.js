/**
 * Created by admin on 27-12-2018.
 */
var CLtab=new function()
{
     var i=2;
     this.add = function () {
         var x=tabbedPane.getTabId("pan1");
         alert(x);
         i++;
        /*tabbedPane.addTab("pan1","Table"+i);*/
        /*var x=tabbedPane.getDivPosition();*/

         var content = document.getElementById("pan1content0").innerHTML;
        tabbedPane.addTab("pan1", "Table" + i);
        return i;
     };
     this.registerData=function()
     {
        var isvalid=true;
        isvalid=Validation.checkMandatory(document.getElementById('name'),"Name",0,false);
        isvalid=Validation.checkMandatory(document.getElementById('age'),"Age",1,false);
        isvalid=Validation.checkMandatory(document.getElementById('weight'),"weight",6,false);
        isvalid=Validation.checkMandatory(document.getElementById('combo'),"city",0,true);
        if(isvalid)
        {
            var selectedTab=tabbedPane.getSelectedIndex("pan1");
            alert(selectedTab);
            var selected=tabbedPane.getSelectedTab("pan1");
            alert(selected);
            var panid=tabbedPane.getTabId("pan1");
            alert(panid);

            //alert(tab1namevalue);
           /* var submitData = con.formData2QueryString(document.forms["myform"]);
            alert(submitData);*/
            /*callAJAX.sendRequestAJAX("POST","tab1!getTab1data.do?"+submitData,"resRegDv");*/
        }
        else
        {
            alert("Something went wrong please fill the form again!!!!!!!!!!!");
        }
    }
}