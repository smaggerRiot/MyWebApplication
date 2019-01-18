/*
////////////////////////////////  showToastMsg, showInfoMsg, showConfirm, showMessage////////////////////////////////
*/
var msg=new function()
{
    var me=this;
    me.sLastToastWindowId=null;
    me.iTWindowListenerId=0;

    /**
     * This function is used for show toast message
     * @param sMessage
     * @param iInterval
     */
    this.showToastMsg=function(sMessage,iInterval,isSlideUp)
    {       
        var objToastMsg = document.getElementById("dvToastMsg");
        if(!objToastMsg)
        {
            objToastMsg = document.createElement("div");
            objToastMsg.id="dvToastMsg";
            document.body.appendChild(objToastMsg);
            objToastMsg.className = "toast_def";                                    
        }
        objToastMsg.style.width = 270;
        var t,iVal=270;
        if(!isSlideUp)
        {
            util.removeClass(objToastMsg,'toastMsgSlideUp');
            me.runToastMsgAnimate(objToastMsg,{right: '-='+iVal+'px'},{right: '+='+iVal+'px'},true,500);
        }
        else
        {
            iVal=100;
            util.addClass(objToastMsg,'toastMsgSlideUp');
            me.runToastMsgAnimate(objToastMsg,{bottom: '-='+iVal+'px'},{bottom: '+='+iVal+'px'},true,1500);
        }
        objToastMsg.innerHTML=sMessage;
        if(!iInterval)
            iInterval=5000;

        clearTimeout(t);
        t=setTimeout(function()
        {
            if(!isSlideUp)
                me.runToastMsgAnimate(objToastMsg,{right: '-='+iVal+'px'},{right: '+='+iVal+'px'},false,500);
            else
                me.runToastMsgAnimate(objToastMsg,{bottom: '-='+iVal+'px'},{bottom: '+='+iVal+'px'},false,1000);
        },iInterval);

        objToastMsg.onclick=function()
        {
            cross.setVisible(objToastMsg,false);
        };

        objToastMsg.onmouseover=function()
        {
            clearTimeout(t);
        };

        objToastMsg.onmouseout=function()
        {
            t=setTimeout(function()
            {
                if(!isSlideUp)
                    me.runToastMsgAnimate(objToastMsg,{right: '-='+iVal+'px'},{right: '+='+iVal+'px'},false,500);
                else
                    me.runToastMsgAnimate(objToastMsg,{bottom: '-='+iVal+'px'},{bottom: '+='+iVal+'px'},false,1000);
            },500);

        };
    };

    this.runToastMsgAnimate=function(element,arrProp1,arrProp2,isShow,iInterval)
    {
        if(isShow)
            $(element).animate(arrProp1, 0,null, function(){cross.setVisible(element,true);$(element).animate(arrProp2, iInterval);});
        else
            $(element).animate(arrProp1, iInterval,null,function(){$(element).animate(arrProp2, 0, null,cross.setVisible(element,false));});
    };


    this.maximizeElement=function(element, fnHandler)
    {
        var objCenter,objAnimante,iPositions;
        var iWidth,iHeight,iLeft,iTop, iCenterHeight,iClientWidth,iClientHeight;

        objCenter=document.getElementById("dvCenter");
        objAnimante = document.getElementById("elmntAnimate");

        //iCenterHeight = objCenter.offsetHeight;
        iClientWidth = document.body.clientWidth;
        iClientHeight = document.body.clientHeight;
        iWidth = element.offsetWidth;
        iHeight = element.offsetHeight;
        iPositions = cross.getPosition(element);
        iLeft=  iPositions[0];
        iTop=iPositions[1];

        var objNextNode = element.nextSibling;
        while (objNextNode && objNextNode.nodeType!=1)
        {
            objNextNode=objNextNode.nextSibling;
        }

        element.oldSibling=objNextNode;
        element.oldParent=element.parentNode;

        if(!objAnimante)
        {
            objAnimante = document.createElement("DIV");
            objAnimante.id = "elmntAnimate";
            objAnimante.className='dashletMax';
        }

        objAnimante.style.width =iWidth+"px";
        objAnimante.style.height =iHeight+"px";
        objAnimante.style.left = iPositions[0]+"px";
        objAnimante.style.top = iPositions[1]+"px";

        objAnimante.appendChild(element);
        objCenter.appendChild(objAnimante);

        iWidth=objCenter.offsetWidth-iWidth;
        iHeight=objCenter.offsetHeight-iHeight;

        iPositions = cross.getPosition(objCenter);
        iLeft=-(iPositions[0] -iLeft+5);
        iTop= -(iPositions[1] -iTop+5);

        iClientHeight =  (iClientHeight - iPositions[1]);
        iClientHeight= iClientHeight-20;

        element.iAnimWidth = iWidth;
        element.iAnimHeight = iHeight;
        element.iAnimLeft = iLeft;
        element.iAnimTop = iTop;

        $(objAnimante).animate({"height": "+="+iHeight+"px", "width": "+="+iWidth+"px","left": "-="+(iLeft)+"px","top": "-="+(iTop)+"px"}, 400,null, fnHandler);
    };

    this.restoreElement=function(element, fnHandler)
    {
        var objAnimante,iWidth,iHeight,iLeft,iTop;

        objAnimante = document.getElementById("elmntAnimate");
        iWidth =element.iAnimWidth;
        iHeight =element.iAnimHeight;
        iLeft =element.iAnimLeft;
        iTop =element.iAnimTop;

        $(objAnimante).animate({"height": "-="+iHeight+"px", "width": "-="+iWidth+"px","left": "+="+(iLeft)+"px","top": "+="+(iTop)+"px"}, 400,null,callBack);

        function callBack()
        {
            var elementParent=element.oldParent;
            var objNextNode = element.oldSibling;

            if(objNextNode)
                elementParent.insertBefore(element,objNextNode);
            else
                elementParent.appendChild(element);


            if(fnHandler)
                fnHandler();

            if(objAnimante && objAnimante.parentNode)
                objAnimante.parentNode.removeChild(objAnimante);
        }
    };

    /**
     * This function is used for show the information message
     * @param element
     * @param sMessage
     * @param iInterval if interval is lessthan or equal to zero the information dialog cannot be closed
     */
    this.showToastWindow=function(element ,
                                  sMessage,
                                  iInterval ,
                                  sTitle,
                                  iWidth ,
                                  isModel,
                                  isProng,
                                  sId,
                                  iProngType,
                                  isClose,
                                  sAppendClass,
                                  sRemoveClass,
                                  ignoreWithInClick,
                                  iScope,
                                  scrollObject,
                                  ignoreRegisterEvent,
                                  sHideCallBack)
    {
        me.objLastParent;
        var dvTWindow,objTWindow,iLeft,iTop;
        var iPositions = cross.getPosition(element);

        if(me.objLastParent)
            util.removeClass(me.objLastParent,"TWindowParent");
        me.objLastParent=element;
        if(me.sLastToastWindowId && me.sLastToastWindowId !=sId)
        {
            dvTWindow = me.getToastWindowElement(me.sLastToastWindowId);
            if(dvTWindow != null)
            {
                 cross.setVisible(dvTWindow,false);
            }
        }
        if(!sId) sId ="";
        objTWindow = me.getToastWindowElement(sId);
        if(!objTWindow)
        {
            var ObjContainerDiv =  document.getElementById("containerDiv");
            objTWindow = document.createElement("div");
            objTWindow.id=me.getToastWindowId(sId);
         // objTWindow.className="toastwin";//("scope",iScope);
            objTWindow.setAttribute("scope",iScope);

            if(ObjContainerDiv)
                ObjContainerDiv.appendChild(objTWindow);
            else
                document.body.appendChild(objTWindow);
        }
        me.sLastToastWindowId = sId;

        if(isModel == undefined || isModel == null)
            isModel=false;

        /*if(isProng == undefined || isProng == null)
         isProng=false;*/
        util.toggleBackground(isModel,isModel);
        var sInnerHTML="<div  class='innInfo'><table border='0' cellspacing='0' cellpadding='0'";
        if(iWidth)
            sInnerHTML+=" width='100%'";
        sInnerHTML+="><tr>" +((sTitle!=undefined ||sTitle!=null )?"<td><span  "+(iWidth? 'style="width:'+(iWidth-50)+';"':'')+" class='infoHeading'>"+ sTitle+"</span></td>" :"");
        if(isProng && isClose)
        {
            sInnerHTML+="<td><img id='infoClose"+sId+"' height='22px;' style='visibility:hidden;cursor:pointer;' align='right' ";
            // sInnerHTML+=" src='"+app.getImagePath()+"closeDlg.gif'> </td>";
            sInnerHTML+=" src='"+app.getImagePath(true)+"blank.png' class='sModule s-closeDlg'> </td>";
            cross.addListener(document.getElementById('infoClose'+sId),cross.EVENT_ONCLICK,msg.hideToastWindowDlg,true,[isModel,sId,element,sAppendClass,sRemoveClass,ignoreWithInClick,sHideCallBack]);
        }
        sInnerHTML+="</tr><tr><td id='"+me.getToastWindowContentId(sId)+"' class='infoMsgBody' "+(!isClose ? "style='padding-top:5px;'":"")+" colspan=2></td></td></tr></table></div>";
        objTWindow.innerHTML=sInnerHTML;
        if(iWidth)
            objTWindow.style.width = iWidth +'px';

        if(typeof sMessage == "object")
            me.getToastWindowContentElement(sId).appendChild(sMessage);
        else
            me.getToastWindowContentElement(sId).innerHTML ="<span>"+sMessage+"</span>";

        if(isProng)
        {
            var iScrollTop=0,iScrollLeft=0,iScrollTop2=0,sAppendStyle,iBottom,iRight,isProngSupport=true,iProngPosition=-1;
            objTWindow.className = "info";
            iRight = (document.body.clientWidth-iPositions[0]); //- iWidth ;
            iBottom =  document.body.clientHeight  - iPositions[1];
            iRight = iRight - element.offsetWidth/2;
            iRight =iRight  - 20;

            if (cross.isIE())
            {
                //iRight =iRight  - 20;
                iBottom =iBottom  - 15;//element.offsetHeight;
                if(cross.getBrowserVersion() < 7)
                    isProngSupport=false;
                iScrollTop = parseInt(ObjContainerDiv.scrollTop);
                iScrollLeft = parseInt(ObjContainerDiv.scrollLeft);
                if(scrollObject)
                {
                    iScrollLeft=iScrollLeft+parseInt(scrollObject.scrollLeft);
                    iScrollTop2=parseInt(scrollObject.scrollTop);
                    iScrollTop=iScrollTop+iScrollTop2;
                }
            }
            else
            {
                iScrollTop = parseInt(window.scrollY);
                //iScrollLeft = parseInt(window.scrollX);
                if(scrollObject)
                {
                    iScrollLeft=iScrollLeft+scrollObject.scrollLeft;
                    iScrollTop2=scrollObject.scrollTop;
                    iScrollTop=iScrollTop+iScrollTop2;
                }
            }

            iBottom+=iScrollTop2;

            sAppendStyle = "right:40px;";
            if(iProngType==undefined||iProngType==null)
                iProngType = Constants.PRONG_BOTTOM;
            if(element.offsetWidth<5)
                sAppendStyle = "left:10px;";
            if((iPositions[1]-iScrollTop) < objTWindow.offsetHeight)
            {
                //iProngType = Constants.PRONG_BOTTOM;
                iBottom = (iBottom-objTWindow.offsetHeight);
            }
            if((iPositions[0]-iScrollLeft) < objTWindow.offsetWidth)
            {
                sAppendStyle  =  "left:20px;";
                iRight = (iRight -objTWindow.offsetWidth);
            }
            if(iProngType == Constants.PRONG_NONE ||iProngType == Constants.PRONG_LEFT || iProngType == Constants.PRONG_RIGHT)
            {
                iProngPosition = 20;

                iLeft=(iProngType==Constants.PRONG_NONE?5:15);
                if(iProngType!=Constants.PRONG_NONE &&(document.body.clientWidth < (iLeft+iPositions[0]+objTWindow.offsetWidth+element.offsetWidth )))
                {
                    iLeft =(iPositions[0]-iLeft-objTWindow.offsetWidth);
                    iProngType = Constants.PRONG_RIGHT;
                }
                else iLeft = iPositions[0]+iLeft+element.offsetWidth ;

                iTop=iPositions[1]-iProngPosition;

                objTWindow.style.left = iLeft-iScrollLeft;/*todo:change*///iPositions[0] + element.offsetWidth + (iProngType==Constants.PRONG_NONE?5:15);
                //if((document.body.clientHeight - (iPositions[1]+element.offsetHeight+iScrollTop)) < (objTWindow.offsetHeight))
                //   objTWindow.style.top = (iPositions[1]-objTWindow.offsetHeight) + (document.body.clientHeight - (iPositions[1]+element.offsetHeight))+iScrollTop;
                // else
                objTWindow.style.top = iTop;
            }
            else
            {
                objTWindow.style.right =  (iRight+iScrollLeft)+'px';
                if(iProngType == Constants.PRONG_BOTTOM)
                    objTWindow.style.bottom = iBottom+'px';
                else
                    objTWindow.style.top = (iPositions[1]-iScrollTop2+element.offsetHeight)+'px';
            }
            if(isProngSupport && iProngType!=Constants.PRONG_NONE)
                objTWindow.childNodes[0].innerHTML += me.getProng(sAppendStyle,iProngType,iProngPosition);
        }
        else
        {
            objTWindow.className = "dvURLTWindow";
            $(element).addClass("TWindowParent");
            iLeft=0;
            if(!iWidth)
                objTWindow.style.width=objTWindow.offsetWidth;
            if(document.body.clientWidth < (iPositions[0]+objTWindow.offsetWidth))
                iLeft = (iPositions[0]-objTWindow.offsetWidth) + element.offsetWidth;
            else
                iLeft = iPositions[0];
            //objTWindow.style.left = iLeft-((ObjContainerDiv?ObjContainerDiv.scrollLeft:0)+document.body.scrollLeft);
            objTWindow.style.left = iLeft;
            objTWindow.style.top = (iPositions[1] + (element.offsetHeight-1.5));
        }

        if(isProng)
        {
            var t;
            clearTimeout(t);
            if(iInterval &&iInterval>0)
            {
                t=setTimeout(function()
                {
                    me.hideToastWindowDlg(isModel,sId,element,sAppendClass,sRemoveClass,ignoreWithInClick,sHideCallBack);
                    util.removeClass(element,"TWindowParent");
                },iInterval);
            }
            objTWindow.onmouseover=function()
            {
                if(document.getElementById("infoClose"+sId))
                    document.getElementById("infoClose"+sId).style.visibility = "visible";
                clearTimeout(t);
            };
            objTWindow.onmouseout=function()
            {
                objTWindow.className = "info";
                if(document.getElementById("infoClose"+sId))
                    document.getElementById("infoClose"+sId).style.visibility = "hidden";
                if(iInterval &&iInterval>0)
                {
                    t=setTimeout(function()
                    {
                        me.hideToastWindowDlg(isModel,sId,element,sAppendClass,sRemoveClass,ignoreWithInClick,sHideCallBack);
                        util.removeClass(element,"TWindowParent");
                    },2000);
                }
            };
        }
        if(me.iTWindowListenerId >= 0)
            cross.unregisterEventListener(me.iTWindowListenerId);
        if(!ignoreRegisterEvent)
            me.iTWindowListenerId =cross.registerEventListener(cross.EVENT_ONCLICK,msg.hideToastWindowDlg,[isModel,sId,element,sAppendClass,sRemoveClass,ignoreWithInClick,sHideCallBack]);
    };





    this.showImage=function(element , sImgUrl, iWidth, iHeight,isShowOriginalImg)
    {
        var objImgPreview = document.getElementById("dvImgPreview");
        
        if(!objImgPreview)
        {
            objImgPreview = document.createElement("div");
            objImgPreview.id="dvImgPreview";
            objImgPreview.className = "msg-def dvImgPrev";

            var objContainerDiv =  document.getElementById("containerDiv");
            if(objContainerDiv)
                objContainerDiv.appendChild(objImgPreview);
            else
                document.body.appendChild(objImgPreview);
        }

        var sInnerHTML="<div";
        sInnerHTML+=">";
        sInnerHTML+="<div>&nbsp;<img id='imgPrevClose' class='imgPrevClose' width='22'  height='22' src="+app.getImagePath(false)+"close-black.gif>";
        sInnerHTML+="</div><div id='dvImgPrevBody' class='dvImgPrevBody'";
        if(isShowOriginalImg)
            sInnerHTML+=" style='overflow:auto'";
        sInnerHTML+="><img id='imgUrl' onload='msg.resizeImage(this,"+isShowOriginalImg+")'  style='cursor:pointer;' src="+sImgUrl+">";
        sInnerHTML+="</div></div>";

         /*objImgPreview.style.left = (  (cross.getClientWidth()/2) -(iWidth/2)+(window.scrollX) ) +"px";//(iPositions[0]) ;
         objImgPreview.style.top = ( ( (cross.getClientHeight()/2)- (iHeight/2))+(window.scrollY)) +"px";//(iPositions[1]);*/

        objImgPreview.innerHTML=sInnerHTML;

        //util.toggleBackground(false,true);
    };


    /**
     * This function is used for show the image
     */
    this.isZooming=false;
    this.resizeImage=function(image,isShowOriginalImg)
    {
        if(me.isZooming)
            return false;

         me.isZooming=true;

        var iWidth=0,iHeight=0;
        iWidth=image.width;
        iHeight=image.height;


        var iPercent;
        var iMaxWidth=(cross.getClientWidth());
        var iMaxHeight=(cross.getClientHeight()-70);

        //alert(iHeight+"===="+iWidth);
        //alert("max "+iMaxHeight+"===="+iMaxWidth);

        if(isShowOriginalImg)
        {
            if(iWidth>iMaxWidth)
                iWidth=iMaxWidth-25;
            if(iHeight>iMaxHeight)
                iHeight=iMaxHeight;
        }
        else
        {
            image.style.width="100%";
            image.style.height="100%";

            if(iWidth > iMaxWidth)
            {
                iPercent=(iMaxWidth/iWidth)*100;
                iWidth=iMaxWidth;
                iHeight=iHeight*(iPercent/100);
            }

            if(iHeight>iMaxHeight)
            {
                iPercent=(iMaxHeight/iHeight)*100;
                iHeight=iMaxHeight;
                iWidth=iWidth*(iPercent/100);
            }
        }

        //alert(iHeight+"===="+iWidth);
        //alert(iMaxWidth+"===="+iWidth);

        var dvImgPrevBody=document.getElementById('dvImgPrevBody');
        dvImgPrevBody.style.width=iWidth+20;
        if(iHeight == iMaxHeight)
        {
            dvImgPrevBody.style.height=iHeight-35;            
        }
        else
        {
            dvImgPrevBody.style.height=iHeight;
            iHeight=iHeight+25;
        }



        var objImgPreview = document.getElementById("dvImgPreview");
        objImgPreview.style.width = 0;
        objImgPreview.style.height = 0;
        objImgPreview.style.left = (  (cross.getClientWidth()/2) -(iWidth/2)+(window.scrollX) ) +"px";//(iPositions[0]) ;
        objImgPreview.style.top = ( ( (cross.getClientHeight()/2)- (iHeight/2))+(window.scrollY)) +"px";//(iPositions[1]);
        //objImgPreview.style.display='block';



         $(objImgPreview).animate({"height": "+="+iHeight+"px", "width": "+="+(iWidth+20)+"px",
            "left": "="+((cross.getClientWidth()/2) -(iWidth/2)+(window.scrollX))+"px",
            "top": "="+(((cross.getClientHeight()/2)- (iHeight/2))+(window.scrollY))+"px"}, 300,null
                 ,function()
                 {
                     me.isZooming=false;

                     objImgPreview.style.display='block';
                     var imgPreviewClose=document.getElementById("imgPrevClose");

                     cross.addListener(imgPreviewClose,cross.EVENT_ONCLICK,msg.removeImage,true,[objImgPreview,iHeight,iWidth,imgPreviewClose,cross.EVENT_ONCLICK]);
                     cross.addListener(document,cross.EVENT_ONKEYUP,msg.removeImage,true,[objImgPreview,iHeight,iWidth,document,cross.EVENT_ONKEYUP]);

                 }); //  "left": "-="+(iWidth/2)+"px","top": "-="+(iHeight/2)+"px"}
    };



    this.removeImage=function(objImgPrev,iHeight,iWidth,objEventSrc,iEventType,evt)
    {
        if((iEventType==cross.EVENT_ONKEYUP) && cross.getKeyCode(evt)!=27) // 27 -- Escape key code
            return false;

        $(objImgPrev).animate({"height": "-="+iHeight+"px", "width": "-="+iWidth+"px",
            "left": "+="+(iWidth/2)+"px",
            "top": "+="+(iHeight/2)+"px"}, 200,null,
                function()
                {
                    if(objImgPrev && objImgPrev.parentNode)
                        objImgPrev.parentNode.removeChild(objImgPrev);
                    util.toggleBackground(false);
                    cross.removeListener1(objEventSrc,iEventType,msg.removeImage);
                });
    };


    /**
     * This function is used for show confirm message
     * @param sMessage
     * @param sTitle
     * @param sFnHandler
     */
    this.showConfirm=function(sMessage, sTitle , sFnHandler,args,iWidth,sButtonVal_1,sButtonVal_2,isCancel)
    {
        iWidth = (iWidth?iWidth:350);
        var  iHeight=100,objConfirm = document.getElementById("dvConfirm");
        if(!objConfirm)
        {
            objConfirm = document.createElement("div");
            objConfirm.id="dvConfirm";
            document.body.appendChild(objConfirm);
            objConfirm.className = "msg-def confirm";
            objConfirm.style.display='none';
        }
        util.toggleBackground(true,true);
        objConfirm.innerHTML="<img align='right' style='cursor:pointer;' src="+app.getImagePath(true)+
                             "blank.png  class='sModule s-closeDlg'id='cClose'>";
        objConfirm.innerHTML+="<div  class='confmHeading'>" +(sTitle?sTitle:'&nbsp;')+"</div>" ;
        objConfirm.innerHTML+="<table align='center'  style='height:"+iHeight+"px;width:"+iWidth+"px;' class='confmBody confirm-def' cellspacing=0 cellpadding=0 border=0><tr><td>" +
                              "<td style='padding-right:5px;'><img  src="+app.getImagePath()+"warning.png></td>"+
                              "<td>" +(sMessage?sMessage:"")+"</td>"+
                              "</tr></table>";

        if(args == null)
            args = [];
        sButtonVal_1 = (sButtonVal_1 ? sButtonVal_1:" "+MsgHandler.getMsg(MsgConstants.YES)+" ");
        sButtonVal_2 = (sButtonVal_2 ? sButtonVal_2:" "+MsgHandler.getMsg(MsgConstants.NO)+" ");
        //onclick='msg.onClkConfirmActions(this,\""+Constants.OK+"\",\""+sFnHandler+"\","+args+",event);
        objConfirm.innerHTML+="<div  class='confmActions confirm-def'><input style='width:"+(((sButtonVal_1.length)*10)+10)+"px;cursor:pointer;' type='button' id='cYes' value='"+sButtonVal_1+"' class='nButton' >" +
                              "&nbsp;<input style='width:"+(((sButtonVal_2.length)*10)+10)+"px;cursor:pointer;' type='button' id='cNo' value='"+sButtonVal_2+"' class='nButton'>" +
                              (isCancel?"&nbsp;<input style='width:55;cursor:pointer;' type='button' id='cCancel' value='"+MsgHandler.getMsg(MsgConstants.CANCEL)+"' class='nButton'>":"")+"</div>";

        cross.setVisible(objConfirm,true);
        objConfirm.style.width= (iWidth+10)+"px";
        objConfirm.style.left= ((document.body.clientWidth- objConfirm.offsetWidth) / 2) ;
        objConfirm.style. top= (document.body.clientHeight -objConfirm.offsetHeight)/2;


        cross.addListener(document.getElementById('cYes'),cross.EVENT_ONCLICK,msg.onClkConfirmActions,true,[Constants.YES,sFnHandler,args]);
        cross.addListener(document.getElementById('cNo'),cross.EVENT_ONCLICK,msg.onClkConfirmActions,true,[Constants.NO,sFnHandler,args]);
        cross.addListener(document.getElementById('cClose'),cross.EVENT_ONCLICK,msg.onClkConfirmActions,true,[Constants.CANCEL,sFnHandler,args]);
        if(isCancel)
            cross.addListener(document.getElementById('cCancel'),cross.EVENT_ONCLICK,msg.onClkConfirmActions,true,[Constants.CANCEL,sFnHandler,args]);

        cross.addListener(document,cross.EVENT_ONKEYUP,msg.onClkConfirmActions,true,[Constants.CANCEL,sFnHandler,args]);
    };

    /**
     *  This function is used for show message
     * @param iMsgType
     * @param sMessage
     * @param sTitle
     */
    this.showMessage=function(iMsgType, sMessage, sTitle,iWidth,sFocusFldId,fnHandler)
    {
        iWidth = (iWidth?iWidth:350);
        var  iHeight=100,objMessage = document.getElementById("dvMessage");
        if(!objMessage)
        {
            objMessage = document.createElement("div");
            objMessage.id="dvMessage";
            window.document.body.appendChild(objMessage);
            objMessage.className = "msg-def confirm";
        }
        util.toggleBackground(true,true);

        objMessage.innerHTML="<img align='right'  id='mClose'  style='cursor:pointer;' src="+app.getImagePath(true)+
                             "blank.png class='sModule s-closeDlg' onclick='msg.hideMsgDlg(\"dvMessage\",false,"+sFocusFldId+",event);'>";
        objMessage.innerHTML+="<div  class='confmHeading'>" +(sTitle?sTitle:'&nbsp;')+"</div>" ;
        objMessage.innerHTML+="<table align='center' style='height:"+iHeight+"px;width:"+iWidth+"px;' class='confmBody confirm-def' cellspacing=0 cellpadding=0 border=0><tr><td>" +
                              "<td style='padding-right:5px;'><img  src="+app.getImagePath()+"info.png></td>"+
                              "<td>" +(sMessage?sMessage:"")+"</td>"+
                              "</tr></table>";
        //objMessage.innerHTML+="<div style='height:"+iHeight+"px;width:"+iWidth+"px;' class='confmBody confirm-def'>"+(sMessage?sMessage:"")+"</div>";

        objMessage.innerHTML+="<div  class='confirm-def confmActions'><input style='width:40;cursor:pointer;' id='mOk' type='button' value='Ok' class='nButton' onclick='msg.hideMsgDlg(\"dvMessage\",false,"+sFocusFldId+",event);'></div>";
        cross.setVisible(objMessage,true);

        //document.getElementById("mOk").com.focus();
        
        if(fnHandler)
        {
            cross.addListener(document.getElementById('mOk'),cross.EVENT_ONCLICK,fnHandler,true);
            cross.addListener(document.getElementById('mClose'),cross.EVENT_ONCLICK,fnHandler,true);
        }
        
        objMessage.style.width = (iWidth+6)+'px';
        objMessage.style.left= (window.document.body.clientWidth-objMessage.offsetWidth)/2+'px';
        objMessage.style. top= (window.document.body.clientHeight-objMessage.offsetHeight)/2+'px';

    };

      this.hideBusinessMsg=function()
      {
        var objMsgBox=document.getElementById("msgbox");
        if(objMsgBox)
          objMsgBox.style.display="none"; 
      };

    this.showBusinessMsg=function(sMessage,iMsgType)
    {
        var objMsgBox=document.getElementById("msgbox");
        if(objMsgBox)
        {
            objMsgBox.className="msgBox";

            if(iMsgType==Validation.INFO_MSG)
                util.addClass(objMsgBox,"infoMsg");            
            else
                util.addClass(objMsgBox,"errorMsg");
            

//            cross.setVisible(objMsgBox,true);
            objMsgBox.style.display = "inline-block";
//            objMsgBox.className = "errBox";
//            objMsgBox.style.display="block";
            objMsgBox.innerHTML="<span><img align='right'  style='cursor:pointer;height:18px;padding:0;margin-top:0;' src="+app.getImagePath(true)+
                             "blank.png class='sModule s-closeDlg' onclick='msg.hideBusinnesMsg(\"msgbox\");'></span>"+sMessage;
//            objMsgBox.innerHTML=sMessage;
//             me.showMessage(0,sMessage,"Message");
        }
        else
            me.showMessage(0,sMessage,MsgHandler.getMsg(MsgConstants.MESSAGE));
    };
    this.hideBusinnesMsg = function(sMsgBoxId)
    {
       document.getElementById(sMsgBoxId).style.display = "none";
    }
    /**
     * This function is used for handle the  confirm dialog actions like(Yes/NO)
     * @param element: is object of the action button
     */


    this.onClkConfirmActions=function(iAction,handler,args)
    {
        me.hideMsgDlg("dvConfirm",false);
        if(!handler || handler != "undefined")
        {
            var newArgs = new Array();
            if(args.length>0)
            {
                for (var i = 0; i < args.length; i++)
                    newArgs.push(args[i]);
            }
            newArgs.push(parseInt(iAction));
          //  alert("fn="+handler)
            cross.callFunction(window,eval(handler),newArgs);
        }

        cross.removeListener1(document,cross.EVENT_ONKEYUP,msg.onClkConfirmActions);
    };
    /**
     * This function is used for hide the message dialog
     * @param sDvId
     * @param isToast
     * @param evt
     */
    this.hideMsgDlg=function(sDvId,isToastOrInfo,sFocusFldId,evt)
    {
        var objMsg= document.getElementById(sDvId);
        if(objMsg)
        {
            if(isToastOrInfo)
            {
                objMsg.onmouseover=null;
                objMsg.onmouseout=null;
            }
            objMsg.parentNode.removeChild(objMsg);
            //cross.setVisible(objMsg,false);
        }
        util.toggleBackground(false);
        if(sFocusFldId)
            document.getElementById("sFocusFldId").focus();
    };
    /**
     * This function is used for hide the ToastWindow dialog
     */
    this.hideToastWindowDlg=function(isModel,sId,element,sAppendClass,sRemoveClass,ignoreWithInClick,sHideCallBack,evt)
    {
        if(isModel == undefined)
            isModel=false;
        var objDiv= me.getToastWindowElement(); // non user specific id
        if(isModel)
            util.toggleBackground(false);

        var isShow =false,srcElmt = (evt?cross.getSrcElement(evt):null);

        if(evt && ignoreWithInClick)
        {
            if(srcElmt.id!="infoClose"+(sId?sId:'')){
                objDiv = me.getToastWindowElement(sId);
                if(objDiv)
                {
                    if(srcElmt.nodeName=="SELECT"||srcElmt.nodeName=="OPTION"){
                        var parentNode=srcElmt;
                        while(parentNode){
                            if(parentNode == objDiv)
                                return true;
                            parentNode = parentNode.parentNode;
                        }
                    }
                    else{
                        var iWidth,iHeight,iPositions,iTargetX,iTargetY;
                        iWidth= objDiv.offsetWidth;
                        iHeight= objDiv.offsetHeight;
                        iPositions = cross.getPosition(objDiv);
                        evt=cross.getEvent(evt);
                        iTargetX = evt.clientX + (window.scrollX?window.scrollX:0);
                        iTargetY = evt.clientY + (window.scrollY?window.scrollY:0);
                        if((iTargetX>=iPositions[0] && iTargetX<=(iPositions[0]+iWidth)) && (iTargetY>=iPositions[1] && iTargetY<=(iPositions[1]+iHeight)))
                        return true;
                    }
                }
                else
                    objDiv = me.getToastWindowElement(); // non user specific ids
            }

        }
        while(srcElmt)
        {
            if(srcElmt == element)
            {
                isShow = true;
                break;
            }
            else
                isShow= false;
            srcElmt = srcElmt.parentNode;
        }

        if(!ignoreWithInClick && (!isShow && objDiv))
        {
  
            objDiv.parentNode.removeChild(objDiv);
            util.removeClass(element,"TWindowParent");
        }
        else
        {
            objDiv = me.getToastWindowElement(sId);

            if(objDiv)
            {
                if(isShow)
                    cross.setVisible(objDiv,true);
                else
                {

                    cross.setVisible(objDiv,false);
                    util.removeClass(element,"TWindowParent");
                }
            }
        }
        if(!isShow){
            if(sAppendClass)
                util.addClass(element,sAppendClass);
            if(sRemoveClass)
                util.removeClass(element,sRemoveClass);
        }
        if(sHideCallBack)
            eval(sHideCallBack)(isShow);
    };
    
    this.removeToastWindowDlg = function(sId)
    {
        var objTWDlg = me.getToastWindowElement(sId);
        if(objTWDlg)
            objTWDlg.parentNode.removeChild(objTWDlg);
    };

    this.getToastWindowId=function(sId)
    {
        return "dvTWindow"+(sId?sId:"");
    };

    this.getToastWindowContentId=function(sId)
    {
        return "msgBody"+(sId?sId:"");
    };

    this.getToastWindowElement=function(sId)
    {
        return document.getElementById(me.getToastWindowId(sId));
    };

    this.getToastWindowContentElement=function(sId)
    {
        return document.getElementById(me.getToastWindowContentId(sId));
    };


    this.removeToastWindows = function(iScope)
    {
        //var ObjContainerDiv =  document.getElementById("containerDiv");

        //ObjContainerDiv.getEl

                           // later can be replaced with querySelector,QuerySelectorAll, depending on the performance ll chnage this code
       $('div[scope='+iScope+']').each
               (
               function(id, element)
                {
                 //var iScopeVal=element.getAttribute("scope");
                 //if(iScopeVal && iScopeVal==iScope)
                 {

                  var parentElement=element.parentNode;
                  parentElement.removeChild(element);
                  element=null;
                 }
                }
            );

        //var objTWDlg = document.getElementById("dvTWindow"+(sId?sId:''));
        //objTWDlg.parentNode.removeChild(objTWDlg);
    };




    this.showToastWindowFromURL=function(element, sUrl,isProng,sId,iProngType,isClose,sAppendClass,sRemoveClass,isLoadResources,ignoreWithInClick,iScope,objScoll)
    {
        me.isProgress;
        me.isLoadResources=isLoadResources;
        var objDiv = me.getToastWindowElement(sId);

        if(objDiv)
        {
            var sContent = cross.getChildren(me.getToastWindowContentElement(sId))[0];
            objDiv.parentNode.removeChild(objDiv);
            me.showToastWindow(element,sContent,null,null,null,false,isProng,sId,iProngType,isClose,sAppendClass,sRemoveClass,ignoreWithInClick,iScope,objScoll);
        }
        else if(!me.isProgress)
        {
            me.element = element;
            me.isProng = isProng;
            me.sId = sId;
            me.iProngType = iProngType;
            me.isProgress = true;
            me.isClose = isClose;
            me.sAppendClass = sAppendClass;
            me.sRemoveClass = sRemoveClass;
            me.ignoreWithInClick = ignoreWithInClick;
            me.iScope = iScope;
            me.showToastWindow(element,'<div id="loadStat'+sId+'" style="width:150px; height:50px"></div>',null,null,null,false,isProng,sId,iProngType,isClose,sAppendClass,sRemoveClass,ignoreWithInClick,iScope,objScoll);
            con.sendPostRequest(sUrl, null, null, "msg.arhShowToastWindowFromURL", false,"loadStat"+sId);
        }
    };

    this.arhShowToastWindowFromURL=function(sResponse)
    {

        me.isProgress = false;
        var objDiv = me.getToastWindowElement(me.sId);
        if(objDiv)
        {
            objDiv.parentNode.removeChild(objDiv);
                me.showToastWindow(me.element,sResponse,null,null,null,false,me.isProng,me.sId,me.iProngType, me.isClose,me.sAppendClass,me.sRemoveClass,me.ignoreWithInClick,me.iScope);
                if(me.isLoadResources)
                    loadResources(me.getToastWindowContentElement(me.sId),util.onScriptsLoad);
        }

    };

    this.getProng=function(sAppendStyle, iProngType, iProngPosition)
    {
        var sProng = "" ,sProngClass,sProngLtClass,sProngDkClass;
        if(iProngType == Constants.PRONG_BOTTOM)
        {
            sProngClass = "bottom-prong";
            sProngDkClass= "bottom-prong-dk";
            sProngLtClass= "bottom-prong-lt";
        }
        else if(iProngType == Constants.PRONG_TOP)
        {
            sProngClass = "top-prong";
            sProngDkClass= "top-prong-dk";
            sProngLtClass= "top-prong-lt";
        }

        if(iProngType == Constants.PRONG_BOTTOM || iProngType == Constants.PRONG_TOP)
        {
            sProng = "<div id='prong' class='"+sProngClass+"' style='position: absolute;"+sAppendStyle+"'>"+
                     "<div class='"+sProngDkClass+"'></div>"+
                     "<div class='"+sProngLtClass+"'></div>"+
                     "</div>";
        }
        else{
            sProng = "<div class='prong-left-right1' style='"+(iProngType == Constants.PRONG_LEFT ?"border-right: 10px solid #CCC;"+(navigator.userAgent.indexOf("Firefox")!=-1 ?"left:-9px;":"left:-11px;")+" ":"border-left: 10px solid #CCC; "+(navigator.userAgent.indexOf("Firefox")!=-1 ?"right:-9px;":"right:-10px;")+"")+" top:"+iProngPosition+"px;'>"+
                     "<div></div>"+
                     "</div>";
            sProng += "<div class='prong-left-right2' style='"+(iProngType == Constants.PRONG_LEFT ?"border-right: 10px solid #FFF; left:-9px; _left:-10px; ":"border-left: 10px solid #FFF; right:-9px; _right:-8px; ")+" top:"+(iProngPosition+1)+"px;'>"+
                      "<div></div>"+
                      "</div>";
        }
        return sProng;
    };

    this.setPageStatus=function(sMsg,iWidth,iHeight){
        if(!iWidth || iWidth==0)
            iWidth=16;
        if(!iHeight || iHeight==0)
            iHeight=20;

         var ObjContainerDiv =  document.getElementById("containerDiv");
        var objTWindow=document.getElementById("pgdiv");
        if(!objTWindow)
        {     var sStatus="<div id='pgdiv' " +
                    "style='padding-left:2px;bottom:1px;position: fixed ;border:1px solid #D5D9B8;border-radius-5px;" +
                    "-moz-border-radius:5px;height:"+iHeight+"px;width:"+iWidth+"%'>" +
                    " <table width='100%' height=100%'><tr><td id='pgstatus'>"+sMsg+" </td></tr></table></div>";
             objTWindow = document.createElement("div");
           //  objTWindow.id="pagestat";
             objTWindow.innerHTML=sStatus;
              if(ObjContainerDiv)
                ObjContainerDiv.appendChild(objTWindow);
            else
                document.body.appendChild(objTWindow);
         }
        else
        {   var  pgStatus=document.getElementById("pgstatus");
            pgStatus.innerHTML=sMsg;
            cross.setVisible(objTWindow,true);

        }


    };
    this.closePageStatus=function(){
        var dvStatus;
        dvStatus=document.getElementById("pgdiv");
      if(dvStatus)
        cross.setVisible(dvStatus,false);
       // alert("close-"+dvStatus)
    };
};
