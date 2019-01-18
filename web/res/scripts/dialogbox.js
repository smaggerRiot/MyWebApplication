
/* creates HTML Dilaog
 * resources needed:
 *     <script type="text/javascript" src="res/scripts/dialog/SDialogAPI.js"></script>
 *     <script type="text/javascript" src="res/scripts/dialog/SCustReportDialog.js"></script>
 *     <script type="text/javascript" src="res/scripts/dialog/SDialogDrag.js"></script>
 *     <script type="text/javascript" src="res/scripts/uifactory.js"></script>
 *     <link rel="stylesheet" href="res/styles/dialogLayer_winxp.css">
 *     res/images/closeBox_winxp.png
 */

/**
 * Dialog tag heirarchy:
 *  <DIV id=SWindow>
 *      <DIV  id="titlebar" >
 *          <img id="closebox"/>
 *          <span id="STitlebar">STitlebar</span>
 *      </DIV>
 *      <IFRAME> or <DIV> id = contentFrame
 *  </DIV>
 */
var arrDialogBox=[];
var isDiv = false;
function DialogBox(sId,sTitle,x,y,iWidth,iHeight,sUrl,isIFrame,sFormName,isScrollable,isDefaultTemplate,arrActions,isStoreObj,arrResizeIds,isResize,isExcludeJs,isGlobalDlg,isClearOnClose,ignoreAnimation,isSimple,isActionsExist,ignoreMove)
{
//    if(isStoreObj)
        arrDialogBox[sId]=this;
    var me=this;
    this.isShowAfterPageLoad=false;
    var minWidth=100;
    var minHeight=100;
    var currentWidth=0;
    var currentHeight=0;
    var currentClientX =0;
    var currentClientY =0;
    var newClientX =0;
    var newClientY =0;
    var direction='Released';
//    var shade;
    var position;
    var clDialogBox1;
    var bIsChildWindowEvent1 = false;
    var objPrevMouseUpHandler1=null;
    var objPrevMouseMoveHandler1=null;
//    var isDiv = false;
    var isIE = cross.isIE();//( /msie/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent) )
    this.isIFrameLoaded=false;
    this.sOnLoadScript=null;
    this.objHandlerFns=[];
    this.objHandlerFnParams=[];
    this.sErrorHandler=null;
    this.bHide=false;    
    if(isDefaultTemplate==null)
        isDefaultTemplate = true;

    if(isExcludeJs==null || isExcludeJs==undefined)
        isExcludeJs = false;

    if(isResize == undefined)
        isResize = true;
    if(isActionsExist == undefined)
       isActionsExist = true;

//    alert(arrActions)
     var sActions="";
    if(arrActions)
    {
        for(var i=0;i<arrActions.length;i++)
        {
            sActions+= arrActions[i];
            if(i<(arrActions.length-1))
            sActions+="$";
        }
    }
    var sDlgBoxArgs={"id":sId,"title":sTitle,"x":x,"y":y,"width":iWidth,"height":iHeight,"url":sUrl,"isIFrame":isIFrame,"formName":sFormName,
                     "isScrollable":isScrollable,"isDefaultTemplate":isDefaultTemplate,"actions":sActions,"isExcludeJs":isExcludeJs,
                     "isClearOnClose":isClearOnClose,"isGlobalDlg":isGlobalDlg,"ignoreAnimation":ignoreAnimation,"isResize":isResize,"isActionsExist":isActionsExist,"isSimple":isSimple,"ignoreMove":ignoreMove};
        //"sOk":sOk,"sCancel":sCancel,"sOkHandler":sOk,"sCancelHandler":sCancel,


    this.init = function()
    {

        this.sUrl = sUrl;
        this.objContentArea=null; // either div or iframe object of dialogbox
        this.sFormName=sFormName;
        //this.sOnLoadScript="";
        this.iWidth = iWidth;
        this.iHeight = iHeight;

        var iActionsHeight=0,iTitleHeight,iResizeHeight=0,iExtHeight=0;
        iTitleHeight = 20;
        iExtHeight=7; // assume top,bottom paddings
        if(isActionsExist) iActionsHeight = 20;
        if(isResize||!isSimple) iResizeHeight = 11; // img height

        if(!document.getElementById(sId+"SWindow"))
        {
            var objDivWindow = document.createElement("div");
//            shade = document.createElement('div');
//            shade.setAttribute('id', 'shade');



            objDivWindow.id = sId+"SWindow";
            /*if(sTitle!=null)
                objDivWindow.className = "SWindow";
            else objDivWindow.className = "SWindow1";*/
            //objDivWindow.innerHTML ="<img align='right'  id='"+sId+"closebox' src='"+app.getImagePath(true)+"blank.png' class="+(sTitle!=null?"'closebox sModule s-closeDlg'":"'closebox1 sModule s-cross_small'")+">";

            if(isSimple)
            {
                objDivWindow.style.background="#ffffff";
                //objDivWindow.style.border="2px solid #E7E7E7";
            }
            objDivWindow.className = "SWindow";

//            objDivWindow.innerHTML ="<span align='right' style='float: right;' id='"+sId+"closebox' src='"+app.getImagePath(true)+"close.png' ></span>";
            objDivWindow.innerHTML ="<img align='right'  id='"+sId+"closebox' src='"+"res/images/close.png' class="+(!isSimple?"'closebox sModule s-closeDlg'":"'closebox1'")+">";

            var sInnerHTML="";
            //if(sTitle!=null)
            {
                sInnerHTML="<div style='height:"+iTitleHeight+"px;"+(ignoreMove?";cursor:default":"")+"' class='dialogHeader' id='"+sId+"titlebar'>" +
                           " "+(sTitle!=null?"<span id='"+sId+"STitlebar' "+(!isSimple?"style='color:#ffffff'":"")+">"+sTitle+"</span>":"")+
                           "</div>";
            }
            sInnerHTML=sInnerHTML+"<DIV id='"+sId+"centerContainer' align='center' " +
                       " class='centerContainer' style='height:"+(iHeight-(iTitleHeight+iResizeHeight+iExtHeight))+"px;"+(isSimple?'border:0':'')+"'>";

	        sInnerHTML=sInnerHTML+"<DIV  id='"+sId+"centerData' "+(isIFrame?"class='loadingImg'":'')+" style='width:100%;padding-bottom:10px;height:"+(iHeight-(iTitleHeight+iActionsHeight+iResizeHeight+iExtHeight))+"px;"+((!isIFrame&&isScrollable)?"overflow-y:auto'":'overflow:hidden')+"'>";

             if(isIFrame)
            {
               // alert(sId)
                sInnerHTML+="<iframe onload='DialogBox.prototype.onIframeLoad(this,\""+sId+"\")' "+(!isScrollable?" scrolling='no'":"")
                        +" id='"+sId+"contentFrame' name='"+sId+"contentFrame' frameborder='0' style='display:none;width:"+iWidth
                        +";height:"+iHeight+";' class='contentFrame'></iFrame>";
            }
            /*else if(!isIFrame && sUrl)
            {

                isDiv = true;
                sInnerHTML+="<div id='"+sId+"contentFrame' style=' width:"+iWidth+";height:"+(iHeight-40)+";' ></div>";
            }*/

           else
            {
                isDiv = true;
                var sButValue,sFnName="Ok",sAttribute=null,sButtonHTML="";

                sInnerHTML+="<div id='"+sId+"contentFrame' style=' width:"+iWidth+";height:"+(iHeight-40)+";' ></div>";

                if(isActionsExist)
                {
                    if(arrActions)
                    {
                        var sArrAction;
                        for(var i=0;i<arrActions.length;i++)
                        {
                            sArrAction = arrActions[i].split("|");
                            sButValue = sArrAction[0];
                            sFnName = sArrAction[1];
                            if(sArrAction.length>2)
                                sAttribute =  sArrAction[2];

                            //sButtonHTML+="<input type='button' "+ (sAttribute?sAttribute:'') +" style='margin-right:5px;width:50px;cursor:pointer;' class='nButton' id='"+sButValue+"' name='"+sButValue+"' value='"+sButValue+"' onclick='DialogBox.prototype.eventHandler(this,\""+sFnName+"\")'>";
                            sButtonHTML+="<a  "+ (sAttribute?sAttribute:'') +" style='margin-right:5px' class='nButton' id='"+sButValue+"' name='"+sButValue+"' href='javascript:void(0)'" +
                                         " onclick='DialogBox.prototype.eventHandler(this,\""+sFnName+"\");' onmouseup='CLButtonUtil.onMouseUp(this);' onmousedown='CLButtonUtil.onMouseDown(this);' onmouseout='CLButtonUtil.onMouseOut(this);' onmouseover='CLButtonUtil.onMouseOver(this);'>"+sButValue+"</a>";
                        }
                    }

                    sButtonHTML="<div align='right' style='height:25px;"+(isSimple?"":"border-top:1px solid #B9CAD5;background:gainsboro")+"'><table><tr><td align=right>"+sButtonHTML;
                    sButtonHTML+="</td></tr></table>";
                    sButtonHTML+="</div>";
                }
            }
            sInnerHTML=sInnerHTML+"&nbsp;</DIV>";  //End of Data Div

            if(isActionsExist)
            {
                sInnerHTML=sInnerHTML+"<DIV id='"+sId+"frameActions'  class='bottomData' align='right' "+(isSimple?"style='background-color:#fff;border:0'":"")+">";
                if(sButtonHTML)
                    sInnerHTML=sInnerHTML+sButtonHTML;

                sInnerHTML=sInnerHTML+"</DIV></DIV>";    //End of Center Container
            }

            objDivWindow.innerHTML +=sInnerHTML;

            //objDivWindow.innerHTML +="<img id='"+sId+"imgId' align=right src='"+app.getImagePath()+"drag.PNG' alt='Drag' style='MARGIN-TOP: 10px;position:relative;background:transparent;cursor:se-resize;'>";

            if(isResize)
                objDivWindow.innerHTML +="<img id='"+sId+"imgId' align=right src='"+app.getImagePath(true)+"blank.png' class='sPref s-drag'alt='Drag' " +
                                     "style='position:absolute;cursor:se-resize;right:1px;bottom:1px;'>&nbsp;";



            var ObjContainerDiv;
            //if(!isGlobalDlg)
             //   ObjContainerDiv =  document.getElementById("dvCenter");
            //else
                ObjContainerDiv =  document.getElementById("containerDiv");

            if(ObjContainerDiv)
                ObjContainerDiv.appendChild(objDivWindow);
            else
                window.document.body.appendChild(objDivWindow);

            if(isResize)
                document.getElementById(sId+"imgId").onmousedown=this.getDivPosition;
            document.getElementById(sId+"closebox").onclick= this.hide;
        }
        else
        {
            var objImg = document.getElementById(sId+"closebox");
            objImg.onclick = this.hide;
            if(isIFrame && isResize)
                document.getElementById(sId+"imgId").style.marginTop = (iHeight-30);
        }

        this.objContentArea=document.getElementById(sId+"contentFrame");

        if(isIFrame)
        {

            util.addClass(this.objContentArea.parentNode,'loadingImg');
            this.objContentArea.style.display="none";
            this.objContentArea.style.width = iWidth;
            this.objContentArea.style.height = iHeight;
        }
        else
        {
            util.removeClass(this.objContentArea.parentNode,'loadingImg');
            cross.setVisible(this.objContentArea,true);
            this.objContentArea.style.width = iWidth;
            this.objContentArea.style.height = (iHeight-40);
        }

        if(!this.dialog)
            this.dialog = new Dialog(sDlgBoxArgs);
        if(!isIFrame && sUrl)
            me.setDialogUI();

    };

    this.setDialogUI = function()
    {

         var sURL;
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

            if(sDlgBoxArgs["isDefaultTemplate"])
            {
                var sSrc=clAppBuffer.getContextPath()+"/dialogTemplate.action?url="+escape(sUrl2);
                sSrc+="&actions="+sDlgBoxArgs["actions"]+"&"+sResult+"&dialogName="+sDlgBoxArgs["id"]+"&isIFrame="+false;
                sSrc+="&dlgWidth="+sDlgBoxArgs["width"]+"&dlgHeight="+sDlgBoxArgs["height"]+"&isExcludeJs="+sDlgBoxArgs["isExcludeJs"];
                sSrc+="&isDialog=true";
                sURL = sSrc;
            }
            else
                sURL = sDlgBoxArgs["url"];
        }
        con.sendPostRequest(sURL,null,this.handleResponse,null,con.RESPONSE_HTML);
    };

    this.handleResponse = function(sResponse)
    {
        initAllCombos=null;
        var objContentPane = me.getContentPane();
        objContentPane.innerHTML=sResponse;
        cross.setVisible(objContentPane,true);
        loadResources(objContentPane,me.onScriptsLoad);
    };

    this.onScriptsLoad = function()
    {
        util.onScriptsLoad();
        util.toggleBackground(true,true);
        me.handleOnLoad();
    };

    this.setCenter=function()
    {
        this.x = document.body.clientWidth / 2;
        this.y = document.body.clientHeight / 2;
        this.x-= this.iWidth / 2;//(640/2);
        this.y-= this.iHeight / 2;//(410/2);

        /*if(document.body.scrollLeft > 0)
            this.x += document.body.scrollLeft;
        if(document.body.scrollTop>0)
            this.y += document.body.scrollTop;*/

        this.dialog.setXY(this.x,this.y);
    };

    this.setOnClose= function(onClose)
    {
        this.onCloseFunc=onClose;
    };

    this.setTitle = function(sTitle)
    {
        var objSpan = document.getElementById(sId+"STitlebar");//this.objContentArea.parentNode.getElementsByTagName("SPAN")[0];
        objSpan.innerHTML = sTitle;
    };

    this.setShowAfterPageLoad=function(isShowAfterPageLoad)
    {
        this.isShowAfterPageLoad=isShowAfterPageLoad;
    };

    this.setURL = function(sURL)
    {
        //alert("setUrl "+sURL)
        this.sUrl = sURL;
        if(this.dialog)
            this.dialog.setURL(sURL);
    };

    this.setBounds=function(x,y,iWidth,iHeight)
    {
        this.iWidth=iWidth;
        this.iHeight=iHeight;
        me.dialog.setBounds("",x,y,iWidth,iHeight);
    };

    // Calls the function present in iframe document. if iframe window not loaded yet,
    // then it stores the function calling script in variable 'sOnLoadScript' that needs to be evaluated on page load of iframe.
    // params: 1 - handler name, 2 - fieldname, 3 - field value

    /*this.setFldValue = function(handler,sFieldName,sFieldValue)
    {
        if(this.isIFrameLoaded)
            eval("this.objContentArea.contentWindow."+handler+"('"+sFieldName+"','"+sFieldValue+"');");
        else
            this.sOnLoadScript = this.sOnLoadScript + handler+"('"+sFieldName+"','"+sFieldValue+"');";
    };*/

    /**
     *  Adds form content to contentpane. This method must be called after appending elements to form.
     **/
    this.addFormContent = function(objForm,objContentPane)
    {
        objForm.appendChild(objContentPane.parentNode);
    };

    // Calls the javascript function in iframe by passing parameter.
    // params : function name, parameters
    this.callFn = function(handler,sParam,sTargetObj)
    {
        if(isIFrame)
        {
            var sDlgWindow='window.frames["'+sId + 'contentFrame"]';
            if(this.isIFrameLoaded)
                cross.callFunction(window.frames[sId + "contentFrame"],eval(sDlgWindow+"."+handler),sParam);
            else
            {
                this.objHandlerFns[this.objHandlerFns.length]=sDlgWindow+"."+handler;
                this.objHandlerFnParams[this.objHandlerFns.length-1]=sParam;
            }
        }
        else //todo need to check....
        {
            this.objHandlerFns[this.objHandlerFns.length]=handler;
            this.objHandlerFnParams[this.objHandlerFns.length-1]=sParam;
        }
    };

    this.getContentPane = function()
    {
        return this.objContentArea;
    };
    this.getContentPaneWindow=function()
    {
        return  this.objContentArea.contentWindow;
    };
    this.getContentPaneDocument = function()
    {
        return this.objContentArea.contentWindow.document;
    };

   // shows dialog
    this.show = function()
    {
        util.toggleBackground(true,true,null,false,true);
        me.dialog.sFormName = me.sFormName; //assigning form name to dialog box to disable fields
        if(!this.isShowAfterPageLoad)
            me.dialog.showDialog();
    };

    this.cancelHandler = function(btn,sHandler)
    {
        if(sHandler)
        {
            if(isIFrame)
            {
                var sDlgWindow='window.frames["'+sId + 'contentFrame"]';
                cross.callFunction(window.frames[sId+"contentFrame"],eval(sDlgWindow+"."+sHandler));
            }
            else
            {
                var objFn = eval(sHandler);
                objFn.apply(null,[btn]);
            }
        }
        this.hide();

    };

     this.getActionsDiv = function()
    {
        return document.getElementById(sId+"frameActions");
    };

    // closes dialog
    this.hide = function()
    {
        util.toggleBackground(false,true);

//        if(isIFrame)
//            con.closeErrorDiv(window.frames[sId+"contentFrame"]);
        //else
           // con.closeErrorDiv(sId+"contentFrame");


        if(me.dialog.objDialog.visible)
          {
            if(me.onCloseFunc)
            {
                if(typeof window[me.onCloseFunc]=="function") // looking for onclose function in the window where dialogbox is created
                {
                    me.onCloseFunc();
                }
                else
                  eval(me.onCloseFunc)();

            }
            if(me.dialog)
            {
              //  me.dialog.closeDialog();
                if(!ignoreAnimation)
                    me.dialog.zoomOut();
                else
                    me.dialog.afterZoomOut();
            }
//              toggleBackground(false);
               //me.dialog=null;
          }

        /*var objDivWindow=document.getElementById(sId+"SWindow");
        objDivWindow.parentNode.removeChild(objDivWindow);*/

    };

    //resize related functions
    this.getDivPosition = function(mouse)
    {
        mouse=mouse?mouse:window.event;
        direction='Pressed';
        // Save the cursor position to its corresponding global variable
        if(isIE)
        {
            currentClientX =(mouse.clientX);
            currentClientY =(mouse.clientY);
        }
        else
        {
            currentClientX =(mouse.pageX+2);
            currentClientY =(mouse.pageY+2);
        }

        // Save the Current Div height to a local variable
        var tempHeight=document.getElementById(sId+"SWindow").style.height;
        var tempWidth=document.getElementById(sId+"SWindow").style.width;

        //  Remove the px from the value retrieved from above line of code
        var widthArray=tempWidth.split('p');
        var heightArray=tempHeight.split('p');
        currentWidth = parseInt(widthArray[0]);
        currentHeight = parseInt(heightArray[0]) ;

        if(!isIE)
        {
            if(getDialogBox(sId).getContentPane().contentWindow)
                clDialogBox1=getDialogBox(sId).getContentPane().contentWindow;
            else
                clDialogBox1=getDialogBox(sId).getContentPane();
            var clIframeDoc=clDialogBox1.document;
            bIsChildWindowEvent1 = false;
            if(clIframeDoc )
            {
                objPrevMouseMoveHandler1=clIframeDoc.onmousemove;
                objPrevMouseUpHandler1=clIframeDoc.onmouseup;
                clIframeDoc.onmousemove=function(evt)
                {
                    bIsChildWindowEvent1=true;
                    me.SetDivPosition(evt);
                };
                clIframeDoc.onmouseup=function()
                {
                    me.stopDrag();
                };
            }
            document.onmousemove=function(evt)
            {
                bIsChildWindowEvent1=false;
                me.SetDivPosition(evt);
            };
        }
        else
            document.onmousemove=me.SetDivPosition;
        document.onmouseup=me.stopDrag;
        return false;
    };

    this.SetDivPosition = function(evt)
    {
        var objWindow = document.getElementById(sId+"SWindow");
        if(bIsChildWindowEvent1)
        {
            evt = (evt) ? evt : clDialogBox1.event;
            if (evt.clientX)
            {
                newClientX= evt.clientX+objWindow.offsetLeft;
                newClientY= evt.clientY+objWindow.offsetTop;
            }
            else if (evt.pageX)
            {
                newClientX= evt.pageX+objWindow.offsetLeft;
                newClientY= evt.pageY+objWindow.offsetTop;
            }
        }
        else
        {
            evt = (evt) ? evt : window.event;
            if (evt.clientX)
            {
                newClientX = evt.clientX;
                newClientY = evt.clientY;
            }
            else if (evt.pageX)
            {
                newClientX = evt.pageX;
                newClientY = evt.pageY;
            }
        }
//            window.status = "newClientX     "+newClientX+"  newClientY  "+newClientY;

        if(direction=='Pressed')
        {
            // Calculate The mouse movement in pixels
            var moveToX_Axies=parseInt(newClientX-currentClientX)+document.body.scrollLeft;
            var moveToY_Axies=parseInt(newClientY-currentClientY)+document.body.scrollTop;

            // Add the mouse movement to the first div height
            var newDivWidth=parseInt(currentWidth+moveToX_Axies);
            var newDivHeight=parseInt(currentHeight+moveToY_Axies);

            if(newDivHeight>minHeight && newDivWidth>minWidth)
            {
                // Set the Div Width and Height
                //iHeight-iTitleHeight-iExtHeigh

              //  objContainer.style.height= newDivHeight+'px';
                objWindow.style.width= newDivWidth+'px';
                objWindow.style.height= newDivHeight+'px';

                if(isIFrame)
                {
                    document.getElementById(sId+"imgId").style.marginTop= (newDivHeight-31)+'px';

                }
                //else
                  //  this.objContentArea.style.height= (newDivHeight-40)+'px';

                document.getElementById(sId+"centerContainer").style.height=(newDivHeight-38);
                document.getElementById(sId+"centerData").style.height=(newDivHeight-78);

                if(arrResizeIds)
                {
                    for(var i=0; i<arrResizeIds.length;i++)
                    {
                        var objFld;
                        objFld = window.frames[sId+ "contentFrame"].document.getElementById(arrResizeIds[i]);
                        if(!objFld.iActualWidth)
                        {
                            objFld.iActualWidth = objFld.offsetWidth;
                            objFld.parentNode.iActualWidth = objFld.parentNode.offsetWidth;
                            objFld.iActualHeight = objFld.offsetHeight;
                        }
                        objFld.style.width = objFld.iActualWidth + objFld.parentNode.offsetWidth-objFld.parentNode.iActualWidth;
                        objFld.style.height = objFld.iActualHeight+moveToY_Axies;
                    }
                }
                //centerContainer
            }
        }
        return false;
    };

    this.stopDrag = function()
    {
        direction='Released';
        if(!isIE)
        {
            if(objPrevMouseMoveHandler1!=null)
            {
                clDialogBox1.document.onmousemove=objPrevMouseMoveHandler1;
                clDialogBox1.document.onmouseup=objPrevMouseUpHandler1;
            }
        }
        bIsChildWindowEvent1=false;
        document.onmousemove=null;
        document.onmouseup=null;
        return false;
    };

    this.onLoad = function(handler,sParam)
    {
          this.callFn(handler,sParam);
     };

    this.handleOnLoad = function()
    {
        if(this.objHandlerFns.length > 0)
        {
            for(var i=0; i < this.objHandlerFns .length; i++)
            {
                if(isIFrame)
                    cross.callFunction(window.frames["'"+sId+ "contentFrame'"],eval(this.objHandlerFns[i]),this.objHandlerFnParams[i]);
                else
                    cross.callFunction(window,eval(this.objHandlerFns[i]),this.objHandlerFnParams[i]);
            }
        }
        this.objHandlerFns=[];
        this.objHandlerFnParams=[];
        if(this.isShowAfterPageLoad)
            me.dialog.showDialog();
    };

    this.onClose= function(onClose)
    {
       this.setOnClose(onClose);
    };

    this.init();

    this.showExceptionMsgInDailog=function(sStatusCode,sStatusMsg)
    {
        if(this.sErrorHandler)
            cross.callFunction(window,eval(this.sErrorHandler));
        else
        {
            if(sStatusCode)
            {
                msg.showMessage(0,sStatusMsg,"Message");
                me.dialog.afterZoomOut();
            }
            else
            {
                if(this.bHide)
                    this.show();
            }
        }
    }

    this.setErrorHandler=function(sErrorHandler)
    {
        this.sErrorHandler=sErrorHandler
    }

    this.isHide=function(bHide)
    {
        this.bHide=bHide
    }
}

function getDialogBox(sId)
{
    return arrDialogBox[sId];
}

DialogBox.prototype.onIframeLoad=function(objIframe,sDialogBoxId)
{
    if(!objIframe.src)
        return;
    objIframe.style.display="";
    util.removeClass(objIframe.parentNode,'loadingImg');
   var objDialobox=arrDialogBox[sDialogBoxId];
//   alert("iframe loaded:"+objDialobox.sOnLoadScript);
   objDialobox.isIFrameLoaded=true;
   objDialobox.handleOnLoad();
};

/*
function createCallback2(obj, fn, args)
{
//    var arrArguments=args;
    return new function()
    {

        //alert(args.length+"--------"+(typeof args));
        if(typeof args=="object")
        {
            fn.apply(obj, args);
            */
/*for (var i = 0; i < args.length; i++)
            {
                newargs.push(args[i]);
            }*/
/*
        }
        else
        {
            var newargs = [];
            newargs.push(args);
            //alert(fn+","+newargs)
            fn.apply(obj, newargs);
        }
    };
};
*/

DialogBox.prototype.eventHandler = function(bt,handler)
{
    if(handler.indexOf(".do")==-1)
    {
        var obj,sFnName;
        obj = handler.substring(0,handler.indexOf("."));
        sFnName = handler.substring(handler.indexOf(".")+1);
        cross.callFunction(obj,eval(handler),[bt]);
//        var objFn=eval(handler);
//        objFn.apply(null,[]);
    }
      else
        parent.document.getElementById("context").src=handler;
};
