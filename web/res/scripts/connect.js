/*
 function addRowsToTable(oTBody , sResponseData)
 function removeAllRows(tBody)
 function fillTable(sResponse)
 function sendPostRequest(strURL, isPostMethod,sSubmitData,resHandler,readXML,statusId) ---var sStatusId=null;var responseHandler=null;var readXML=null;
 function processRequest()
 function clearControls(docForm)
 function formData2QueryString(docForm)
 */

var con=new function()
{
   this.RESPONSE_PLAIN=0;// script
   this.RESPONSE_HTML=1; // html code
   this.RESPONSE_XML=2;
   this.clProgressBar = null;

    var objRequests = null,iActiveCnt = 0,CONNECTION_LIMIT = 20,iBackgrndCnt=0 ;


    this.getActiveCount=function()
    {
        return iActiveCnt-iBackgrndCnt;
    };

    this.confirmCallback=function(iStatus)
        {
          //  alert("--");
            if(iStatus==Constants.YES)
            {
                window.location.href=clAppBuffer.getContextPath()+"/crmhome.do";
            }
        };
    this.sendGetRequest=function(strURL, sSubmitData, handlerObject, resHandler, responseAsXML, statusId, sSubActivity, isSync,byActionType,isExternalServer,objReqCache)
    {
        return new sendRequest(strURL, false, sSubmitData, handlerObject, resHandler, responseAsXML, statusId, sSubActivity, isSync,byActionType,false,isExternalServer,objReqCache);
    };

    this.sendPostRequest=function(strURL, sSubmitData, handlerObject, resHandler, responseAsXML, statusId, sSubActivity, isSync,isHideStatus,byActionType,isExternalServer,objReqCache)
    {
        return new sendRequest(strURL, true, sSubmitData, handlerObject, resHandler, responseAsXML, statusId, sSubActivity, isSync,isHideStatus,byActionType,false,isExternalServer,objReqCache);
    };
    this.sendNonUItRequest=function(strURL, sSubmitData, handlerObject, resHandler, responseAsXML, statusId, sSubActivity, isSync,isHideStatus,byActionType,isExternalServer,objReqCache)
    {
        return new sendRequest(strURL, true, sSubmitData, handlerObject, resHandler, responseAsXML, statusId, sSubActivity, isSync,isHideStatus,byActionType,true,isExternalServer,objReqCache);
    };


    /**
     * Send request to servlet
     @param strURL
     @param isPostMethod
     @param sSubmitData
     @param resHandler
     @param responseAsXML
     @param statusId
     **/
    function sendRequest(strURL,
                         isPostMethod,
                         sSubmitData,
                         handlerObj,
                         resHandler,
                         responseType,
                         statusId,
                         sSubActivity,
                         isSync,
                         isHideStatus,
                         byActionType,
                         isNonUI,
                         isExternalServer,objReqCache

            )
    {
     //   alert(strURL)
        //var me=this;
        var mStatusTag = null;
        var xmlHttpReq=null;
        var responseType = responseType;
        var handlerObject = handlerObj;
        var responseHandler = resHandler;
        var bHideStatus = isHideStatus;
        var mbyActionType = byActionType;
        var isNonUI=isNonUI;
        var isExternalServer=isExternalServer;
        if(statusId)
        {
            if(typeof statusId == "object")
                mStatusTag =statusId;
            else
                mStatusTag =document.getElementById(statusId);
        }

        if(!sSubmitData)
            sSubmitData="";

        var iIndex = strURL.indexOf("?");
        if (iIndex != -1)
        {
            sSubmitData += "&" + strURL.substring(iIndex + 1);
            strURL = strURL.substring(0, iIndex);
        }

        if(isExternalServer)
        {
             xmlHttpReq=getRequestObject();
        }
        else
        {
             xmlHttpReq = getConnection(isNonUI); 
            sSubmitData += "&isAjax=1&reqId=" + (new Date().getMilliseconds());
           if(isNonUI)
           {
                 var sSessionId=util.readCookie("JSESSIONID");
                if(sSessionId)
                  sSubmitData+="&JSESSIONID="+sSessionId;

                 sSubmitData=sSubmitData+"&appUrl="+util.encodeURI("/"+strURL);//"/" used for decrypting purpose

                 strURL="/sbs/bserv"

           }
          else
            {
                if(strURL.indexOf(clAppBuffer.getContextPath())==-1)
                           strURL=clAppBuffer.getContextPath()+"/"+strURL;

            }


            showStatus(true);
        }




        if (isPostMethod)
        {
            xmlHttpReq.open('POST', strURL, !isSync);
            sSubmitData=util.trim(sSubmitData);
        }
        else
        {
            xmlHttpReq.open('GET', (strURL + '?' + sSubmitData), !isSync);
            sSubmitData=null;
        }


        if(!isExternalServer)
        {

            xmlHttpReq.setRequestHeader("isAjax","1");
        }
//        if(!isNonUI)
        {
            if(objReqCache)
            {
                var iActionId=null;
                if( (iActionId==objReqCache['d_actionid']))
                {
                    xmlHttpReq.setRequestHeader("SYS_ACTION_ID",iActionId);
                    //xmlHttpReq.setRequestHeader("SYS_WINDOW_TYPE",objReqCache['d_windowtype']);
                }
            }

            //xmlHttpReq.setRequestHeader("SYS_ACTION_ID",home.getActionId());
            if(typeof window["clAppBuffer"] == 'object')
            {
             xmlHttpReq.setRequestHeader("SYS_WINDOW_TYPE",clAppBuffer.getWindowType());
             xmlHttpReq.setRequestHeader("SYS_SPLIT_PANE_TYPE",clAppBuffer.getSplitPaneType());
                /*if(clAppBuffer.getWindowType() == Constants.IMODULE_WINDOW.SPLIT_PANE)
                  clAppBuffer.setSplitWithTabbedPane(true);*/
            }
          clAppBuffer.setSplitPaneType(Constants.ISPLIT_PANE_TYPE.GENERAL_PANE);
        }
         xmlHttpReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        xmlHttpReq.onreadystatechange = processRequest;
        xmlHttpReq.send(sSubmitData);

        //        me.xmlHttpReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        //me.xmlHttpReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');



        //ajax callback function
      //  var objReqCache=objReqCache;
        function processRequest()
        {

            if (xmlHttpReq.readyState == 4) // 4=complete
            {
                var sResponse = null;


                if (responseType==con.RESPONSE_XML)
                    sResponse = xmlHttpReq.responseXML;
                else
                    sResponse = xmlHttpReq.responseText;
             //   alert(me.xmlHttpReq.status+","+iStatusCode)
                //alert("sResponse  "+sResponse);

                if (xmlHttpReq.status == 200)// 200=request complete
                {
                    setProgress(isNonUI,100);

                    var iStatusCode,appValue,sMsg;

                    if(isExternalServer)
                    {
                        //iStatusCode=MSG_SUCCESS;
                    }
                    else
                    {

                        iStatusCode=xmlHttpReq.getResponseHeader("SYS_SCODE");
                            appValue=xmlHttpReq.getResponseHeader("appValue");
                        sMsg=xmlHttpReq.getResponseHeader("SYS_SMSG");
                    }

//                    alert(sMsg+"--88888----"+iStatusCode);

                    //alert(" sResponse === "+sResponse)
                    if(sResponse && sResponse.indexOf("SYS_SMSG^")!=-1)
                    {
                        if(sMsg)
                            sResponse=null;
                        else
                            sResponse=sResponse.replace("SYS_SMSG^",' ');
                    }

                    returnConnection(xmlHttpReq,isNonUI);

                    if(iStatusCode==MSG_SUCCESS || iStatusCode==MSG_SUCCESS_STATUS_ONLY)
                    {
                      sMsg = getMessage(sMsg);
                        if(util.trim(sMsg).length>0)// TOAST MSG display
                           msg.showToastMsg(sMsg);
                    }
                    else if(iStatusCode==MSG_SECURITY_EXCEPTION || iStatusCode==MSG_BUSINESS_MESSAGE)
                    {
                      sMsg = getMessage(sMsg);
                        msg.showBusinessMsg(sMsg);
                    }
                    else if(iStatusCode==MSG_INTEGRATION_MESSAGE )
                    {
                        sMsg = getMessage(sMsg);
                        msg.showBusinessMsg(sMsg,Validation.ERROR_INTEGRATION);
                    }

                    if(iStatusCode==MSG_SUCCESS) // after save displaying last page
                        home.handleResponse(sResponse);
                    else if(iStatusCode==ERROR_REDIRECT_LOGIN)
                    {
                        showStatus(false);
                        app.redirectToLogin();
                        //app.showLoginDialog(strURL+"?"+sSubmitData);// ll handle later commeted by ::-SRIKANTH
                    }
                    else if(iStatusCode==IGNORE_SESSION_EXPIRED)
                    {    }
                    else
                    {

                        showStatus(false);


                        if (handlerObject)
                        {
                          if(!responseType || responseType==con.RESPONSE_PLAIN)
                             handlerObject.apply(this, eval("new Array(" + sResponse + ");"));
                          else
                            handlerObject.apply(this, [sResponse,iStatusCode,sMsg,appValue,objReqCache]);

                        }
                        else if (responseHandler)
                          eval(responseHandler)(sResponse, iStatusCode,sMsg,appValue,objReqCache);//MsgHeader will be the messages\
                    }


                }
                else ///404= file not found,403=forbidden,405=method not found
                {
                    if(xmlHttpReq.status==0)
                    {  //con.()

                          console.error('Ajax Error: Ajax request is aborted, status='+xmlHttpReq.status);
//                       msg.showConfirm("Ajax request is aborted, status="+xmlHttpReq.status+", would you like to re-login again","Ajax Error","con.confirmCallback",null,280,null,null,true);
                      returnConnection(xmlHttpReq,isNonUI);
                     //window.location.href

                    }
                   else
                    {
                        showStatus(false);
                        util.toggleBackground(false);
                        errorHandler(xmlHttpReq.status, xmlHttpReq.statusText,xmlHttpReq.responseText);
                        returnConnection(xmlHttpReq,isNonUI);
                    }

                }
                bHideStatus = null;
                responseHandler = null;

                mStatusTag =null;
                //me.statusTag = null;
                handlerObject = null;
                byActionType = null;
            }
           else
            {
             //if (me.xmlHttpReq.readyState == 1)
                   // writeToLog("readyState="+me.xmlHttpReq.readyState+"--"+iActiveCnt+"==="+ me.xmlHttpReq.status);
            }
        };

        function getMessage(sMsg)
        {
            if(clAppBuffer.getLanguage() == Constants.ILANGUAGE_TYPE.ARABIC)
            {
                     sMsg = decodeURIComponent(sMsg) ;
                     sMsg = sMsg .replace(/\+/g, ' ');
            }
            return sMsg;
        }

        /*function uploadProgress(e)
        { // upload process in progress
            if (e.lengthComputable)
            {
                var iPercentComplete = Math.round(e.loaded * 100 / e.total);
                con.clProgressBar.go(iPercentComplete);
            }
            else
            {
                con.clProgressBar.go(50);
            }
        }

        function uploadAbort()
        {
            con.clProgressBar.go(100);
        }*/

        function showStatus(isShowStatus)
        {
            if(byActionType > 0)
            {
                var sMessage=MsgHandler.getStatusMsg(byActionType);

                /*if(byActionType==ACTION_SAVE)
                    sMessage="Saving...";
                else if(byActionType==ACTION_DELETE)
                    sMessage="Deleting...";
                else if(byActionType==ACTION_SORT)
                    sMessage="Sorting...";
                else if(byActionType==ACTION_UPDATE)
                    sMessage="Updating...";
                else if(byActionType==ACTION_DISPALY)
                    sMessage="Displaying...";
                else if(byActionType==ACTION_CREATE)
                    sMessage="Creating...";
               else if(byActionType==ACTION_CONVERT)
                    sMessage="Converting...";
               else if(byActionType==ACTION_REINDEX)
                    sMessage="Reindexing...";
                else if(byActionType==ACTION_SEARCH)
                    sMessage="Searching...";
                else if(byActionType==ACTION_SENDING)
                    sMessage="Sending...";
                else if(byActionType==ACTION_LOADING)
                    sMessage="Loading...";
                else if(byActionType==ACTION_RESTORING)
                    sMessage="Restoring Company...";
                else if(byActionType==ACTION_TRANSFERRING)
                    sMessage="Transferring...";
                else if(byActionType==ACTION_PROCESSING)
                    sMessage="Processing...";
                else if(byActionType==ACTION_CHANGING)
                    sMessage="Changing...";
                else if(byActionType==ACTION_REGISTERING)
                    sMessage="Registering...";
                else if(byActionType==ACTION_SYNCING)
                    sMessage="Syncing...";
                else if(byActionType==ACTION_BACKUP)
                    sMessage="Backup in progress...";
                else
                    sMessage="Loading...";*/

                if(isShowStatus)
                {
                    setProgress(isNonUI,30);

                }
             //   util.writeToLog("byActionType  "+byActionType)
                util.toggleBackground(isShowStatus,false,sMessage,true);
            }
            else if (mStatusTag )
            {
               // util.writeToLog("statusTag-byActionType  "+byActionType)
                //showRequestStatus(isShowStatus);// for default  load image..........
                if(isShowStatus)
                    util.addClass(mStatusTag ,"loadingImg");
                else
                    util.removeClass(mStatusTag ,"loadingImg");
            }
        }

        function setProgress(isNonUI,iValue)
        {
            if(!isNonUI && !bHideStatus && !mStatusTag )
            {
                if(con.clProgressBar)
                    con.clProgressBar.go(iValue);
            }
        }
    }




    /**
    * Forms URL parameters of form.
    * docForm - form object
    * arrPackChkboxNames - List of checkbox names. Checkbox values will be packed as single value when their names are same.
    * callBackIgnoreElem - Callback function which will be invoked for each element. NUmber should returned from this function to indicate no. of elements to skip from current element. Ex: 0-include,1-skip current,2- skip current and next elements and so on...
    * callBackCombo - querystring formation of combobox is given to callback function handler.
    * isIncludeHidden - Fields which has property 'display:none' will be ignore by default. To include these fields this value should be given true
    * Returns string value of form fields data, elemname1=elemvalue1&elemname2=elemvalue2&.....
    */
    this.formData2QueryString=function(docForm, arrPackChkboxNames, callBackIgnoreElem,callBackCombo,isIncludeHidden,isCSVMultiComboValues, isSetNumericNullValuesToZero)
    {
    var strSubmitContent = '';
    var formElem;
    var iIgnoreElementsCount;
    var isInvokeCallBack;
    var arrPackChkboxValues = null;
    var objComboHiddenFld;

    if (callBackIgnoreElem && typeof[callBackIgnoreElem] == "object")
        isInvokeCallBack = true;

    if (arrPackChkboxNames)
    {
        arrPackChkboxValues = new Array();
        for (var i = 0; i < arrPackChkboxNames.length; i++)
            arrPackChkboxValues[arrPackChkboxNames[i]] = 0;
    }

    var sValue;

    for (var i = 0; i < docForm.elements.length; i++)
    {
        formElem = docForm.elements[i];
        //alert("formElem=="+formElem+","+i+",formElem attribute=="+formElem.getAttribute("mastertype"));
        if (formElem.name && (formElem.style.display != "none" || isIncludeHidden))
        {

             if (formElem.getAttribute("combohidden") != null)  // issue related to searchinput flds ,, changed by srikanth
             {
                 continue;
             }
            if(formElem.getAttribute("isIgnore") ) //disabled
            {
                if (formElem.getAttribute("mastertype") != null) // && document.getElementById(formElem.getAttribute("hiddenname")))
                {
                    if(getComboHiddenFld(formElem))
                        i++;
                }
                continue;
            }

            if (isInvokeCallBack)
            {
                iIgnoreElementsCount = callBackIgnoreElem(formElem,i);
                if (iIgnoreElementsCount > 0)
                {
                    if (iIgnoreElementsCount == 1)
                        continue;
                    i += iIgnoreElementsCount - 1;
                    continue;
                }
            }

            sValue=util.trim(formElem.value);

            if (formElem.getAttribute("mastertype") != null)
            {
                objComboHiddenFld=getComboHiddenFld(formElem);
                if(callBackCombo)
                    strSubmitContent = callBackCombo(formElem,strSubmitContent);
                else if(objComboHiddenFld)//if(document.getElementById(formElem.getAttribute("hiddenName")))
                {
                    if (formElem.getAttribute("isAllowMultiSelect")=="true")
                    {
                        var arrSelectedIds=clMultiCombo.getSelectedIds(formElem.id);


                        if(isCSVMultiComboValues)
                        {
                            strSubmitContent += objComboHiddenFld.name+'=';

                            for(var j=0;j < arrSelectedIds.length;j++)
                            {
                                strSubmitContent += arrSelectedIds[j];
                                if(j != arrSelectedIds.length-1)
                                    strSubmitContent += ',';
                            }
                            strSubmitContent += '&';
                        }
                        else
                        {
                            for(var j=0;j < arrSelectedIds.length;j++)
                                strSubmitContent += objComboHiddenFld.name+'='+arrSelectedIds[j]+'&';
                        }
                    }
                    else
                    {
                        strSubmitContent += objComboHiddenFld.name+'=';
                        if(formElem.getAttribute("mastertype")!=Constants.IStdMasters_GENERAL_STATIC_VALUES
                           && formElem.getAttribute("mastertype")!=Constants.Genernal_Narration
                                                && (objComboHiddenFld.value=="" || objComboHiddenFld.value==-1))
                            strSubmitContent += '0&'; //passing 0 for integer setter method
                        else
                            strSubmitContent += util.encodeURI(objComboHiddenFld.value)+'&';
                        //strSubmitContent += formElem.getAttribute("hiddenName")+'='+document.getElementById(formElem.getAttribute("hiddenName")).value+'&';
                    }

                    //i += 1;     // issue related to searchinput flds ,, changed by srikanth
                    continue;

                }
                continue;
            }
            else if(util.hasClass(formElem, "bannerText"))
            {
                if(formElem.value==formElem.getAttribute("bannerText"))
                    sValue="";
                //continue;
            }



            switch (formElem.type)
            {
                case 'text':
                case 'hidden':
                case 'password':
                case 'textarea':
                case 'select-one':

                    if(isSetNumericNullValuesToZero && (formElem.getAttribute("cdatatype")==TYPE_NUMERIC || formElem.getAttribute("cdatatype")==TYPE_FLOAT) && (!sValue || util.trim(sValue).length==0))// changed by sri on chkri's request--on 20-7-16
                        sValue=0;

                    if(formElem.name=="uploadFileName") //TODO:
                        strSubmitContent += formElem.name + '=' + sValue + '&';
                     else
                        strSubmitContent += formElem.name + '=' + util.encodeURI(sValue) + '&';
                    break;

                // Radio buttons
                case 'radio':
                    if (formElem.checked)
                        strSubmitContent += formElem.name + '=' + util.encodeURI(sValue) + '&';
                    break;

                // Checkboxes
                case 'checkbox':
                    if (formElem.checked)
                    {
                        if(sValue=="on")
                            sValue="1";

                        if (arrPackChkboxValues != null && arrPackChkboxValues[formElem.name] >= 0)
                            arrPackChkboxValues[formElem.name] = util.packBit(arrPackChkboxValues[formElem.name],sValue);
                        else
                            strSubmitContent += formElem.name + '=' + util.encodeURI(sValue) + '&';
                    }
                    else if (arrPackChkboxValues == null || arrPackChkboxValues[formElem.name] ==null )
                        strSubmitContent += formElem.name + '=0&'; //sending default value as '0' for checkbox if it is not checked

                    break;
            }
        }
        else if (formElem && formElem.getAttribute !=null && formElem.getAttribute("mastertype")!=undefined && formElem.getAttribute("mastertype") != null && getComboHiddenFld(formElem))
            i++;
    }

    if (arrPackChkboxNames)
    {
        for (var i = 0; i < arrPackChkboxNames.length; i++)
        {
            if (arrPackChkboxValues[arrPackChkboxNames[i]] > 0)
                strSubmitContent += arrPackChkboxNames[i] + "=" + arrPackChkboxValues[arrPackChkboxNames[i]] + "&";
        }
    }
    //Remove trailing separator
    strSubmitContent = strSubmitContent.substr(0, strSubmitContent.length - 1);
    return strSubmitContent;
};


    /**
 * Creates URL that can be used to invoke a struts action based on the parameters.
 * @param sNamespace - package namespace without any slashes
 * @param sAction - action name
 * @param sMethod -
 * @param sJspName
 * @param isEmptyParams
 */
    this.getStruts2Url=function(sNamespace, sAction, sMethod, sJspName, isIncludeParams)
    {
        var sUrl;
        if (sNamespace)
            sUrl = sNamespace + "/" + sAction; //  base/rule
        else
            sUrl = sAction;
        if (sMethod)
        {
            //sAction = sAction.substring(0, sAction.substring(".do"));
            if(sUrl.indexOf(".do")!=-1)
                sUrl=sUrl.substring(0,sUrl.indexOf(".do"));
            sUrl += "!" + sMethod + ".do";// base/rule!getFieldRules
            if (!isIncludeParams)
                sUrl += "?"; // base/rule!getFieldRules?
        }
        else if (sJspName)
        {
            sUrl += "?result=" + sJspName; // base/rule?result=rules
            if (!isIncludeParams)
                sUrl += "&"; // base/rule?result=rules&
        }
        return sUrl;
    };

    /**
     * Clears form fields' data
     @param form name
     */
     this.clearControls=function(docForm,isClearMsgs,isClearModuleCombo)
     {
         var formElem,iMasterType;
         var objCombo = null;
         var sValue = null;

        for (var i = 0; i < docForm.elements.length; i++)
         {
             formElem = docForm.elements[i];
             if(formElem.getAttribute("isIgnoreClear")=="true")
             {
                 if(formElem.getAttribute("mastertype"))
                    i++;
                 continue;
             }

             sValue = formElem.getAttribute('default');
             if(!sValue)
                sValue="";

             switch (formElem.type)
             {
                 // Text fields, hidden form elements
                 case 'text':
                 case 'hidden':
                 case 'password':
                 case 'textarea':
                    if(formElem.getAttribute("mastertype"))
                    {
                        iMasterType = formElem.getAttribute("mastertype");
                        objCombo = objComboInstances[formElem.id];
                         if (objCombo)
                         {
                             if(formElem.getAttribute("isallowmultiselect")=="true")
                             {
                                 clMultiCombo.removeAllItems(formElem.id);
                             }
                             else
                             {
                                if(isClearModuleCombo) //
                                {
                                     if(iMasterType >0
                                            && (! (iMasterType >= Constants.LISTMASTER && iMasterType < (Constants.LISTMASTER+Constants.MODULE_SLAB)))
                                             && iMasterType != Constants.IStdMasters_GENERALMASTER
                                             && iMasterType != Constants.IStdMasters_GENERAL_STATIC_VALUES)
                                        objCombo.clearCombo();
                                }

                                   if (sValue)
                                   {
                                       objCombo.checkAndAddItem(sValue, true);
                                       i++; //skipping combohidden field since its value will be set in checkAndAddItem
                                   }
                                   else
                                    {
                                       // objCombo.initTextField(formElem,1);
                                        objCombo.clearSelection();//setSelectedIndex(-1);
                                        formElem.value=""

                                    }
                             }
                             //i++; //skipping combohidden field since its value will be set in checkAndAddItem
                         }
                        else //if(iMasterType>=0)
                             formElem.value="";

                    }
                    else if(formElem.name=="uploadFileName")
                     {
                         var sId=formElem.id.substring(formElem.id.indexOf(".")+1);
                         //initSWFUpload.clearLink(sId);
                         clHTML5Upload.clearLink(sId);
                     }
                    else
                        formElem.value = sValue;
                    break;
    //             case 'radio':
                 case 'checkbox':
                     formElem.checked = false;
                     break;
                case 'select-one':
                 {
                    formElem.value = sValue;
                     break;
                 }
             }

             if(isClearMsgs)
             {
                 if(formElem.className=="mandatoryInput")
                 {
                     Validation.clearMessage(formElem);
                 }
             }
         }


     };

    /**
     * Disables form controls
     @param docForm=form name
     @param isDisable= enable/disable
     @param isIgnoreInSubmission= also ignore the fields on form submission
     */
     this.disableControls=function(docForm,isDisable,isIgnoreInSubmission)
     {
         var formElem;

        for (var i = 0; i < docForm.elements.length; i++)
         {
             formElem = docForm.elements[i];
             con.disableControl(formElem,isDisable,isIgnoreInSubmission);
         }
     };

    this.disableControl=function(formElem,isDisable,isIgnoreInSubmission)
    {
        if(!formElem.getAttribute("isIgnoreDisabled"))
         {
             if(isDisable)
             {
                 formElem.disabled=true;
                 if(isIgnoreInSubmission)
                     formElem.setAttribute("isIgnore",true);
             }
             else
             {
                if(formElem.disabled)
                {
                    formElem.disabled = false;

                    if(formElem.getAttribute("isIgnore"))
                        formElem.removeAttribute("isIgnore");
                }
             }
         }
    };

    function errorHandler(iStatus, sMessage, sText)
    {
      //  alert(iStatus+"::"+sMessage+"::"+sText);
      //  toggleLoadStatus(true);
        var objErrorDiv = document.getElementById("errorDiv");
        sText=util.trim(sText);
        if(sText.length>0 && !objErrorDiv)
        {
            objErrorDiv =  document.createElement("DIV");
            objErrorDiv.id = "objErrorDiv";
            objErrorDiv.style.cssText="z-index:104;overflow:fixed;background-color:white;border:3px solid #88a6fe;width:800px;height:500px;top:30px;left:150px;" +
                                      "position:absolute";
            //objErrorDiv.innerHTML="<div  id='dInnerMsgBox' style='height:20px;width:750px;  background-color:#becef9;border:1px solid #88a6fe'></div>";
            //objErrorDiv.innerHTML+="<div align='right' style='background-color:#88a6fe;'><input type='button' style='height:20px;width:20px;' value='X' onclick='closeErrorDiv()'></div>"  ;
//            objErrorDiv.innerHTML="<img align='right' src="+app.getImagePath()+"closeDlg.gif onclick='con.closeErrorDiv()'>"  ;
            objErrorDiv.innerHTML="<img align='right' src="+app.getImagePath(true)+"blank.png class='sModule s-closeDlg' onclick='con.closeErrorDiv()'>"  ;
            objErrorDiv.innerHTML+="<div style='background-color:#88a6fe;color:#1E3800;padding:3px;font-size:18px;'>&nbsp;&nbsp;Error Message</div>"  ;
            objErrorDiv.innerHTML+="<br><div style='overflow-y:auto; width=96%;height:454px;'><span >"+sText+"</span></div>"  ;
            document.body.appendChild(objErrorDiv);
            //util.writeToLog('errorHandler in connect..js');
            stopResourceLoading();
            initAllCombos = null;
            loadResources(objErrorDiv,util.onScriptsLoad);

        }
    }

    this.closeErrorDiv=function(objWindow)
    {
        //toggleBackground(false);
        try
        {
            var objErrorDiv=null;
            if(objWindow)
                objErrorDiv=objWindow.document.getElementById("objErrorDiv");
            else
                objErrorDiv=document.getElementById("objErrorDiv");
            if(objErrorDiv)
                objErrorDiv.parentNode.removeChild(objErrorDiv) ;
        }
        catch(e) //added for handling cross-domain security exception
        {   }
    };

    this.setResponseAndLoadResources=function(objDiv,sResponse)
    {
        if (window["initAllCombos"])
        {
            try
            {
                delete window["initAllCombos"]; // OPERA,Mozilla
                window["initAllCombos"] = undefined;//Mozilla

            }
            catch(ee) {
                window["initAllCombos"] = undefined;// IE}
            }
        }
        initAllCombos=null;

        objDiv.innerHTML=sResponse;
        loadResources(objDiv, util.onScriptsLoad);

    };

  /*  function getRequestObject()
    {
        try
        {
            if (typeof XMLHttpRequest != 'undefined')
                return new XMLHttpRequest();
            else
                return new ActiveXObject("MSXML3.XMLHTTP"); //Microsoft.XMLHTTP
        }
        catch (e)
        {
            try
            {                 //Microsoft.XMLHTTP
                return new ActiveXObject("MSXML2.XMLHTTP.3.0");
            }
            catch (e)
            {
                try
                {                 //Microsoft.XMLHTTP
                    return new ActiveXObject("MSXML2.XMLHTTP.3.0");
                }
                catch (e)
                {
                    try
                    {                 //Microsoft.XMLHTTP
                        return new ActiveXObject("Msxml2.XMLHTTP");
                    }
                    catch (e)
                    {
                        try
                        {
                            return new ActiveXObject("Microsoft.XMLHTTP");
                        }
                        catch (E){ }
                    }
                }
            }
        }

        if (window.createRequest)
            return window.createRequest();

        return null;
        //if (!xmlHttpReq && typeof window.XMLHttpRequest != "undefined")
        *//*if (!xmlHttpReq && xmlHttpReq.overrideMimeType)   // it suports other than in IE 7
            xmlHttpReq.overrideMimeType('text/plain');
        return xmlHttpReq;*//*

    }
*/

  function getRequestObject()
{

    var xmlHttpReq=false;
    var xhrList = new Array('Msxml2.XMLHTTP.6.0','MSXML3.XMLHTTP','Msxml2.XMLHTTP.3.0','Msxml2.XMLHTTP','Microsoft.XMLHTTP');
   for (var i = 0; i < xhrList.length; ++i)
    {
               try
               {
                   xmlHttpReq = new ActiveXObject(xhrList[i]);
                   break;
               }
               catch (e)
               {
                 xmlHttpReq=false;
               }
     }
    if(!xmlHttpReq )
    {
       try
        {
            xmlHttpReq = new XMLHttpRequest();
        }
        catch (e)
        {
            xmlHttpReq=false;
        }
    }

    if (!xmlHttpReq && typeof XMLHttpRequest!='undefined')
        {
            try
            {
                xmlHttpReq = new XMLHttpRequest();
            }
            catch (e)
            {
                xmlHttpReq=false;
            }
        }

        if (!xmlHttpReq && window.createRequest)
        {
            try
            {
                xmlHttpReq = window.createRequest();
            }
            catch (e)
            {
                xmlHttpReq=false;
            }
         }


         if(!xmlHttpReq && xmlHttpReq.overrideMimeType)   // it suports other than in IE 7
                   xmlHttpReq.overrideMimeType('text/plain');



 /* if(!xmlHttpReq )
  {

   try
   {                 //Microsoft.XMLHTTP  //12029 Msxml2.XMLHTTP.6.0
      xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP.6.0");
   }
   catch (e)
   {

   try
   {                 //Microsoft.XMLHTTP  //12029 Msxml2.XMLHTTP.6.0
      xmlHttpReq = new ActiveXObject("MSXML3.XMLHTTP");
   }
   catch (e)
   {
    try
    {                 //Microsoft.XMLHTTP
      xmlHttpReq = new ActiveXObject("MSXML2.XMLHTTP.3.0");
    }
    catch (e)
    {
        try
        {                 //Microsoft.XMLHTTP
          xmlHttpReq = new ActiveXObject("MSXML2.XMLHTTP.3.0");
         }
        catch (e)
        {
            try
            {                 //Microsoft.XMLHTTP
              xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
             }
            catch (e)
            {
                  try
                  {
                   xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
                  }
                  catch (E)
                  {
                   xmlHttpReq = false;
                  }
          }
      }
    }
   }
 }
}
*/


    return xmlHttpReq;
}

    function getConnection(isNonUI)
    {
        var httpReq;
        if (!objRequests)
            objRequests = new Array();
       //// else
        // writeToLog("objRequests.length="+objRequests.length);
       // alert(Browser.isChrome)

       for(var i=objRequests.length-1;i>=0;i--)
        {
            // in case 2 cons connected to server and waiting got server, server entains one by one , so return only readyState=1 means just connected to server
             if(objRequests[i])
             {

                 if((Browser.isSafari || Browser.isChrome)  && objRequests[i].readyState==2)// first state in safari is=2
                 { // writeToLog("bf return");
                   returnConnection(objRequests[i],false);
                 }
                else if(objRequests[i].readyState==1)
                   returnConnection(objRequests[i],false);
              //  else if(objRequests[i].readyState==4)
               //    returnConnection(objRequests[i]);

             }
         }

        if ((iActiveCnt-iBackgrndCnt) > CONNECTION_LIMIT)
            alert("Active Http Connections have exceeded limit [" + CONNECTION_LIMIT+","+objRequests.length+"]");

    //    if (iActiveCnt <= CONNECTION_LIMIT)
            if (objRequests.length > 0)
                httpReq = objRequests.shift();//shift returns first element whereas pop() returns last element
            else
                httpReq = getRequestObject();

            iActiveCnt++;
          if(isNonUI)
            iBackgrndCnt++;
       // writeToLog("NEW con iActiveCnt=="+iActiveCnt);



       //writeToLog(" con *********iActiveCnt="+iActiveCnt);
    //    else
    //        alert("Active Http Connections have exceeded limit " + CONNECTION_LIMIT)

        return httpReq;
    }


    function returnConnection(httpReq,isNonUI)
    {
        if(objRequests)
        {
            if (httpReq && httpReq.readyState < 4 && Browser.isGecko)
            {
                       httpReq.abort(); //needed for FireFox
                     //  httpReq = null; //needed for FireFox

             }
            objRequests.push(httpReq);

        }
        if(iActiveCnt>0)
            iActiveCnt--;
        if(isNonUI)
            iBackgrndCnt--;
      //   writeToLog("RETURN iActiveCnt=="+iActiveCnt);

       // writeToLog(" return *********iActiveCnt="+iActiveCnt);
    }

    this.createNanoBar = function(){
        var dvNanoBar = document.getElementById('dvNanoBar');
        if(dvNanoBar && con.clProgressBar == null){
            var options = {
                bg: "linear-gradient(to right,#ef9a9a,#ffcc80,#fff59d,#a5d6a7,#90caf9,#9fa8da,#80deea)",
                target: dvNanoBar,
                id: 'mynano'
            };
//            00c853
            con.clProgressBar = new Nanobar( options );
            dvNanoBar.style.height = "0px";
            cross.getChildren(dvNanoBar)[0].style.float = "none";
        }
    };

    this.loadScript=function(sSrc,clInstanceName)
    {
        loadScript(sSrc,clInstanceName,false,null,true);
    };

    this.loadStyle=function(sSrc)
    {
        loadScript(sSrc,null,false,null,false);
    };

    this.loadScriptAsynchronously=function(sSrc,clInstanceName,fnCallbackOnLoad)
    {
        loadScript(sSrc,clInstanceName,true,fnCallbackOnLoad);
    };

    function loadScript(sSrc,clInstanceName,isAsynchronous,fnCallbackOnLoad,isScriptType)
      {
          if(!window[clInstanceName]) {
              // get some kind of XMLHttpRequest
              var xmlHttpReq = getConnection(false);
              // open and send a synchronous request
              xmlHttpReq.open('GET', sSrc, isAsynchronous);
              xmlHttpReq.send('');

              // add the returned content to a newly created script tag
              var objScriptTag=null;
              if(isScriptType)     //for JS
              {
                  objScriptTag = document.createElement("SCRIPT");
                  objScriptTag.type = "text/javascript";
                  objScriptTag.id = "dyn_" + (new Date().getMilliseconds());
                  objScriptTag.text = xmlHttpReq.responseText;

              }
              else  //CSS
              {
                  objScriptTag = document.createElement("style");
                  objScriptTag.type = "text/css";
                  objScriptTag.rel="stylesheet";
                  objScriptTag.id = "dyn_" + (new Date().getMilliseconds());

                  var rules = document.createTextNode(xmlHttpReq.responseText);
                    if(objScriptTag.styleSheet)// IE
                        objScriptTag.styleSheet.cssText = rules.nodeValue;
                    else
                        objScriptTag.appendChild(rules);

//                  document.getElementsByTagName('head')[0].appendChild(objScriptTag);
              }
              document.getElementsByTagName('head')[0].appendChild(objScriptTag);
          }

          if(isAsynchronous)
          {
              if(fnCallbackOnLoad)
                  fnCallbackOnLoad(sSrc);
          }
      }

};
















