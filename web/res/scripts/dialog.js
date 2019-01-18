/**
 function openSDialog(url)
 function closeSDialog()
 function Enable()
 */

function Dialog(sDlgBoxArgs)
{
    var me =this;
    this.objDialog = {popup:null, visible:false};

    this.openDialog = function()
    {
        this.sFormName = sDlgBoxArgs["formName"];
        this.sId= sDlgBoxArgs["id"];
        this.objDialog.popup = document.getElementById(this.sId+'SWindow');
        this.objTitleDiv = document.getElementById(this.sId+ "titlebar") ;
        this.objIFrame = document.getElementById(this.sId+ "contentFrame");
        this.objCenterContainer = document.getElementById(this.sId+"centerContainer");
        this.objCenterData = document.getElementById(this.sId+"centerData");
        this.isClearOnClose = sDlgBoxArgs["isClearOnClose"];
        this.isGlobalDlg = sDlgBoxArgs["isGlobalDlg"];
        this.ignoreAnimation = sDlgBoxArgs["ignoreAnimation"];
        this.isResize = sDlgBoxArgs["isResize"];
        this.isActionsExist = sDlgBoxArgs["isActionsExist"];
        this.isSimple = sDlgBoxArgs["isSimple"];
        this.ignoreMove = sDlgBoxArgs["ignoreMove"];


        if(!this.objDialog.visible)
        {
            if(sDlgBoxArgs["url"])
            {
                var sUrl,sUrl2,sResult;
                sUrl =sDlgBoxArgs["url"];

                if(sUrl.indexOf("?")!=-1)
                {
                    sUrl2 = sUrl.substring(0,sUrl.indexOf("?"));
                    sResult = sUrl.substring(sUrl.indexOf("?")+1);
                }
                else
                    sUrl2=sUrl;
//                else
//                {
//                    sUrl2 = sUrl.substring(0,sUrl.indexOf("?"));
//                    sResult = sUrl.substring(sUrl.indexOf("?")+1);
//                }
                if(sDlgBoxArgs["isDefaultTemplate"])
                {
                    var sSrc=clAppBuffer.getContextPath()+"/dialogTemplate.action?url="+escape(sUrl2);
                    sSrc+="&actions="+sDlgBoxArgs["actions"]+"&"+sResult+"&dialogName="+sDlgBoxArgs["id"];
                    sSrc+="&dlgWidth="+sDlgBoxArgs["width"]+"&dlgHeight="+sDlgBoxArgs["height"]+"&isExcludeJs="+sDlgBoxArgs["isExcludeJs"];
                    sSrc+="&isDialog=true";
                    this.objIFrame.src = sSrc;
                }
//                    this.objIFrame.src = getContextPath()+"/dialogTemplate.action?url="+sUrl2+"&actions="+sDlgBoxArgs["actions"]+"&nameSpace="+sNameSpace+"&"+sResult;TODO:For Encryption
//                    this.objIFrame.src = "dialogTemplate.action?pageUrl="+sDlgBoxArgs["url"]+"&actions="+sDlgBoxArgs["actions"];//+"sOk="+sDlgBoxArgs["sOk"]+"sCancel="+sDlgBoxArgs["sCancel"]//todo uday
                else
                    this.objIFrame.src = sDlgBoxArgs["url"];
            }
            else if(sDlgBoxArgs["isIFrame"])
               this.objIFrame.src = "#";

            if( ! this.ignoreMove)
            {
                this.objTitleDiv.onmousedown =function(evt)
                {
                    evt=evt?evt:window.event;
                    startDrag(sDlgBoxArgs["id"],evt);
                    //evt.cancelBubble=true;
                    cross.cancelBubble(evt);
                    return false;
                };
            }

            this.setBounds(sDlgBoxArgs["title"],sDlgBoxArgs["x"],sDlgBoxArgs["y"],sDlgBoxArgs["width"],sDlgBoxArgs["height"]);
         }
        this.closeDialog();
    };

    this.setXY=function(x,y)
    {
        this.x=x;
        this.y=y;
    };

    this.setURL = function()
    {
        this.objIFrame.src = sDlgBoxArgs["url"];
    };

    this.showDialog = function()
    {
       // alert("showDialog"+this.objDialog.popup.getAttribute("old_iTop"));
        if(this.objDialog.popup.getAttribute("old_iTop")!=null)
        {
            this.objDialog.popup.style.top =this.objDialog.popup.getAttribute("old_iTop");
            this.objDialog.popup.style.left =this.objDialog.popup.getAttribute("old_iLeft");
            this.objDialog.popup.style.width =this.objDialog.popup.getAttribute("old_iWidth");
            var iOldPopupHeight=this.objDialog.popup.getAttribute("old_iHeight");
            this.objDialog.popup.style.height =iOldPopupHeight;
            iOldPopupHeight =iOldPopupHeight.substring(0, iOldPopupHeight.length-2);
            var iExcludeHeight;
            iExcludeHeight=(me.isActionsExist?0:20);
            iExcludeHeight=iExcludeHeight+((me.isResize||!me.isSimple)?0:18);
            this.objCenterContainer.style.height = (iOldPopupHeight-38)+"px";
            this.objCenterData.style.height = (iOldPopupHeight-(78-iExcludeHeight))+"px";
        }

        shiftTo(this.objDialog.popup, this.x, this.y);
        this.objIFrame.style.scrollTop = "0px";
        this.objDialog.popup.style.visibility = "visible";
        this.objDialog.popup.style.display = "block";
        this.objDialog.visible = true;

        if(!this.ignoreAnimation)
            this.zoomIn();

       if(! sDlgBoxArgs["isIFrame"])    // call back function for non iframe dialogs
         arrDialogBox[this.sId].handleOnLoad();
    };

     this.zoomIn = function()
     {
         var iWidth,iHeight,iTop,iLeft,objMainContainer;
         objMainContainer=this.objDialog.popup.parentNode;


         iTop = this.objDialog.popup.style.top;
         iLeft = this.objDialog.popup.style.left;
         iWidth = this.objDialog.popup.style.width;
         iHeight = this.objDialog.popup.style.height;
                                                               
         iTop = iTop.substring(0,(iTop.length - 2));
         iLeft = iLeft.substring(0,(iLeft.length - 2));
         iWidth = iWidth.substring(0,(iWidth.length - 2));
         iHeight = iHeight.substring(0,(iHeight.length - 2));

         this.objDialog.popup.style.width = 10;
         this.objDialog.popup.style.height = 10;


         this.objDialog.popup.style.left = (document.body.clientWidth / 2 )+ (document.body.scrollLeft?document.body.scrollLeft:objMainContainer.scrollLeft);
          this.objDialog.popup.style.top = (document.body.clientHeight / 2) + (document.body.scrollTop?document.body.scrollTop:objMainContainer.scrollTop);

         $(this.objDialog.popup).animate({"height": "+="+(iHeight - 10)+"px", "width": "+="+(iWidth - 10)+"px",
                                            "left": "-="+(iWidth/2)+"px",
                                            "top": "-="+(iHeight/2 -20)+"px"}, 200);

        /*var popup,iMaxNo,iWidthInc,iHeightInc,iTopDec,iLeftDec,t,iInterval = 1000,iFrom=10;

         iWidthInc = iWidth/iFrom;
         iHeightInc = iHeight/iFrom;
         iTopDec = (document.body.clientHeight / 2)/iFrom;
         iLeftDec = (document.body.clientWidth / 2)/iFrom;

        // alert(iLeft+","+iLeftDec);

          popup = this.objDialog.popup;

         popup.style.display = "block";

         var iWidthInc2,iHeightInc2,iTopDec2,iLeftDec2;
         iWidthInc2 = iWidthInc;
         iHeightInc2 = iHeightInc;
         iTopDec2 = (document.body.clientHeight / 2)-iTopDec;
         iLeftDec2 = (document.body.clientWidth / 2)-iLeftDec;

        t=setInterval(function()
         {
             if(iWidthInc2 <= iWidth)
             {
                // alert(iLeftDec2);
                 popup.style.width = iWidthInc2 +"px";
                 popup.style.height = iHeightInc2 +"px";
                 popup.style.top = iTopDec2 +"px";
                 popup.style.left = iLeftDec2 +"px";
             }
             else
             {
                 alert(iLeftDec+","+iLeftDec2);
                 popup.style.width = (iWidth-iWidthInc2) +"px";
                 popup.style.height = (iHeight-iHeightInc2) +"px";
                 // popup.style.top = iTopDec +"px";
                 var ileft = (document.body.clientHeight / 2)
                 //popup.style.left = iLeftDec2-iLeft +"px";
                 clearInterval(t);
             }

             iWidthInc2 += iWidthInc;
             iHeightInc2 += iHeightInc;
             if(iTopDec2 >= iTop)
                iTopDec2 -= iTopDec;
              if(iLeftDec2 >= iLeft)
                iLeftDec2 -= iLeftDec;
         }, iInterval); */

     };

    this.zoomOut = function()
    {
         this.objDialog.popup.style.display = "none";
        this.objDialog.visible = false;

        var iWidth,iHeight,iTop,iLeft;
        iTop = this.objDialog.popup.style.top;
        iLeft = this.objDialog.popup.style.left;
        iWidth = this.objDialog.popup.style.width;
        iHeight = this.objDialog.popup.style.height;

        this.objDialog.popup.setAttribute("old_iTop",iTop);
        this.objDialog.popup.setAttribute("old_iLeft",iLeft);
        this.objDialog.popup.setAttribute("old_iWidth",iWidth);
        this.objDialog.popup.setAttribute("old_iHeight",iHeight);

        iTop = iTop.substring(0,(iTop.length - 2));
        iLeft = iLeft.substring(0,(iLeft.length - 2));
        iWidth = iWidth.substring(0,(iWidth.length - 2));
        iHeight = iHeight.substring(0,(iHeight.length - 2));

        $(this.objDialog.popup).animate({"height": "-="+iHeight+"px", "width": "-="+iWidth+"px",
            "left": "+="+(iWidth/2)+"px",
            "top": "+="+(iHeight/2)+"px"}, 200,null,cross.createCallbackFunc(me,me.afterZoomOut));

         // this.closeDialog();
    };

    this.afterZoomOut=function()
    {
        if(!this.isGlobalDlg)// && this.isClearOnClose)
        {
            var objDlg=arrDialogBox[this.sId];
            if(objDlg)
            {
                try
                {
                    delete arrDialogBox[this.sId];
                    if(window.frames[this.sId+"contentFrame"].contentWindow)
                       delete window.frames[this.sId+"contentFrame"].contentWindow;
                    else
                        delete window.frames[this.sId+"contentFrame"];
                }
                catch(ee) {

                }
                this.objDialog.popup.parentNode.removeChild(this.objDialog.popup);
            }
        }
        else
           me.closeDialog();
    };

    this.closeDialog = function()
    {
        this.objDialog.popup.style.display = "none";
        this.objDialog.visible = false;
    };


   this.setBounds=function(sTitle,xPosition,yPosition,iWidth,iHeight)
    {
       /* if (sDlgBoxArgs["x"] <= 1)
            xPosition = 2;
        if (sDlgBoxArgs["y"] <= 1)
            yPosition = 2;*/
        if(xPosition>0 && yPosition>0)
            this.setXY(xPosition,yPosition);
        this.objDialog.popup.style.width = iWidth + 'px';
        this.objDialog.popup.style.height = (iHeight) + 'px';
        var iExcludeHeight;
        iExcludeHeight=(me.isActionsExist?0:20);
        iExcludeHeight=iExcludeHeight+((me.isResize||!me.isSimple)?0:18);
        this.objCenterContainer.style.height = (iHeight-38) + 'px';
        this.objCenterData.style.height = (iHeight-(78-iExcludeHeight)) + 'px';
        this.objIFrame.style.width = '100%';
        if(getDialogBox(sDlgBoxArgs["id"]).getContentPane().contentWindow)
            this.objIFrame.style.height = '100%';
        else
            this.objIFrame.style.height = '86%';

        shiftTo(this.objDialog.popup, this.x, this.y);
     };

    this.openDialog();
 }

var selectedObj;
var offsetX, offsetY;
var objPrevMouseOverHandler=null;
var bIsChildWindowEvent = false;
var objPrevMouseUpHandler=null;
var isDragging = false;
//var sDialogBoxId;
var clDialogBox;

function startDrag(sId, evt)
{
//    sDialogBoxId=sId;
//    alert(1111111111)
    var obj=document.getElementById(sId+'SWindow');
    evt = evt ? evt : window.event;

    selectedObj = obj;

    if (evt.clientX)
    {
        offsetX = evt.clientX;
        offsetY = evt.clientY;
    }
    else if (evt.pageX)
    {
        offsetX = evt.pageX;
        offsetY = evt.pageY;
    }
    offsetX -= selectedObj.offsetLeft;
    offsetY -= selectedObj.offsetTop;
    if(getDialogBox(sId).getContentPane().contentWindow)
        clDialogBox=getDialogBox(sId).getContentPane().contentWindow;
    else clDialogBox=getDialogBox(sId).getContentPane();
    var clIframeDoc=clDialogBox.document;
    bIsChildWindowEvent = false;
    if(clIframeDoc )
    {
        objPrevMouseOverHandler=clIframeDoc.onmousemove;
        objPrevMouseUpHandler=clIframeDoc.onmouseup;
        clIframeDoc.onmousemove=function(evt)
        {
            bIsChildWindowEvent=true;
            dragIt(evt);
        };
        clIframeDoc.onmouseup=function()
        {
            bIsChildWindowEvent=true;
            release();
        };
    }
    document.onmousemove = function(evt)
    {
        bIsChildWindowEvent=false;
        dragIt(evt);
    };
    document.onmouseup = release;

    if (typeof document.onselectstart != "undefined")
        document.onselectstart = new Function("return false");
    return false;
}


//Drag an element
function dragIt(evt)
{
    var x,y;
    if(bIsChildWindowEvent)
    {
        evt = (evt) ? evt : clDialogBox.event;
        if (evt.clientX)
        {
            x= evt.clientX+selectedObj.offsetLeft;
            y= evt.clientY+selectedObj.offsetTop;
        }
        else if (evt.pageX)
        {
            x= evt.pageX+selectedObj.offsetLeft;
            y= evt.pageY+selectedObj.offsetTop;
        }
    }
    else
    {
        evt = (evt) ? evt : window.event;
        if (evt.clientX)
        {
            x = evt.clientX;
            y = evt.clientY;
        }
        else if (evt.pageX)
        {
            x = evt.pageX;
            y = evt.pageY;
        }
    }
    shiftTo(selectedObj, (x - offsetX), (y - offsetY),true);
    //writeToLog("11");
    /*evt.returnValue=false;
    evt.cancelBubble = true;*/
    cross.cancelBubble(evt);
    return false;
}

function release()
{
//    alert("rel")
    selectedObj.zIndex = 1;
    if(clDialogBox.document)
    {
        clDialogBox.document.onmousemove=objPrevMouseOverHandler;
        clDialogBox.document.onmouseup=objPrevMouseUpHandler;
    }
    document.onmousemove = null;
    document.onmouseup = null;
    bIsChildWindowEvent=false;
    isDragging=false;
    document.onselectstart=null;
    return false;
}

function shiftTo(elemDialogBox, x, y,isIgnoreScroll)
{
//    alert('vshiftTo  '+x+","+ y);
    x = x > 0 ? x :0;
    y = y > 0 ? y:0;
    if(!isIgnoreScroll)
    {
        if(document.body.scrollLeft > 0)
            x += document.body.scrollLeft;
        if(document.body.scrollTop>0)
            y += document.body.scrollTop;
    }
    elemDialogBox.style.left = x;
    elemDialogBox.style.top = y;

}


/**
 *    This method used to a register a instance while loading a screen and ll be removed when page or screen is reloaded or replace by other screen
 */
/*
var clInstanceStore=null;
function registerInstance(sInstanceId,clInstance,iScope)
{

   if(iScope!=Constants.SCOPE_APP)
   {
    if(!clInstanceStore)
       clInstanceStore=new Array();
       clInstanceStore[sInstanceId]=clInstance;
   }

}

function removeAllInstancesFromStore()
{
    if(clInstanceStore)
    {
       var key;
       var value;
       for(key in clInstanceStore)
          delete clInstanceStore[key];

    }
}*/
