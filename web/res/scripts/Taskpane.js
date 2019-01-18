
var clTaskPane = new function()
{
    var arrTaskPane = [];
    var sActiveTaskPane=null;
    /*this.setHideActive = function(bInActive)
    {
        this.bHideActive = bInActive;
    };*/

    this.addTaskPaneId = function(sId)
    {
        arrTaskPane[arrTaskPane.length] = sId;
    };


    this.hideActivePane = function(sCurrentTaskPane)
    {
//        if(sActiveTaskPane==sCurrentTaskPane)
//            return;

        //alert(sActiveTaskPane+","+sCurrentTaskPane)
        if(sActiveTaskPane)
        {
            this.showTaskPane(false,sActiveTaskPane);
            //alert(sActiveTaskPane+","+sCurrentTaskPane)
            if(sActiveTaskPane!=sCurrentTaskPane)
                this.showTaskPane(true,sCurrentTaskPane);
            else
                sActiveTaskPane=null;

        }
        else
        {
            var isShow;
            sActiveTaskPane=null;
            for(var iIndex = 0; iIndex < arrTaskPane.length; iIndex++)
            {
                isShow = true;
                 if((arrTaskPane[iIndex] != sCurrentTaskPane) || document.getElementById(arrTaskPane[iIndex]).style.display == "")
                    isShow = false;
                this.showTaskPane(isShow,arrTaskPane[iIndex],sCurrentTaskPane);

                if(isShow)
                    break;
            }
        }
    };

    this.showTaskPane = function(isShow,sTaskPaneId,isIgnoreAnimation)
    {
        var sDisplay,sImg;
        if(isShow)
        {
            sDisplay = "inline-block";
            sImg='collapseTaskPane';
            sActiveTaskPane=sTaskPaneId;
        }
        else
        {
            sDisplay = "none";
            sImg='expandTaskPane';
            //sActiveTaskPane=null;
        }

        document.getElementById("img"+sTaskPaneId).className= sImg;
        if(!isIgnoreAnimation)
            util.animateToggle(document.getElementById(sTaskPaneId),{"transition-property":"height","transition-duration":"0.3"});
        else
            document.getElementById(sTaskPaneId).style.display = sDisplay;

//        document.getElementById(sTaskPaneId).style.display = sDisplay;

        //alert(document.getElementById(sTaskPaneId).style.display)
    };

    this.toggleTaskPane=function(elemImg,sCurrentTaskPane,fnOnClick)
    {
        if(arrTaskPane.length>  0)
            this.hideActivePane(sCurrentTaskPane);
        else
        {
            var sShow = clTaskPane.isCollapsed(sCurrentTaskPane);//(document.getElementById(sCurrentTaskPane).style.visibility == "hidden");
            this.showTaskPane(sShow,sCurrentTaskPane);
        }
        if(fnOnClick)
            fnOnClick(document.getElementById(sCurrentTaskPane).style.visibility == "hidden");
    };

    this.isCollapsed=function(sCurrentTaskPane)
    {
        return (document.getElementById(sCurrentTaskPane).style.visibility == "hidden");
    };

    this.checkAllItems =function(elmChk,mainDv,fnOnClick)
    {
        if(fnOnClick)
            fnOnClick(elmChk.checked);
    };
};
