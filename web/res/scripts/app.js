
if(typeof window["clAppBuffer"]!= 'object'){
var __nonMSDOMBrowser = (window.navigator.appName.toLowerCase().indexOf('explorer') == -1);
var ERROR_REDIRECT_LOGIN = -2;
var IGNORE_SESSION_EXPIRED = -3;
var MSG_SUCCESS=1;
var RELOGIN_AJAX = 2;
var RELOGIN_HREF = 3;
var MSG_SUCCESS_STATUS_ONLY=4;  // used in case where back screen is not required to display
var MSG_BUSINESS_MESSAGE = 5;  // used in case od business exception thrown from DAO
var MSG_SECURITY_EXCEPTION=8;
//9 Is different exception refer IMessageCodes.java
var MSG_INTEGRATION_MESSAGE=10;

var ACTION_NORMAL=0;
var ACTION_SAVE=1;
var ACTION_UPDATE=2;
var ACTION_DELETE=3;
var ACTION_SORT=4;
var ACTION_DISPALY=5;
var ACTION_CREATE=6;
var ACTION_CONVERT=7;
var ACTION_REINDEX=8;
var ACTION_SEARCH=9;
var ACTION_SENDING=10;
var ACTION_LOADING=11;
var ACTION_RESTORING=12;
var ACTION_TRANSFERRING=13;
var ACTION_PROCESSING=14;
var ACTION_CHANGING=15;
var ACTION_REGISTERING=16;
var ACTION_SYNCING=17;
var ACTION_BACKUP=18;

///////////////////// Namespace /////////////////////

var Focus= Focus || {};
if(!window.console)
{
    window.console = {log: function(){} };
}

function namespace(sPackage)
{
	var iIndex=0,iEndIndex=-1;
	var objArray=Focus;
	var sCurrPackage;

    if(!util.startsWith(sPackage,'Focus.'))
    {
        alert("Invalid namespace name, it must start with 'Focus' ex: Focus.crm");
        return;
    }
   else
    { if(sPackage)
        sPackage=sPackage.substring(sPackage.indexOf('Focus.')+6);
    }

	while((iEndIndex=sPackage.indexOf(".",iEndIndex+1))>=0)
	{
		sCurrPackage=sPackage.substring(iIndex,iEndIndex);
		objArray[sCurrPackage]=objArray[sCurrPackage] || {};
		objArray=objArray[sCurrPackage];
		iIndex=iEndIndex+1;
	}

	if(iIndex>0)
	{
		sCurrPackage=sPackage.substring(sPackage.lastIndexOf(".")+1);
		objArray[sCurrPackage]=objArray[sCurrPackage] || {};
	}
	else
		Focus[sPackage]=Focus[sPackage] || {};

    //alert(sPackage+"--"+Focus[sPackage])

	//return Focus[sPackage];
}

function getInstance(sFunctionWithNamespace)
{
    var sFunction=sFunctionWithNamespace;
    var iIndex=0,iEndIndex=-1;
	var sCurrPackage;
    var fnInstance=Focus;

	while((iEndIndex=sFunction.indexOf(".",iEndIndex+1))>=0)
	{
		sCurrPackage=sFunction.substring(iIndex,iEndIndex);
		//alert(sCurrPackage+"-"+fnInstance);
		fnInstance=fnInstance[sCurrPackage];
		iIndex=iEndIndex+1;
	}

	if(iIndex>0)
	{
		sCurrPackage=sFunction.substring(sFunction.lastIndexOf(".")+1);
		fnInstance=fnInstance[sCurrPackage];
	}

    return fnInstance;
}

/////////////////////

var clAppBuffer=new function()
{
    var sContextPath = "/dialog1";
    var sTheme = "";
    var iThemeType = 0;
    var iDateFormat;
    var iTimeFormat;
    var sCompCode = 170,sUser = "",iLoginId=-1; //todo
    var sTodaysDate;
    var iNumOfDecimals;
    var iModulewiseProperties;
    var clScreenPos=null;// stored via window.onMouseMove event need for tracking window close it is like x:pos,y:ps
    var byViewMode=0;
    var arrModuleCaptions=null;
    var arrModuleSingularCaptions=null;
    var clHashtable=null;

    var iActionId = 0;
    var iWindowType = 0;
    var iSubWindowType = 0;
    var bySplitPaneType = 0;
    var iLanguage = 0;


     this.getModuleCaptions=function()
    {
             return arrModuleCaptions;
    }

     this.getModuleSingularCaptions=function()
    {
            return arrModuleSingularCaptions;
    }


     this.setModuleCaptions=function(arrModuleCaptions1)
    {
             arrModuleCaptions = arrModuleCaptions1;
    }

    this.setModuleSingularCaptions=function(arrModuleSingularCaptions1)
    {
            arrModuleSingularCaptions = arrModuleSingularCaptions1;
    }

    this.setModuleCaptions11=function(arrModuleCaptions1)
    {
        //arrModuleCaptions=arrModuleCaptions1;
        arrModuleCaptions=[];
//        TODO: remove after captions set from company dao
        if(arrModuleCaptions1!=null && arrModuleCaptions1.length > 0 )
        {
        arrModuleCaptions1 = eval(arrModuleCaptions1);
        arrModuleCaptions["'"+Constants.LEADS+"'"]=arrModuleCaptions1[0];           //"Leads"
        arrModuleCaptions["'"+Constants.TASKS+"'"]=arrModuleCaptions1[1];        //"Tasks"
        arrModuleCaptions["'"+Constants.NOTES+"'"]=arrModuleCaptions1[2];
        arrModuleCaptions["'"+Constants.REQUEST+"'"]=arrModuleCaptions1[3];
        arrModuleCaptions["'"+Constants.CALL_WORKLOG+"'"]=arrModuleCaptions1[4];
        arrModuleCaptions["'"+Constants.CALL_TASKS+"'"]=arrModuleCaptions1[5];
        arrModuleCaptions["'"+Constants.CALL_RESOLUTION+"'"]=arrModuleCaptions1[6];
        arrModuleCaptions["'"+Constants.PARTS_REQUESTED+"'"]=arrModuleCaptions1[7];
        arrModuleCaptions["'"+Constants.PARTS_REPLACED+"'"]=arrModuleCaptions1[8];
        arrModuleCaptions["'"+Constants.CALL_CLOSE+"'"]=arrModuleCaptions1[9];
        arrModuleCaptions["'"+Constants.EMAILS+"'"]=arrModuleCaptions1[10];
        arrModuleCaptions["'"+Constants.ATTACHMENTS+"'"]=arrModuleCaptions1[11];
        arrModuleCaptions["'"+Constants.DOCUMENTS+"'"]=arrModuleCaptions1[12];
        arrModuleCaptions["'"+Constants.CALL_NOTES+"'"]=arrModuleCaptions1[13];
        arrModuleCaptions["'"+Constants.NOTIFICATIONS+"'"]=arrModuleCaptions1[14];
        arrModuleCaptions["'"+Constants.TELELEADS+"'"]=arrModuleCaptions1[15];
        //arrModuleCaptions["'"+Constants.ACCOUNTS+"'"]=arrModuleCaptions1[16];
        arrModuleCaptions["'"+Constants.CONTACTS+"'"]=arrModuleCaptions1[17];
        arrModuleCaptions["'"+Constants.REQUEST+"'"]=arrModuleCaptions1[18];
        arrModuleCaptions["'"+Constants.PRODUCTS+"'"]=arrModuleCaptions1[19];
        arrModuleCaptions["'"+Constants.ACCOUNTS+"'"]=arrModuleCaptions1[20];
        arrModuleCaptions["'"+Constants.ISSUES+"'"]=arrModuleCaptions1[21];
        arrModuleCaptions["'"+Constants.FREQUENCY_TEMPLATES+"'"]=arrModuleCaptions1[22];
        arrModuleCaptions["'"+Constants.ESTIMATION+"'"]=arrModuleCaptions1[23];
        arrModuleCaptions["'"+Constants.SERVICE_ORDER+"'" ]=arrModuleCaptions1[24];
        arrModuleCaptions["'"+Constants.SERVICE_QUOTE+"'" ]=arrModuleCaptions1[25];
        arrModuleCaptions["'"+Constants.CUST_SPARE_PARTS+"'"]=arrModuleCaptions1[26];

         arrModuleCaptions["'"+Constants.APPOINTMENTS+"'"]=arrModuleCaptions1[27];
        arrModuleCaptions["'"+Constants.TASKS+"'"]=arrModuleCaptions1[28];
        arrModuleCaptions["'"+Constants.ACTIVITIES+"'"]=arrModuleCaptions1[29];
        arrModuleCaptions["'"+Constants.PLANS+"'"]=arrModuleCaptions1[30];
        }
        /*arrModuleCaptions["'"+Constants.LEADS+"'"]="Leads";
        arrModuleCaptions["'"+Constants.TASKS+"'"]="Tasks";
        arrModuleCaptions["'"+Constants.NOTES+"'"]="Notes";
        arrModuleCaptions["'"+Constants.REQUEST+"'"]="Call";
        arrModuleCaptions["'"+Constants.CALL_WORKLOG+"'"]="WorkLogs";
        arrModuleCaptions["'"+Constants.CALL_TASKS+"'"]="Call Tasks";
        arrModuleCaptions["'"+Constants.CALL_RESOLUTION+"'"]="Resolution";
        arrModuleCaptions["'"+Constants.PARTS_REQUESTED+"'"]="Parts Requested";
        arrModuleCaptions["'"+Constants.PARTS_REPLACED+"'"]="Parts Replaced";
        arrModuleCaptions["'"+Constants.CALL_CLOSE+"'"]="Close Call";
        arrModuleCaptions["'"+Constants.EMAILS+"'"]="E-Mail";
        arrModuleCaptions["'"+Constants.ATTACHMENTS+"'"]="Attachment";
        arrModuleCaptions["'"+Constants.DOCUMENTS+"'"]="Document";
        arrModuleCaptions["'"+Constants.CALL_NOTES+"'"]="Call Notes";
        arrModuleCaptions["'"+Constants.NOTIFICATIONS+"'"]="Notify Settings";
        arrModuleCaptions["'"+Constants.TELELEADS+"'"]="Tele Leads";
        arrModuleCaptions["'"+Constants.ACCOUNTS+"'"]="Accounts";
        arrModuleCaptions["'"+Constants.CONTACTS+"'"]="Contacts";
        arrModuleCaptions["'"+Constants.REQUEST+"'"]="Requests";
        arrModuleCaptions["'"+Constants.PRODUCTS+"'"]="Products";
        arrModuleCaptions["'"+Constants.ACCOUNTS+"'"]="Accounts";
        arrModuleCaptions["'"+Constants.ISSUES+"'"]="Issues";
        arrModuleCaptions["'"+Constants.FREQUENCY_TEMPLATES+"'"]="Frequency Templates";
        arrModuleCaptions["'"+Constants.ESTIMATION+"'"]="Estimate";
        arrModuleCaptions["'"+Constants.SERVICE_ORDER+"'" ]="Service Order";
        arrModuleCaptions["'"+Constants.SERVICE_QUOTE+"'" ]="Service Quote";
        arrModuleCaptions["'"+Constants.QUOTE+"'" ]="Quote";
        arrModuleCaptions["'"+Constants.SALES_ORDER+"'" ]="Sales Order";
        arrModuleCaptions["'"+Constants.CUST_SPARE_PARTS+"'"]="Spare parts";

        arrModuleCaptions["'"+Constants.APPOINTMENTS+"'"]="Appointments";
        arrModuleCaptions["'"+Constants.TASKS+"'"]="Tasks";
        arrModuleCaptions["'"+Constants.ACTIVITIES+"'"]="Activities";
        arrModuleCaptions["'"+Constants.PLANS+"'"]="Plans";*/

//        alert(arrModuleCaptions.length)
    };
    this.setModuleSingularCaptions11=function(arrModuleSingularCaptions1)
    {
        //arrModuleSingularCaptions=arrModuleSingularCaptions1;
        arrModuleSingularCaptions=[];
        //TODO: remove after captions set from company dao
           if(arrModuleSingularCaptions1!=null && arrModuleSingularCaptions1.length > 0 )
           {
            arrModuleSingularCaptions1 = eval(arrModuleSingularCaptions1);
            arrModuleSingularCaptions["'"+Constants.NOTES+"'"]=arrModuleSingularCaptions1[0];
            arrModuleSingularCaptions["'"+Constants.CALL_NOTES+"'"]=arrModuleSingularCaptions1[1];
            arrModuleSingularCaptions["'"+Constants.REMINDERS+"'"]=arrModuleSingularCaptions1[2];
            arrModuleSingularCaptions["'"+Constants.FREQUENCY_TEMPLATES+"'"]=arrModuleSingularCaptions1[3];
            arrModuleSingularCaptions["'"+Constants.CUST_ASSETS+"'"]=arrModuleSingularCaptions1[4];
            arrModuleSingularCaptions["'"+Constants.SERVICES+"'"]=arrModuleSingularCaptions1[5];
            arrModuleSingularCaptions["'"+Constants.ACCOUNTS+"'"]=arrModuleSingularCaptions1[6];
            arrModuleSingularCaptions["'"+Constants.OPPORTUNITIES+"'"]=arrModuleSingularCaptions1[7];
            arrModuleSingularCaptions["'"+Constants.CONTACTS+"'"]=arrModuleSingularCaptions1[8];
            arrModuleSingularCaptions["'"+Constants.ISSUES+"'"]=arrModuleSingularCaptions1[9];
            arrModuleSingularCaptions["'"+Constants.REQUEST+"'"]=arrModuleSingularCaptions1[10];
            arrModuleSingularCaptions["'"+Constants.MSTR_LOCATION+"'"]=arrModuleSingularCaptions1[11];
            arrModuleSingularCaptions["'"+Constants.CONTRACTS+"'"]=arrModuleSingularCaptions1[12];
            arrModuleSingularCaptions["'"+Constants.IPMSSCHEDULE.PMS_UNITS+"'"]=arrModuleSingularCaptions1[13];
            arrModuleSingularCaptions["'"+Constants.ESTIMATION+"'"]=arrModuleSingularCaptions1[14];
            arrModuleSingularCaptions["'"+Constants.SERVICE_ORDER+"'" ]=arrModuleSingularCaptions1[15];
            arrModuleSingularCaptions["'"+Constants.SERVICE_QUOTE+"'" ]=arrModuleSingularCaptions1[16];
            arrModuleSingularCaptions["'"+Constants.PRODUCTS+"'"]=arrModuleSingularCaptions1[17];

            arrModuleSingularCaptions["'"+Constants.APPOINTMENTS+"'"]=arrModuleSingularCaptions1[18];
            arrModuleSingularCaptions["'"+Constants.TASKS+"'"]=arrModuleSingularCaptions1[19];
            arrModuleSingularCaptions["'"+Constants.ACTIVITIES+"'"]=arrModuleSingularCaptions1[20];
            arrModuleSingularCaptions["'"+Constants.PLANS+"'"]=arrModuleSingularCaptions1[21];
           }
}

 /*   this.setModuleSingularCaptions=function(arrModuleSingularCaptions1)
    {
        //arrModuleSingularCaptions=arrModuleSingularCaptions1;
        arrModuleSingularCaptions=[];
        //TODO: remove after captions set from company dao

        arrModuleSingularCaptions["'"+Constants.NOTES+"'"]="Note";
        arrModuleSingularCaptions["'"+Constants.CALL_NOTES+"'"]="Call Note";
        arrModuleSingularCaptions["'"+Constants.REMINDERS+"'"]="Reminder";
        arrModuleSingularCaptions["'"+Constants.FREQUENCY_TEMPLATES+"'"]="Frequency Template";
        arrModuleSingularCaptions["'"+Constants.CUST_ASSETS+"'"]="Customer Asset";
        arrModuleSingularCaptions["'"+Constants.SERVICES+"'"]="Service";
        arrModuleSingularCaptions["'"+Constants.ACCOUNTS+"'"]="Account";
        arrModuleSingularCaptions["'"+Constants.OPPORTUNITIES+"'"]="Opportunity";
        arrModuleSingularCaptions["'"+Constants.CONTACTS+"'"]="Contact";
        arrModuleSingularCaptions["'"+Constants.ISSUES+"'"]="Issue";
        arrModuleSingularCaptions["'"+Constants.REQUEST+"'"]="Request";
        arrModuleSingularCaptions["'"+Constants.MSTR_LOCATION+"'"]="Location";
        arrModuleSingularCaptions["'"+Constants.CONTRACTS+"'"]="Contract";
        arrModuleSingularCaptions["'"+Constants.IPMSSCHEDULE.PMS_UNITS+"'"]="PMS Units";
        arrModuleSingularCaptions["'"+Constants.ESTIMATION+"'"]="Estimate";
        arrModuleSingularCaptions["'"+Constants.SERVICE_ORDER+"'" ]="Service Order";
        arrModuleSingularCaptions["'"+Constants.SERVICE_QUOTE+"'" ]="Service Quotes";
        arrModuleSingularCaptions["'"+Constants.QUOTE+"'" ]="Quote";
        arrModuleSingularCaptions["'"+Constants.SALES_ORDER+"'" ]="Sales Order";
        arrModuleSingularCaptions["'"+Constants.PRODUCTS+"'"]="Product";

        arrModuleSingularCaptions["'"+Constants.APPOINTMENTS+"'"]="Appointment";
        arrModuleSingularCaptions["'"+Constants.TASKS+"'"]="Task";
        arrModuleSingularCaptions["'"+Constants.ACTIVITIES+"'"]="Activity";
        arrModuleSingularCaptions["'"+Constants.PLANS+"'"]="Plan";
        arrModuleSingularCaptions["'"+Constants.TELELEADS+"'"]="Tele Lead";


    };*/

    this.setLanguage=function(language)
    {
        iLanguage=language;
    };

    this.getLanguage = function()
    {
        return iLanguage;
    };
    this.getModuleCaption=function(iModuleId,isGetSingularName)
    {
        var sModuleCaption;
        if(isGetSingularName)
            sModuleCaption=arrModuleSingularCaptions[iModuleId];
        else
            sModuleCaption=arrModuleCaptions[iModuleId];
        if(!sModuleCaption)
            sModuleCaption="";
        return sModuleCaption;
    };



    this.setDateFormat=function(iFormat,sModuleCaptions,sModuleSingularCaptions)
    {
        if(sModuleCaptions!=null)
            this.setModuleCaptions(eval(sModuleCaptions));
        if(sModuleSingularCaptions!=null)
            this.setModuleSingularCaptions(eval(sModuleSingularCaptions));
        iDateFormat=parseInt(iFormat,10);
    };

    this.getDateFormat=function()
    {
        if(!iDateFormat)
            iDateFormat=Constants.DDMMYYYY;
        return iDateFormat;
    };

    this.setTimeFormat=function(iFormat)
    {
        iTimeFormat=iFormat;
    };

    this.getTimeFormat=function()
    {
        if(!iTimeFormat)
            iTimeFormat=Constants.TIME_HHMMAMPM;
        return iTimeFormat;
    };


    this.setCompanyCode=function(sCompanyCode)
    {
        sCompCode = sCompanyCode;
    };

    this.getCompanyCode=function()
    {
        return sCompCode;
    };

    this.setUserName=function(sUserName)
    {
        sUser = sUserName;
    };

    this.getUserName=function()
    {
        return sUser;
    };

    this.setTheme=function(sThemeName)
    {
        sTheme = sContextPath +"/"+sThemeName.substring(0,sThemeName.lastIndexOf("/"));
    };

    this.getTheme=function()
    {
        return sTheme;
    };
    this.setThemeType=function(iThemeTypeNo)
    {
        iThemeType=iThemeTypeNo;
    };
    this.getThemeType=function()
    {
        return iThemeType;
    };

    this.getContextPath=function()
    {
        return sContextPath;
    };
    this.setContextPath=function(sContextPath)
    {
        if(util.trim(sContextPath).length>0 )
            this.sContextPath="/"+sContextPath;
        else
          this.sContextPath="";
    };

    this.setTodaysDate=function(sDate)
    {
        sTodaysDate=sDate;
    };

    this.getTodaysDate=function()
    {
        return sTodaysDate;
    };

    this.getTodaysDateAsString=function()
    {
        return clAppBuffer.getTodaysDate();
    };

    this.setNumOfDecimals=function(iNumOfDec)
    {
        iNumOfDecimals=iNumOfDec;
    };

    this.getNumOfDecimals=function()
    {
        return iNumOfDecimals;
    };

    this.setModulewiseProperties=function(iModulewiseProps)
    {
        if(iModulewiseProps)
            iModulewiseProps=eval(iModulewiseProps);
        iModulewiseProperties=iModulewiseProps;
    };

    this.getModulewiseProperties=function(iModuleId)
    {
        if(iModulewiseProperties)
        {
            var iProperties;
            for(var i=0; i < iModulewiseProperties.length; i++)
            {
                iProperties=iModulewiseProperties[i];
                if(iProperties[0]==iModuleId)
                    return parseInt(iProperties[1],10);
            }
        }
        return 0;
    };

    this.getScriptPath=function()
    {
        return sContextPath + "/res/scripts/";
    };

    this.getStylesPath=function(isGetGlobalPath)
    {
        if (isGetGlobalPath)
            return sContextPath + "/res/global/styles/";
        return sTheme + "/styles/";
    };

    this.getImagePath=function(isGetGlobalPath)
    {
        if (isGetGlobalPath)
            return sContextPath + "/res/global/images/";
        return sTheme + "/images/";
    };
    this.setScreenPos=function(clScreenPos)
    {
      this.clScreenPos=clScreenPos;
    }
    this.getScreenPos=function()
    {
        return this.clScreenPos;
    }
    this.getLoginId = function()
    {
        return iLoginId;
    }
    this.setLoginId = function(loginId)
    {
        iLoginId = loginId;
    };

    this.setViewMode=function(byViewMode)
    {
        this.byViewMode=byViewMode;
    };

    this.getViewMode=function()
    {
        return this.byViewMode;
    };

     this.getMobileClient =function()
    {
        return ((this.byViewMode==Constants.MOBILE_BROWSER )&& (cross.getScreenType() == cross.TYPE_EXTRASMALL));
    };

     this.getTabletClient =function()
    {
        return ((this.byViewMode==Constants.MOBILE_BROWSER )&& (cross.getScreenType() ==cross.TYPE_SMALL));
    };
    this.setWindowTypes = function(iType){
        clAppBuffer.setWindowType(iType);
        clAppBuffer.setSubWindowType(iType);
        clAppBuffer.setActionId(0);
    };
    this.setWindowType=function(windowType)
    {
        iWindowType = windowType;
    };
    this.getWindowType=function()
    {
        return iWindowType;
    };
    this.setSplitPaneType = function(splitPaneType){
        bySplitPaneType = splitPaneType;
    };
    this.getSplitPaneType = function(){
        return bySplitPaneType;
    };


    this.setSubWindowType = function(subWindowType){
        if(subWindowType > 0)
            iSubWindowType = subWindowType;
        else
            iSubWindowType = 0;
    };
    this.getSubWindowType = function(){
        return iSubWindowType;
    };

    this.setActionId = function(actionId )
    {
        iActionId = actionId ;
    };
    this.getActionId  = function()
    {
        return iActionId;
    };
};

///////////////////// Javscript methods for registering singleton functions ///////////////////////////
var app=new function()
{
    var me=this;
    /**
     *    This method used to a register a instance while loading a screen and ll be removed when page or screen is reloaded or replace by other screen
     */
    me.clInstanceStore=null;
    me.hashURL=false;

    this.registerInstance=function(sInstanceId,clInstance,iScope)
    {
         // alert(( typeof(clInstance["clearState"])=="function") );
        if(iScope==Constants.SCOPE_APP)
        {
              if(typeof(clInstance["clearState"])== "function")
              {
                  if(!me.clInstanceStore)
                        me.clInstanceStore=new Array();
                    me.clInstanceStore[sInstanceId]=clInstance;
              }
        }
       else  if(iScope!=Constants.SCOPE_APP)//dialog/screen
        {
           if(!me.clInstanceStore)
                me.clInstanceStore=new Array();
            me.clInstanceStore[sInstanceId]=clInstance;
        }

    };

    this.removeAllInstancesFromStore=function()
    {
        if(me.clInstanceStore)
        {
            var key;
            var value;
            for(key in me.clInstanceStore)
            {

                value=me.clInstanceStore[key];
               // alert(typeof(value))
              //  alert(typeof(value["clearState"]))
            if(value && typeof(value["clearState"])== "function")
              {
                 value.clearState();

              }
             else
              {  //alert(key)
                if(me.clInstanceStore[key])
                { delete me.clInstanceStore[key];
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
              }
            }
        }
    };

    ///////////////////// General methods ///////////////////////////

    this.getImagePath=function(isGetGlobalPath)
    {
        return clAppBuffer.getImagePath(isGetGlobalPath);
    };

    /**
     * Author   : YUGANDHAR & SREENIVAS
     * Date      : 14 Feb 2011
     * Purpose : set the innerHTML content to the div, and loads the Scripts,CSS details.
     * @param dvContainer of type DIV.
     * @param sResponseText of type HTML Content.
     * @param fnCallback  of type function, which will be invoked after resouces have been loaded.
     */
    this.setBodyContent=function(dvContainer, sResponseText, fnCallback)
    {


        //removeAllDialogInstances();//dialogbox.js

           removeAllComboInstances();// combobox.js
           msg.removeToastWindows(Constants.SCOPE_SCREEN);
        if (typeof window["removeAllAdvPageInstances"] == "function")
            removeAllAdvPageInstances();

        if (typeof window["PopupMenu"] == "function")
            PopupMenu.clearAll();

        if (typeof window["clDashboardDisplay"] == "object")
            clDashboardDisplay.removeAllDashletsTimeInterval();


        // removeAllTableInstances();// table.js
        // removeAllAdvPageInstances();// advancePaging.js
        unloadResources(dvContainer);
        unloadInitScripts(dvContainer);
        cross.unregisterAllListeners(Constants.SCOPE_SCREEN);
        cross.unregisterWindowEvents(Constants.SCOPE_SCREEN);
        //cross.unregisterWindowEvents();
     //alert("-31-")
        me.removeAllInstancesFromStore();
    // alert("--3")
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
        // alert("setting "+sResponseText)
        dvContainer.innerHTML = sResponseText;
        loadResources(dvContainer, fnCallback);
      // alert("--")

    };


    ///////////////////// Showpop,dialog methods ///////////////////////////

    this.showPopUp=function(sUrl, sTitle, iWidth, iHeight, arrActions)
    {
        //    alert(sUrl+"--------"+arrActions)
        var clDialogBox = new DialogBox("appdlg", sTitle, 0, 0, iWidth, iHeight, sUrl, true, null, null, null, arrActions);
        clDialogBox.setBounds(0,0,iWidth, iHeight);
        clDialogBox.setCenter();
        clDialogBox.setTitle(sTitle);
        clDialogBox.show();
    };

    this.hidePopUp=function()
    {
        getDialogBox("appdlg").hide();
    };

   this.redirectToLogin=function()
    {
      window.location.href="login.do";
    };
    /** function is used to open the mainlogin page in a dialog box */
    this.showLoginDialog=function(sLastUrl)
    {
        var sUrl = con.getStruts2Url("", "login.do", "relogin", null, true);
        sUrl += "?isDialog=true&sCCode="+clAppBuffer.getCompanyCode()+"&sUser="+clAppBuffer.getUserName();
        var arrActions = new Array();
        var sContextPath = clAppBuffer.getContextPath();
        if (sLastUrl.indexOf(sContextPath) != -1)
            sLastUrl = sLastUrl.substring(sContextPath.length + 1);
        arrActions[0] = MsgHandler.getMsg(MsgConstants.LOGIN)+"|crmLogin.onClkLogin|lastUrl=" + escape(sLastUrl);
        arrActions[1] = MsgHandler.getMsg(MsgConstants.CANCEL)+"|crmLogin.onClkHideLogin";
        app.showPopUp(sUrl, MsgHandler.getMsg(MsgConstants.LOGIN), 500, 370, arrActions);
    };

    this.toggleShow=function(sId)
    {
        var objFld = document.getElementById(sId);
        if(objFld.style.display == "block" || objFld.style.display == "")
            cross.setVisible(objFld,false);
        else
            cross.setVisible(objFld,true);
    };

    this.toggleShowImage=function(objImg,sContentId,isMainContainer)
    {
        if(objImg.getAttribute("isDown") == 'true')
        {
            objImg.setAttribute("isDown",'false');
            if(isMainContainer){
//                objImg.src = app.getImagePath(false)+"up.gif";
                util.addClass(objImg,"fa fa-caret-up");
                util.removeClass(objImg,"fa fa-caret-down");/*  util.addClass(objImg,"s-up");
                util.removeClass(objImg,"s-down");*/
            }
            else
                objImg.src = app.getImagePath(false)+"fa fa-chevron-circle-up";/*  objImg.src = app.getImagePath(false)+"imritt.gif";*/
        }
        else
        {
            objImg.setAttribute("isDown",'true');
            if(isMainContainer){
//                objImg.src = app.getImagePath(false)+"down.gif";
                util.removeClass(objImg,"fa fa-caret-up");
                util.addClass(objImg,"fa fa-caret-down");/* util.removeClass(objImg,"s-up");
                util.addClass(objImg,"s-down");*/
            }
            else
                objImg.src = app.getImagePath(false)+"fa fa-chevron-circle-down";/* objImg.src = app.getImagePath(false)+"imritr.gif";*/
        }
        app.toggleShow(sContentId);
    };


    /*function is to show the toast window for recent items*/
    this.evOverShowDetails=function(obj,sId,iProngType,sParams,sAppendClass,sRemoveClass,objScoll,e,iTimeOutValue)
    {
        var sUrl;
        e = cross.getEvent(e);
        if(obj == null)
            obj = cross.getSrcElement(e);
        sUrl = con.getStruts2Url("security","home.do","getRecentItemDetails",null);
        sUrl += sParams;
        if(obj.getAttribute("recentMenuId") == null)
            obj.setAttribute("recentMenuId",sId);
        me.bShowMsg = true;

        if(!iTimeOutValue)
            iTimeOutValue=800;

        me.timer = setTimeout(function()
        {

            if(me.bShowMsg)
            {
                me.sId = sId;

                msg.showToastWindowFromURL(obj,sUrl,true,sId,iProngType,false,sAppendClass,sRemoveClass,false,true,Constants.SCOPE_SCREEN,objScoll);
            }
        },iTimeOutValue);
    };

     this.isHideCardView = function()
    {
        if(me.sId != null)
            msg.removeToastWindowDlg(me.sId);
    };

    /*function is to hide toast window*/
    this.evmOutClearTimer=function(obj,e)
    {
        e = cross.getEvent(e);
        if(obj == null)
            obj = cross.getSrcElement(e);
        var sId = obj.getAttribute("recentMenuId");
        if( me.sId != sId )
        {
            msg.hideToastWindowDlg(false,me.sId,obj);
//            obj.className = 'recentMenu';
        }

        me.bShowMsg = false;
        clearTimeout(me.timer);
    };

    /**Function is to show Formula Editor
     * */
    this.showFormulaEditor = function(sSrcFldId,iWidth,iHeight)
    {
        if(iWidth == null)
            iWidth = 950;//700;//650;
        if(iHeight == null)
            iHeight = 570;//420;//480;

        var clFormulaDlg,arrActions,sUrl;
        arrActions = new Array();
        arrActions[0] = MsgHandler.getMsg(MsgConstants.OK)+"|clFormulaBar.onClkGetFormula|sSrcFldId="+sSrcFldId;
        arrActions[1] = MsgHandler.getMsg(MsgConstants.CANCEL)+"|clFormulaBar.hideFormulaDlg";
         sUrl = con.getStruts2Url("common","report.do","getFormulaDetails",null)+"&fieldId="+sSrcFldId+"&moduleId="+document.getElementById("moduleId").value+"&expression="+util.encodeURI(document.getElementById(sSrcFldId).value);
        clFormulaDlg = new DialogBox("clFormulaDlg",MsgHandler.getMsg(MsgConstants.FORMULA_EDITOR),0,0,iWidth,iHeight,sUrl,true,null,true,true,arrActions);
        //sUrl = con.getStruts2Url("common","report.do","getFormulaDetails",null)+"&fieldId="+sSrcFldId+"&moduleId="+document.getElementById("moduleId").value+"&expression="+util.encodeURI(document.getElementById(sSrcFldId).value);
        //clFormulaDlg = new DialogBox("clFormulaDlg",MsgHandler.getMsg(MsgConstants.FORMULA_EDITOR),0,0,iWidth,iHeight,sUrl,true,null,true,true,arrActions,false,null,true,false,false,true,true,true);
        clFormulaDlg.setCenter();
        clFormulaDlg.show();
    };

    this.showFontDlg = function(sCallBackFn,bReturnAsFontDTO,sPrefix,sParams)
    {
        /*this.sCallBackFn=sCallBackFn;
        this.bReturnAsFontDTO=bReturnAsFontDTO;
        this.sPrefix=sPrefix;*/
      //  if(parent.getDialogBox("rules")!=null)
      //      parent.getDialogBox("rules").setBounds(220,80,1050,700);
        var arrActions = new Array(),sUrl,clFontDlg;
        arrActions[0] = MsgHandler.getMsg(MsgConstants.APPLY)+"|clFont.getFontInfo";
        arrActions[1] = MsgHandler.getMsg(MsgConstants.OK)+"|clFont.onClkOk";
        sUrl=con.getStruts2Url("report","fontDlg","getFontDlg",null,false);
        if(sParams)
            sUrl+=sParams;
        clFontDlg = getDialogBox("clFontDlg");
        clFontDlg = new DialogBox("clFontDlg",MsgHandler.getMsg(MsgConstants.FONT_STYLE),0,0,270,300, sUrl, true, null, true,true,arrActions,null,null,null,null,true,null,false,true);
        clFontDlg.callFn("clFont.init",[sCallBackFn,bReturnAsFontDTO,sPrefix],"clFontDlg");
        clFontDlg.setOnClose(app.callBackFontDlg);
        clFontDlg.show();
    };

    this.callBackFontDlg=function()
    {
        var clContentPaneWindow= getDialogBox("clFontDlg").getContentPaneWindow();
        if(clContentPaneWindow.clFont.isApplyStyles)
        {
         /*   clContentPaneWindow.clFont.init(me.sCallBackFn,me.bReturnAsFontDTO,me.sPrefix);
            me.sCallBackFn=null;
            me.bReturnAsFontDTO=null;
            me.sPrefix=null;*/
            clContentPaneWindow.clFont.getFontInfo();
        }
    };

     this.handleDocKey  = function(e)
    {
       e=cross.getEvent(e);
       var  key = e.keyCode;
       if(key == 115)    /*f4*/
       {
          var objSrc = cross.getSrcElement(e);
          if(objSrc.getAttribute("isformula") == "true")
              me.showFormulaEditor(objSrc.getAttribute("id"));
       }
    };
    this.handleWindowUnload = function(evt)
    {
        var isAltPressed,isCtrlPressed;
        evt=cross.getEvent(evt);
        //        iPositions = clAppBuffer.getScreenPos();
        isAltPressed = cross.isAltPressed(evt);
        isCtrlPressed = cross.isCtrlPressed(evt);
        if(evt.clientY < 0 || isAltPressed)
        {
            var sUrl;
            sUrl = con.getStruts2Url("default","logout","logout",null,true);
            con.sendPostRequest(sUrl,null,null,null,null,null,null,true);
        }

    };


    this.isHashBodyContent=function()
        {
          //util.writeToLog("isHashBodyContent="+this.hashBodyContent)
          return   me.hashURL;
        }
    this.setHashLocation=function(sUrl)
        {
            //util.writeToLog("setHashLocation")
            var d = new Date();
            var n = d.getMilliseconds();
             me.hashURL=false
            sUrl=CryptoJS.AES.encrypt(sUrl,"98852");
            window.location.hash=sUrl+"#"+n;



        }
     this.getHashLocation=function()
        {
       //   alert(window.location.hash)
           return window.location.hash.substring(1);//sUrl.substring(0  consider border,sUrl.lastIndexOf('#'));
        }

    this.handleHashChange= function(evt)
    {

        if(me.isHashBodyContent())
        {
            evt=cross.getEvent(evt);
            var sUrl= me.getHashLocation();
            /*if(sUrl && util.trim(sUrl).length>0)
            {
                sUrl=CryptoJS.AES.decrypt(sUrl,"98852");
                sUrl=sUrl.substring(0,sUrl.lastIndexOf('#'));
                //util.writeToLog("handleHashChange--"+sUrl)
                home.setCenterUI(sUrl,null,false,false,null,true);
            }*/
        }
      else
        {
           me.hashURL=true;
        }
      //  util.writeToLog("hashBodyContent="+me.hashURL)

    };


    this.attachCallbackFn=function(fnSource,fnTarget,arrTargetParams)
    {
        fnSource.fnCallback=[fnTarget,arrTargetParams];
    };

    this.detachCallbackFn=function(fnSource)
    {
        fnSource.fnCallback=null;
    };


// adds objects to buffer to use in application
    this.addToBuffer=function(sKey,sValue)
    {

        if( clAppBuffer.clHashtable==null)
            clAppBuffer.clHashtable = {};//new Hashtable();
        clAppBuffer.clHashtable[sKey]=sValue;
        //clAppBuffer.clHashtable.put(sKey,sValue);

    };

   this.getFromBuffer= function (sKey)
    {
      if( clAppBuffer.clHashtable!=null)
        return clAppBuffer.clHashtable[sKey];
//        return clAppBuffer.clHashtable.get(sKey);

    };

// removes objects from buffer
    this.removefromBuffer=function(sKey)
    {  if(clAppBuffer.clHashtable!=null)
            delete clAppBuffer.clHashtable[sKey];
        //clAppBuffer.clHashtable.remove(sKey);
    }

};

//alert(typeof(app))

}