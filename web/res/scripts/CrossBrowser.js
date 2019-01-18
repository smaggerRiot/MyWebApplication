
/**
 * Author     : chakradhar
 * Description: THE MAIN PURPOSE OF CREATE  THIS JS IS COMMON SOME FUNCTIONS FOR SUPPORT CROSS BROWSER
 * Functions  :isFunction,createCallback,isDefinegetInnerText,isShiftPressed,isCtrlPressed,isAltPressed,addListener,
 *             removeListener,cancelBubble,getKeyCode,getCharacter,getPosition, getSrcElement,getEvent,getChildren,
 *             removeChlildren,isContains,isFlashSupported,getIndexOf
 *
 */

var cross = new function()
{
    var me=this;

    me.EVENT_ONCLICK=1;
    me.EVENT_ONDBLCLICK=2;
    me.EVENT_ONKEYDOWN=3;
    me.EVENT_ONKEYUP=4;
    me.EVENT_ONKEYPRESS=5;
    me.EVENT_ONMOUSEOVER=6;
    me.EVENT_ONMOUSEOUT=7;
    me.EVENT_ONMOUSEDOWN=8;
    me.EVENT_ONBLUR=9;
    me.EVENT_ONFOCUS=10;
    me.EVENT_ONCONTEXTMENU=11;

    me.EVENT_INTERVAL=12;
    me.EVENT_TIMEOUT=13;
    me.EVENT_ON_WND_UNLOAD=14;
    me.EVENT_ON_WND_MOUSEMOVE=15;
    me.EVENT_ON_WND_HASH_CHANGE=16;
    me.EVENT_ON_WND_SCROLL=17;
    
    me.EVENT_ONMOUSEMOVE=18;
    me.EVENT_ONMOUSEUP=19;
    me.TYPE_EXTRASMALL = 0;
    me. TYPE_SMALL = 1;
    me. TYPE_MEDIUM = 2;
    me. TYPE_LARGE = 3;

    this.isIE=function()
    {
        return ( (/msie/i.test(navigator.userAgent) || document.documentMode||(/edge/.test(navigator.userAgent.toLowerCase()))) && (!/opera/i.test(navigator.userAgent)) );
         };

         this.isIOS=function()
         {
         return (/iPhone/i.test(navigator.userAgent) || /iPod/i.test(navigator.userAgent) || /iPad/i.test(navigator.userAgent));
         };

         this.isAndroid=function()
         {
         return (/android/i.test(navigator.userAgent));
         };

         this.getIEVersion=function()
         {
         if(/edge/.test(navigator.userAgent.toLowerCase()))
         return navigator.appVersion.match(/Edge\/([\d.]+)/)[1];
         else if(/msie/i.test(navigator.userAgent))
         return navigator.appVersion.match(/MSIE ([\d.]+)/)[1];
         else if(document.documentMode)
         return 11;

         };

         /**
         * @author chakradhar
         * @return   float browser version
         */
        this.getBrowserVersion=function()
        {
            var N=navigator.appName, ua=navigator.userAgent, tem;
            var M=ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
            if(M && (tem= ua.match(/version\/([\.\d]+)/i))!= null) M[2]= tem[1];
            M=M? [M[1], M[2]]: [N, navigator.appVersion, '-?'];
            return M[1];
        };

        this.isFunction=function(sFn)
        {
            return (typeof window[sFn]=="function");
        };

        this.createCallbackFunc=function(obj, fn, args)
        {
            //new
            return  function()
            {
                //writeToLog("typeOf agrs= "+(typeof args) );
                if(typeof args=="object")
                {
                    fn.apply(obj, args);
                }
                else
                {
                    /*return new function()
                     {*/
                    var newargs = [args];
                    for (var i = 0; i < arguments.length; i++)
                        newargs.push(arguments[i]);
                    fn.apply(obj, newargs);
                    /* };*/
                }
            };
        };


        this.callFunction=function(obj, fn, args,iIntervalTime)
        {
            if(iIntervalTime>0)
            {
                me.timer=setTimeout(function()
                {
                    return callFunction2(obj,fn,args);
                },iIntervalTime);
            }
            else
                return callFunction2(obj,fn,args);

        };


        this.isDefined=function(objValue)
        {
            //   alert(typeof(objValue))
            return !(typeof(objValue) === 'undefined' || typeof(objValue) === 'unknown' || objValue === null);
            //  return typeof(type) != 'undefined' && typeof(type) != 'unknown';
        };

        this.getInnerText=function(elem)
        {   //alert(elem.tagName)
            if(elem)
            {
                if(elem.textContent)
                    return util.trim(elem.textContent);  // mozilla ,safari
                else
                    return util.trim(elem.innerText);
            }
        };

        this.setInnerText=function(elem,sText)
        {
            //var sText;

            if(elem)
            {
                if(elem.textContent)
                {
                    elem.textContent=sText;
                }
                else
                    elem.innerText=sText;
            }
            //return trim(sText);
        };


        // works only for keydown event
        this.isShiftPressed=function(evt)
        {

            /*
             var nav4 = window.Event ? true : false;
             if (nav4)
             {
             if(evt)
         return evt.modifiers & Event.SHIFT_MASK;
         }
         else
         return  window.event.shiftKey;
         return false;
         */
        evt=cross.getEvent(evt) ;
        return evt.shiftKey;
    };

    // works only for keydown event
    this.isCtrlPressed=function(evt)
    {
        evt=cross.getEvent(evt) ;
        return evt.ctrlKey;
    };

    // works only for keydown event. problem in opera
    this.isAltPressed=function(evt)
    {
        evt=cross.getEvent(evt) ;
        return evt.altKey;
    };

    this.addListener_111=(function()
    {
        if(document.addEventListener)
        {
            return function(element, iEvent, fnHandler,isCancelBubble,args)
            {
                if(!args)
                    args=[];
                var sEvent=getEventName(iEvent,"");
                element.addEventListener(sEvent, function(e){me.invokeListener(fnHandler,args,e)}, false);
            };
        }
        else
        {
            return function(element, iEvent, fnHandler,isCancelBubble,args)
            {
                if(!args)
                    args=[];
                var sEvent=getEventName(iEvent,"on");
                element.attachEvent(sEvent, function(e){me.invokeListener(fnHandler,args,e)});
            };
        }

            function getEventName(iEvent,sPrefix)
            {
                switch(iEvent)
                {
                    case me.EVENT_ONCLICK:
                        return sPrefix+"click";
                    case me.EVENT_ONDBLCLICK:
                        return sPrefix+"dblclick";
                    case me.EVENT_ONKEYDOWN:
                        return sPrefix+"keydown";
                    case me.EVENT_ONKEYPRESS:
                        return sPrefix+"keypress";
                    case me.EVENT_ONKEYUP:
                        return sPrefix+"keyup";
                    case me.EVENT_ONMOUSEOVER:
                        return sPrefix+"mouseover";
                    case me.EVENT_ONMOUSEOUT:
                        return sPrefix+"mouseout";
                    case me.EVENT_ONMOUSEDOWN:
                        return sPrefix+"mousedown";
                    case me.EVENT_ONMOUSEMOVE:
                        return sPrefix+"mousemove";
                    case me.EVENT_ONMOUSEUP:
                        return sPrefix+"mouseup";
                    case me.EVENT_ONBLUR:
                        return sPrefix+"blur";
                    case me.EVENT_ONFOCUS:
                        return sPrefix+"focus";
                    case me.EVENT_ONCONTEXTMENU:
                        return sPrefix+"contextmenu";
                    default:
                        alert("Error with addListener..");
                }
                return "";
            }
    }());



    this.addListener=function(elem,iEvent,fnHandler,isCancelBubble,args,iScope)
    {
        if(elem)
        {
            if(!args)
                args=[];

            cross.registerEventListener(iEvent,fnHandler,args,elem,iScope);

            switch(iEvent)
            {
                case me.EVENT_ONCLICK:
                {
                    elem.onclick=function(e)
                    {
                        me.invokeEventListeners(iEvent,args,elem,e);
                        //me.invokeListener(fnHandler,args,e);
                    }
                    break;
                }
                case me.EVENT_ONDBLCLICK:
                {
                    elem.ondblclick=function(e)
                    {
//                        me.invokeListener(fnHandler,args,e);
                         me.invokeEventListeners(iEvent,args,elem,e);
                    }
                    break;
                }

                case me.EVENT_ONKEYDOWN:
                {
                    elem.onkeydown=function(e)
                    {
//                        me.invokeListener(fnHandler,args,e);
                         me.invokeEventListeners(iEvent,args,elem,e);
                    }
                    break;
                }
                case me.EVENT_ONKEYPRESS:
                {
                    elem.onkeypress=function(e)
                    {
//                        me.invokeListener(fnHandler,args,e);
                         me.invokeEventListeners(iEvent,args,elem,e);
                    }
                    break;
                }

                case me.EVENT_ONKEYUP:
                {
                    elem.onkeyup=function(e)
                    {
//                        me.invokeListener(fnHandler,args,e);
                         me.invokeEventListeners(iEvent,args,elem,e);
                    }
                    break;
                }
                case me.EVENT_ONMOUSEOVER:
                {
                    elem.onmouseover=function(e)
                    {
//                        me.invokeListener(fnHandler,args,e);
                         me.invokeEventListeners(iEvent,args,elem,e);
                    }
                    break;
                }
                case me.EVENT_ONMOUSEOUT:
                {
                    elem.onmouseout=function(e)
                    {
//                        me.invokeListener(fnHandler,args,e);
                         me.invokeEventListeners(iEvent,args,elem,e);
                    }
                    break;
                }
                case me.EVENT_ONMOUSEDOWN:
                {
                    elem.onmousedown=function(e)
                    {
//                        me.invokeListener(fnHandler,args,e);
                         me.invokeEventListeners(iEvent,args,elem,e);
                    }
                    break;
                }
                case me.EVENT_ONMOUSEMOVE:
                {
                    elem.onmousemove=function(e)
                    {
//                        me.invokeListener(fnHandler,args,e);
                         me.invokeEventListeners(iEvent,args,elem,e);
                    }
                    break;
                }
                case me.EVENT_ONMOUSEUP:
                {
                    elem.onmouseup=function(e)
                    {
//                        me.invokeListener(fnHandler,args,e);
                         me.invokeEventListeners(iEvent,args,elem,e);
                    }
                    break;
                }
                case me.EVENT_ONBLUR:
                {
                    elem.onblur=function(e)
                    {
                        //cross.registerEventListener(me.EVENT_ONBLUR,fnHandler,args)

                        me.invokeEventListeners(iEvent,args,elem,e);

//                        me.invokeListener(fnHandlers[i],args,e);
                    }
                    break;
                }
                case me.EVENT_ONFOCUS:
                {
                    elem.onfocus=function(e)
                    {
//                        me.invokeListener(fnHandler,args,e);
                         me.invokeEventListeners(iEvent,args,elem,e);
                    }
                    break;
                }
                case me.EVENT_ONCONTEXTMENU:
                {
                    elem.oncontextmenu=function(e)
                    {
//                        me.invokeListener(fnHandler,args,e);
                         me.invokeEventListeners(iEvent,args,elem,e);
                    }
                    break;
                }
                default:
                    alert("Error with addListener");
            }
        }
    };

    this.invokeEventListeners=function(iEvtType,args,objSrc,e)
    {
         for(var i=0; i < arrListeners.length;i++)
        {
            if(arrListeners[i].type==iEvtType && arrListeners[i].evtSrc==objSrc)
            {
//                util.writeToLog(arrListeners[i].listener)
                me.invokeListener(arrListeners[i].listener,args,e);
            }
        }
    };

    this.invokeListener=function(fnHandler,args,e)
    {
        e=cross.getEvent(e);
        var arrArgs=[];
        for(var i=0; i < args.length; i++)
            arrArgs[i]=args[i];
        arrArgs[arrArgs.length]=e;
        fnHandler.apply(window,arrArgs);
    };

    this.fireEvent=function(element,event)
    {
        if (document.createEventObject){
            // dispatch for IE
            var evt = document.createEventObject();
            return element.fireEvent('on'+event,evt)
        }
        else{
            // dispatch for firefox + others
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent(event, true, true ); // event type,bubbling,cancelable
            return !element.dispatchEvent(evt);
        }
    };

    this.removeListener1=function(objSrc,iEvtType,fnHandler)
    {
        /*var sEvent;
        if(iEvtType==me.EVENT_ONCLICK)
            sEvent="click";*/
         for(var i=0; i < arrListeners.length;i++)
        {
            if(arrListeners[i].type==iEvtType && arrListeners[i].evtSrc==objSrc && arrListeners[i].listener==fnHandler)
            {
                //me.removeListener(objSrc,sEvent,fnHandler);
                me.unregisterEventListener(arrListeners[i].id);
            }
        }
    };

    this.removeListener=function(objElement, sEvent, fnHandler)
    {
        if(objElement.removeEventListener)
        {
            objElement.removeEventListener(sEvent, fnHandler, false);
        }
        else if(objElement.detachEvent)
        {
            objElement.detachEvent("on" + sEvent, fnHandler);
        }
    };

    this.cancelBubble=function(evt,isEnableDefaultBehavior,isEnableEvtPropagation)
    {
        evt = cross.getEvent(evt);
        if(!evt)
            return false;
        var sSrcElm = cross.getSrcElement(evt);
        if(sSrcElm && sSrcElm.nodeName)
        {
            if((sSrcElm.nodeName).toLowerCase() == "select")
            {
                var iKeyCode=cross.getKeyCode(evt);
                if(iKeyCode==9)
                    return true;
                sSrcElm.blur();
                setTimeout(function(){sSrcElm.focus();},0);
            }
        }

        if(evt.stopPropagation)
        {
            if(!isEnableDefaultBehavior)
                evt.preventDefault(); //commented this line to enable default behaviour
            if(!isEnableEvtPropagation)
            {
                evt.stopPropagation();
            }
        }
        else
        {
            evt.cancelBubble = true;
            if(!isEnableDefaultBehavior)
                evt.returnValue=false;
        }
        return false;
    };

    /** this function works based on event type ,
     *  keyDown ,keyup -- for alphabets it returns uppercase key codes only,
     for number pad keys it returns alphabets key codes ..But OPERA works fine ,
     for backspace problem in OPERA..     problem in chrome(keyup)
     *  keyPress -- some special characters not work, like alt,shift,ctl, ...
     *               for backspace problem in OPERA..     problem in chrome
     */

    this.getKeyCode=function(evt)
    {
        evt = cross.getEvent(evt);
        var iKeyCode = evt.keyCode || evt.charCode;
        return iKeyCode;
    };

    this.getCharacter=function(evt)
    {
        var iKeyCode = cross.getKeyCode(evt);
        return  String.fromCharCode(iKeyCode);
    };


    this.getMousePos=function(mouseevent)
    {
        mouseevent = mouseevent || window.event;

        var cursor = {x:0, y:0};
        if (mouseevent.pageX || mouseevent.pageY)
        {
            cursor.x = mouseevent.pageX;
            cursor.y = mouseevent.pageY;
        }
        else
        {
            cursor.x = mouseevent.clientX +  (document.documentElement.scrollLeft || document.body.scrollLeft) -  document.documentElement.clientLeft;
            cursor.y = mouseevent.clientY +  (document.documentElement.scrollTop ||   document.body.scrollTop) -   document.documentElement.clientTop;
        }
        return cursor;
   }

    this.getPosition=function(obj)
    {
        var curleft =0, curtop = 0;
        if (obj!=null && obj.offsetParent)
        {
            curleft = obj.offsetLeft
            curtop = obj.offsetTop
            while (obj = obj.offsetParent) {
                curleft += obj.offsetLeft
                curtop += obj.offsetTop
            }
        }

        return [curleft,curtop];
    };

    this.getSrcElement=function(evt)
    {
        var  evt=cross.getEvent(evt)
        return (evt.srcElement)?evt.srcElement : evt.target
    };

    this.getEvent=function(evt)
    {
        evt = evt ? evt : window.event;
        if(!evt)
            evt=window.Event;
        return evt;
    };

    /**
     * this function returns array of immidiate childrens ..
     * @param elem
     */
    this.getChildren=function(elem)
    {
        var arrChilds=new Array();
        var iIndex=0;
        var firstNode= elem.firstChild;
        for(var i=0;i<elem.childNodes.length;i++)
        {
            if(elem.childNodes[i].nodeType !== 3 && elem.childNodes[i].nodeName.toLowerCase()!='br')
            {
                //            alert(elem.childNodes[i].nodeName);
                arrChilds[iIndex] = elem.childNodes[i];
                iIndex++;
            }
        }

        return   arrChilds;

    };

    /**
     * this functiion removes children of element
     * @param elem
     */
    this.removeChlildren=function(elem)
    {
        if(elem)
        {
        while(elem.childNodes.length>0)
            elem.removeChild(elem.childNodes.item(0));
        }
    };
    /**
     * it return true -if the parent contains  that child element
     * @param elemParent
     * @param elemChild
     */
    this.isContains=function(elemParent,elemChild)
    {
        var elemNode=elemChild;
        while(elemNode && elemParent!=elemNode)
            elemNode=elemNode.parentNode;
        return elemNode==null;
    };
    /*
     * this function is used to stop selection in specified area in all browsers
     * */
    this.enableSelection=function(elem,bIsEnable)
    {
        if (typeof elem.onselectstart != "undefined") //IE
            elem.onselectstart = function(){return bIsEnable;};
        /* //Commented for dashboard drag issue
         else if(typeof elem.style.MozUserSelect!="undefined") //Firefox
         {
         if(bIsEnable)
         elem.style.MozUserSelect = "";
         else
         elem.style.MozUserSelect = "none";
         }*/
        else //All other
        {
            if(bIsEnable)
                elem.onmousedown = null;
            else
                elem.onmousedown = function(){return bIsEnable;};
        }
    };

    /* Functions for registering document event listeners */
    var arrListeners=[];
    var arrWindowEvents=null;

    /**
     * This function is used for registering an event on an element. If src is null event will be registered on document. For document events scope parameter is used for mentioning either GLOBAL or SCREEN. 
     * @param iEvtType
     * @param objFn
     * @param arrArgs
     * @param objSrc
     * @param iScope
     */
    this.registerEventListener=function(iEvtType,objFn,arrArgs,objSrc,iScope)//objSrc
    {
            //alert(" reg "+objFn);
        if(!objSrc)
            objSrc=null;
        if(!iScope)
            iScope=Constants.SCOPE_APP;

        var iIndex=arrListeners.length;
        arrListeners[iIndex]={"id":iIndex+1,"type":iEvtType,"listener":objFn,"args":arrArgs,"evtSrc":objSrc,"scope":iScope};
        return iIndex+1;
    };

    this.unregisterEventListener=function(iListenerId)
    {
        for(var i=0; i < arrListeners.length;i++)
        {
            if(arrListeners[i].id==iListenerId)
            {
                //alert("unreg "+arrListeners[i].listener);
                //            alert("delete "+arrListeners.length+",i="+i);
                arrListeners.splice(i,1);
                //            alert("delete "+arrListeners.length);
                break;
            }
        }
        //alert(arrListeners.length)
    };

    this.unregisterAllListeners=function(iScope)
    {
        //alert("unregisterAllListeners  "+arrListeners.length)
        if(arrListeners)
        {
            if(!iScope)
                iScope=Constants.SCOPE_SCREEN;

            for(var i=0; i < arrListeners.length;)
            {
                //alert(arrListeners[i].scope+","+arrListeners[i].listener)
                if(arrListeners[i].scope==iScope)
                {
                    //alert("removing "+arrListeners[i].listener)
                    arrListeners.splice(i,1);            
                    continue;
                }
                i++;
            }

            /*if(arrListeners)
                alert("length "+arrListeners.length)*/

        }
    };
    
    this.registerWindowEvent=function(iEventId,iType,objFn,arrArgs,iScope)
    {
        if(!arrWindowEvents)
            arrWindowEvents=[];

        if(!iScope)
            iScope=Constants.SCOPE_APP;

        arrWindowEvents[arrWindowEvents.length]={"id":iEventId,"type":iType,"listener":objFn,"args":arrArgs,"scope":iScope};
    };

    this.unregisterWindowEvents=function(iScope)
    {
         if(!iScope)
            iScope=Constants.SCOPE_SCREEN;

        if(arrWindowEvents)
        {
            for(var i=0; i < arrWindowEvents.length;)
            {
                if(arrWindowEvents[i].scope==iScope)
                {
                    if(arrWindowEvents[i].type==me.EVENT_INTERVAL)
                        clearInterval(arrWindowEvents[i].id);
                    arrWindowEvents.splice(i,1);
                    continue;
                }
                i++;
            }
            //arrWindowEvents=null;
        }
    };

    this.getBodyScrollLeft=function()
    {
        return cross.f_filterResults (
                window.pageXOffset ? window.pageXOffset : 0,
                document.documentElement ? document.documentElement.scrollLeft : 0,
                document.body ? document.body.scrollLeft : 0
                );
    };

    this.getBodyScrollTop=function()
    {
        return cross.f_filterResults (
                window.pageYOffset ? window.pageYOffset : 0,
                document.documentElement ? document.documentElement.scrollTop : 0,
                document.body ? document.body.scrollTop : 0
                );
    };

    this.getClientWidth=function()
    {
        return cross.f_filterResults (
                window.innerWidth ? window.innerWidth : 0,
                document.documentElement ? document.documentElement.clientWidth : 0,
                document.body ? document.body.clientWidth : 0
                );
    };

    this.getClientHeight=function()
    {
        return cross.f_filterResults (
                window.innerHeight ? window.innerHeight : 0,
                document.documentElement ? document.documentElement.clientHeight : 0,
                document.body ? document.body.clientHeight : 0
                );
    };

    this.f_filterResults=function(n_win, n_docel, n_body)
    {
        var n_result = n_win ? n_win : 0;
        if (n_docel && (!n_result || (n_result > n_docel)))
            n_result = n_docel;
        return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
    };

    /*
     *  this function is used to retun element at specified index
     * arrElems - array of elements
     * iIndex - element position
     * bReverseSearch - search elements in assending or desending order
     * */
    this.getElementNode=function(arrElems, iIndex, bReverseSearch)
    {
        var iElemCount = 0;
        var i = 0;
        if (bReverseSearch)
        {
            for (i = arrElems.length - 1; i >= 0; i--)
            {
                if (arrElems[i].nodeType == 1)// 1=Element_Node
                {
                    iElemCount++;
                }
                if (iElemCount == iIndex)
                {
                    return arrElems[i];
                }
            }

        }
        else
        {
            for (i = 0; i < arrElems.length; i++)
            {
                if (arrElems[i].nodeType == 1)// 1=Element_Node
                {
                    iElemCount++;
                }
                if (iElemCount == iIndex)
                {
                    return arrElems[i];
                }
            }
        }
        return null;
    };

    /*
     *  this function used to return array of elements only, i.e only elements with nodeType=1
     *  arrChilds - array of elements
     * */
    this.getElements=function(arrChilds)
    {
        var arrElems = new Array();
        for (var i = 0; i < arrChilds.length; i++)
        {
            if (arrChilds[i].nodeType == 1)// 1=Element_Node
            {
                arrElems[arrElems.length] = arrChilds[i];
            }
        }
        return arrElems;
    };

    /*
     * this function used to return first element from array of elements
     *  arrElems - array of elements
     * */
    this.getFirstElement=function(arrElems)
    {
        return cross.getElementNode(arrElems, 1, false);
    };

    /*
     * this function used to return last element from array of elements
     *  arrElems - array of elements
     * */
    this.getLastElement=function(arrElems)
    {
        return cross.getElementNode(arrElems, 1, true);
    };

    /*
     * this function used to return element at specified index from array of elements
     *  arrElems - array of elements
     *  iIndex - specific position
     * */
    this.getElementAt=function(arrElems, iIndex)
    {
        /*if((iIndex > this.length/2))
         return getElementNode(this,iIndex,true);
         else*/
        return cross.getElementNode(arrElems, iIndex + 1, false);
    };

    /*
     * this function used to return next element
     * elem -
     * */
    this.getNextSibiling=function(elem)
    {
        elem = elem.nextSibling;
        while (elem && elem.nodeType != 1)// 1=Element_Node
        {
            elem = elem.nextSibling;
        }
        return elem;
    };

     /*
     * this function used to return next element
     * elem -
     * */
    this.getParentElement=function(elem)
    {
        elem = elem.parentNode;
        while (elem && elem.nodeType != 1)// 1=Element_Node
        {
            elem = elem.parentNode;
        }
        return elem;
    };

    /*
     * this function used to return previous element
     * elem -
     * */
    this.getPrevSibiling=function(elem)
    {
        elem = elem.previousSibling;
        while (elem && elem.nodeType != 1)// 1=Element_Node
        {
            elem = elem.previousSibling;
        }
        return elem;
    };

    /*
     *  this function is used to show or hide element
     * */
    this.setVisible=function(elem, bVisible)
    {
        if(elem)
        if (bVisible)
        {
           /// td,tr,table need to be handled differently
            elem.style.display = '';
        }
        else
        {
            elem.style.display = 'none';
        }
    };

    /*
     *  this function is used to return elements's visibility
     * */
    this.isVisible=function(elem)
    {
        var sDisplay = elem.style.display;
        if (util.trim(sDisplay).length == 0 || sDisplay == 'block')
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    /**//*
     *  this function is used to return only text with in element
     * *//*
    this.getInnerText=function(elem)
    {
        var sText;
        sText = elem.innerText;
        if (!sText)
        {
            sText = elem.textContent;
        }
        return util.trim(sText);
    };*/

    this.docOnClick=function(e)
    {
        e=e?e:window.event;

        for(var i=0; i < arrListeners.length;i++)
        {

            if(arrListeners[i].type==me.EVENT_ONCLICK && arrListeners[i].evtSrc==null)
            {
                //alert(arrListeners[i].type+"  calling "+arrListeners[i].evtSrc+"======="+arrListeners[i].listener)
                invokeListener(arrListeners[i].listener,arrListeners[i].args,e);
            }
        }
    };

    this.docOnKeyUp=function(e)
    {
        e=e?e:window.event;

        for(var i=0; i < arrListeners.length;i++)
        {
            if(arrListeners[i].type==me.EVENT_ONKEYUP && arrListeners[i].evtSrc==null)
                invokeListener(arrListeners[i].listener,arrListeners[i].args,e);
        }

        if(me.getKeyCode(e) == 27 && (parent.document.getElementsByClassName("SWindow").length > 0
                || document.getElementsByClassName("SWindow").length > 0)){
            var sParentDlgId,sDlgId;
            sParentDlgId = parent.document.getElementsByClassName("SWindow")[0].id;

            if(document.getElementsByClassName("SWindow").length > 0)
                sDlgId = document.getElementsByClassName("SWindow")[0].id;

            if(sDlgId)
                getDialogBox(sDlgId.substring(0,sDlgId.length-7)).hide();
            else
                parent.getDialogBox(sParentDlgId.substring(0,sParentDlgId.length-7)).hide();
        }
    };

    this.docOnKeyDown=function(e)
    {
        e=e?e:window.event;

        for(var i=0; i < arrListeners.length;i++)
        {
            if(arrListeners[i].type==me.EVENT_ONKEYDOWN && arrListeners[i].evtSrc==null)
                invokeListener(arrListeners[i].listener,arrListeners[i].args,e);
        }
    };

    this.docOnContextMenu=function(e)

    {
        e=cross.getEvent(e);
        var clSrcElement=cross.getSrcElement(e);
       //alert (clSrcElement.nodeName)
       //alert (clSrcElement.getAttribute('type'))
       if(clSrcElement
               && clSrcElement.nodeType==1
               && ((clSrcElement.nodeName.toLowerCase()=='input' && clSrcElement.getAttribute('type') && clSrcElement.getAttribute('type').toLowerCase()=='text')
                    || clSrcElement.nodeName.toLowerCase()=='textarea')
       )
        {
           //alert(clSrcElement.getAttribute('type'))
           return true;
        }
       else
       {
        cross.cancelBubble(e);
        return false;
       }
    };

    this.wndOnUnload=function(e)
    {
        e=e?e:window.event;
        if(arrWindowEvents)
        {
            for(var i=0; i < arrWindowEvents.length;i++)
            {
                if(arrWindowEvents[i].type==me.EVENT_ON_WND_UNLOAD)
                    invokeListener(arrWindowEvents[i].listener,arrWindowEvents[i].args,e);
            }
        }
    };


    this.wndOnMouseMove=function(e)
    {
        e=e?e:window.event;
          //clAppBuffer.setScreenPos()
      if(arrWindowEvents)
        {
            for(var i=0; i < arrWindowEvents.length;i++)
            {
                if(arrWindowEvents[i].type==me.EVENT_ON_WND_MOUSEMOVE)
                    invokeListener(arrWindowEvents[i].listener,arrWindowEvents[i].args,e);
            }
        }
    };

    this.wndOnHashChange=function(e)
    {
        e=e?e:window.event;
          //clAppBuffer.setScreenPos()
      if(arrWindowEvents)
        {
            for(var i=0; i < arrWindowEvents.length;i++)
            {
                if(arrWindowEvents[i].type==me.EVENT_ON_WND_HASH_CHANGE)
                    invokeListener(arrWindowEvents[i].listener,arrWindowEvents[i].args,e);
            }
        }
    };

    this.wndOnScroll=function(e)
    {
        e=e?e:window.event;

        if(arrWindowEvents)
        {
            for(var i=0; i < arrWindowEvents.length;i++)
            {
                if(arrWindowEvents[i].type==me.EVENT_ON_WND_SCROLL)
                    invokeListener(arrWindowEvents[i].listener,arrWindowEvents[i].args,e);
            }
        }
    };


    /**
     * Private function used in common document event handlers
     */
    function invokeListener(fnListener,arrArgs,e)
    {
        var args =[];
        if(arrArgs!=null)
        {
            for(var j=0; j < arrArgs.length; j++)
                args[j]=arrArgs[j];
        }

        args[args.length]=e;
        cross.callFunction(window,fnListener,args);
    }

    this.removeInstanceFromPool=function(objInstancePool,key)
    {
        var value=objInstancePool[key];
        if(objInstancePool[key])
        { delete objInstancePool[key];
            value=null;
        }

        if(window[key])
        {
            try{
                delete window[key] ;    //deleting singleton objects
                window[key]=null;
            }
            catch(e)
            {
                window[key]=null;// IE work around
            }

        }

    };
    this.getImageDimensions = function(clImageElement)
    {
        var iWidth=0,iHeight=0;

        //clElement;// assumed as image element
        if(me.isIE())
        {
            return getNatural(clImageElement);
        }
       /* if ('naturalWidth' in new Image)// IE 8,7
        {
            return getNatural(clImageElement);
        }
        else if(clImageElement.naturalWidth)//IE 9
        {
            iWidth=clImageElement.naturalWidth;
            iHeight=clImageElement.naturalHeight;
        }*/
        else // other browers
        {
            iWidth=clImageElement.width;
            iHeight=clImageElement.height;
        }
        function getNatural (DOMelement)
        {
            var img = new Image();
            img.src = DOMelement.src;
            return {width: img.width, height: img.height};
        }
        return {width: iWidth, height: iHeight};
    };

    /**
     * returns true if flash is installed.
     */
    this.isFlashSupported = function()
    {
        var isSupported=false;
        if(navigator.plugins && navigator.mimeTypes.length)
        {
            var x = navigator.plugins["Shockwave Flash"];
            if(x && x.description)
            {
                isSupported=true;
            }
            else
                isSupported=false;
        }
        else
        {
            try {
                axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                isSupported=true;

            }
            catch(e)
            {
                isSupported=false
            }
        }
        return isSupported;
    };

    /**
     *    return index of the element from parentNode
     * @param elem
     */
    this.getIndexOf=function(childEl)
    {
        var arr,i=0,iLen;
        arr=me.getChildren(childEl.parentNode);
        iLen=arr.length;
        for(i;i<iLen;i++)
        {
            if(childEl==arr[i])
                break;
        }
        return i;
    };

     /**
     *   it unescapes the html special code like &amp; etc.. and returns the normal string
     * @param elem
     */
   this.unescapeHTML=function(html)
   {
       var sReturn=null;
        var htmlNode = document.createElement("DIV");
        htmlNode.innerHTML = html;
        if(htmlNode.innerText !== undefined)
           sReturn=htmlNode.innerText; // IE
       else
           sReturn= htmlNode.textContent; // FF

       delete htmlNode;
       return sReturn;
   };
    /**
     * returns center positions of the document.
     */
   this.getCenterPositions=function()
   {
       var x,y;
       x=document.body.clientWidth / 2 ;
       y=document.body.clientHeight/ 2 ;
       if(me.isIE&&document.getElementById("containerDiv")){
           x+=document.getElementById("containerDiv").scrollLeft;
           y+=document.getElementById("containerDiv").scrollTop;
       }
       else{
           x+=document.body.scrollLeft;
           y+=document.body.scrollTop;
       }
       return [x,y];
   };



    this.fireEvent2=function (obj, evt)
    {
     var fireOnThis = obj;
     if( document.createEvent ) {
       var evObj = document.createEvent('MouseEvents');
       evObj.initEvent( evt, true, false );
       fireOnThis.dispatchEvent( evObj );
     }
      else if( document.createEventObject ) { //IE
       var evObj = document.createEventObject();
       fireOnThis.fireEvent( 'on' + evt, evObj );
     }
    };

     /**
     * returns font-family name of the given fontid.
     */
    this.getFontFamily=function(byFontId)
    {
        var sFamilyName=null;
        byFontId=parseInt(byFontId);
        switch(byFontId)
        {
            case Constants.IFont.ARIAL :
                sFamilyName="Arial";
                break;
            case Constants.IFont.CALIBRI :
                sFamilyName="Calibri";
                break;
            case Constants.IFont.CAMBRIA :
                sFamilyName="Cambria";
                break;
            case Constants.IFont.CAMBRIA_MATH :
                sFamilyName="Cambria Math";
                break;
            case Constants.IFont.CANDARA :
                sFamilyName="Candara";
                break;
            case Constants.IFont.COMIC_SANS_MS :
                sFamilyName="Comic Sans MS";
                break;
            case Constants.IFont.CONSOLAS :
                sFamilyName="Consolas";
                break;
            case Constants.IFont.CONSTANTIA :
                sFamilyName="Constantia";
                break;
            case Constants.IFont.CORBEL :
                sFamilyName="Corbel";
                break;
            case Constants.IFont.COURIER :
                sFamilyName="Courier";
                break;
            case Constants.IFont.COURIER_NEW :
                sFamilyName="Courier New";
                break;
            case Constants.IFont.FIXEDSYS :
                sFamilyName="Fixedsys";
                break;
            case Constants.IFont.FRANKLIN_GOTHIC :
                sFamilyName="Franklin Gothic";
                break;
            case Constants.IFont.GABRIOLA :
                sFamilyName="Gabriola";
                break;
            case Constants.IFont.GEORGIA :
                sFamilyName="Georgia";
                break;
            case Constants.IFont.IMPACT :
                sFamilyName="Impact";
                break;
            case Constants.IFont.LUCIDA_CONSOLE :
                sFamilyName="Lucida Console";
                break;
            case Constants.IFont.LUCIDA_SANS_UNICODE :
                sFamilyName="Lucida Sans Unicode";
                break;
            case Constants.IFont.MICROSOFT_SANS_SERIF :
                sFamilyName="Microsoft Sans Serif";
                break;
            case Constants.IFont.MS_SANS_SERIF :
                sFamilyName="MS Sans Serif";
                break;
            case Constants.IFont.MS_SERIF :
                sFamilyName="MS Serif";
                break;
            case Constants.IFont.PALATINO_LINOTYPE :
                sFamilyName="Palatino Linotype";
                break;
            case Constants.IFont.SEGOE_PRINT :
                sFamilyName="Segoe Print";
                break;
            case Constants.IFont.SEGOE_SCRIPT :
                sFamilyName="Segoe Script";
                break;
            case Constants.IFont.SEGOE_UI :
                sFamilyName="Segoe UI";
                break;
            case Constants.IFont.SEGOE_UI_SYMBOL :
                sFamilyName="Segoe UI Symbol";
                break;
            case Constants.IFont.SYSTEM :
                sFamilyName="System";
                break;
            case Constants.IFont.TAHOMA :
                sFamilyName="Tahoma";
                break;
            case Constants.IFont.TIMES_NEW_ROMAN :
                sFamilyName="Times New Roman";
                break;
            case Constants.IFont.TREBUCHET_MS :
                sFamilyName="Trebuchet MS";
                break;
            case Constants.IFont.VERDANA :
                sFamilyName="Verdana";
                break;
        }
        return sFamilyName;
    };

    this.isDocumentScrollExist = function()
    {
        return me.isScrollExist(me.getDocumentScrollObject());
    };

    this.isDocumentHorizontalScrollExist = function()
    {
        return me.isHorizontalScrollExist(me.getDocumentScrollObject());
    };

    this.isDocumentVerticalScrollExist = function()
    {
        return me.isHorizontalScrollExist(me.getDocumentScrollObject());
    };

    this.getDocumentScrollObject=function()
    {
        if(me.isIE()&& me.getBrowserVersion() < 9 && document.getElementById("containerDiv"))
            return document.getElementById("containerDiv");
        else
            return document.body;
    };

    this.isScrollExist = function(objContainer)
    {
        return (me.isHorizontalScrollExist(objContainer) || me.isVerticalScrollExist(objContainer));
    };

    this.isHorizontalScrollExist = function(objContainer)
    {
        return objContainer.scrollWidth>objContainer.clientWidth;
    };

    this.isVerticalScrollExist = function(objContainer)
    {
       return objContainer.scrollHeight>objContainer.clientHeight;
    };

    this.getScreenType = function()
    {
        var iWidth = cross.getClientWidth();
        if(iWidth>=1200)
            return me.TYPE_LARGE;
        else if(iWidth>=992 && iWidth<=1200)
            return me.TYPE_MEDIUM;
        if(iWidth>=768 && iWidth<992)
            return me.TYPE_SMALL;
        else if(iWidth < 768)
            return me.TYPE_EXTRASMALL;
    };

};

function callFunction2(obj, fn, args)
{
    if(fn)
    {
        if(typeof args=="object")
        {
            return fn.apply(obj, args);
        }
        else
        {
            var newargs = [args];
            for (var i = 0; i < arguments.length; i++)
                newargs.push(arguments[i]);
            return fn.apply(obj, newargs);
        }
    }
    return null;
};


document.onclick=cross.docOnClick;
document.onkeyup=cross.docOnKeyUp;
document.onkeydown=cross.docOnKeyDown;
document.oncontextmenu=cross.docOnContextMenu;


/*if ("onpagehide" in window) // chrome/safari
{
    window.onpagehide=cross.wndOnUnload;
    alert(window.onpagehide)
}
else*/

if(window.onbeforeunload || window.onbeforeunload==null)// html5
{
    if(cross.isIE() && cross.getIEVersion()!=9)
        window.onbeforeunload=cross.wndOnUnload;
}
else // IE,firefox
    window.onunload=cross.wndOnUnload;


  window.onmousemove=cross.wndOnMouseMove;
if ("onhashchange" in window)
{
    window.onhashchange=cross.wndOnHashChange;
}

window.onscroll=cross.wndOnScroll;


window.addEventListener('error', function (e)
{
    var stack = e.error.stack;
    var message = e.error.toString();
    if (stack)
    {
        message += '\n' + stack;

    }

    if(console)
        console.log(message);
        message = util.encodeHTML(message);
//    msg.showMessage(0,message,"Script Error",500);
        //alert(message);



});
