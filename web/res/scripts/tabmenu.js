
var tabmenu = new function()
{

    //    var divX,divY;

    this.iLastTab=0;
    this.varId=null;
    this.varIframe=null;
    this.varMincount=null;
    this.prevSelectedtab=-1;
    this.iListenerId=0;
    this.sEvtSrc=null;
    var me=this;
    /*var timeout         = 100;
     var closetimer		= 0;
     var ddmenuitem      = 0;
     */
    this.swap=function(popupTD,tabTD,isThemewise)
    {
        //                    alert(popupTD.attr("className")+"   "+tabTD.html())
        var chVal=0;
        if(isThemewise){
            chVal=1;}
        else
            chVal=0;
        var popupDiv = $(popupTD.children()[0]);
        var menucDiv = $(tabTD.children()[chVal]);
        var swapDiv = $(menucDiv.children()[0]);
        menucDiv.append(popupDiv.remove());
        popupTD.append(swapDiv.remove());

        return this;
    };

    this.sendAttributes=function(sId,sFrameId,iMinCount,isThemewise,sSelectedTabId)
    {
        var iSelectdTab=0;
        var sTdSwapId="";
        this.varId=sId;
        this.varIframe=sFrameId;
        this.varMincount=iMinCount;

       if(sSelectedTabId!=null)
       {
           if(document.getElementById(sSelectedTabId+"tablink")!=null)
           {
               var objspanId=document.getElementById(sSelectedTabId+"tablink");
               iSelectdTab=objspanId.getAttribute("tabcount");

               if(iSelectdTab>=iMinCount)
               {
                   sTdSwapId=sSelectedTabId+"tab"+iSelectdTab;
                   var objTd=document.getElementById(sTdSwapId);
                   tabmenu.onClkPopUpTD(objTd,iSelectdTab,isThemewise);
                   iSelectdTab=iMinCount-1;
               }
               /*if(sSelectedTabId!="tbHome")
               {
                    cross.callFunction(window,eval(objspanId.onclick));
               }*/
           }
       }

        if(!isThemewise)
          me.prevSelectedtab=iSelectdTab;
        else
          me.prevSelectedtab=iSelectdTab;
    };


    var iTimeout,objPopupDiv;

    this.hideThisDiv=function(div,evt)
    {
        //        alert(div.innerHTML)
        evt=evt?evt:window.event;
        window.status="mouseout"+evt.srcElement.nodeName;
        if(evt.srcElement.nodeName!="TABLE")
            return false;

        objPopupDiv=div;
        iTimeout = setTimeout('this.createObjectCallback(this, this.hideThis)',5000);
        //    iTimeout=setTimeout("hideThis()",1000);

        this.hideThis=function()
        {
            if(objPopupDiv!=null)
            {
                alert(1);
                clearTimeout(iTimeout);
                objPopupDiv.style.display='none';
                objPopupDiv=null;
            }
        };
        return false;
    };

    this.createObjectCallback=function(obj, fn, arguments)
    {
        return function()
        {
            //        alert("newargs1  ")
            var newargs = [arguments];
            for (var i = 0; i < arguments.length; i++)
                newargs.push(arguments[i]);
            //        fn.apply(obj, arguments);
        };
    };

    this.setMenuSelection=function(spanId,tabcount)
    {
        var objspanId=document.getElementById(spanId+"tablink");
        var isThemewise=objspanId.getAttribute("themeswise");
        var sTdSwapId="";

        if(!tabcount){
            tabcount=objspanId.getAttribute("tabcount");
        }
        /* TODO:Need to check*/
        /*if(tabcount>=me.varMincount)
        {
            sTdSwapId=spanId+"tab"+tabcount;
            var objTd=document.getElementById(sTdSwapId);
            tabmenu.onClkPopUpTD(objTd,tabcount,isThemewise);
            me.prevSelectedtab=me.varMincount-1;
        }*/
        //                  alert(tabcount+"==="+me.varMincount)
        //        if(tabcount>me.varMincount)
        //        {
        ////                        alert(spanId+"tab"+tabcount);
        //            var objTd=document.getElementById(spanId+"tab"+tabcount);
        //            //            alert(objTd);
        //            tabmenu.onClkPopUpTD(objTd,tabcount,isThemewise);
        //        }
        //        else
        //        {
        //            alert("objspanId=="+objspanId);
        if(isThemewise)
            me.setMenuSelectionthm2(objspanId,tabcount);
        else{
            me.setMenuSelectionthm1(objspanId,tabcount);
        }
        if(tabcount>=me.varMincount)
            objspanId.setAttribute("tabcount",me.prevSelectedtab)
        //        }

    };
    this.setMenuSelectionthm2 = function(spanId,tabcount)
    {
        me.setMoreTab(false);
        var objDiv1,objDiv;
        var tabTds=$("#"+me.varId+"tblmenu > li");
        objDiv1 = $(spanId).parent()[0];
        objDiv = $(objDiv1).parent()[0];
        var tabstyleTD = $(objDiv).parent()[0];
//        alert("prevTab=="+me.prevSelectedtab+"tabCOunt=="+tabcount)
        var tabTdChildDiv=$(tabTds[me.prevSelectedtab]).children()[1];
        var tabDivChild=$(tabTdChildDiv).children()[0];
        var prevSpan=$(tabDivChild).children()[0];

        if(me.prevSelectedtab==0)
            $(tabTds[me.prevSelectedtab]).removeClass('homeHover').addClass('home');
        else
            $(tabTds[me.prevSelectedtab]).removeClass('activeTab').addClass('deactiveTab');

        $(prevSpan).removeClass("magLinkmOver").addClass("magLinkmOut");
        $(tabTdChildDiv).removeClass('activeMenu').addClass('deactiveMenu');
        $(tabDivChild).removeClass('actvmagDiv').addClass('deactvmagDiv');
        if(tabcount>=me.varMincount)
            tabcount=me.varMincount-1;
        me.prevSelectedtab=tabcount;
        var divsrc=$(objDiv).children()[0];
        if(tabcount==0)
            $(tabstyleTD).removeClass('home').addClass('homeHover');
        else
            $(tabstyleTD).removeClass('deactiveTab').addClass('activeTab');
        $(objDiv).removeClass('deactiveMenu').addClass('activeMenu');
        $(divsrc).removeClass('deactvmagDiv').addClass('actvmagDiv');
    };

    this.setMenuSelectionthm1 = function(spanId,tabCount)
    {
        var objDiv1,objDiv;
        var tabTds=$("#"+me.varId+"tblmenu > li");
        objDiv1 = $(spanId).parent()[0];
        objDiv = $(objDiv1).parent()[0];
        var tabstyleTD = $(objDiv).parent()[0];
        var tabTdChildDiv=$(tabTds[me.prevSelectedtab]).children()[0];
        var tabDivChild=$(tabTdChildDiv).children()[0];

        $(tabTds[me.prevSelectedtab]).removeClass('activeTab').addClass('deactiveTab');
        $(tabTdChildDiv).removeClass('activeMenu').addClass('deactiveMenu');
        $(tabDivChild).removeClass('actvmagDiv').addClass('deactvmagDiv');
        me.prevSelectedtab=tabCount;


        var divsrc=$(objDiv).children()[0];
        $(tabstyleTD).removeClass('deactiveTab').addClass('activeTab');
        $(objDiv).removeClass('deactiveMenu').addClass('activeMenu');
        $(divsrc).removeClass('deactvmagDiv').addClass('actvmagDiv');
    };

    var oldCellIndex=0;
    this.loadSrcIntoIFrame=function(objSpan,iVal,tabcount,isThemewise)
    {
        if(tabcount<me.varMincount)
        {
            if(iVal==2)
                objSpan=document.getElementById(objSpan+"tablink");
            else if(iVal==1)
                tabcount=me.iLastTab;
            if(isThemewise)
                me.setMenuSelectionthm2(objSpan,tabcount);
            else
                me.setMenuSelectionthm1(objSpan,tabcount);
        }
    };




    this.onClkArrwImg=function(objSpan,e)
    {
        var sPosition=cross.getPosition(objSpan);
        //            alert("else sPosition: "+sPosition)
        var popDiv=document.getElementById(me.varId+"divMenu");

        if(popDiv.style.display=="" || popDiv.style.display=="none")
            $("#"+me.varId+"divMenu").css({left:sPosition[0]-30,top:sPosition[1]+24}).show();
        else
            $("#"+me.varId+"divMenu").hide();
        me.setMoreTab(true);
        me.sEvtSrc = cross.getSrcElement(e);
        if(me.iListenerId>=0)
            cross.unregisterEventListener(me.iListenerId);
        me.iListenerId=cross.registerEventListener(cross.EVENT_ONCLICK,me.hideMenuDiv,[e]);

    };
    this.hideMenuDiv = function(e)
    {
        if(cross.getSrcElement(e).className!="disable")
        {
            if(me.sEvtSrc)
            {
                me.sEvtSrc=null;
                return;
            }

            //        alert("hiding "+me.iListenerId);
            me.setMoreTab(false);
            $("#"+me.varId+"divMenu").hide();
            if(me.iListenerId>=0)
                cross.unregisterEventListener(me.iListenerId);
        }
    };
    this.setMoreTab = function(bActive)
    {
        var objDiv1,objDiv,tabTds,tabstyleTD;
        var objMoreSpan=document.getElementById("spMore");
        objDiv1 = $(objMoreSpan).parent()[0];
        objDiv = $(objDiv1).parent()[0];
        tabstyleTD = $(objDiv).parent()[0];
         if(bActive)
         {
            $(objDiv1).removeClass('deactvmagDiv').addClass('actvmagDiv');
            $(objDiv).removeClass('deactiveMenu').addClass('activeMenu');
            $(tabstyleTD).removeClass('more').addClass('moreact');
         }
        else
         {
            $(objDiv1).removeClass('actvmagDiv').addClass('deactvmagDiv');
            $(objDiv).removeClass('activeMenu').addClass('deactiveMenu');
            $(tabstyleTD).removeClass('moreact').addClass('more');
         }
    };


    this.onClkPopUpTD=function(objTd,tabCount,isThemewise,isSelection)
    {
        var ul = $("#"+me.varId+"tblmenu > li:last");
        var tabTds = ul.prev("li");
        //        alert(tabTds)
        var objSpan,objDiv1,objDiv2,aTag;
        me.setMoreTab(false);
        me.iLastTab=tabmenu.varMincount-1;
        //                                   alert(tabTds.length+" , "+tabTds.eq(tabmenu.iLastTab).html())
        //objTd.childNodes[0].childNodes[1].onclick
        if(isSelection==undefined)
            me.swap($(objTd),tabTds,isThemewise);
        me.iLastTab=(me.varMincount)-1;
        if(isThemewise)
            objDiv1=$(tabTds).children()[1];
        else
            objDiv1=$(tabTds).children()[0];

        objDiv2=$(objDiv1).children()[0];
        $(objDiv2).removeClass("magMoverDiv");
        objSpan=$(objDiv2).children()[0];
        aTag=$(objSpan).children()[0];
//        alert(objTd.childNodes[0].childNodes[1].onclick)


        me.loadSrcIntoIFrame(objSpan,1,me.iLastTab,isThemewise);
        /*objSpan.onclick=function()
         {
         me.loadSrcIntoIFrame(objSpan,1,me.iLastTab,isThemewise);
         };*/
        $(objTd).removeClass("activeMenu").addClass("mouseOut");
        var popUpTr=$(objTd).parent()[0];
        //        if($(popUpTr).hasClassName("activeTab"))
        $(popUpTr).removeClass("activeTab");
        $(popUpTr).removeClass("homeHover");

        var popupDiv1 = $(objTd).children()[0];
        var span = $(popupDiv1).children()[0];
        var popATag = $(span).children()[0];
        //        aTag.href=span.getAttribute("src");
        //        popATag.href="#";
        $(popupDiv1).removeClass("deactvmagDiv").addClass("magMoverDiv");
        $(popupDiv1).removeClass("actvmagDiv").addClass("magMoverDiv");
        $(span).removeClass("magLinkmOver").addClass("magLinkmOut");

        $("#"+me.varId+"divMenu").hide();
    };

    /* this.showMagMenuSrc=function(objThis,event)     // mag menu funtion(not Used)
     {
     //     alert(objThis.getAttribute('src'));
     this.stopEventPropagation(event);
     document.getElementById(this.varIframe).src=objThis.getAttribute('src');
     };*/

    /**
     * stops the event propagations once an event attached to formElement
     * @param event
     */
    this.stopEventPropagation=function(event)
    {
        if (event.preventDefault)
        {
            event.preventDefault();
            event.stopPropagation();
        }
        else
        {
            event.returnValue = false;
            event.cancelBubble = true;
        }
    };



    var timeout=100,closetimer=0,ddmenuitem=0,swapdiv=null;

    this.mopen=function(thisObj,isThemeswise,iTabCount)
    {
        this.mcancelclosetime();
        if(isThemeswise=='true')
        {
            me.mopenthms2(thisObj,isThemeswise,iTabCount);
        }
        else
            me.mopenthms1(thisObj,isThemeswise,iTabCount);
    };

    this.mopenthms1=function(thisObj,isThemeswise,iTabCount)
    {
        if(ddmenuitem)
        {
            ddmenuitem.css({display:"none"});
        }
        var mainDiv = $(thisObj).children()[0];

        var popupDiv = $($(mainDiv).children()[0]).children()[1];
        swapdiv=$(mainDiv).children()[0];
        ddmenuitem=$(popupDiv);
        ddmenuitem.css({display:"block"});
    };

    this.mopenthms2=function(thisObj,isThemeswise,iTabCount)
    {
        var mainDiv;
        if(ddmenuitem)
        {
            ddmenuitem.css({display:"none"});
        }
        if(iTabCount==0)
            thisObj.className="homeHover";
        else
            thisObj.className="activeTab";

        var img=$(thisObj).children()[0];
        if(iTabCount==0)
            img.style.display="none";
        else
            img.style.display="block";
        if(isThemeswise){
            mainDiv = $(thisObj).children()[1];
            mainDiv.className="activeMenu";
        }
        var popupDiv = $($(mainDiv).children()[0]).children()[1];
        swapdiv=$(mainDiv).children()[0];
        ddmenuitem=$(popupDiv);
        ddmenuitem.css({display:"block"});
    };

    this.mclosetime=function(objthis,isThemeswise,iTabCount)
    {

        if(isThemeswise)
        {
            me.mclosetimethms(objthis,isThemeswise,iTabCount);
        }

        closetimer=window.setTimeout(this.mclose,timeout);
    };

    this.mclosetimethms=function(objthis,isThemeswise,iTabCount)
    {
        var mainDiv;
//             alert(me.prevSelectedtab)
        if(me.prevSelectedtab!=iTabCount)
        {
            if(iTabCount==0)
                objthis.className="home";
            else
                objthis.className="deactiveTab";
        }

        var img=$(objthis).children()[0];
        img.style.display="none";
        mainDiv = $(objthis).children()[1];
        if(me.prevSelectedtab!=iTabCount)
            mainDiv.className="deactiveMenu";
    };


    this.getTargetElement = function(e)
    {
        e = e ? e : window.event;
        var targetElem=e.srcElement || e.target;
        while (targetElem.nodeType != 1)
            targetElem = targetElem.parentNode;
        return targetElem;
    };

    this.mclose=function()
    {
        if(ddmenuitem)
        {
            ddmenuitem.css({display:"none"});
        }
        //    swapdiv.style.position="absolute";
    };



    this.mcancelclosetime=function()
    {
        if(closetimer)
        {
            window.clearTimeout(closetimer);
            closetimer=null;
        }
    };

    this.hidepopTabstable=function(objthis)
    {
        //    alert(objthis.className);
//        tabmenu.setMoreTab(false);
//        $("#"+this.varId+"divMenu").hide();
    };
    this.showpopupTabsTable=function(objthis)
    {
        //    alert(objthis.className);
        tabmenu.setMoreTab(true);
//        $("#"+this.varId+"divMenu").show();
    };

    this.subPopup1=function(divId,objThis)
    {
        //        var objSpan=cross.getFirstElement(objThis.childNodes);
        //        var sPosition=me.getPosition(objSpan);

        //        $("#"+divId).css({left:sPosition[0]-400,top:sPosition[1]+10}).show();
        //             $("#"+objThis).show();
        $("#"+divId).css("visibility","visible");
    };
    this.subPopup0=function(divId)
    {
        //        $("#"+objThis).hide();
        $("#"+divId).css("visibility","hidden");
    };



    //document.onclick=this.mclose;

};



