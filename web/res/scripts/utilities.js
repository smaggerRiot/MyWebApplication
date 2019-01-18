var util=new function()
{

    var me=this;
    this.resizeTimer = undefined;
    this.resizeInProgress = false;

    this.sResizeUrl=null;
    this.sPrintUrl=null;
    this.fnWindowResizeCB=null
     this.setSelectionRange = function(el, start, end)
    {       // alert("sss")
        if (document.createRange && window.getSelection)
        {
            var range = document.createRange();
            range.selectNodeContents(el);
            var textNodes = util.getTextNodesIn(el);
                   // alert(textNodes)
            var foundStart = false;
            var charCount = 0, endCharCount;

            for (var i = 0, textNode; textNode = textNodes[i++]; )
            {
                          //  alert(textNode.length)
                endCharCount = charCount + textNode.length;
                // setting start index
                if (!foundStart && start >= charCount && (start < endCharCount ||
                                                          (start == endCharCount && i < textNodes.length)))
                {
                    range.setStart(textNode, start - charCount);
                    foundStart = true;
                }
                // setting end index
                if (foundStart && end <= endCharCount)
                {
                    range.setEnd(textNode, end - charCount);
                    break;
                }
                charCount = endCharCount;
            }

            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        }
        // its for ie  old vesions
        else if (document.selection && document.body.createTextRange)
        {

            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(true);
            textRange.moveEnd("character", end);
            textRange.moveStart("character", start);
            textRange.select();
        }
    };

       this.getTextNodesIn = function(node)
    {
        var textNodes = [];
        if (node.nodeType == 3)
            textNodes.push(node);
        else
        {
            var children = node.childNodes;
            for (var i = 0, len = children.length; i < len; ++i)
            {
                textNodes.push.apply(textNodes, me.getTextNodesIn(children[i]));
            }
        }
        return textNodes;
    };
    this.hasClass=function(ele, cls)
    {
        if(ele && ele.className)
            return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
        return false;
    };

    this.addClass=function(ele, cls)
    {
        if (ele && !me.hasClass(ele, cls))
        {
            var sOldClass=ele.className
            ele.className =sOldClass+" "+cls;
        }
    };

    this.removeClass=function(ele, cls)
    {
        if (ele && me.hasClass(ele, cls))
        {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    };

    this.startsWith=function(sValue, sStartString)
    {
        if (!sValue)
        {
            return false;
        }
        //alert(this.replaceHtmlEntites)
        sValue=me.htmlEnDeCode.htmlDecode(sValue);
      //  util.writeToLog(sValue.length+"  "+sValue+" "+decodeURIComponent(sValue)+" "+decodeURIComponent(sValue).length)
        sValue = sValue.substring(0, sStartString.length);
       // util.writeToLog(decodeURI(sValue+"-"+sStartString+"  "+(sValue == sStartString)));

        if (sValue == sStartString)
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    this.addSlashes=function(str)
    {

        str = str.replace(/\\/g, '\\\\');
        str = str.replace(/\'/g, '\\\'');
        str = str.replace(/\"/g, '\\"');
        str = str.replace(/\0/g, '\\0');
        return str;
    };

    this.stripSlashes=function(str)
    {
        str = str.replace(/\\\\/g, '\\');
        str = str.replace(/\\'/g, '\'');
        str = str.replace(/\\"/g, '"');
        str = str.replace(/\\0/g, '\0');

        return str;
    };



    this.endsWith=function(sValue, sEndString)
    {
        sValue=me.htmlEnDeCode.htmlDecode(sValue);
        sValue = sValue.substring(sValue.length - sEndString.length, sValue.length);
        if (sValue == sEndString)
        {
            return true;
        }
        else
        {
            return false;
        }
    };

    this.checkNetConnection= function(FuncName)
    {
        var xhr = new XMLHttpRequest();
        var file = "/StrutsFinalNew/res/global/images/blank.png";
        xhr.open('HEAD', file, false);  //
        try {
            xhr.send();
            if (xhr.status >= 200 && xhr.status < 304) {
                if(FuncName)
                {
                    //cross.callFunction(null,eval(FuncName),[true]);
                    FuncName(true);
                }

            } else {
                if(FuncName)
                {
                    FuncName(false);
                }

            }
        } catch (e) {
            return false;
        }
    };

    this.checkBit=function(ivalue, ibitpos)
    {
        if ((ivalue & (1 << ibitpos) ) > 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    };


    this.packBit=function(ivalue, ibitpos)
    {
        //alert('pack bit  '+ivalue+','+ibitpos)
        //alert((ivalue | ( 1 << ibitpos)));
        ivalue = (ivalue | ( 1 << ibitpos));
        //alert(ivalue );
        return ivalue;
    };

    this.unPackBit=function(ivalue, ibitpos)
    {
        ivalue = (ivalue & (~(1 << ibitpos)));
        return ivalue;
    };

    /************************************************************
     Trims the given string by removing left and right spaces.
     *************************************************************/

    this.trim=function(value)
    {
        if (value )
        {
            if( value.length > 0 && (value.charAt(0)==' ' || value.charAt(value.length-1)==' '))
                return value.replace(/^\s+|\s+$/g, '');
            return value;
                /*return value;
            else //if(isFinite(value))
                return value.replace(/^\s+|\s+$/g, '');*/
            /*else
                return value;*/
        }

        return "";
    };

    // removes all the childnodes of an element
    this.removeAll=function(objElement)
    {
        while (objElement.childNodes && objElement.childNodes.length > 0)//alert('removing...');
        {
            objElement.removeChild(objElement.firstChild);
        }
        //document.removeChild(objElement);
    };

    // returns x,y  properties relative to window in terms clientX, clientY event properties
    /*function getPosition(obj)
     {
     var curleft = 0, curtop = 0;
     if (obj.offsetParent)
     {
     curleft = obj.offsetLeft;
     curtop = obj.offsetTop;
     while (obj = obj.offsetParent)
     {
     curleft += obj.offsetLeft;
     curtop += obj.offsetTop;
     }
     }

     return [curleft,curtop];
     }*/


    this.encodeURI=function(sValue)
    {
        if (encodeURIComponent)
            sValue= encodeURIComponent(sValue);
        else if (escape)
            sValue = escape(sValue);
        return sValue;
    };

/*
    this.getSrcElement=function(evt)
    {
        evt = window.event || evt;
        return (evt.srcElement) ? evt.srcElement : evt.target;
    };

    this.getEvent=function(evt)
    {
        return (window.event || evt);
    };
*/
     //     getResWidth(), getResHeight() are al
   /* this.getResWidth=function(iWidth)
    {
        var iScreenWidth = document.body.clientWidth;
        if (iScreenWidth != 1024)
        {
            iWidth = (iScreenWidth * (iWidth / 1024));
        }
        return iWidth;
    };

    this.getResHeight=function(iHeight)
    {
        var iScreenHeight = document.body.clientHeight;
        if (iScreenHeight != 786)
        {
            iHeight = (iScreenHeight * (iHeight / 786));
        }
        return iHeight;
    };*/

    this.getElement=function(sId)
    {
        /*alert(sId)
         alert("sId "+document.all(sId))*/
        if (document.all)// && document.getElementById!="undefined")
        {
            return document.all(sId);//document.all(sId);
        }
        else if (document.getElementById && document.getElementById != "undefined")
        {
            return document.getElementById(sId);
        }

        return null;
    };

    this.isSupportsHTML5FileAPI=function()
    {
        // Checking all the possible window objects needed for file api
        if (window.File && window.FileReader && window.FileList && window.Blob)
            return true;
        return false;
    };

    this.isSupportsHTML5ColorPicker=function()
    {
        var i = document.createElement("input");
        i.setAttribute("type", "color");
        return (i.type !== "text"?1:0);
    };

    this.getHTML5Support=function()
    {
        var iHTML5Support=0;
        if(me.isSupportsHTML5FileAPI())
            iHTML5Support=util.packBit(iHTML5Support,Constants.IHTML5_SUPPORT.UPLOAD);

        var objInput = document.createElement("input");
        objInput.setAttribute("type", "color");
        if(objInput.type !== "text")
            iHTML5Support=util.packBit(iHTML5Support,Constants.IHTML5_SUPPORT.COLOR_PICKER);
        return iHTML5Support;
    };

    /*
     * this function is used to convert RGB into a interger value
     * */
    this.RGBPacking=function(iRed, iGreen, iBlue)
    {
        return parseInt(iRed) + ((1 << 8) * parseInt(iGreen)) + ((1 << 16) * parseInt(iBlue));
    };

    /*
     * this function is used to convert interger value into array with length 3, contains Red,Green,Blue
     * */
    this.RGBUnPacking=function(iColor)
    {
        var arrRGB = new Array();
        arrRGB[arrRGB.length] = ((iColor % (1 << 16)) % (1 << 8)) / 100;
        arrRGB[arrRGB.length] = ((iColor % (1 << 16)) / (1 << 8)) / 100;
        arrRGB[arrRGB.length] = (iColor / (1 << 16)) / 100;
        return arrRGB;
    };

    this.getHexaColor=function(iColor) {
        var hex = parseInt(iColor).toString(16);
        return (hex.length < 2) ? "0" + hex : hex;
    };

    this.packHexaColor=function(hex) {
        return parseInt("0x" + hex);
    };

    this.writeToConsole=function(sMsg)
    {
        if (window.console)
        {
            console.log(sMsg);
        }
    };

    this.writeToLog=function(sMsg)
    {
       /* if (typeof console != "undefined")
        {
            console.info(sMsg);
        }
        else
        {*/
            var objDiv = document.getElementById("logDiv");
            if (!objDiv)
            {
                objDiv = document.createElement("DIV");
                objDiv.style.width = "240px";
                objDiv.style.backgroundColor = "#cccccc";
                objDiv.style.position = "absolute";
                objDiv.style.zIndex = 200;
                var iStartXPos = 5;
                var iStartYPos = 5;
                /*if(document.body.scrollLeft>0)
                 iStartYPos+=document.body.scrollTop;*/
                if (document.body.scrollTop > 0)
                {
                    iStartYPos += document.body.scrollTop;
                }

                objDiv.style.left = iStartXPos + "px";
                objDiv.style.top = iStartYPos + "px";
                objDiv.innerHTML = "<div align='right'><a href='javascript:void(0)' onclick='this.parentNode.nextSibling.innerHTML=\"\";'>Clear</a>&nbsp;&nbsp;" +
                                   "<a href='javascript:void(0)' id='logDivLink'>Hide</a>&nbsp;&nbsp;</div><div id='logDiv'></div>";
                document.body.appendChild(objDiv);
                objDiv = document.getElementById("logDiv");
                var objDivLink = document.getElementById("logDivLink");

                objDivLink.onclick = function()
                {
                    if (objDiv.style.display == "none")
                    {
                        objDiv.style.display = "block";
                        objDivLink.innerHTML = "Hide";
                    }
                    else
                    {
                        objDiv.style.display = "none";
                        objDivLink.innerHTML = "Show";
                    }
                };
            }
            objDiv.innerHTML += sMsg + "<br>";
       // }
    };

    this.hideLogger=function()
    {
        var objDiv = document.getElementById("logDiv");
        if (objDiv)
        {
            objDiv.style.display = "none";
        }
    };

    this.setBackgroundImgDimensions=function(iWidth,iHeight)
    {
        var objImg = document.getElementById("disableBGImg");
        if (objImg)
        {
            //alert(iClientWidth+","+iClientHeight)
            objImg.style.width = iWidth;
            objImg.style.height = iHeight;
        }
        //document.getElementById("loadstatus").style.left=iClientWidth/2; //setting 'loading' image left margin
    };

    this.getWindowDimensions=function()
    {
        var iClientWidth=0;
        var iClientHeight=0;

        if (document.body)
        {
            iClientWidth = document.body.clientWidth;
            iClientHeight = document.body.clientHeight;
            //        alert(document.body.scrollHeight)
            //        if (document.body.scrollHeight)
            //            iClientHeight += document.body.scrollHeight;
            //alert(iClientHeight+","+document.body.clientHeight)
        }
        else
        {
            iClientWidth = window.innerWidth;
            iClientHeight = window.innerHeight;
        }
        //alert(iClientWidth+","+iClientHeight)
        return [iClientWidth,iClientHeight];
    };

    this.toggleBackground=function(isDisable,isHideLoadStatus,sMessage,isHideBgImg,isForDialog)
    {
        var elemImg = document.getElementById("disableBGImg");
       /* if(!elemImg)
            elemImg=parent.document.getElementById("disableBGImg");*/

        if (!elemImg)
        {
            elemImg = document.createElement("img");
            elemImg.id = "disableBGImg";
            elemImg.className = "disableBGImg";
//            elemImg.src = app.getImagePath(true) + "disable-bg.gif";
            elemImg.src = app.getImagePath(true) + "blank.png";
//            elemImg.className = "sModule s-disable-bg";



            document.body.appendChild(elemImg);
           // elemImg.style.width=document.body.scrollWidth;
          //  elemImg.style.height=document.body.scrollHeight; 
            me.setBackgroundImgDimensions();
        }
        else
        {
            //elemImg.style.width=document.body.offsetWidth;
            //elemImg.style.height=document.body.offsetHeight;
             if(cross.isIE())
           {

            var clElement = document.getElementById("dialogscroller")
            if (!clElement)
                clElement=document.getElementById("containerDiv")
            if(!clElement)
                clElement=document.body;
              elemImg.style.width=clElement.scrollWidth;
              elemImg.style.height=clElement.scrollHeight;
          //   alert("=="+elemImg.style.height+clElement.id)
           }
          else
             {
            elemImg.style.width=document.body.scrollWidth;
            elemImg.style.height=document.body.scrollHeight;
             }
            //elemImg.style.backgroundColor='red';

        }

        if(isHideBgImg)
            elemImg.style.opacity="0";
        else
            elemImg.style.opacity="0.3";


        var objContainerTable=document.getElementById("containerTable");
        if(objContainerTable)
            objContainerTable.style.cssText ="";

        if (isDisable)
        {
            me.startLoadTimer();
            elemImg.style.display = "block";
            if(isForDialog)
                elemImg.style.zIndex="3";

            if(isForDialog && objContainerTable)
                objContainerTable.style.cssText ="-webkit-filter: blur(0px);"; //removed blur feature for enabling them to view background values
        }
        else
        {
            elemImg.style.display = "none";
            me.endLoadTimer();
            if(isForDialog)
                elemImg.style.zIndex="10";
        }

        me.toggleLoadStatus(!isDisable || isHideLoadStatus,sMessage);

    };

    this.toggleLoadStatus=function(isHide,sMessage)
    {
        var objLoadStatus=document.getElementById("loadstatus");
        if(!objLoadStatus)
        {

            try
            {
                objLoadStatus=parent.document.getElementById("loadstatus");
            }
            catch(e)
            {   }
        }
//        if(!objLoadStatus)
//            objLoadStatus=parent.document.getElementById("loadstatus");
        if(objLoadStatus)
        {
            if(isHide)
                objLoadStatus.style.display = "none";
            else
            {
                if(!sMessage)
                    sMessage=MsgHandler.getMsg(MsgConstants.LOADING);//"Loading...";

                var objLoadstatusMsg=document.getElementById("loadstatusMsg");
                if(!objLoadstatusMsg)
                    objLoadstatusMsg=parent.document.getElementById("loadstatusMsg");
//                if(!objLoadstatusMsg)
//                    objLoadstatusMsg=parent.document.getElementById("loadstatusMsg");
                objLoadstatusMsg.innerHTML=sMessage;
                objLoadStatus.style.display = "";
            }
        }
    };

    // for disable perticular element.
    this.toggleElementBackground=function(element,isDisable,isHideLoadImg)
    {
        var objDiv,position;
        objDiv=document.getElementById("elmntBGDisable");
        if(element)
        {
            position=cross.getPosition(element);
            if(!objDiv)
            {
                objDiv=window.document.createElement("DIV");
                objDiv.id="elmntBGDisable";
                cross.setVisible(objDiv,false);
            }

            if(isDisable)
            {
                objDiv.className="disableElementBG"+ (isHideLoadImg?"":" loadingImg");
                objDiv.style.left= position[0];
                objDiv.style.top= position[1];

                objDiv.style.width= element.offsetWidth;
                objDiv.style.height= element.offsetHeight;
            }
           // util.writeToLog(element.offsetWidth+"--"+element.offsetHeight+"--"+isDisable);

            var clElement=document.getElementById("containerDiv");
            clElement=(clElement?clElement:element);
            clElement.appendChild(objDiv);
            cross.setVisible(objDiv,isDisable);
        }
        else if(objDiv)
            cross.setVisible(objDiv,false);
    };

    var iTimerId;
     var iLoadStartTime = 0;

    this.startLoadTimer=function()
    {
        if (typeof window["iLoadStartTime"] != "undefined" && iLoadStartTime == 0)
            iLoadStartTime = new Date().getTime();
        //writeToLog("loading started at "+new Date().getMilliseconds())
    };

    this.endLoadTimer=function()
    {
        if (typeof window["iLoadStartTime"] != "undefined" && iLoadStartTime > 0)
        {
            iLoadStartTime = 0;
            iTimerId = setTimeout("util.hideLoadTime", 3000);
        }
    };

    this.hideLoadTime=function()
    {
        util.hideLogger();
        if (iTimerId)
        {
            clearTimeout(iTimerId);
        }
        iTimerId = null;
    };

    this.onScriptsLoad=function()
    {
        if(typeof window["initAllCombos"]=="function")
            initAllCombos();
    };

    this.GetZoomFactor=function()
    {
        var factor = 1;
        if (document.body.getBoundingClientRect) {
            // rect is only in physical pixel size in IE before version 8
            var rect = document.body.getBoundingClientRect ();
            var physicalW = rect.right - rect.left;
            var logicalW = document.body.offsetWidth;

            // the zoom level is always an integer percent value
            factor = Math.round ((physicalW / logicalW) * 100) / 100;
        }
        return factor;
    };

    this.getDateSeparator=function(iFormat)
    {
        switch(iFormat)
        {
            case Constants.DDMMYYYY:
            case Constants.MMDDYYYY:
            case Constants.YYYYMMDD:
            case Constants.DDMMYY:
                return "/";
            case Constants.DD_MM_YYYY:
            case Constants.DD_MM_YY:
            case Constants.MM_DD_YYYY:
            case Constants.YYYY_MM_DD:
            case Constants.DD_MON_YY:
            case Constants.DD_MON_YYYY:
                return "-";
            case Constants.DD__MON__YYYY:
            case Constants.DD__MON__YY:
                return " ";
            case Constants.DD____MM____YYYY:
            case Constants.DD____MM____YY:
            case Constants.MM____DD____YYYY:
                return "\\";
            default:
                return "/";
        }
    };

    this.parseDate=function(sDate,iFormat,isDateTime)
    {
        if(!iFormat)
            iFormat=clAppBuffer.getDateFormat();

        iFormat=parseInt(iFormat,10);
        if(isDateTime)
            sDate=sDate.substring(0,sDate.indexOf(" "));

        var sArrReturnDate=sDate.split(util.getDateSeparator(iFormat));

        switch(iFormat)
        {
            case Constants.DDMMYYYY:
            case Constants.DD_MM_YYYY:
            {
                return sArrReturnDate;
            }
            case Constants.MMDDYYYY:
            case Constants.MM_DD_YYYY:
                return [sArrReturnDate[1],sArrReturnDate[0],sArrReturnDate[2]];
            case Constants.YYYYMMDD:
            case Constants.YYYY_MM_DD:
                return [sArrReturnDate[2],sArrReturnDate[1],sArrReturnDate[0]];
            default:
            {
                return sArrReturnDate;
            }
        }
    };

    this.getCurrentDate=function()
    {
        return this.getDateObject();
    };

    this.getDateObject=function(sDate,isDateTime,isSetTime)
    {
        var dStartDate=new Date();
        if(!sDate)
            sDate=clAppBuffer.getTodaysDateAsString();

        if(sDate)
        {
            var sArrDate=util.parseDate(sDate,null,isDateTime);
            dStartDate.setDate(1);
            dStartDate.setMonth(parseInt(sArrDate[1],10)-1);
            dStartDate.setYear(sArrDate[2]);
            dStartDate.setDate(sArrDate[0]);

            if(isDateTime)
            {
                if(isSetTime)
                {
                    var sArrTime=util.parseTime(sDate.substring(sDate.indexOf(" ")+1));
                    dStartDate.setHours(sArrTime[0]);
                    dStartDate.setMinutes(sArrTime[1]);
                }
                else
                {
                    dStartDate.setHours(0);
                    dStartDate.setMinutes(0);
                }
            }
        }
        return dStartDate;
    };

    /**
     * This method returns day count between startdate and endate. For same dates it will return zero
     * @param dStartDate
     * @param dEndDate
     */
    this.getDateDiff=function(dStartDate,dEndDate)
    {
        return (dEndDate - dStartDate) / (1000*60*60*24); //86400000;
    };

    /**
     * This method returns minute count between startdate and endate
     * @param dStartDate
     * @param dEndDate
     */
    this.getTimeDiff=function(dStartDate,dEndDate)
    {
        return (dEndDate - dStartDate) / (1000*60);
    };

    this.getDateAdd=function(dDate,iAddValue)
    {
        dDate.setDate(dDate.getDate()+iAddValue);
        return dDate;
    };

    this.parseTime=function(sTime)
    {
        var sArrTime=sTime.split(":");
        var sTimePart=sArrTime[1].split(" ");

        if(sTimePart.length>1)
        {
            if(sTimePart[1]=="PM")
            {
                 if(sArrTime[0]!="12")
                    sArrTime[0]=parseInt(sArrTime[0],10)+12;
            }
            else if(sArrTime[0]=="12")
                sArrTime[0]=0;
            sArrTime[1]=sTimePart[0];
        }

        return sArrTime;
    };
    this.setWindowResizeCB=function(fnCallback)
     {
          me.fnWindowResizeCB=fnCallback;
     };

    /**
     * This function fires while resizing the browser................
     */
    this.windowResizeBrowserHandler=function()
    {
        if (!me.resizeInProgress)  // Avoid multiple calling while resizing
        {
            if (me.resizeTimer != undefined)
                clearTimeout(me.resizeTimer);
            me.resizeTimer = setTimeout(function(){
                                                     me.resizeInProgress = true;
                                                     clearTimeout(me.resizeTimer);
                                                     me.resizeTimer = setTimeout(util.resizeComplete, 500);
                                                   }, 500);
        }
        if(me.fnWindowResizeCB)
            me.fnWindowResizeCB();
    };

    /**
     * This is the spot to run a custom function after the  browser has completed resizing
     */
    this.resizeComplete=function()
    {
        clearTimeout(me.resizeTimer);
        me.resizeInProgress = false;
        var arrDimensions,iWidth,iHeight;
        arrDimensions=me.getWindowDimensions();   // Get current clientWidth and clientHeight of browser without Scrolling ...
        iWidth=arrDimensions[0];
        iHeight=arrDimensions[1];
        me.setBackgroundImgDimensions(iWidth,iHeight);    //for Background image...
        con.sendPostRequest(me.sResizeUrl,"&clientWidth="+iWidth+"&clientHeight="+iHeight); // Update clientWidth and clientHeight at serverSide (CLHomeCtl)...
    };

    this.roundValue=function(fValue,iNoOfDecimals)
    {
        var result = Math.round(fValue*Math.pow(10,iNoOfDecimals))/Math.pow(10,iNoOfDecimals);
        return result.toFixed(iNoOfDecimals);
    };

    this.getFixedLengthString=function(sValue,iLength,sReplaceChar)
    {
        if(sValue==null)
            sValue="";

        if(!sReplaceChar)
            sReplaceChar="0";

        while(iLength-sValue.length>0)
        {
            sValue="0"+sValue;
        }
        return sValue;
    }

    this.printView =  function(sUrl,sParams,isDontShowPrintHeader)
    {
        if(sParams)
            sUrl=sUrl+"?"+sParams;
        var sImportUrl = util.encodeURI(sUrl);
        sUrl=me.sPrintUrl+"?sImportUrl="+sImportUrl;
       if(isDontShowPrintHeader)
           sUrl+="&showPrintHeader="+!isDontShowPrintHeader;
        window.open(clAppBuffer.getContextPath()+"/"+sUrl);
    };


    this.replaceHtmlTags = function(sHTML,sTag,sReplaceVal)
    {
        var cRegExp=null;
         if(sTag && sTag.length>0)
            cRegExp=new RegExp("<\/?[("+sTag.toLowerCase()+"|"+sTag.toUpperCase()+")>]+>","ig");
         else
            cRegExp=/<\/?[^>]+>/g;

        //cRegExp=/<\/?[(b|B)>]+>/g;

         return sHTML.replace(cRegExp,sReplaceVal);

    }
      this.decodeHTML = function(sText)
    {
        return me.htmlEnDeCode.htmlDecode(sText);
    }
    this.eecodeHTML = function(sText)
    {
        return me.htmlEnDeCode.htmlEncode(sText);
    }

    this.decodeHTML = function(sText)
    {
        return me.htmlEnDeCode.htmlDecode(sText);
    }
    this.encodeHTML = function(sText)
    {
        return me.htmlEnDeCode.htmlEncode(sText);
    }
    this.replaceHtmlEntites = function(sText)
      {
          var translate_re = /&(nbsp|amp|quot|lt|gt);/g;
          var translate =
          {
            "nbsp": " ",
            "amp" : "&",
            "quot": "\"",
            "lt"  : "<",
            "gt"  : ">"
          };

          sText=sText.replace(translate_re, function(match, entity)
            {
              return translate[entity];
            } );
               //alert("sText  "+sText)
          return sText;
        };
    /**
     * author:nagababu
     * using this function we can shake element.
     */
    var rector=3,a=1,iCount = 0;
    var g_ele,g_iNoOfShakes;
    this.shake = function()
    {
        if (a==1)
            g_ele.style.top=parseInt(g_ele.style.top)+rector+"px";
        else if (a==2)
            g_ele.style.left=parseInt(g_ele.style.left)+rector+"px";
        else if (a==3)
                g_ele.style.top=parseInt(g_ele.style.top)-rector+"px";
            else
                g_ele.style.left=parseInt(g_ele.style.left)-rector+"px";
        iCount++;
        if (a<4)
            a++;
        else
            a=1;
        if(iCount == g_iNoOfShakes)
        {
            iCount=0;
            g_ele.style.position = "";
            clearInterval(iIntervalId);
        }
    };
    /**
     * author:nagababu
     * Using this function we can call to shake function
     */
    var iIntervalId=0;
    this.shakeElement = function(ele,iNoOfShakes)
    {
        ele.style.position = "relative";
        g_ele = ele ;
        g_iNoOfShakes = iNoOfShakes;
        g_ele.style.left=0;
        g_ele.style.top=0;
        iIntervalId = setInterval(me.shake,1);
    };

    this.setCookie=function(name,value,days)
    {
        if (days)
        {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires;
    };

    this.expireCookie=function(cName)
    {
        document.cookie =cName+"=deleted; expires=" +new Date( 0 ).toUTCString();
    };

    this.readCookie=function (name)
    {
        // alert(name);
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++)
        {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    };


    this.convertNumberToWord=function(number)
    {
        if ((number < 0) || (number > 999999999))
        {
            return "";
        }
        var Gn = Math.floor(number / 10000000);  /* Crore */
        number -= Gn * 10000000;
        var kn = Math.floor(number / 100000);     /* lakhs */
        number -= kn * 100000;
        var Hn = Math.floor(number / 1000);      /* thousand */
        number -= Hn * 1000;
        var Dn = Math.floor(number / 100);       /* Tens (deca) */
        number = number % 100;               /* Ones */
        var tn= Math.floor(number / 10);
        var one=Math.floor(number % 10);
        var res = "";

        if (Gn>0)
        {
            res += (util.convertNumberToWord(Gn) + " Crore");
        }
        if (kn>0)
        {
            res += (((res=="") ? "" : " ") +
                    util.convertNumberToWord(kn) + " Lakhs");
        }
        if (Hn>0)
        {
            res += (((res=="") ? "" : " ") +
                    util.convertNumberToWord(Hn) + " Thousand");
        }

        if (Dn)
        {
            res += (((res=="") ? "" : " ") +
                    util.convertNumberToWord(Dn) + " hundred");
        }


        var ones = Array("", "One", "Two", "Three", "Four", "Five", "Six","Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen","Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eightteen","Nineteen");
        var tens = Array("", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty","Seventy", "Eigthy", "Ninety");

        if (tn>0 || one>0)
        {
            if (!(res==""))
            {
                res += " and ";
            }
            if (tn < 2)
            {
                res += ones[tn * 10 + one];
            }
            else
            {

                res += tens[tn];
                if (one>0)
                {
                    res += ("-" + ones[one]);
                }
            }
        }

        if (res=="")
        {
            res = "";
        }
        return res;
    }




this.htmlEnDeCode = (
        function()
        {
    var charToEntityRegex,
        entityToCharRegex,
        charToEntity,
        entityToChar;

    function resetCharacterEntities() {
        charToEntity = {};
        entityToChar = {};
        // add the default set
        addCharacterEntities({
            '&amp;'     :   '&',
            '&gt;'      :   '>',
            '&lt;'      :   '<',
            '&quot;'    :   '"',
            '&#39;'     :   "'"
        });
    }

    function addCharacterEntities(newEntities) {
        var charKeys = [],
            entityKeys = [],
            key, echar;
        for (key in newEntities) {
            echar = newEntities[key];
            entityToChar[key] = echar;
            charToEntity[echar] = key;
            charKeys.push(echar);
            entityKeys.push(key);
        }
        charToEntityRegex = new RegExp('(' + charKeys.join('|') + ')', 'g');
        entityToCharRegex = new RegExp('(' + entityKeys.join('|') + '|&#[0-9]{1,5};' + ')', 'g');
    }

    function htmlEncode(value){
        var htmlEncodeReplaceFn = function(match, capture) {
            return charToEntity[capture];
        };

        return (!value) ? value : String(value).replace(charToEntityRegex, htmlEncodeReplaceFn);
    }

    function htmlDecode(value) {
        var htmlDecodeReplaceFn = function(match, capture) {
            return (capture in entityToChar) ? entityToChar[capture] : String.fromCharCode(parseInt(capture.substr(2), 10));
        };

        return (!value) ? value : String(value).replace(entityToCharRegex, htmlDecodeReplaceFn);
    }

    resetCharacterEntities();

    return {
        htmlEncode: htmlEncode,
        htmlDecode: htmlDecode
    };
})();

    /*this.exportHTMLAsImage=function(objElement)
    {
        html2canvas(objElement,
        {
          onrendered: function(canvas) {
              window.open().location = canvas.toDataURL("image/png");
            //document.body.appendChild(canvas);
          }
        });
    };*/


    function param_default(arrProperties,pname,def,sSuffix)
    {
        if (typeof arrProperties[pname] == "undefined")
        {
            arrProperties[pname] = def;
        }
        if(sSuffix && !util.endsWith(arrProperties[pname],sSuffix))
            arrProperties[pname] = arrProperties[pname]+sSuffix;
    };


    this.animateToggle=function(objElement,arrProperties)
    {
        var isToggleHeight,isToggleWidth,arrTransProperty,arrTransSplit,iOriginalHeight,iTransitionDuration;
        var iOriginalWidth;

        if(!objElement.getAttribute("iOriginalWidth"))
        {
             if(!objElement.style.width)
                objElement.style.width=objElement.offsetWidth;
            if(!objElement.style.height)
                objElement.style.height=objElement.offsetHeight;

            iOriginalWidth=objElement.style.width;
            iOriginalHeight=objElement.style.height;

            if(iOriginalWidth.indexOf("px")!=-1)
                iOriginalWidth=parseInt(iOriginalWidth.substring(0,iOriginalWidth.indexOf("px")),10);
            if(iOriginalHeight.indexOf("px")!=-1)
                iOriginalHeight=parseInt(iOriginalHeight.substring(0,iOriginalHeight.indexOf("px")),10);

            objElement.setAttribute("iOriginalWidth",iOriginalWidth);
            objElement.setAttribute("iOriginalHeight",iOriginalHeight);
        }
        else
        {
            iOriginalWidth=objElement.getAttribute("iOriginalWidth");
            iOriginalHeight=objElement.getAttribute("iOriginalHeight");
        }

        isToggleHeight=false;
        isToggleWidth=false;

        arrTransProperty=arrProperties["transition-property"];
        arrTransSplit = arrTransProperty.split(",");

        for(var i=0;i<arrTransSplit.length;i++)
        {
            if(arrTransSplit[i]=="width")
            {
                isToggleWidth=true;
                if(objElement.style.visibility=="hidden")
                    objElement.style.width="0px";
            }
            else if(arrTransSplit[i]=="height")
            {
                isToggleHeight=true;
                if(objElement.style.visibility=="hidden")
                    objElement.style.height="0px";
            }
        }


        if(isToggleWidth && isToggleHeight)
        {
            param_default(arrProperties,"transition-property","height,width",null);
        }
        else if(isToggleWidth)
        {
            param_default(arrProperties,"transition-property","width",null);
        }
        else //if(isToggleWidth)
        {
            param_default(arrProperties,"transition-property","height",null);
        }
         param_default(arrProperties,"transition-timing-function","linear",null);
        param_default(arrProperties,"transition-duration","0.4","s");
        param_default(arrProperties,"transition-delay","0","s");


        if(!util.hasClass(objElement,"toggleTransition"))
            util.addClass(objElement,"toggleTransition");
        objElement.style.transitionProperty=arrProperties["transition-property"];
        objElement.style.transitionDuration=arrProperties["transition-duration"];
        objElement.style.transitionDelay=arrProperties["transition-delay"];
        objElement.style.transitionTimingFunction = arrProperties["transition-timing-function"];



        function setWidthAndHeight(iWidth,iHeight)
        {
            if(isToggleWidth)
                objElement.style.width=iWidth+"px";
            if(isToggleHeight)
                objElement.style.height=iHeight+"px";
        }

        if(objElement.style.visibility=="hidden")
        {
            setTimeout(function()
            {
                objElement.style.visibility="visible";
                setWidthAndHeight(iOriginalWidth,iOriginalHeight);

            },50);

        }
        else
        {
            setTimeout(function()
            {
                setWidthAndHeight(0,0);

                var sIndex=arrProperties["transition-duration"].indexOf('s');
                iTransitionDuration=arrProperties["transition-duration"].substring(0,sIndex);

                setTimeout(function()
                {
                    objElement.style.visibility="hidden";
                },iTransitionDuration*1000);
            },50);
        }


};


    /**
       *This method is used for animating the selected image till the target destination
       * @param objTarget           :target Element object
       * @Param isHideAfterMove     :if the image needs to be hide once reached target(Boolean value)
       * @param arrProperties       :Transition properties in the form of array
       * @param arrAnimationStyles  :arrAnimationStyles=[{'name':'color','value':'#ff0000'},{'name':'font-size','value':'14px'}]
     */

      //arrAnimationStyles=[{'name':'color','value':'#ff0000'},{'name':'font-size','value':'14px'}]
      //transition-duration and transition-delay should be in seconds ex: 5 seconds is default
      this.animateMove=function(objThis,objTarget,arrProperties,arrAnimationStyles,isHideAfterMove)
      {
          var objElem,arrTargetPosition,arrPosition,spTargetClone;
          objElem=document.getElementById(objThis.id);
          if(util.hasClass(objElem,"appliedStyles"))
          {
              return true;
          }
          param_default(arrProperties,"top","0",null);
          param_default(arrProperties,"left","0",null);
          param_default(arrProperties,"transition-property","top,left",null);
          param_default(arrProperties,"transition-timing-function","linear",null);
          param_default(arrProperties,"transition-duration","5","s");
          param_default(arrProperties,"transition-delay","0","s");

          arrTargetPosition = cross.getPosition(objTarget);
          arrPosition =cross.getPosition(objElem);
          spTargetClone=objThis.cloneNode(true);
          spTargetClone.style.position="absolute";
          spTargetClone.style.zIndex="1000000";
          spTargetClone.style.left= arrPosition[0];
          spTargetClone.style.top = arrPosition[1];
          spTargetClone.style.transitionProperty=arrProperties["transition-property"];
          spTargetClone.style.transitionDuration=arrProperties["transition-duration"];
          spTargetClone.style.transitionDelay=arrProperties["transition-delay"];
          var isIconTag=false;
          function applyElementStyles(spTargetClone,isIconTag)
          {
              if(isIconTag)
              {
                  util.addClass(objThis,"appliedStyles");
                  spTargetClone.pseudoStyle("before",arrAnimationStyles);
              }
              else
              {

                  util.addClass(objThis,"appliedStyles");
                   for(var i=0; i < arrAnimationStyles.length; i++)
                      spTargetClone.style[arrAnimationStyles[i].name]=arrAnimationStyles[i].value;
              }
          }

          if(util.hasClass(objThis,"fa") || util.hasClass(objThis,"crm"))
              isIconTag=true;

         document.body.appendChild(spTargetClone);
          var sIndex=arrProperties["transition-duration"].indexOf('s');
          var iTransitionDuration=arrProperties["transition-duration"].substring(0,sIndex);
          setTimeout(function()
          {
              applyElementStyles(spTargetClone,isIconTag);
              spTargetClone.style.left=arrTargetPosition[0];
              spTargetClone.style.top = arrTargetPosition[1];
              if(isHideAfterMove)
              {
                  setTimeout(
                          function()
                          {
                              document.body.removeChild(spTargetClone);

                          }
                          ,(iTransitionDuration*1000));
              }
          }
                  ,(iTransitionDuration));
      };


      this.isSafari = function()
     {
         return (document.childNodes)&&(!document.all)&&(!navigator.taintEnabled)&&(!navigator.accentColorName)?true:false;
     }

    this.checkUserPassword=function(sPassword)
    {
        if(sPassword.indexOf('é')!=-1)
        {
            var iIndex =sPassword.indexOf('é');
            var iCharCode=sPassword.charCodeAt(iIndex);
            if(iCharCode==233)
            {
                return true;
            }
        }
        return false;
    }

    this.getAPITransId=function(iTransId,iModuleType,iLocationId)
    {
        if(iTransId==0)
            return iTransId;
        if(iLocationId==0)
            iLocationId=1;

        var iValue1=new BigNumber(iModuleType).multiply (70368744177664);
        var iValue2=new BigNumber(iLocationId).multiply (2147483648);
        var iValue3=new BigNumber(iValue1).add(iValue2);

        var iAPITransId=new BigNumber(iValue3).add(iTransId).toString();


        //iAPITransId=((iModuleType*70368744177664)+ (iLocationId*2147483648) + iTransId);
        return iAPITransId;
    };

    this.getAPITransIdToInt=function(iAPITransId)
    {
        var iTransId=new BigNumber(iAPITransId).mod(2147483648);
        return iTransId;
    };

    this.playNotificationSound=function()
    {
        me.playAudioUsingBufferLoader("notifysound","res/sounds/notify.mp3");
    };

    this.playAudioUsingBufferLoader=function(key,url)
    {
        try
        {
            var bufferLoader=app.getFromBuffer(key);
            if(!bufferLoader)
            {
                window.AudioContext = window.AudioContext||window.webkitAudioContext;
                var context = new AudioContext();
                bufferLoader = new BufferLoader(context,key,url,finishedBufferLoading);
                bufferLoader.loadBuffer();
                app.addToBuffer(key,bufferLoader);
            }
            else
                bufferLoader.afterLoad();

        }
        catch(e) {
            me.playAudioUsingHTML(url);
        }

        function finishedBufferLoading(context,buffer)
        {
            var source = context.createBufferSource();
            source.buffer = buffer;
            source.connect(context.destination);
            source.start(0);
        }


    };
    this.playAudioUsingHTML=function(url)
    {
        if (window.HTMLAudioElement)  // Check for audio element support.
        {
            try
            {
                var oAudio = document.createElement('AUDIO');
                oAudio.src = url;
                oAudio.play();
            }
            catch (e) {
                // Fail silently
            }
        }
    };

    this.sessionExpired=function()
    {
        var sHTML="<div style='width:100%;height:100%;background-color: #E0E0E0;'>";
        sHTML+="<table width='100%' height='100%'><tr><td align='center'><table cellpadding='4' cellspacing='4' width='100%' align='center'>";
        sHTML+="<tr><td align='center'><span  class='fa fa-exclamation-circle' style='font-size:36px'></span></td></tr>";
        sHTML+="<tr><td style='font-size: 18px;font-weight: bold;color:#797C7F' align='center'>Oops! Your session has expired.</td></tr>";

        //sHTML+="<tr><td><a style='color:deepskyblue'>click here to</a> login again</td></tr>";
        sHTML+="<tr><td align='center'><input type='button' value='Login' style='width: 100px;font-size: 13px;background-color: #5AAA7B;color: white;border: 0;font-weight: bold;' onclick=' app.redirectToLogin();'></td></tr>";
        sHTML+="</td></tr></table></table></div>";

        document.body.innerHTML=sHTML;
    };
    this.sessionExpired_=function()
    {

        ///msg.showMessage(0,"Your session has expired",null,0,null,callBackSessionExpired);

        var iClientWidht=document.body.clientWidth;
        var iClientHeight=document.body.clientHeight;
        me.toggleBackground(true,true);
        var sHTML="<div style='width:350px;height:150px;background-color: #32383E;padding:10px;position: absolute;top: "+(iClientHeight-150)/2+"px;left: "+(iClientWidht-350)/2+"px;z-index: 108'>";
        sHTML+="<table cellpadding='5' cellspacing='5' height='100%' width='100%' align='center' style='background-color:#fff;border-radius: 15px;'><tr>";
        sHTML+="<td style='font-size: 20px;font-weight: bold;color:#32383E' align='center'>Your session has expired</td></tr><tr><td align='center'><input type='button' value='Sign in' style='width: 100px;font-size: 13px;background-color: #5AAA7B;color: white;border: 0;font-weight: bold;' onclick=' app.redirectToLogin();'></td></tr></table></div>";

        var objDiv=document.createElement("DIV");
        //objDiv.innerHTML=sHTML;
        //document.body.appendChild(objDiv);

        document.body.innerHTML=sHTML;

        function callBackSessionExpired()
        {
            app.redirectToLogin();
        }
    }
};

/*var clDateUtil=new function()
{




};*/

var Browser =
{
    getVersion: function (a, b)
    {
        var t = navigator.userAgent.split(a)[1];
        return (t) ? t.split(b)[0] : false;
    }
}


Browser =
{
    isOpera:
            (window.opera) ?    (document.createElementNS) ?    (document.createCDATASection) ? (document.styleSheets) ? 9 : 8 : 7 : 6 : false,
    isSafari:
            (document.createCDATASection && document.createElementNS) ? Browser.getVersion('AppleWebKit/', '('): false,
    isKDE:
            (document.createCDATASection && document.createElementNS) ?Browser.getVersion('Konqueror/', ';'): false,
    isGecko:
            (document.createCDATASection && document.createElementNS) ? Browser.getVersion('Gecko/', ' '): false,

    isChrome:(window.chrome) ? Browser.getVersion('Chrome/', ' '): false,
    isNN4:
            (document.layers && typeof document.layers == 'object') ? true : false, isWinIE:
    /*@cc_on @if (@_win64 || @_win32 || @_win16)
     (document.getElementsByTagName) ?
     (@_jscript_version > 5.6) ? 7 :
     (@_jscript_version == 5.6) ? 6 :
     (@_jscript_version == 5.5) ? 5.5 :
     5
     : 4
     @else@*/false/*@end @*/,
    isMacIE:
        /*@cc_on @if (@_mac && (@_PowerPC || @_mc680x0))
         (document.getElementsByTagName) ? 5 : 4
         @else@*/false/*@end @*/

}




Array.prototype.indexOf = function(v, n) {
    n = (n == null) ? 0 : n;
    var m = this.length;
    for (var i = n; i < m; i++)
        if (this[i] == v)
        {
            return i;
        }
    return -1;
}

Array.prototype.fill = function(value)
{
    for (var i = 0; i < this.length; i++)
    {
        this[i] = value;
    }

}

Number.prototype.toFixed = function(decimals)
{           //  alert('decimals='+decimals)
    var decDigits = (isNaN(decimals)) ? 2 : decimals;
    var k = Math.pow(10, decDigits);
    var fixedNum = Math.round(parseFloat(this) * k) / k;
    var sFixedNum = new String(fixedNum);
    var aFixedNum = sFixedNum.split('.');
    var i = (aFixedNum[1]) ? aFixedNum[1].length : 0;
    if (i == 0 && decDigits)
    {
        sFixedNum += '.';
    }
    while (i++ < decDigits)
    {
        sFixedNum += '0';
    }
    return sFixedNum;
}


 var UID = {
        _current: 0,
        getNew: function(){
            this._current++;
            return this._current;
        }
    };

    /*//sPseudoStyle=before or after
    HTMLElement.prototype.pseudoStyle = function(sPseudoStyle,arrCSSProperties)
    {  *//*,prop3,value3*//*

        var _this = this;
        var _sheetId = "pseudoStyles";
        var _head = document.head || document.getElementsByTagName('head')[0];
        var _sheet = document.getElementById(_sheetId) || document.createElement('style');
        _sheet.id = _sheetId;
        var className = "pseudoStyle" *//*+ UID.getNew()*//*;
        _sheet.innerHTML += " ."+className+":"+sPseudoStyle+"{";        *//*+prop+":"+value+";" *//*
        if(arrCSSProperties)
        {

            for(var i=0; i < arrCSSProperties.length; i++)
                _sheet.innerHTML +=arrCSSProperties[i].name+":"+arrCSSProperties[i].value+''+"!important"+";" ;
        }
        _sheet.innerHTML +="}";
        _head.appendChild(_sheet);
        if(!util.hasClass(_this,className))
        {
            _this.className +=  " "+className;
        }

        return this;
    };
*/

 //Changes in accordance with animateToggle and FontIconPicker
//sPseudoStyle=before or after
HTMLElement.prototype.pseudoStyle = function(sPseudoStyle,arrCSSProperties,objElement,isonLoad)
{  /*,prop3,value3*/
    if(objElement>0)
        var iconTag=document.getElementById("icon_"+objElement);
    else
        var iconTag=document.getElementById(objElement);
    var _this = this;
    var _sheetId = "pseudoStyles";
    var _head = document.head || document.getElementsByTagName('head')[0];
    var _sheet = document.getElementById(_sheetId) || document.createElement('style');
    _sheet.id = _sheetId;

    if(isonLoad!=null)
    {
        if(isonLoad==1)
        {
            var className = "onloadColorChg";
        }
        else
        {
            var className = "pseudoStyle";
            if(util.hasClass(iconTag,"pseudoStyle"))
                util.removeClass(iconTag,"pseudoStyle");
        }
        if(isonLoad==2)
        {
            if(util.hasClass(iconTag,"onloadColorChg"))
                util.removeClass(iconTag,"onloadColorChg");
            if(util.hasClass(iconTag,"onUserChange"))
                util.removeClass(iconTag,"onUserChange");
            var className = "onUserChange";
        }
    }
    else
        var className = "pseudoStyle";

    _sheet.innerHTML += " ."+className+":"+sPseudoStyle+"{";
    if(arrCSSProperties)
    {

        for(var i=0; i < arrCSSProperties.length; i++)
            _sheet.innerHTML +=arrCSSProperties[i].name+":"+arrCSSProperties[i].value+''+"!important"+";" ;
    }
    _sheet.innerHTML +="}";
    _head.appendChild(_sheet);
    if(!util.hasClass(_this,className))
    {
        _this.className +=  " "+className;
    }

    return this;
}

function BufferLoader(context, key, url, callback)
{
    this.context = context;
    this.key = key;
    this.url = url;
    this.callback = callback;
    this.buffer = null;
}

BufferLoader.prototype.loadBuffer = function()
{
    var loader = this;
    var request = new XMLHttpRequest();
    request.open("GET", loader.url, true);
    request.responseType = "arraybuffer";

    request.onload = function()
    {
        loader.context.decodeAudioData(
                request.response,
                function(buffer)
                {
                    if (!buffer)
                    {
                      //  alert('error decoding file data: ' + loader.url);
                        return;
                    }
                    loader.buffer=buffer;
                     loader.afterLoad();
                },
                function(error) {
                    //alert('decodeAudioData error', error);
                }
            );
    }
    request.onerror = function(e)
    {
       // alert('BufferLoader: XHR error : '+e);
    }
    request.send();
}
BufferLoader.prototype.afterLoad = function()
{
    this.callback(this.context,this.buffer);
}

