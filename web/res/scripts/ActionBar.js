

var  clActionBar = new function()
{
    var me = this;
    this.toggleActionBar = function(objImg1,sIdImg2,sContentId,sActionsId)
    {
        objImg1.style.display="none";
        document.getElementById(sIdImg2).style.display="block";
        if(objImg1.getAttribute("isDown") == 'true')
        {
            document.getElementById(sContentId).style.display = "none";
            var objFld =document.getElementById(sActionsId);
            if(objFld)
            objFld.style.display = "none";
        }
        else
        {
            document.getElementById(sContentId).style.display = "block";
            var objFld =document.getElementById(sActionsId);
            if(objFld)
            objFld.style.display = "block";
        }
    };

    this.setBottomVisibility=function(isShow,sId)
    {
        if(isShow)
            document.getElementById("actBarAct_"+sId).style.display="";
        else
            document.getElementById("actBarAct_"+sId).style.display="none";
    };
};
