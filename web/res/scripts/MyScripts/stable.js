var ClTable=new function(){
    this.add=function()
    {
       var SRowA = new sTable("stableSum");
        SRowA.addRow();
    };
    this.delete=function()
    {
        var SRowD = new sTable("stableSum");
        var rowNum=SRowD.getRowCount();
        if(rowNum>3) {
            SRowD.deleteRow(SRowD.getCurrentRow(), true, false);
        }
    };
    this.addValue=function()
    {
        var tblObj=new sTable("stableSum");

        var iRow=tblObj.getCurrentRow();
/*
        var iVal=tblObj.getValueAt(iRow,0);
        alert(iVal)*/
        tblObj.setValueAt(irow,2,3);
    };
};