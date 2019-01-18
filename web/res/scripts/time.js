var clTime = new function()
{
    var me=this;
    var iMinInterval=15;

    this.onClkShow = function(sTimePickerId,is24Hr,event)
    {
        var dvTime=document.getElementById(sTimePickerId+"MainDv");
        if(!dvTime.getAttribute("disabled"))
        {
            cross.docOnClick(event);   //for closing the previous Time Popup 
//            var iOffsetLeft=parseInt(dvTime.offsetLeft);
//            var iWindowWidth=parseInt(document.body.offsetWidth);


            var objTime = document.getElementById(sTimePickerId+"tblDiv");

           /* if(iWindowWidth-iOffsetLeft<130)
            {
                //objTime.style.position="relative"
                objTime.style.left="-70px";

//                $(objTime).addClass('dropdown-menu').attr('left','90px');

                alert(window.getComputedStyle(objTime, ':before').getPropertyValue('left'));
                //window.getComputedStyle(objTime, ':before').setPropertyValue('left',"90px");
                //dvTime.style.left="90px";
            }
            else
            {
                //objTime.style.position="";
                objTime.style.left="";

                //dvTime.style.left="";
            }*/
            
            if(objTime.style.display=="none")
                objTime.style.display="block";
            else
                objTime.style.display="none";

            //setting the value
            var iValue,sAMPM="",iHr=0,iMin=0;;
            iValue= document.getElementById(sTimePickerId).value;

            if(iValue.indexOf(':')==1)
                  iValue ='0'+iValue;

            iHr = iValue.substring(0,2);
            iMin = iValue.substring(3,5);
            sAMPM = iValue.substring(6,8);
            if(!is24Hr &&(sAMPM.indexOf("PM")==-1) && (sAMPM.indexOf("AM")==-1))
                sAMPM="PM";

            if(iHr.indexOf(':')!=-1)
                iHr = '0'+iHr.substring(0,iHr.indexOf(':'));
            //                if(iMin.indexOf(':')!=-1)
            //                    iMin = '0'+iMin.substring(0,iMin.indexOf(':'));

            var objHr=document.getElementById(sTimePickerId+"hour");
            objHr.value = iHr;
            objHr.setAttribute("oldValue",iHr);

            var objMin=document.getElementById(sTimePickerId+"minute");
            objMin.value = iMin;
            objMin.setAttribute("oldValue",iMin);

            if(!is24Hr)
            {
                var objAMPM=document.getElementById(sTimePickerId+"ampm");
                objAMPM.value = sAMPM;
                objAMPM.setAttribute("oldValue",sAMPM);
            }

            this.setTime(sTimePickerId,iHr,document.getElementById(sTimePickerId+"minute").value,sAMPM);
            objHr.select();
        }

        me.iListenerId = cross.registerEventListener(cross.EVENT_ONCLICK,clTime.hideTimePicker,[sTimePickerId]);
        cross.cancelBubble(event);

        return false;
    };

    this.hideTimePicker = function(sTimePickerId,event)
    {
        var objTime = document.getElementById(sTimePickerId+"tblDiv");        
        objTime.style.display="none";

        var dvTime=document.getElementById(sTimePickerId+"MainDv");
        if(dvTime.getAttribute("fnOnSetTime"))
            eval(dvTime.getAttribute("fnOnSetTime"))(objTime);

        cross.unregisterEventListener(me.iListenerId);
        me.iListenerId=0;
    };


    /**/
    this.onChangeHour=function(sTimePickerId,isIncr,is24Hr,event)
    {
        //attribute 'is24Hr' at main DIV sTimePickerId
        //                var is24Hr=false;
        var iHr=0;
        //                var iMin=0;
        var sAMPM="";
        var objHr = document.getElementById(sTimePickerId+"hour");
        iHr = parseInt(objHr.value);
        if(!is24Hr)
            sAMPM = document.getElementById(sTimePickerId+"ampm").value;
        if(isIncr)
            iHr++;
        else
            iHr--;

        if(is24Hr)
        {
            if(iHr>23)
                iHr=0;
            else if(iHr<0)
                iHr=23;

        }
        else
        {
//          if((iHr==12&& isIncr) ||(iHr==11 && !isIncr))
//                sAMPM = me.returnAMPM(sTimePickerId);
            if(iHr>12)
                iHr=1;
            else if(iHr<1)
                iHr=12;
        }

        if(iHr<10)
            iHr= '0'+iHr;
        var objMin = document.getElementById(sTimePickerId+"minute");
        objHr.value=iHr;
        objHr.setAttribute("oldValue",iHr);
        objMin.setAttribute("oldValue",objMin.value);
        //                var arrValues=getHourValues(true,iCount);
        me.setTime(sTimePickerId,iHr,objMin.value,sAMPM);

        cross.cancelBubble(event);

        return false;
    };

    this.onChangeMin=function(sTimePickerId,isIncr,is24Hr,event)
    {
        var iHr=0,iMin=00,sAMPM="",iModulus ;
        //                var is24Hr= false;
        var objHr = document.getElementById(sTimePickerId+"hour");
        var objMin = document.getElementById(sTimePickerId+"minute");
//        iHr = parseInt(objHr.value);
        iMin = parseInt(objMin.value);
        if(!is24Hr)
            sAMPM = document.getElementById(sTimePickerId+"ampm").value;

        iModulus = (iMin % iMinInterval);
        if(iModulus>0)
            iMin = iMin-iModulus;

        if(isIncr)
            iMin+=iMinInterval;
        else
            iMin-=iMinInterval;

        if(iMin>=60)
        {
           /* if(is24Hr)
            {
                if(iHr==23)
                iHr=-1;

            }
            else
            {
                 if(iHr==12)
                    iHr=0;
                else if(iHr==11)
                    sAMPM = me.returnAMPM(sTimePickerId);
            }*/

            iMin=0;
//            iHr++;
        }
        if(iMin<0)
        {
            /*if(isIncr)
            {
                if(is24Hr && iHr==12)
                    iHr=0;
                else if(iHr == 23)
                    iHr = -1;
            }
            else //if(!isIncr)
            {
                if(is24Hr)
                {
                  if(iHr == 0)
                    iHr=24;
                }
                else
                {
                     if(iHr==1)
                        iHr=13;
                    else if(iHr == 12)
                        sAMPM = me.returnAMPM(sTimePickerId);
                }

            }*/
            iMin=60-iMinInterval;
//            iHr--;
        }
        if(iMin == 0)
            iMin = '0'+iMin;
        objMin.value=iMin;
//        objHr.value=((iHr<10)?iHr= ('0'+iHr):iHr);
//        objHr.setAttribute("oldValue",iHr);
        objMin.setAttribute("oldValue",iMin);
        // var arrValues=getHourValues(is24Hr,iHr);
        me.setTime(sTimePickerId,objHr.value,iMin,sAMPM);


        cross.cancelBubble(event);

        return false;
    };

    this.returnAMPM = function(sTimePickerId)
    {
        var sAMPM="";
        sAMPM=document.getElementById(sTimePickerId+"ampm").value;
        if(sAMPM.indexOf('AM')>=0)
            sAMPM= "PM";
        else
            sAMPM  ="AM";
        document.getElementById(sTimePickerId+"ampm").value=sAMPM;
        return sAMPM;
    };

    this.onChangeAMPM=function(sTimePickerId,isIncr,event)
    {
        var sAMPM="";
        sAMPM = me.returnAMPM(sTimePickerId);
        me.setTime(sTimePickerId,document.getElementById(sTimePickerId+"hour").value,document.getElementById(sTimePickerId+"minute").value,sAMPM);

        cross.cancelBubble(event);
        return false;
    };


    this.setTime=function(sTimePickerId,iHr,iMin,sAMPM)
    {
        var sValue=util.trim(iHr+':'+iMin+' '+sAMPM);
        var objTime=document.getElementById(sTimePickerId);
        objTime.value= sValue;        
    };

    this.onSelectInput = function(obj,event)
    {
        document.getElementById(obj.id).select();

        cross.cancelBubble(event);

        return false;

    };
    /*this method is used for onChange keys */
    /*this.onChangeValues = function(obj,sTimePickerId,is24Hr,event)
    {
        var iHr=0,iMin=0,sAMPM="";
//        iHr = parseInt(document.getElementById(sTimePickerId+"hour").value);
//        iMin = parseInt(document.getElementById(sTimePickerId+"minute").value);
        var objHr = document.getElementById(sTimePickerId+"hour");
        var objMin = document.getElementById(sTimePickerId+"minute");
        if(parseInt(objHr.value))
            iHr = parseInt(objHr.value);
        if(parseInt(objMin.value))
            iMin = parseInt(objMin.value);

        if(!is24Hr)
            sAMPM = document.getElementById(sTimePickerId+"ampm").value;

        if(iMin<10 && iMin>=0)
            iMin = '0'+iMin;
        if(iHr<10 && iHr>=0)
            iHr = '0'+iHr;

        if(is24Hr)
        {
            if(iHr>23 || iHr<0)
                   iHr=obj.getAttribute("oldValue");
        }
        else if(iHr>12 || iHr<1)
                iHr=obj.getAttribute("oldValue");

        if(iMin>=60 || iMin<=0)
            iMin=obj.getAttribute("oldValue");

        if(!is24Hr && (sAMPM.indexOf("PM")==-1) && (sAMPM.indexOf("AM")==-1))
        {
            sAMPM= obj.getAttribute("oldValue");
            document.getElementById(sTimePickerId+"ampm").value=sAMPM;
        }
//        document.getElementById(sTimePickerId+"minute").value=iMin;
//        document.getElementById(sTimePickerId+"hour").value=iHr;
        objHr.value=iHr;
        objMin.value=iMin;
        objHr.setAttribute("oldValue",iHr);
        objMin.setAttribute("oldValue",iMin);
        me.setTime(sTimePickerId,iHr,iMin,sAMPM);
        
        cross.cancelBubble(event);

        return false;
    };*/

    this.setCallbackFn=function(sTimePickerId,sFnCallback)
    {
        if(!document.getElementById(sTimePickerId))
            alert("SetTime Callback: Invalid fieldid"+sTimePickerId);
        else
        {
            document.getElementById(sTimePickerId+"MainDv").setAttribute("fnOnSetTime",sFnCallback);
        }
    };

    /**
     * this method is used to enable or disable the time field element
     * @param isEnable true/false
     * @param sFieldId timeField id
     */
    this.setEnable = function(isEnable,sFieldId)
    {
        var timeTxtObj = document.getElementById(sFieldId);
        //alert(isEnable)
        if(isEnable)
        {
            if(timeTxtObj.disabled || timeTxtObj.getAttribute("disabled"))
            {
                timeTxtObj.removeAttribute("disabled");
                document.getElementById(sFieldId+"MainDv").removeAttribute("disabled");
            }
        }
        else
        {
            timeTxtObj.disabled = true;
            document.getElementById(sFieldId+"MainDv").setAttribute("disabled",true);
        }
    };

     /*this  method is used to handle the Key down events up and down Arrow Keys*/
     this.onKeyDownHrs = function(sTimePickerId,is24Hr,evnt)
    {
        if(cross.getKeyCode(evnt)==40)//down arrow
            me.onChangeHour(sTimePickerId,false,is24Hr);
        else if(cross.getKeyCode(evnt)== 38) //up arrow
            me.onChangeHour(sTimePickerId,true,is24Hr);
        return false;
    };
    this.onKeyDownMin= function(sTimePickerId,is24Hr,evnt)
    {
        if(cross.getKeyCode(evnt)==40)//down arrow
            me.onChangeMin(sTimePickerId,false,is24Hr);
        else if(cross.getKeyCode(evnt)== 38) //up arrow
            me.onChangeMin(sTimePickerId,true,is24Hr);
        else if((cross.getKeyCode(evnt)==9 )&& is24Hr)
            {
                me.onChangeKeyMin(sTimePickerId+"minute",sTimePickerId,is24Hr,evnt);
                me.hideTimePicker(sTimePickerId);
            }
        return false;
    };
    this.onKeyDownAMPM = function(sTimePickerId,evnt)
    {
//        evnt = evnt ? evnt : window.event;
        if(cross.getKeyCode(evnt)==40)//down arrow
            me.onChangeAMPM(sTimePickerId,false);
        else if(cross.getKeyCode(evnt)== 38) //up arrow
            me.onChangeAMPM(sTimePickerId,true);
        else if(cross.getKeyCode(evnt)==9)
            {
                me.onChangeKeyAMPM(sTimePickerId+"ampm",sTimePickerId,evnt);
                me.onChangeKeyAMPM(sTimePickerId+"ampm",sTimePickerId,evnt);
                me.hideTimePicker(sTimePickerId);
            }

        return false;
    };

     this.onChangeKeyHr= function(obj,sTimePickerId,is24Hr,event)
    {
        var iHr=0,sAMPM ="";
        var objHr = document.getElementById(sTimePickerId+"hour");
        if(!is24Hr)
            sAMPM = document.getElementById(sTimePickerId+"ampm").value;
        if(parseInt(objHr.value))
            iHr = parseInt(objHr.value);

        if(iHr<10 && iHr>=0)
            iHr = '0'+iHr;
        if(is24Hr)
        {
            if(iHr>23 || iHr<0)
                iHr=obj.getAttribute("oldValue");
        }
        else if(iHr>12 || iHr<1)
            iHr=obj.getAttribute("oldValue");

        objHr.value=iHr;
        objHr.setAttribute("oldValue",iHr);

        me.setTime(sTimePickerId,document.getElementById(sTimePickerId+"hour").value,document.getElementById(sTimePickerId+"minute").value,sAMPM);
    };
    this.onChangeKeyMin= function(objId,sTimePickerId,is24Hr,event)
    {
        var iMin=0,sAMPM="";
        var objMin = document.getElementById(sTimePickerId+"minute");
        if(!is24Hr)
            sAMPM = document.getElementById(sTimePickerId+"ampm").value;
        if(parseInt(objMin.value))
            iMin = parseInt(objMin.value);

        if(iMin<10 && iMin>=0)
            iMin = '0'+iMin;

        if(iMin>=60 || iMin<=0)
            iMin=document.getElementById(objId).getAttribute("oldValue");

        objMin.value=iMin;
        objMin.setAttribute("oldValue",iMin);

        me.setTime(sTimePickerId,document.getElementById(sTimePickerId+"hour").value,document.getElementById(sTimePickerId+"minute").value,sAMPM );
    };
    this.onChangeKeyAMPM= function(objId,sTimePickerId,is24Hr,event)
    {
        var sAMPM="";
        sAMPM = document.getElementById(sTimePickerId+"ampm").value;

        if((sAMPM.indexOf("PM")==-1) && (sAMPM.indexOf("AM")==-1))
        {
            sAMPM = document.getElementById(objId).getAttribute("oldValue");
            document.getElementById(sTimePickerId+"ampm").value=sAMPM;
        }
        me.setTime(sTimePickerId,document.getElementById(sTimePickerId+"hour").value,document.getElementById(sTimePickerId+"minute").value,sAMPM);
        document.getElementById(sTimePickerId+"ampm").setAttribute("oldValue",sAMPM);
    };

    /*To show and hide the Time Popup when press the Dowm Arrow key*/
    this.onKeyDownTime = function(sTimePickerId,is24Hr,evnt)
    {
        if(cross.getKeyCode(evnt) == 40)//Down Arrow
            me.onClkShow(sTimePickerId,is24Hr);
        else if(cross.getKeyCode(evnt) == 38 || cross.getKeyCode(evnt)== 27)//Up Arrow & Esc Key
            me.hideTimePicker(sTimePickerId);

    };

    /*To Hide the Time Popup when press the esc Key*/
    this.onKeyDownDiv = function(sTimePickerId,evnt)
    {
        if(cross.getKeyCode(evnt) == 27)//Esc Key
            me.hideTimePicker(sTimePickerId);
    };
};

//var clTimePicker=clTime;