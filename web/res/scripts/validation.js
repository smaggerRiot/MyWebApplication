
/// entered  value '{1}' is invalid -- assumption for a field SINGLE parameter
/// use label element and assign id to as lbl...... and also use for attribute for the same which should be equal to id of input element

/*	All FocusTags components that requires validation checking must give attribute 'isRequiresValidation' to true
 (New attribute 'isRequiresValidation' will be added to all the form field components) */

var Validation = new function()
{
    this.isValid = true;
    this.INFO_MSG = 1;
    this.ERROR_MSG = 2;
    this.SUCCESS_MSG = 3;

    this.ERROR_MANDATORY = 4;
    this.ERROR_INVALID = 5;
    this.ERROR_CUSTOM = 6;
    this.firstInvalidFld = null;
    var arrMessages = {4:" is required",5:" is invalid"};

    /*	All the validation functions return status based on the below condition:
     when isLastField=false or null, it will always return true so that the remaining validations can be done.
     when isLastField=true, it will return overall validation true or false based on success or failure.
     * isLastField value must be true for the last field for validation process to finish.
     */


    /*	Checks mandatory
     elemInput	- Form element
     sLabel		- Field caption
     iDataType	- Validates based on datatype Constants defined in Constants.js file. (Ex: Constants.DATATYPE_DATE)
     isLastField - Must be true for the last form element to be validated
     iControlType - Optional. By default it will take default control based on datatype. (Ex: Constants.CONTROLTYPE_TXTBOX)
     */
    this.checkMandatory = function(elemInput, sLabel, iDataType, isLastField, iControlType,isGlobalMsg,iErrorType)
    {
        var isShowErrorMsg = false;
        if (iControlType == Constants.CONTROLTYPE_RADIOBUTTON || iControlType == Constants.CONTROLTYPE_CHECKBOX)
        {
            if (!elemInput.checked)
                isShowErrorMsg = true;
        }
        else if (iControlType ==  Constants.CONTROLTYPE_OPTIONCTRL && elemInput.getAttribute("multiple")!=null)
        {
            isShowErrorMsg=(elemInput.options.length==0);
        }
        else if (iControlType == Constants.CONTROLTYPE_PHONE)
            return this.checkPhoneNo(elemInput, sLabel, isLastField, iControlType,isGlobalMsg, Validation.ERROR_INVALID);
        else if (iControlType == Constants.CONTROLTYPE_EMAIL)
            return this.checkEMail(elemInput, sLabel, isLastField, iControlType,isGlobalMsg, Validation.ERROR_INVALID);
//        else if (iControlType == Constants.CONTROLTYPE_WEBSITE)
        else
        {
            var sValue = util.trim(elemInput.value);
            if (!sValue || sValue.length == 0)
            {
                isShowErrorMsg = true;
            }
        }

        if (isShowErrorMsg)
        {
            if(!iErrorType)
                iErrorType=Validation.ERROR_MANDATORY;
            return this.setValidationStatus(false, elemInput, sLabel, isLastField,isGlobalMsg,iErrorType ,iControlType);
        }

        if(!iErrorType)
            iErrorType=Validation.ERROR_INVALID;

        if (iDataType == Constants.DATATYPE_DATE) //Invalid date
            return this.checkDate(elemInput, sLabel, clAppBuffer.getDateFormat(), "/", isLastField, iControlType,isGlobalMsg, iErrorType);
        else if (iDataType == Constants.DATATYPE_TIME) //Invalid time
            return this.checkTime(elemInput, sLabel, false, isLastField, iControlType,isGlobalMsg, iErrorType);
        else if (iDataType == Constants.DATATYPE_NUMBER) //Invalid number
            return this.checkNumeric(elemInput, sLabel, isLastField, iControlType,isGlobalMsg, iErrorType);
        else if (iDataType == Constants.DATATYPE_FRACTION)
            return this.checkFloat(elemInput, sLabel, isLastField, iControlType,isGlobalMsg, iErrorType);
        else
            return this.setValidationStatus(!isShowErrorMsg, elemInput, sLabel, isLastField,isGlobalMsg,null,iControlType);
    };


    /*	Checks valid Numeric value*/
    this.checkNumeric = function(elemInput, sLabel, isLastField, iControlType,isGlobalMsg, iErrorType,bAllowNegetive)
    {
        //        var sPattern=/([^\-0-9])/g;

        var sPattern;
        if(!bAllowNegetive)
         sPattern = /^[+-]?[0-9]+$/;
        else
         sPattern = /^[0-9]+$/;
        return this.setValidationStatus(sPattern.test(elemInput.value), elemInput, sLabel, isLastField,isGlobalMsg,(iErrorType||this.ERROR_INVALID),iControlType);
    };

    /*	Checks valid Numeric value*/
    this.checkFloat = function(elemInput, sLabel, isLastField, iControlType,isGlobalMsg, iErrorType)
    {
        //        var sPattern=/([^.\-0-9])/g;
        var sPattern = /^[-+]?[0-9]+(\.[0-9]+)?$/;
        return this.setValidationStatus(sPattern.test(elemInput.value), elemInput, sLabel, isLastField,isGlobalMsg, (iErrorType||this.ERROR_INVALID),iControlType);
    };

    /*	Validates date
     sDateFormat - Date format. Default: 'dd/mm/yyyy'
     sSeparator	- Date separator. Default: '/'
     */
    this.checkDate = function(elemDate, sLabel, iDateFormat, sSeparator, isLastField, iControlType,isGlobalMsg, iErrorType)
    {
        var sPattern = /^(((0?[1-9]|[12]\d|3[01])\/(0?[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0?[1-9]|[12]\d|30)\/(0?[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0?[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
        // mm/dd/yyyy hh:MM:ss  11/24/0004 11:59 PM
        //   var sRegExpDatePat=/^(?=\d)^(?:(?!(?:10\D(?:0?[5-9]|1[0-4])\D(?:1582))|(?:0?9\D(?:0?[3-9]|1[0-3])\D(?:1752)))((?:0?[13578]|1[02])|(?:0?[469]|11)(?!\/31)(?!-31)(?!\.31)|(?:0?2(?=.?(?:(?:29.(?!000[04]|(?:(?:1[^0-6]|[2468][^048]|[3579][^26])00))(?:(?:(?:\d\d)(?:[02468][048]|[13579][26])(?!\x20BC))|(?:00(?:42|3[0369]|2[147]|1[258]|09)\x20BC))))))|(?:0?2(?=.(?:(?:\d\D)|(?:[01]\d)|(?:2[0-8])))))([-.\/])(0?[1-9]|[12]\d|3[01])\2(?!0000)((?=(?:00(?:4[0-5]|[0-3]?\d)\x20BC)|(?:\d{4}(?!\x20BC)))\d{4}(?:\x20BC)?)(?:$|(?=\x20\d)\x20))?((?:(?:0?[1-9]|1[012])(?::[0-5]\d){0,2}(?:\x20[aApP][mM]))|(?:[01]\d|2[0-3])(?::[0-5]\d){1,2})?$$/;
        var sPattern=this.getDatePattern(iDateFormat);
        return this.setValidationStatus(sPattern.test(elemDate.value.toLowerCase()), elemDate, sLabel, isLastField,isGlobalMsg,(iErrorType||this.ERROR_INVALID),iControlType);
    };

    this.getDatePattern=function(iDateFormat)
    {
        var DMY=0,MDY=1,YMD=2;
        var iFormateType=0;
        var sPattern='^(',sSeparator='/';
        var arrDate=new Array(),arrMonth=new Array(),arrYear=new Array(),arrNamedMonth;

        if(!iDateFormat)
            iDateFormat=Constants.DDMMYYYY;

        ////////////// Separator //////////////////////////////////////

        /*if(iDateFormat==Constants.DDMMYYYY||iDateFormat==Constants.MMDDYYYY||iDateFormat==Constants.YYYYMMDD
            ||iDateFormat==Constants.DDMMYY||iDateFormat==Constants.MMDDYY)
            sSeparator='/';*/

        if(iDateFormat==Constants.DD_MM_YYYY||iDateFormat==Constants.MM_DD_YYYY||iDateFormat==Constants.YYYY_MM_DD
                ||iDateFormat==Constants.DD_MON_YY||iDateFormat==Constants.DD_MM_YY||iDateFormat==Constants.MM_DD_YY||iDateFormat==Constants.YY_MM_DD
                ||iDateFormat==Constants.DD_MON_YYYY)
            sSeparator='-';

        else if(iDateFormat==Constants.DD___MM___YYYY||iDateFormat==Constants.MM___DD___YYYY||iDateFormat==Constants.YYYY___MM___DD
                ||iDateFormat==Constants.DD___MM___YY||iDateFormat==Constants.MM___DD___YY||iDateFormat==Constants.YY___MM___DD
                ||iDateFormat==Constants.DD___MON___YYYY||iDateFormat==Constants.DD___MON___YY)
            sSeparator='';

        else if(iDateFormat==Constants.DD____MM____YYYY||iDateFormat==Constants.MM____DD____YYYY ||iDateFormat==Constants.YYYY____MM____DD
                ||iDateFormat==Constants.DD____MM____YY||iDateFormat==Constants.MM____DD____YY||iDateFormat==Constants.YY____MM____DD)
            sSeparator='\\\\';

        else if(iDateFormat==Constants.DD__MON__YYYY||iDateFormat==Constants.DD__MON__YY)
            sSeparator=' ';
         ////////////// Separator //////////////////////////////////////

        ////////////// FormateType //////////////////////////////////////

        /*if(iDateFormat==Constants.DDMMYYYY ||iDateFormat==Constants.DDMMYY || iDateFormat==Constants.DD_MM_YYYY || iDateFormat==Constants.DD___MM___YYYY
           || iDateFormat==Constants.DD____MM____YYYY || iDateFormat==Constants.DD____MM____YY || iDateFormat==Constants.DD_MON_YY
           ||iDateFormat==Constants.DD_MM_YY)
            iFormateType= DMY;*/

        if(iDateFormat==Constants.MMDDYYYY || iDateFormat==Constants.MM_DD_YYYY || iDateFormat==Constants.MM____DD____YYYY || iDateFormat==Constants.MMDDYY
                || iDateFormat==Constants.MM___DD___YYYY|| iDateFormat==Constants.MM_DD_YY|| iDateFormat==Constants.MM___DD___YY
                || iDateFormat==Constants.MM____DD____YY)
            iFormateType= MDY;

        else if(iDateFormat==Constants.YYYYMMDD || iDateFormat==Constants.YYYY_MM_DD ||iDateFormat==Constants.YYYY___MM___DD
                || iDateFormat==Constants.YYMMDD|| iDateFormat==Constants.YY_MM_DD|| iDateFormat==Constants.YY___MM___DD
                || iDateFormat==Constants.YYYY____MM____DD|| iDateFormat==Constants.YY____MM____DD)
                iFormateType= YMD;
        ////////////// FormateType //////////////////////////////////////

         if(iDateFormat==Constants.DDMONYYYY ||iDateFormat==Constants.DDMONYY || iDateFormat==Constants.DD__MON__YYYY || iDateFormat==Constants.DD_MON_YYYY
                 || iDateFormat==Constants.DD_MON_YY|| iDateFormat==Constants.DD___MON___YYYY|| iDateFormat==Constants.DD___MON___YY||iDateFormat==Constants.DD__MON__YY)
           arrNamedMonth = new Array();

        arrDate[0]='(0?[1-9]|[12]\\d|3[01])';
        arrDate[1]='(0?[1-9]|[12]\\d|30)';
        arrDate[2]='(0?[1-9]|1\\d|2[0-8])';
        arrDate[3]='29';

        arrMonth[0]='(0?[13578]|1[02])';
        arrMonth[1]='(0?[13456789]|1[012])';
        arrMonth[2]='0?[2]';
        arrMonth[3]='0?[2]';

        if(arrNamedMonth)
        {
            arrNamedMonth[0] ='((jan|mar|may|jul|aug)|(oct|dec))';
            arrNamedMonth[1] ='((jan|mar|apr|may|jun|jul|aug|sep)|(oct|nov|dec))';
            arrNamedMonth[2] ='feb';
            arrNamedMonth[3] ='feb';
        }

        arrYear[0]='((19|[2-9]\\d)\\d{2})';
        arrYear[1]='((19|[2-9]\\d)\\d{2})';
        arrYear[2]='((19|[2-9]\\d)\\d{2})';
        arrYear[3]='((1[6-9]|[2-9]\\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))';

        for(var i=0; i<4; i++)
        {
            sPattern+="(";
            if(iFormateType == DMY)
            {
                sPattern+=arrDate[i]+sSeparator;
                if(!arrNamedMonth)
                    sPattern+=arrMonth[i]+sSeparator;
                else
                    sPattern+=arrNamedMonth[i]+sSeparator;
                sPattern+=arrYear[i];
            }
            else if(iFormateType == MDY)
            {
                if(!arrNamedMonth)
                    sPattern+=arrMonth[i]+sSeparator;
                else
                    sPattern+=arrNamedMonth[i]+sSeparator;
                sPattern+=arrDate[i]+sSeparator;
                sPattern+=arrYear[i];
            }
            else if(iFormateType == YMD)
                {
                    sPattern+=arrYear[i]+sSeparator;
                    if(!arrNamedMonth)
                        sPattern+=arrMonth[i]+sSeparator;
                    else
                        sPattern+=arrNamedMonth[i]+sSeparator;
                    sPattern+=arrDate[i];
                }
            sPattern+=")";
            if(i<3)
                sPattern+="|";
        }
        sPattern+=")$";
        return new RegExp(sPattern);

        //(01|1|30)                    /(03|10)                /(19|23)                   | (02|1|30)                /(01|10)                       /(19|23)                   |(01|1)
            // return /^(((0?[1-9]|[12]\d|3[01])\/(0?[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0?[1-9]|[12]\d|30)\/(0?[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0?[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
    };

    /*	Validates if the 1st date <= 2nd date */
    this.checkDateRange = function(elemDate1, elemDate2, sLabel1, sLabel2, iDateFormat, isLastField, iControlType,isGlobalMsg,isDateTime,isAllowEqualDates,sErrorMsg)
    {
        var sStartDate = elemDate1.value;
        var sEndDate = elemDate2.value;

        if (!iDateFormat)
            iDateFormat = clAppBuffer.getDateFormat();//Constants.DDMMYYYY;
        var sSeparator = util.getDateSeparator(iDateFormat);


        var isValidInput = true;
        var iErrorType = 0;
        if (!sStartDate || sStartDate.indexOf(sSeparator) == -1 || sStartDate.indexOf(sSeparator) == sStartDate.lastIndexOf(sSeparator))
        {
            if (!sStartDate)
                iErrorType = this.ERROR_MANDATORY;
            else
                iErrorType = this.ERROR_INVALID;
            isValidInput = false;
        }

        if (iErrorType > 0)
            this.setValidationStatus(false, elemDate1, sLabel1, isLastField,isGlobalMsg, iErrorType,iControlType);


        iErrorType = 0;
        if (!sEndDate || sEndDate.indexOf(sSeparator) == -1 || sEndDate.indexOf(sSeparator) == sEndDate.lastIndexOf(sSeparator))
        {
            if (!sEndDate)
                iErrorType = this.ERROR_MANDATORY;
            else
                iErrorType = this.ERROR_INVALID;
            isValidInput = false;
        }

        if (iErrorType > 0)
            this.setValidationStatus(false, elemDate2, sLabel2, isLastField,isGlobalMsg, iErrorType,iControlType);

        if (isValidInput)
        {
            if(isDateTime)
            {
                sStartDate=sStartDate.substring(0,sStartDate.indexOf(" "));
                sEndDate=sEndDate.substring(0,sEndDate.indexOf(" "));
            }

            isValidInput=false;
            var dStartDate=util.getDateObject(sStartDate);
            var dEndDate=util.getDateObject(sEndDate);
            var iNoOfDays = util.getDateDiff(dStartDate, dEndDate);

            if(isAllowEqualDates)
                iNoOfDays++;

            //alert(sStartDate+","+sEndDate+","+iNoOfDays)

            if(!sErrorMsg)
            {
                if(isAllowEqualDates)
                    sErrorMsg=sLabel2 + " must be greater than or equal to " + sLabel1;
                else
                    sErrorMsg=sLabel2 + " must be greater than " + sLabel1;
            }
            
            if (iNoOfDays >= 1)  //to overcome fraction values(eg: 0.00343), checking with value '1' 
                isValidInput = true;

            if(isValidInput && isDateTime)
                return  this.checkTimeRange(elemDate1, elemDate2, sLabel1, sLabel2, null,isLastField, iControlType,isGlobalMsg,true,isAllowEqualDates,sErrorMsg);
            else
                return this.setValidationStatus(isValidInput, elemDate2, sErrorMsg, isLastField,isGlobalMsg, this.ERROR_CUSTOM,iControlType);
        }
    };

    /*	Validates time
     isIncSeconds - Include seconds in time validation */
    this.checkTime = function(elemTime, sLabel, isIncSeconds, isLastField, iControlType,isGlobalMsg, iErrorType)
    {
        var sPattern;
        if (isIncSeconds)
            sPattern = /(^(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9]\s?([ap]m|[AP]M)$)|(^([01]\d|2[0-3])(:[0-5]\d){0,2}$)/;
        //            sRegExpTimePat=/^((?:(?:0?[1-9]|1[012])(?::[0-5]\d){0,2}(?:\x20[aApP][mM]))|(?:[01]\d|2[0-3])(?::[0-5]\d){1,2})$/;
        //        ^((0?[1-9]|1[012])(:[0-5]\d){0,2}(\ [AP]M))$|^([01]\d|2[0-3])(:[0-5]\d){0,2}$
        else

            sPattern = /(^(0?[1-9]|1[0-2]):[0-5][0-9]\s?([ap]m|[AP]M)$)|(^([01]\d|2[0-3])(:[0-5]\d){0,2}$)/;
        return this.setValidationStatus(sPattern.test(elemTime.value), elemTime, sLabel, isLastField,isGlobalMsg,(iErrorType||this.ERROR_INVALID),iControlType);
    };


    /*	Validates if the 1st time is less than 2nd time
     iDateFormat	- Date format. Default: 'dd/mm/yyyy'
     sSeparator	- Date separator. Default: '/'
     is24HrFormat - true if the time is in 24 hour format.
     isIncSeconds - Include seconds in time validation
     */
    this.checkTimeRange = function(elemTime1, elemTime2,sLabel1, sLabel2, iTimeFormat, isLastField, iControlType,isGlobalMsg,isDateTimeField,isAllowEqualTimes,sErrorMsg)
    {
        if (!iTimeFormat)
            iTimeFormat = clAppBuffer.getTimeFormat();

        var sTime=elemTime1.value;
        if(isDateTimeField)
            sTime=sTime.substring(sTime.indexOf(" ")+1);

        var arrTime = util.parseTime(sTime);
        var dStartDate = new Date();
        dStartDate.setHours(arrTime[0],arrTime[1]);

        sTime=elemTime2.value;
        if(isDateTimeField)
            sTime=sTime.substring(sTime.indexOf(" ")+1);

        arrTime = util.parseTime(sTime);
        var dEndDate = new Date();
        dEndDate.setHours(arrTime[0],arrTime[1]);


        var isValidInput = false;
        var iTimeDiff = util.getTimeDiff(dStartDate,dEndDate);
        //alert("iTimeDiff  "+iTimeDiff);

        if(isAllowEqualTimes)
            iTimeDiff++;

        if(!sErrorMsg)
        {
            if(isAllowEqualTimes)
                sErrorMsg=sLabel2 + " must be greater than or equal to " + sLabel1;
            else
                sErrorMsg=sLabel2 + " must be greater than " + sLabel1;
        }

        if (iTimeDiff >= 1)
            isValidInput = true;

        return this.setValidationStatus(isValidInput, elemTime2, sErrorMsg, isLastField,isGlobalMsg, this.ERROR_CUSTOM,iControlType);
    };


    /*	Validates E-Mail. E-Mail Format: xxx@yahoo.com or xxx@yahoo.co.in*/
    this.checkEMail = function(elemInput, sLabel, isLastField, iControlType,isGlobalMsg, iErrorType)
    {
        var sPattern = /^[^0-9.@][A-z0-9_-]{0,}([.][A-z0-9_-]+)*[@][A-z0-9_-]+([.][A-z0-9-]+)*[.][A-z]{2,4}$/;
        return this.setValidationStatus(sPattern.test(elemInput.value), elemInput, sLabel, isLastField,isGlobalMsg, (iErrorType||this.ERROR_INVALID),Constants.CONTROLTYPE_TXTBOX);
    };
    
    /*	Validates PhoneNo. */
    this.checkPhoneNo = function(elemInput, sLabel, isLastField, isGlobalMsg, iErrorType)
    {
        //alert("checkPhoneNo")
         if (isLastField)
            return this.getValidationStatus();

        return this.setValidationStatus(elemInput.value!="", elemInput, sLabel, isLastField,false, (this.ERROR_MANDATORY),Constants.CONTROLTYPE_TXTBOX);

        //TODO:
        //Evaluating regular expression
        //^0[234679]{1}[\s]{0,1}[\-]{0,1}[\s]{0,1}[1-9]{1}[0-9]{6}$
        /*var sPattern = /^[0-9]{0,3}[\s]{0,1}[\-]{0,1}[\s]{0,1}[1-9]{1}[0-9]{7}$/;
        return this.setValidationStatus(sPattern.test(elemInput.value), elemInput, sLabel, isLastField,isGlobalMsg, (iErrorType||this.ERROR_INVALID));*/
    };

    /*	Validates mobileno. Format: 9836193498,+919836193498     */
    this.checkMobileNo = function(elemInput, sLabel, isLastField, iControlType,isGlobalMsg, iErrorType)
    {
        //Evaluating regular expression
        var sPattern = /^((\+)91(\s)?(\-)?(\s)?)?[0-9]{1}[0-9]{9}$/;
        return this.setValidationStatus(sPattern.test(elemInput.value), elemInput, sLabel, isLastField,isGlobalMsg, (iErrorType||this.ERROR_INVALID),iControlType);
    };

    this.checkWebsite = function(elemInput, sLabel, isLastField, isGlobalMsg, iErrorType)
    {
        //Evaluating regular expression
        // /^(((ht|f){1}(tp:[/][/]){1})|((www.){1}))[-a-zA-Z0-9@:%_\+.~#?&//=]+$/;
        var sPattern = /^(((ht|f){1}(tp[s]{0,1}:[/][/]){1}){0,1}((www.){1}))[-a-zA-Z0-9@:%_\+~#?&//=]+([.]{1}[a-zA-Z]+)$/;
        return this.setValidationStatus(sPattern.test(elemInput.value), elemInput, sLabel, isLastField,isGlobalMsg, (iErrorType||this.ERROR_INVALID),Constants.CONTROLTYPE_TXTBOX);
    };


    //sets validation status
    this.setValidationStatus = function(isValidInput, elemInput, sLabel, isLastField,isGlobalMsg,iErrorType,iControlType)
    {
        if (!isValidInput)
        {
            if (this.firstInvalidFld == null)
                this.firstInvalidFld = elemInput;
            this.isValid = false;
            if (!sLabel)
                sLabel = this.getFieldLabel(elemInput,iControlType);
            //else
            //alert("sLabel "+sLabel)
            this.showMessage(sLabel, this.ERROR_MSG, elemInput, iErrorType,isGlobalMsg);
        }
        else
            this.clearMessage(elemInput,isGlobalMsg);

        if (isLastField)
            return this.getValidationStatus();

        return true;
    };

    this.getFieldLabel=function(elemInput,iControlType)
    {
        var sLabel="";
        var objLabelTd=null;

        if(iControlType!=Constants.CONTROLTYPE_DATEPICKER)
        {
            objLabelTd=elemInput.parentNode.previousSibling;
        }
        else
        {
            objLabelTd=elemInput.parentNode.parentNode;
            while(objLabelTd.nodeName!="TD")
                objLabelTd=objLabelTd.parentNode;
            objLabelTd=objLabelTd.previousSibling;            
        }

        if(objLabelTd)
        {
            if (document.body.textContent )
                sLabel = objLabelTd.textContent;
            else
                sLabel = objLabelTd.innerText;
        }

        return sLabel;
    };

    this.getValidationStatus=function()
    {
        var isValid = this.isValid;
        this.isValid = true;
        if (this.firstInvalidFld)
        {
            try
            {
                this.firstInvalidFld.focus();
            }
            catch(e) {
            }
        }
        this.firstInvalidFld = null;
        return isValid;
    };

    this.showMessage = function(sMessage, iMessageType, elemInput, iErrorType,isGlobalMsg,sMsgboxId)
    {
        //alert(iMessageType +" :: "+sMessage +" ::  "+iErrorType);
        var clMsgDiv;
        if (!isGlobalMsg && elemInput)
        {
            clMsgDiv = document.getElementById("msg" + elemInput.id);
            if (iMessageType == this.ERROR_MSG && iErrorType == this.ERROR_MANDATORY || iErrorType == this.ERROR_INVALID)
                sMessage += this.getMessage(iErrorType);
        }
        else if(sMsgboxId)
            clMsgDiv = document.getElementById(sMsgboxId);
        else
            clMsgDiv = document.getElementById("msgbox");
        if (clMsgDiv)
        {
            /*if(iMessageType==this.INFO_MSG)
             {
             clMsgDiv.className="infoMsg";
             clMsgDiv.innerHTML="<img src='"+getImagePath(true)+"error.gif' > &nbsp;"+sMessage;
             }
             else */
            if (iMessageType == this.ERROR_MSG)
            {
                clMsgDiv.className = "errorMsg";
                //                clMsgDiv.innerHTML="<img src='"+getImagePath(true)+"error.gif' height='17px' width='20px'> &nbsp;"+sMessage;

            }
            else if (iMessageType == this.SUCCESS_MSG)
            {
                clMsgDiv.className = "successMsg";
                //                clMsgDiv.innerHTML="<img src='"+getImagePath(true)+"iconConfirm.gif' height='17px' width='20px'> &nbsp;"+sMessage;
            }
            else
            {
                clMsgDiv.className = "infoMsg";
                //                clMsgDiv.innerHTML="<img src='"+getImagePath(true)+"suspend.png' height='17px' width='20px'> &nbsp;"+sMessage;
            }
            clMsgDiv.innerHTML = sMessage;
            clMsgDiv.style.display = "block";
        }
        else
            alert(sMessage);

    };

    this.clearMessage = function(elemInput,isGlobalMsg,sMsgboxId)
    {
        var clMsgDiv;
        if (!isGlobalMsg && elemInput)
        {
            clMsgDiv = document.getElementById("msg" + elemInput.id);
        }
        else if(sMsgboxId)
            clMsgDiv = document.getElementById(sMsgboxId);
        else
            clMsgDiv = document.getElementById("msgbox");

        clMsgDiv.style.display="none";
    };

    this.getMessage = function(sKey)
    {
        return arrMessages[sKey];
    };

    this.getNoOfDays = function(sStartDate, sEndDate, sSeparator)
    {
        var sDateArray;
        if (sStartDate)
        {
            sDateArray = sStartDate.split(sSeparator);
            var dStartDate = new Date();
            //dStartDate.setDate(1);
            dStartDate.setFullYear(sDateArray[2]);
            dStartDate.setMonth(parseInt(sDateArray[1],10) - 1);
            dStartDate.setDate(sDateArray[0]);

            if (sEndDate)
            {
                sDateArray = sEndDate.split(sSeparator);
                var dEndDate = new Date();
                //dEndDate.setDate(1);
                dEndDate.setFullYear(sDateArray[2]);
                dEndDate.setMonth(parseInt(sDateArray[1],10) - 1);
                dEndDate.setDate(sDateArray[0]);
                dEndDate.setDate(dEndDate.getDate() + 1);
                return (dEndDate - dStartDate) / 86400000;
            }
        }
        return 0;
    };

};


