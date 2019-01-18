/**
 * Created by admin on 18-12-2018.
 */

/**
 * Created by admin on 18-12-2018.
 */

function myfunction()
{
    var isvalid=true;
    isvalid=Validation.checkMandatory(document.getElementById('name'),"Name",0,false);
    isvalid=Validation.checkMandatory(document.getElementById('age'),"Age",1,false);
    isvalid=Validation.checkMandatory(document.getElementById('weight'),"weight",6,false);
    isvalid=Validation.checkMandatory(document.getElementById('combo'),"city",0,false);
    isvalid=Validation.checkMandatory(document.getElementById('dob'),"DOB",4,true);
   /* alert(isvalid)*/
    if(isvalid)
    {
        var submitData = con.formData2QueryString(document.forms["myform"]);
        alert(submitData);
       callAJAX.sendRequestAJAX("POST","add!addStudent.do?"+submitData,"resRegDv");
    }
    else
    {
        alert("Something went wrong please fill the form again!!!!!!!!!!! ")
    }
}
function viewDetails()
{
    callAJAX.sendRequestAJAX("GET","view!getStudentDetails.do","viewdiv");
}
function addstableRow()
{
    var stable1 = new sTable("stable1");
    stable1.addRow();
}
function deletetableRow()
{
    var stable1 = new sTable("stable1");
    stable1.deleteRow(stable1.getCurrentRow(),true,false);
}
function updateRow()
{

    var submitdata=con.formData2QueryString(document.forms['myform']);
    alert(submitdata)

   /* callAJAX.sendRequestAJAX("POST","update!upadateStudent.do?"+submitdata,"resRegDv");*/

}
function deleteRow()
{

    alert("delete called")
}
