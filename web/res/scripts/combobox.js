/*me.checkAndAddItem(me.txtField.value,true)/*
 downloa/*
 /*
 @form form reference
 @ltxtField input field refernce
 @sComboId combo id
 @iMasterType
 @iSelectionBy
 @iSelectionType
 @iAccountType


 ex
 ----------------------------------
 |                                  |---------- Text Field
 ----------------------------------
 -------------------------------------
 |  -------------------------          |----- main divConatiner
 |  |      clDiv              |        |
 |  |                         |        |
 |  |                                  |
 |  |                         |
 ---------------------------------------
 |
 |                         |---- data div container-------------------
 |                         |
 |                         |
 ------------------------

 list of functions............
 -------------------------
 init()
 getItemCount()
 getIndexFromTag();
 highlightRow(iRow)
 highlightItem(element)

 getSelectedItem() return value as string
 getSelectedId() returns id of the selected item
 getSelectedMaster() returns [0]=id,[1]=type
 getSelectedIndex() returns selected item index
 getAccountType()
 getMasterType()

 setSelectedIndex(index)
 setSelectedMasterId(iMasterId)

 setAccountType(iAcctType)
 setMasterType(iMasterType)
 setMasterType2(iMasterType,selectby,selecttype,parentid,iTargetModule)


 checkAndAddItem(var sMasterName,var iMasterId ,var clAttributes)
 getNewComboItem(var sMasterName,var sMasterId ,var clAttributes)

 HidePopUp();
 ShowPopUp();
 isPopUpVisible();

 removeAllItems();
 searchByKey(sKey)
 showPopupItems(iItems); no of items to be show in the popup
 clearSelection() - clears combo selection


 getSelectedElement() returns value as element
 setElementToBuffer(sFieldId,clElement)

 getElementFromBuffer(sFieldId)
 checkAndAddElement(clElement,isselect)

 */


function SComboBox(lform, ltxtField, sHiddenName, url, onFocus, onLost,
                   lFieldValue,
                   sNamesArray, iIds,
                   clArrtibutes,
                   scrollId,
                   ilDisplayItems,
                   iParentSeqId, sRefTable,
                   sCondition,
                   sColAttrNames,
                   sAttrNames,
                   sAttrValues,
                   sEmptyValue,
                   sCascadeFields,
                   isAllowMultiSelect,
                   isAllowToAddItems
                )
{

    // alert(sColAttrNames)

    var me = this;

    this.sEmptyValue=((sEmptyValue)?sEmptyValue:"");
    this.isAppScope = false;
    this.scrollId = scrollId;
    this.iParentSeqId = 0;

    if (iParentSeqId)//&& util.trim(iParentSeqId).length>0
        this.iParentSeqId = iParentSeqId;
    if (sRefTable)
        this.sRefTable = sRefTable;
    else
        this.sRefTable = '';

    this.sCondition = sCondition;
    this.sColAttrNames = sColAttrNames;

    //  alert(this.scrollId+"  "+document.getElementById(scrollId))
    if (!this.scrollId)
    {

        var clElement = document.getElementById("dialogscroller")
        if (clElement)
            this.scrollId = "dialogscroller"
        else
            this.scrollId = "containerDiv";// center content part dive id

        // alert(this.scrollId)
        /*  if(clElements)
         { for (var i = 0; i < clElements.length; i++)
         {
         alert(clElements[i].id+"  "+clElements[i].nodeName+" "+clElements[i].src)
         if(clElements[i].className.toLowerCase() =='contentframe') // assdumed for the dialog
         {
         this.scrollId=clElements[i].id;
         break;
         }
         }
         }*/
        //  if(!this.scrollId)

    }
    this.parentElement = document.getElementById(this.scrollId);
    this.stopHandlingEvts = false;
    this.isMouseDown = false;

    // used in the com.focus gained event of main conatainer or  div tag to avoid showing the containers
    this.isAjaxSupported = false;
    this.isIE = document.all;//|| document.getElementById
    this.isNetscape = document.layers
    //this.sHiddenName=sHiddenName;

    this.sLastValue = "";
    this.FieldValue = "";
    if (lFieldValue)
        this.FieldValue = lFieldValue;// drop

    this.txtField = ltxtField;
    this.txtField.setAttribute('hiddenName', sHiddenName);
    this.txtField.setAttribute('instanceid', this.txtField.id);
    this.currentRow = -1;
    this.sComboId = ltxtField.getAttribute('id');


    this.sDivTag = "DIV";
    this.sSpanTag = "DIV";
    this.frameElement = null;
    this.clForm = lform;
    this.clDiv = null;
    this.isAppendVariables=false;
    // main DIV i,e completeDIV
    this.clContainer = null;
    this.iMasterType2=0;
    this.iMasterType = ltxtField.getAttribute('mastertype');
    this.iTargetModule = ltxtField.getAttribute('targetmodule');
    this.iSelectionBy = ltxtField.getAttribute('selectionby');
    this.iSelectionType = ltxtField.getAttribute('selectiontype');
    this.iAccountType = ltxtField.getAttribute('accounttype');
    this.isAppendscrollId = ltxtField.getAttribute('appendscrollId');

    this.rlBorderWidth = 1;
    this.tbBorderWidth = 1;
  if(this.iMasterType==Constants.PRODUCTS)
     this.width = 78;
    else
      this.width = 65;
    this.iRowHeight = 16;
    this.iDisplayItems = 8;
    if (ilDisplayItems)
        this.iDisplayItems = ilDisplayItems;

    if (url && url != '') {
        this.sUrl = url;
        //  alert(this.sUrl)
    }
    else
        this.sUrl = "masters.class";

    //this.sUrl = "http://127.0.0.1:6000/fow/masters.class";
    this.sServlet = null;

    this.onFocusScript = onFocus;
    this.onLostScript = onLost;



    this.funcScriptCallBack = null; // used in case master type is SCRIPTVALUES
    this.isAlwaysFetchValues = false;
    this.isRequestInProgress = false;
    this.isPaused = false;
    this.isSelectItemText=false;
    this.arrRelMods=null;
    this.isAllowMultiSelect=isAllowMultiSelect;

    //this.isShowPopUp=true;
    //this.isSelectItem=isSelectItem;// used in case of searchByKey

    if (!this.isAppendscrollId)
        this.isAppendscrollId = false;


    this.arCascadeFields=sCascadeFields;
    this.arrLastCastVals=null;
  // if(sCascadeFields)//+"  "+ltxtField.id)
    //alert(this.arCascadeFields+"--"+sCascadeFields+"---"+ltxtField.id)

    //alert(sCascadeFields+" "+ltxtField.id)

    /*if(sCascadeFields )
       this.arCascadeFields=sCascadeFields.split(",");// to get list as comma separered*/


    


    this.getForm = function ()
    {
        return this.clForm;
    }



   this.getComboElements=function()
   {
      return me.clDiv.childNodes;//getElementsByTagName(me.sDivTag) 
   }

    //It will return array of keys at 0th index and values at 1st index of main array. Returns null if no items exists
    this.getComboItems = function () {
        var iItemCount = this.getItemCount();
        if (iItemCount > 0) {
            var arrItemNames = new Array(), arrItemIds = new Array();//,cbSelectBox;
            var dvSelect;

            for (var i = 0; i < iItemCount; i++) {
                dvSelect = this.getItemElement(i);
                arrItemIds[arrItemIds.length] = dvSelect.getAttribute("MasterId");
                arrItemNames[arrItemNames.length] = dvSelect.getElementsByTagName(this.sDivTag)[1].innerHTML;
            }
            return [arrItemNames, arrItemIds];  //itemnames,itemids
        }
        return null;
    };

    this.init = function () {
        //objCurrentTxtField=me.txtField;
        this.txtField.autocomplete = "off";
        this.isAjaxSupported = true
        var iframeUrl = this.url + "?hl=" + this.lang;

        /* if (!this.isAjaxSupported)
         this.setCookie("qu", "", 0, this.url, null, null)
         */
        if (!this.FieldValue)
            this.FieldValue = this.txtField.value;

        this.rlBorderWidth = 1;
        this.tbBorderWidth = 1;


        this.clContainer = document.createElement("DIV");

        /*this.clContainer.style.height = (this.iRowHeight * this.iDisplayItems) + 2 + "px";*/

        this.clContainer.style.position = "absolute";
        this.clContainer.style.zIndex = "10";
        this.clContainer.style.paddingRight = "0";
        this.clContainer.style.paddingLeft = "0";
        this.clContainer.style.paddingTop = "0";
        this.clContainer.style.paddingBottom = "0";
        this.clContainer.style.overflow = 'hidden';
        this.clContainer.style.visibility = "hidden";

        //this.clContainer.style.cssText="filter:progid:DXImageTransform.Microsoft.Shadow(color='#BCBCBC', Direction=135, Strength=8);"

        this.clContainer.style.borderRight = "#D2D2D2 " + this.rlBorderWidth + "px solid ";
        this.clContainer.style.borderLeft = "#D2D2D2 " + this.rlBorderWidth + "px solid";
        this.clContainer.style.borderTop = "#D2D2D2 " + this.tbBorderWidth + "px solid";
        this.clContainer.style.borderBottom = "#D2D2D2 " + this.tbBorderWidth + "px solid";


        this.clDiv = document.createElement("DIV");
        this.clDiv.id = "completeDiv" + this.sComboId;
        this.clDiv.style.zIndex = "10";
        this.clDiv.style.paddingRight = "0";
        this.clDiv.style.paddingLeft = "0";
        this.clDiv.style.paddingTop = "0";
        this.clDiv.style.paddingBottom = "0";

        /*this.clDiv.style.height = (this.iRowHeight * this.iDisplayItems) + "px";*/

/*        this.clContainer.style.height = (this.iRowHeight * this.iDisplayItems) + 2 + "px";*/

        this.clDiv.style.visibility = "hidden";
        this.clDiv.style.position = "absolute";
        this.clDiv.style.backgroundColor = "white";

        this.resizeDiv();

        //this.clDiv.attachEvent("onfocus",this.onFocusHandler);


        this.clContainer.appendChild(this.clDiv);
        document.body.appendChild(this.clContainer);
        this.AddStyles(this.clContainer);
        this.AddStyles(this.clDiv);


        /*  var oDivForFrame = document.createElement("DIV");
         // hidden div to hold iframe........................
         oDivForFrame.style.visibility = "hidden";
         oDivForFrame.style.position = "relative";
         oDivForFrame.style.left = "-10000";
         oDivForFrame.style.top = "-10000";

         document.body.appendChild(oDivForFrame);

         if (frames && (frames["completionFrame" + this.sComboId] && frames["completionFrame" + this.sComboId].frameElement))
         this.frameElement = frames["completionFrame" + this.sComboId].frameElement;
         else
         this.frameElement = document.getElementById("completionFrame" + this.sComboId);*/


        /* if (this.txtField.createTextRange)// IE supports
         {

         this.txtField.attachEvent("onkeyup", this.onKeyUpHandler);
         this.txtField.attachEvent("onkeydown", this.onKeyDownHandler);
         this.clContainer.attachEvent("onfocus", this.onFocusHandler);
         this.clDiv.attachEvent("onkeydown", this.onKeyUpHandler);
         this.txtField.attachEvent("onblur", this.onBlurHandler);
         this.txtField.attachEvent("onfocus", this.onTxtFocusHandler);
         window.attachEvent("onresize", this.onResizeHandler);

         }
         else
         {*/
        this.clContainer.onfocus = this.onFocusHandler;
        this.clDiv.onkeydown = onComboKeyUpHandler;

        /*
         this.txtField.onkeyup = onKeyUpHandler;
         this.txtField.onkeydown = onKeyDownHandler;
         this.txtField.onblur = this.onBlurHandler;
         this.txtField.onfocus= this.onTxtFocusHandler;
         */

        window.onresize = this.onResizeHandler;
        //}

        if (this.FieldValue && this.FieldValue.length > 0) {
            /*this.getValues();
             this.txtField.value = this.FieldValue;*/ // commedted on account of exter moduleconfig   popup issue
        }
        else if (sNamesArray != null) {
            //alert("sNamesArray  "+sNamesArray);
            this.fillCombo(sNamesArray, iIds, clArrtibutes, sAttrNames, sAttrValues,0);
            //this.sendRPCDone(this.frameElement,sNamesArray, iIds, clArrtibutes);
            this.sNamesArray = null;
            this.iId = null;
            this.clArrtibutes = null;
         //   alert("-")
         //   this.setSelectedIndex(0);
          // alert()
            // if(me.getItemCount()>0)
             //   me.setSelectedIndex(0);
        }     //

    };

    this.setRelatedMod=function(iType,iSeqId)
    {
       if( !isNaN(iType)  && !isNaN(iSeqId))
       {
        if(!this.arrRelMods)
            this.arrRelMods=new Object();
         // alert(iType)
            this.arrRelMods['\''+iType+'\'']=iSeqId;
       }
        //alert(this.arrRelMods['\''+iType+'\''])
      //  alert(this.arrRelMods)

    };

    this.clearRelatedMods=function()
    {
       if(this.arrRelMods)
       {
           var value=null;
           var key=null;
          for(key in me.arrRelMods)
            {
                value=me.arrRelMods[key];
                if(me.arrRelMods[key])
                {
                    delete me.arrRelMods[key];
                    value=null;
                }
            }

            this.arrRelMods={};
           // this.arrRelMods.length = 0;


        //  alert(this.arrRelMods.length+"  "+this.arrRelMods['2305'])
           // this.arrRelMods.clear();
       }
    };
    

    //this will create hidden field for holding combovalue.
    this.createHiddenField = function (txtFieldId) {

        var clHiddenTag = null;//Hidden tagid will be  ' combobox fieldid+"sId" ' so that it must be unique. Changed for handling fieldid problem in table combobox.
        var sHiddenName = txtFieldId.getAttribute('hiddenName');
        if (sHiddenName)
            clHiddenTag = document.getElementById(txtFieldId.id + "Id"); //asummption....
        else
            clHiddenTag = document.getElementById(txtFieldId.name + 'Id');


        //alert("creating "+(sHiddenName+"Id")+","+clHiddenTag)
        if (clHiddenTag == null)
        {
            clHiddenTag = document.createElement("input");
            clHiddenTag.setAttribute("combohidden","1")
            clHiddenTag.setAttribute("type", "hidden");
            if (sHiddenName) { //alert("sHiddenName="+me.sHiddenName)
                clHiddenTag.setAttribute("name", sHiddenName);
                clHiddenTag.setAttribute("id", txtFieldId.id + "Id");
                //alert("creating "+sHiddenName)
            }
            else {
                clHiddenTag.setAttribute("name", txtFieldId.name + 'Id');
                clHiddenTag.setAttribute("id", txtFieldId.id + 'Id');
            }
            txtFieldId.parentNode.appendChild(clHiddenTag);
        }
    };

    this.getTextField= function()
    {
       return me.txtField ;
    };
    this.initTextField = function (ltxtField, lcurrentRow) {
        me.txtField = ltxtField

        //window.status=' ---init-cur....='+me.currentRow+"-----="+lcurrentRow;

        if (lcurrentRow || lcurrentRow >= 0)
            me.currentRow = lcurrentRow;
        else
            me.currentRow = -1;

        //window.status=window.status+' ---init.22...='+me.currentRow;

        //me.txtField.getAttribute()
        me.iParentSeqId = me.txtField.getAttribute("parentseqid");
                //alert('before=='+me.iParentSeqId )
        if (!me.iParentSeqId ||  (/*isNaN(me.iParentSeqId) &&*/ util.trim(me.iParentSeqId).length == 0) )
            me.iParentSeqId = 0;
        //        alert('after=='+this.iParentSeqId )
        me.sComboId = me.txtField.getAttribute('id');
        me.txtField.autocomplete = "off";

    }

    this.setScriptCallBack = function (funcScriptCallBack) {
        this.funcScriptCallBack = funcScriptCallBack;

    }


    this.getValues = function (isRefresh)
    {
        //    debugger();
        if(isRefresh==undefined)
           isRefresh=false;

       // util.writeToLog(me.FieldValue+" "+me.txtField.value)



        if (isRefresh || me.sLastValue.length == 0
                || me.sLastValue != me.FieldValue)// last-searched string is no equal to current string in the textfield
        {



          if(!isRefresh)
          {
            if(me.FieldValue=='*')
                return true;
          
            me.sLastValue = "";

            if (me.clDiv)
            {
                var oItems = me.getComboElements();//me.clDiv.childNodes;//getElementsByTagName(me.sDivTag);
                if (oItems)
                {
                    var sItemValue = "";
                    var isSelect=false;
                    var sSearchItem = me.FieldValue.toLowerCase();
                    //oItems = me.clDiv.getElementsByTagName(me.sDivTag);
                    //  me.txtField.title=oItems.length+"%%"+me.sLastValue+"----"+sSearchItem;
                    for (var i = 0; i < oItems.length; i++)
                    {
                        sItemValue = oItems.item(i).childNodes[0].childNodes[0].innerHTML;
                                  //util.writeToLog(sItemValue+"-"+sSearchItem);
                        if (util.startsWith(sItemValue.toLowerCase(), sSearchItem))
                        {
                            // me.txtField.title=me.sLastValue+"----"+me.FieldValue+"  "+i
                            //alert("---"+i)
                            me.highlightRow(i);

                                   /* isSelect=me.txtField.getAttribute("isselect");
                                    if(isSelect==undefined)
                                       isSelect=false;
                                    if(isSelect)
                                      me.setSelectedText(sSearchItem+" "+i);
                                    me.txtField.setAttribute("isselect",false);*/

                            return;
                        }
                    }
                }
            }
         }



            if (me.iMasterType > 0
                    && (me.iMasterType != Genernal_StaticValues
                     && me.iMasterType != Genernal_Narration
                     && me.iMasterType != Genernal_Master
                     && me.iMasterType != Genernal_SCRIPTValues
                  && (  !(me.iMasterType >= Constants.LISTMASTER && me.iMasterType < (Constants.LISTMASTER + Constants.MODULE_SLAB))
                        || me.isAlwaysFetchValues
                     )
                 ))  //1--16
                 {

                        me.removeAllItems();

                        if (me.isAjaxSupported)// in case XHTTP is supported
                        {
                            me.OpenConnection()
                        }
                        else // use the iframe concept
                        {
                            me.setCookie("qu", util.encodeURI(me.FieldValue), null, me.url, null, null);
                            frames["completionFrame" + me.sComboId].document.location.reload(true)
                        }
                  }
               else if (me.iMasterType == Genernal_SCRIPTValues)
                    {
                        // calling of callback func.
                        if (this.funcScriptCallBack)
                            this.funcScriptCallBack(sSearchItem);
                    }
                    else
                    {
                        me.txtField.value = me.FieldValue;
                        //me.checkAndAddItem()
                    }

           //
          // if(!bHidePopUp)
         //  {  //alert("dddd "+bHidePopUp)
            if (!me.isPopUpVisible())
            {
                me.ShowPopUp()
                me.txtField.focus()
            }
           //}
        }
        else if (me.sLastValue.length != 0)
        {
        //  if(!bHidePopUp)
            me.ShowPopUp();
        }

        me.sLastValue = me.FieldValue;
        return true
    }

    this.getColAttributes = function () {
        return me.sColAttrNames;
    };

    function OpenConnection2() {
        // alert("--")
        me.isPaused = false;
        me.OpenConnection();
    };

    this.OpenConnection = function ()
    {
        // writeToLog("OpenConnection--"+me.isRequestInProgress+"--"+me.isPaused)
        if (me.isRequestInProgress) {
            if (!me.isPaused) {
                me.isPaused = true;
                setTimeout(cross.createCallbackFunc(me, OpenConnection2, null), 100);
            }
            return;
        }

        me.isRequestInProgress = true;
        var sUrl = con.getStruts2Url("", "moduleView", "getModulesForCombo", null, true);
      //  if(!me.iParentSeqId)
        //   me.iParentSeqId=0;
        var sSubmitData = "moduleid=" + me.iMasterType + "&selectby=" + (me.iSelectionBy != null ? me.iSelectionBy : 0) + "&selecttype=" + (me.iSelectionType != null ? me.iSelectionType : 0) + "&searchkey=" + util.encodeURI(me.FieldValue) + "&isAppendscrollId=" + this.isAppendscrollId + "&isExtraInfo=" + ltxtField.getAttribute('isOtherInfo') + "&parentid=" + me.iParentSeqId + "&reftable=" + me.sRefTable + "&targetmod=" + me.iTargetModule;
        if(me.sCondition)
            sSubmitData += "&cond=" + escape(me.sCondition);
        if(me.sColAttrNames)
            sSubmitData += "&attrnames=" + me.sColAttrNames;
        if(me.arCascadeFields)
        {
            //--me.iTargetModule
            // [fieldid],[parent-fieldid,parent-value]

          var arrCascadeValues=me.getCascadeValues();
            if(arrCascadeValues)
            {
                me.arrLastCastVals=arrCascadeValues[2];
                sSubmitData += "&casfieldid=" + arrCascadeValues[0]+"&casparentids="+arrCascadeValues[1]+"&casvals="+arrCascadeValues[2];
            }

        }
        
       if(me.arrRelMods)
       {
          var key=null;
          var rmodtypes=null;
          var rmodids=null;

          for (var key in me.arrRelMods)//for(i=0,keys = me.arrRelMods.keys;i<me.arrRelMods.length;i++)
          {
                if(!rmodtypes)
                {   rmodtypes='';
                    rmodids='';
                }
            //  alert(key+" ------- "+(parseInt(key.replace('\'',''))))
              rmodtypes=rmodtypes+parseInt(key.replace('\'',''))+",";
              rmodids=rmodids+me.arrRelMods[key]+",";
            //  alert(rmodtypes)
          }
          if(rmodtypes)
          {
            rmodtypes=rmodtypes.substring(0,rmodtypes.length-1);
            rmodids=rmodids.substring(0,rmodids.length-1);

          }

          sSubmitData +="&rmodtypes="+rmodtypes;
          sSubmitData +="&rmodids="+rmodids; 
       }


        //        alert(sSubmitData)
        //assumed status tag id will be 'ajax'
      //  alert(sSubmitData)
        con.sendPostRequest(sUrl, sSubmitData, this.sendRPCDone, null, con.RESPONSE_PLAIN, 'ajax',null,false);

    };


  /*  this.sendRPCDone = function (fr, sNamesArray, iIds, clArrtibutes, sAttrNames, sAttrValues)
    {

        me.isRequestInProgress = false;
        // writeToLog("sendRPCDone--"+me.isRequestInProgress+"--"+me.isPaused)

        if (me.iMasterType == Genernal_SERVER_VALUES)
            me.iMasterType = Genernal_Master;

        me.fillCombo(sNamesArray, iIds, clArrtibutes, sAttrNames, sAttrValues);
        var oItems = me.clDiv.getElementsByTagName(me.sDivTag);
        var iNoOfRows = oItems.length;

        if (me.FieldValue == "" || iNoOfRows == 0)
            me.HidePopUp()
        else
            me.ShowPopUp()

        if (iNoOfRows > 0) {
            for (var c = 0; c < iNoOfRows; c++)
                me.setStyle(oItems.item(c), "aAutoComplete");

            var sItemValue = null;

            for (var c = 0; c < oItems.length; c++) {
                sItemValue = oItems.item(c).childNodes[0].childNodes[0].innerHTML;
                if (util.startsWith(sItemValue.toLowerCase(), me.FieldValue.toLowerCase())) {
                    me.highlightRow(c);
                    break;
                }
                if (c == 2)
                    break;
            }
        }

    };*/

this.sendRPCDone = function (fr, sNamesArray, iIds, clArrtibutes, sAttrNames, sAttrValues)
    {

        me.isRequestInProgress = false;
        // writeToLog("sendRPCDone--"+me.isRequestInProgress+"--"+me.isPaused)

        if (me.iMasterType == Genernal_SERVER_VALUES)
        {
           if(me.iMasterType2>0)
             me.iMasterType = me.iMasterType2;
           else
            me.iMasterType = Genernal_Master;
        }

        me.fillCombo(sNamesArray, iIds, clArrtibutes, sAttrNames, sAttrValues);
        var oItems = me.getComboElements();//me.clDiv.childNodes;//getElementsByTagName(me.sDivTag);
        var iNoOfRows = oItems.length;




        if (iNoOfRows > 0)
        {
            for (var c = 0; c < iNoOfRows; c++)
                me.setStyle(oItems.item(c), "aAutoComplete");

            var sItemValue = null;
            var isSelect=false;

            for (var c = 0; c < oItems.length; c++)
            {
                sItemValue = oItems.item(c).childNodes[0].childNodes[0].innerHTML;
                if (util.startsWith(sItemValue.toLowerCase(), me.FieldValue.toLowerCase()))
                {
                   // alert("----");// System.

                    me.highlightRow(c,true);
                    isSelect=true;
                   /* isSelect=me.txtField.getAttribute("isselect");
                    if(isSelect==undefined)
                       isSelect=false;
                    if(isSelect)
                      me.setSelectedText(me.FieldValue+" "+c);
                     me.txtField.setAttribute("isselect",false);*/

                    break;
                }
               // if (c == 2)
                 //   break;
            }
         

        }

       //    util.writeToLog(me.txtField.hasAttribute("hidepopup")+"--"+me.txtField.getAttribute("hidepopup"));
        if( me.txtField.getAttribute("hidepopup") &&  me.txtField.getAttribute("hidepopup")==0)
        {  me.ShowPopUp();
        }
       else if (me.FieldValue == "" || iNoOfRows == 0)
        {  // alert("1")
           // me.HidePopUp();
        }
     // else
       //   me.ShowPopUp();

        me.txtField.setAttribute("hidepopup",0);

    };

 this.isCascadeChanged=function()
 {
      if(me.arrLastCastVals)
      {
          var clComboInstance=null;
          var clElement=null;
          for(var i=0;i< me.arCascadeFields.length;i++)
            {

               clElement=document.getElementById("F"+me.arCascadeFields[i]);
             if(clElement)
              {
                 clComboInstance=getComboInstance(clElement.id);
                   if(clComboInstance)
                   {
                      if(clComboInstance.getSelectedId()!=me.arrLastCastVals[i])
                        return true;
                   }
              }
            }
        //  alert("fal")
          return false;
      }
    else
      return true;
 }
 this.getCascadeValues=function()
 {
    var iParentFieldId=0;
    var clElement=null;
    var clComboInstance=null;
    var sCascadeValues=null;
    var iParentVal=null;
    var iParentVals=null;
    var iParentFieldIds=0;
    var iFieldId=0;

    for(var i=0;i< me.arCascadeFields.length;i++)
    {
       iParentFieldId=me.arCascadeFields[i];
   if(iParentFieldId>0)
   {
       clElement=document.getElementById("F"+iParentFieldId);
     if(clElement)
     {
       iFieldId=me.txtField.id;
      //alert(iFieldId)
       iFieldId=iFieldId.substring(1)
     //alert(iFieldId)
       clComboInstance=getComboInstance(clElement.id);
       if(clComboInstance)
       {
          if(!sCascadeValues)
          {
              sCascadeValues="";
              iParentFieldIds="";

          }
          iParentVal=clComboInstance.getSelectedId();

          iParentFieldIds=iParentFieldIds+iParentFieldId;
          sCascadeValues=sCascadeValues+iParentVal;
         if(i+1!=me.arCascadeFields.length)
           {
                 iParentFieldIds=iParentFieldIds+",";
                 sCascadeValues=sCascadeValues+",";
            }

       }
      else
       alert(" Failed to find combo instance  of the cascade parent field-("+iParentFieldId+")");


     }
     else
       alert(" Failed to find the cascade parent field-("+iParentFieldId+")");
    }
  }
   return [iFieldId,iParentFieldIds,sCascadeValues];
 }
    this.searchAndAddItem=function(sValue,isSelect,sElementId,isPickFromServer)
    {
        if(!me.checkAndAddItem(sValue,isSelect))  // first check in combo box
        {
            // alert(sElementId)
           if(isPickFromServer)
           {
            var sUrl = con.getStruts2Url("module", "search", "getModuleComboLine", null, true);
            sUrl = sUrl+"?moduleId="+me.iMasterType+"&searchKey="+sValue+"&selectionBy="+me.iSelectionBy+"&txtFieldId="+sElementId;
            con.sendPostRequest(sUrl,null, me.arhSelectModule,null, false);// get the value from server
            return null;
           }
          else
           {

             return ([me.iMasterType,sValue,me.iSelectionBy,sElementId]);

           }
        }
       else
        {   me.arhSelectModule(sValue,sElementId);
             return null;
        }
    };

    this.arhSelectModule=function(sResponse,sElementId) // set the value to combo
    {

        var txtField=document.getElementById(sElementId);
        me.initTextField(txtField,-1);
        if(sResponse != null)
            me.checkAndAddItem(sResponse,true);
        else
            me.clearSelection();

    };


    this.searchByKey = function (sKey, isIgnoreFocus)
    {
        //this.removeAllItems();
        this.txtField.value = sKey;
        //String.fromCharCode(evt.keyCode);
        if (!isIgnoreFocus)
            this.txtField.focus();
        this.FieldValue = sKey;
        this.getValues();
    };
    this.removeAllItems = function (isIgnoreSelected)
    {
        if(isIgnoreSelected==undefined)
           isIgnoreSelected=false;

        while (me.clDiv.childNodes.length > 0)
        {

            me.clDiv.removeChild(me.clDiv.childNodes[0]);
        }

      if(!isIgnoreSelected)
      {
        me.currentRow = -1;
        objSelectedTags[me.txtField.id] = null;
        var clElement = me.getHiddenField();
        if (clElement)
        {
            clElement.value = -1;
        }

      }

      

    }

    this.removeItemBySeqId = function (iMasterId) {
        var iRow = this.getRowFromSeqId(iMasterId)
        if (iRow >= 0) {
            me.clDiv.removeChild(this.getItemElement(iRow));
            if (this.currentRow == iRow)
                this.currentRow = -1;
        }
    }


    /**
     @param  sNamesArray master names..................
     @param  iIdsArray of master ids
     @param  clAttributes as arrayof arraibutes as [0].name,[0].value.....
     @param  sAttrNames  as single dimension array
     @param  sAttrValues as two dimension array relating to items
     **/
    this.fillCombo = function (sNamesArray, iIdsArray, clAttributes, sAttrNames, sAttrValues,iSelRow) {
        try {   // alert(sNamesArray);
            //  alert(sAttrNames+"\n"+sAttrValues)
            me.removeAllItems();

            if (sNamesArray)
            {




                var index = -1;
                var iMasterId = 0;
                //                var clAttributes = null;
                var clAttributesArray = null;
                var oDivTag = null;
                var clAttribute = null;
                for (var c = 0; c < sNamesArray.length; ++c)
                {


                    /*if (me.iMasterType>Genernal_SCRIPTValues)
                     iMasterId = iIdsArray[c];*/
                    /*else  */
                   if(sNamesArray[c])
                   {
                    if (me.iMasterType > Genernal_SCRIPTValues || me.iMasterType == Genernal_SCRIPTValues || me.iMasterType == Genernal_SERVER_VALUES) {
                        /*if(c==0 && iIdsArray[c]>0)
                         {
                         oDivTag = me.getNewComboItem("", 0, null, null, null)
                         me.clDiv.appendChild(oDivTag)
                         }*/
                        iMasterId = iIdsArray[c];
                    }
                    else
                    {
                        // if(c==0)

                        if (c == 0 && (iIdsArray[c] > 0 && util.trim(sNamesArray[c]).length > 0))
                        {
                            // alert("---"+sNamesArray[c])
                            oDivTag = me.getNewComboItem("", 0, null, null, null)
                            me.clDiv.appendChild(oDivTag)
                        }

                        if (iIdsArray[c] > 0 || (me.iMasterType == Genernal_Master))
                            iMasterId = iIdsArray[c];
                        else
                            iMasterId = c;
                    }

                    //   if(me.iMasterType == 58)
                    //            alert("iMasterId ="+iIdsArray[c]+"----"+iMasterId )

                    if (clAttributes)
                        clAttribute = clAttributes[c];
                    else if (sAttrNames)
                        clAttributesArray = sAttrValues[c]

                    /*else if(sAttrNames)
                     {
                     sAttrValues[c]
                     for (var i = 0; c < sAttrNames .length; ++i)
                     sAttrNames[i]+":"+


                     }*/
                    // if(iMasterId<=0 )
                    //   alert(" alert(iMasterId)2222="+iMasterId);

                    oDivTag = me.getNewComboItem(sNamesArray[c], iMasterId, clAttribute, sAttrNames, clAttributesArray)
                    me.clDiv.appendChild(oDivTag)
                   }
                }
                
            /* if(iSelRow>=0)
               {
                   //alert(iSelRow+"--"+ me.iMasterType)
                if (    me.iMasterType==0
                        || me.iMasterType == Genernal_Narration
                        || me.iMasterType == Genernal_StaticValues
                        || me.iMasterType == Genernal_SERVER_VALUES
                        || me.iMasterType == Genernal_SCRIPTValues
                        || me.iMasterType ==Genernal_Master
                        || me.iMasterType ==LISTMASTER)
                 {
                    //  alert("0")
                   if(me.getItemCount()>0)
                   me.setSelectedIndex(1);

                 }
               }
              */
                //  if(iSelRow>=0)
              // {
                //  if(me.getItemCount()>0)
                  //  me.setSelectedIndex(1);
               //}

            }
        }
        catch (exception) {
            if (exception.message)
                alert("c1001:" + exception.type + '=' + exception.message + ' ' + exception.location)
            else
                alert("c1001:" + exception);
        }
    };

    this.getNewComboItem = function (sMasterName, sMasterId, clAttributes, sAttrNames, clAttributesArray)
    {
        //alert('getNewComboItem')
        var oDivTag = document.createElement(me.sDivTag);
        me.setStyle(oDivTag, "aAutoComplete");
        // normal style....

        //problem: setattribute with value=0
        if(!sMasterId)
            sMasterId=0;

        if ( (sMasterId <= 0 && util.trim(sMasterName).length==0)
              //  ||  (!sMasterId)// || util.trim(sMasterId).length==0
           )
        {    sMasterName=me.sEmptyValue;
             oDivTag.setAttribute("MasterId",'0');
        }
        else
            oDivTag.setAttribute("MasterId", sMasterId);



        oDivTag.onmousedown = me.onMouseDown;
        oDivTag.onmouseover = me.onMouseOver;
        oDivTag.onmouseout = me.onMouseOut;

        if (clAttributes)
        {
            for (var i = 0; i < clAttributes.length; ++i)
                oDivTag.setAttribute(clAttributes[i].name, clAttributes[i].value);
        }
        else if (sAttrNames)
        {
            for (var i = 0; i < sAttrNames.length; ++i)
                oDivTag.setAttribute(sAttrNames[i], clAttributesArray[i]);
        }

        var oMainSpan = document.createElement(me.sSpanTag);
            me.setStyle(oMainSpan, "lAutoComplete");

        var oFirstString = document.createElement(me.sSpanTag);
            me.setStyle(oFirstString, "cAutoComplete");

        var index = sMasterName.indexOf("\t");
        if (index == -1 && me.iMasterType < Genernal_Master)
            index = sMasterName.indexOf("  ");

        var oSecondString = document.createElement(me.sSpanTag);
           me.setStyle(oSecondString, "dAutoComplete");
       //    oSecondString.style.display="block";
          //display:block;")

        
        if (index == -1) // in case of static values which does not hava multi columns values...........
        {
            if(util.trim(sMasterName).length==0)
                 sMasterName=me.sEmptyValue;

            oFirstString.innerHTML = sMasterName;//+"<div style='color:green;display:block'> Hello msg</div>";//+"-"+me.iMasterType+" - "+me.iParentSeqId;
            oSecondString.innerHTML = '';
            me.width = '85';// in case second tag is empty other wise 65--note- % is not working IE

        }
        else
        {
            oFirstString.innerHTML = sMasterName.substring(0, index);
            oSecondString.innerHTML = sMasterName.substring(index + 1);
        }

        /* if(util.trim(sMasterName).length>0)
         {
          // as colums
          //oSecondString.innerHTML="<table border='1'><tr><td>&nbsp;"+me.width+"&nbsp;</td><td>&nbsp;World2&nbsp;</td><td>&nbsp;World3&nbsp;</td></tr></table>"

          // as rows   
         // oSecondString.innerHTML="<br><div>Hello</div>"
          //oSecondString.style.borderBottom="lightgrey .5px solid";
          //oSecondString.style.color="green";
          //oSecondString.style.fontSize ="10px";
          //me.iRowHeight=16+18;  //16 for first line,12 for second line

         }
        */ 
        //oSecondString.innerHTML=" 123Hello"
     
        oMainSpan.appendChild(oFirstString);
        oMainSpan.appendChild(oSecondString);


        oDivTag.appendChild(oMainSpan);
     //   alert(oDivTag.innerHTML)
        //alert('getNewComboItem-appendChild')
        return oDivTag;

    };

    /*
     * to show combobox set bDisplay as true
     * to hide combobox set bDisplay as false
     * */
    this.setVisible = function (bDisplay) {
        if (bDisplay)
            me.txtField.style.display = '';
        else
            me.txtField.style.display = 'none';
    };

    /*
     * to enable combobox set isEnable as true
     * to disable combobox set isEnable as false
     * */
    this.setEnable = function (isEnable) {
        me.txtField.disabled = !isEnable;
    };

    /*
     * used to return combobox is enable or not
     * */
    this.isEnable = function () {
        return !me.txtField.disabled;
    };

    /*
     * used to set com.focus to textfield of a combobox
     * */
    this.setFocus = function () {
        return me.txtField.focus();
    };

    this.checkAndSelectItem = function (sMaster)
    {
       me.checkItem(sMaster,true,false);
    }
    this.checkAndAddItem = function (sMaster, isSelect,isAddItem)
    {
       me.checkItem(sMaster,isSelect,true);
    }
    this.checkItem = function (sMaster, isSelect,isAddItem)
    {

        if (typeof(sMaster ) == 'string') {
            me.clearHighlight();
            //alert(sMaster + "  " + isSelect)

            var l_sMasterId = null, sMasterId = null, sItemValue = null, iMasterId = 0;
            var sAttributes = null;
            var iEndIndex = -1;
          //  alert(sMaster)
            if ((iEndIndex = sMaster.indexOf('|')) != -1)// name|id|code; rate:12 ,units:default|0
            {

                sMasterId = sMaster.substring(iEndIndex + 1);
                sMaster = sMaster.substring(0, iEndIndex);

                if ((iEndIndex = sMasterId.lastIndexOf(';')) != -1)
                {
                    sAttributes = sMasterId.substring(iEndIndex + 1);
                    sMasterId = sMasterId.substring(0, iEndIndex);
                }

                if ((iEndIndex = sMasterId.indexOf('|')) != -1)
                    iMasterId = parseInt(sMasterId.substring(0, iEndIndex));
                else
                {
                    iMasterId = parseInt(sMasterId);
                    iEndIndex = 1;
                }
                ///// attributes.............

                ////////////////////////////////////////

            }
            else
            {
                if ((iEndIndex = sMaster.lastIndexOf(';')) != -1)
                {
                    sAttributes = sMasterId.substring(iEndIndex + 1);
                }

                if (me.iMasterType >= Genernal_Master)// currency=16  or rct/issues=13
                {

                    iMasterId = parseInt(sMaster);
                    if (!isNaN(iMasterId))
                        iEndIndex = 1;
                }
            }

            //alert(iEndIndex)
            var oItems =me.getComboElements();// me.clDiv.childNodes;//getElementsByTagName(me.sDivTag);
            if (oItems.length > 0)
            {
                for (var i = 0; i < oItems.length; i++)
                {
                    if (iEndIndex != -1)// in case
                    {

                        if (iMasterId == parseInt(oItems.item(i).getAttribute('MasterId')))
                        {

                            if (isSelect)
                            {
                                me.setSelectedIndex(i);

                            }
                            return true;
                        }
                    }
                    else
                    {
                        sItemValue = util.trim(oItems.item(i).childNodes[0].childNodes[0].innerHTML);
                        //
                        if (sMaster.toLowerCase() == sItemValue.toLowerCase()) {

                            if (isSelect)
                                me.setSelectedIndex(i);
                            return true;
                        }
                    }
                }
            }
            else {
                iEndIndex = 1;
            }

            
          // alert(isAddItem+"  "+iEndIndex)
         if(isAddItem)
           {
            if (iEndIndex != -1 || me.iMasterType == Genernal_Narration)// in case
            {
                //var clAttributes=null;
                var clDivTag = null;

                if (sAttributes)
                {
                    //if(sAttributes.indexOf())

                    //clDivTag = this.getNewComboItem(sMaster, sMasterId, eval('new Array({' + sAttributes + '})'));
                   //  alert(122)
                    clDivTag = this.getNewComboItem(sMaster, sMasterId, eval( sAttributes ));

                }
                else
                    clDivTag = this.getNewComboItem(sMaster, sMasterId, null);

             //   alert(clDivTag)
                 // alert( me.clDiv.childNodes.length);
                me.clDiv.appendChild(clDivTag)
              //  alert( me.clDiv.childNodes.length);
            }

            if (isSelect)
            {  //alert("select="+(oItems.length-1) );
                // oItems =me.getComboElements();
                me.setSelectedIndex(oItems.length - 1);
            }
          }
        }
        return false;
    }


    this.getItemCount = function () {
        var oItems = me.getComboElements();//me.clDiv.childNodes;//  getElementsByTagName(me.sDivTag);
        if (oItems)
            return  oItems.length;
        else
            return 0;

    }


    this.setCondition = function (sCondition) {
        me.sCondition = sCondition;
    }
    this.getCondition = function ()
    {
       /*if(me.sCondition)
       {
         if(util.trim(me.sCondition).length==0)
            return null;
          else*/
            return me.sCondition;
       /*}*/
    }


    this.getSelectionBy = function () {
        return me.iSelectionBy;
    }

    this.getSelectionType = function () {
        return me.iSelectionType;
    }
    this.setSelectionType = function (iSelectionType) {
         me.iSelectionType=iSelectionType;
    }


    this.setElementToBuffer = function (sFieldId, clElement) {
        objSelectedTags[sFieldId] = clElement;
    }
    this.getElementFromBuffer = function (sFieldId) {
        return objSelectedTags[sFieldId];
    }


    this.getItemElement = function (irow) {
        //         alert("row========="+irow)
        if (irow >= 0) {
            var oItems = me.getComboElements();//me.clDiv.childNodes;//getElementsByTagName(me.sDivTag);
            //             alert("item  "+oItems[irow])
            return oItems[irow];
        }
        else
            return null;
    }

    this.checkAndAddElement = function (clDivObject, isSelect) {
        var index = me.getIndexFromTag(clDivObject);
        //alert("="+index)
        if (index <0)
        {
            me.clDiv.appendChild(clDivObject)
            if (isSelect) {
                var oItems =me.getComboElements();// me.clDiv.childNodes;//getElementsByTagName(me.sDivTag);
                me.setSelectedIndex(oItems.length - 1);
            }
        }
        else {
            if (isSelect)
                me.setSelectedIndex(index);
        }
    }


    this.getIndexFromTag = function (clDivObject) {
        // alert("getIndexFromTag="+clDivObject)
        var oItems =me.getComboElements();// me.clDiv.childNodes;//getElementsByTagName(me.sDivTag);
        var index = -1;
        for (var i = 0; i < oItems.length; i++) {
            if (clDivObject == oItems.item(i)) {
                index = i;
                break;
            }
        }

        return index;
    };

    this.clearHighlight = function () {
        var selectedDiv = me.getItemElement(me.currentRow);
        // clear highlight color
        if (selectedDiv) {
            me.setStyle(selectedDiv, "aAutoComplete");
            me.currentRow = -1
        }
    };

    /**
     **/
    this.highlightRow = function (selRow,isIgnoreScroll) {

        var iNoOfRows = me.getItemCount();

        var selectedDiv = null;
        if (iNoOfRows <= 0)
            return;
        var oItems = me.getComboElements();//me.clDiv.childNodes;//getElementsByTagName(me.sDivTag);

        me.ShowPopUp();
        //window.status=window.status+'selRow='+selRow;
        if (selRow >= iNoOfRows)
            selRow = iNoOfRows - 1

        //window.status=window.status+' ---selRow2='+selRow;



        if (selRow < 0)
        {
            me.currentRow = -1;
            me.txtField.focus();
            return
        }
        else if (me.currentRow >= 0 && selRow != me.currentRow)
        {
            selectedDiv = me.getItemElement(me.currentRow);

            // clear highlight color
            if (selectedDiv)
            {   me.setStyle(selectedDiv, "aAutoComplete");
                // me.currentRow = -1
            }
        }


       /* if (selRow >= me.currentRow)
            me.movedown(selRow);
        else
        {

            for (var i = me.currentRow - 1; i >= selRow; i--)
                me.moveup(i);
        }
        */
      if(!isIgnoreScroll)
       {


        if (selRow >= me.currentRow )
            me.movedown(selRow);
        else
        {  for (var i = me.currentRow - 1; i >= selRow; i--)
                me.moveup(i);
          }
       }
    else
       me.clDiv.style.top = 0 + "px";

        me.currentRow = selRow;

        //window.status='me.currentRow='+me.currentRow
        // current selection
        selectedDiv = me.getItemElement(me.currentRow);
        if (selectedDiv) {
            me.setStyle(selectedDiv, "bAutoComplete");
            me.rightAlign(selectedDiv);
        }


        me.txtField.setAttribute('selectedIndex', me.currentRow)

        if(me.isSelectItemText)
        {

            me.setSelectedText(me.getItemText(me.currentRow));
            me.isSelectItemText=false;
        }

    };

    this.highlightItem = function (clSelectDiv)
    {
        var selectedDiv = me.getItemElement(me.currentRow);
        // clear highlight color
        if (selectedDiv)
            me.setStyle(selectedDiv, "aAutoComplete");

        me.currentRow = me.getIndexFromTag(clSelectDiv);
        me.setStyle(clSelectDiv, "bAutoComplete");
        me.rightAlign(clSelectDiv);


    };


    /*this.getItemElement = function(irow)
     {
     alert("row========="+irow)
     if (irow >= 0)
     {
     var oItems = me.clDiv.getElementsByTagName(me.sDivTag);
     alert(oItems[irow])
     return oItems[irow];
     }
     else
     return null;
     }*/
    this.getItemText = function (row) {
        var clSelectedTag = me.getItemElement(row);
        if (clSelectedTag)
        {
            if (clSelectedTag.childNodes)
            {
                var objSpan = clSelectedTag.getElementsByTagName(me.sSpanTag)[1];//.innerHTML;

                 return cross.getInnerText(objSpan);

                /*if (objSpan.textContent)
                    return util.trim(objSpan.textContent);
                else
                    return util.trim(objSpan.innerText);*/


            }
        }
        return "";
    }

    this.getSelectedAttr = function (sName) {
        var clElement = objSelectedTags[me.txtField.id];
        if (clElement != null)
            return clElement.getAttribute(sName);
        else
            return null;
    }
    this.getSelectedElement = function () {
        return objSelectedTags[me.txtField.id];
        //        return me.txtField.getAttribute('selectedTag');
    }
    this.getSelectedItem = function ()
    {

        //var clSelectedTag=me.txtField.getAttribute('selectedTag')
        var clSelectedTag = objSelectedTags[me.txtField.id];
        if (clSelectedTag)
        {
            if (clSelectedTag.childNodes)
            {
                var sItemValue = cross.getInnerText(clSelectedTag.getElementsByTagName(me.sSpanTag)[1]);//.innerText;
                return util.trim(sItemValue);
            }
        }
        return "";
    };

    /**
     * It is used to check whether combo item is selected or not
     */
    this.isComboItemSelected= function ()
    {


         if (
              (
               me.iMasterType == 0
              || me.iMasterType == Genernal_StaticValues
              || me.iMasterType == Genernal_Narration
              || me.iMasterType == Genernal_Master
              || me.iMasterType == Genernal_SCRIPTValues
               || me.iMasterType == Genernal_SERVER_VALUES
               )
             )
         {
            if(util.trim(me.txtField.value).length==0)
                return false;
         }
        else if( me.getSelectedId()<=0)
        {
                return false;
        }

        return true;

    }

    /**
     returns masterid from div's attribute i,e MasterId... set at the time of filling the combobox
     **/

    this.getSelectedId = function ()
    {

        var clSelectedTag = objSelectedTags[me.txtField.id];
        if (clSelectedTag) {
            var sItemValue = clSelectedTag.getAttribute('MasterId');

            if (typeof(sItemValue ) == 'string') {

                sItemValue = util.trim(sItemValue);

                var index = sItemValue.indexOf('|');
                if (index > 0)
                    return sItemValue.substring(0, sItemValue.indexOf('|'));
                else {
                    return sItemValue;
                }
            }
            else
                return sItemValue;
        }

        if (me.iMasterType == Genernal_StaticValues
            || me.iMasterType == Genernal_Narration
            || me.iMasterType == Genernal_Master)
            return -1;
        else
            return 0;
    }


    /*this.getSelectedId = function()
     {
     if (me.currentRow >= 0)
     {
     var oItems = me.clDiv.getElementsByTagName(me.sDivTag);
     if(oItems.length>0)
     {
     var sItemValue = oItems[me.currentRow].getAttribute('MasterId');
     if(typeof(sItemValue )=='string')
     {
     sItemValue = me.trim(sItemValue)
     var index=sItemValue.indexOf('|');
     if(index>0)
     return sItemValue.substring(0, sItemValue.indexOf('|'));
     else
     return sItemValue;
     }
     else
     return sItemValue;
     }

     }
     return "";
     }*/
    this.getSelectedMasterString = function () {
        //var clSelectedTag=me.txtField.getAttribute('selectedTag')
        var clSelectedTag = objSelectedTags[me.txtField.id];
        if (clSelectedTag) {
            //var oItems = me.clDiv.getElementsByTagName(me.sDivTag);
            var sItemValue = clSelectedTag.getAttribute('MasterId');
            return sItemValue;
        }
        else
            return "";
    };
    this.getSelectedMasterName = function () {
        //var clSelectedTag=me.txtField.getAttribute('selectedTag')
        var clSelectedTag = objSelectedTags[me.txtField.id];
        if (clSelectedTag)//if (me.currentRow >= 0)
        {
            //var oItems = me.clDiv.getElementsByTagName(me.sDivTag);
            var sItemValue = clSelectedTag.getAttribute('MasterId');// display value|name|code|id

            if (typeof(sItemValue ) == 'string') {
                sItemValue = util.trim(sItemValue)
                var sindex = sItemValue.indexOf('|', sItemValue.indexOf('|') + 1);
                var eindex = sItemValue.indexOf('|', sindex + 1);
                if (sindex > 0)
                    return sItemValue.substring(sindex + 1, eindex);
                else
                    return cross.getInnerText(clSelectedTag);
            }
            else
                return cross.getInnerText(clSelectedTag);
        }
        return "";
    };
    this.getSelectedMasterCode = function () {
        //var clSelectedTag=me.txtField.getAttribute('selectedTag')
        var clSelectedTag = objSelectedTags[me.txtField.id];
        if (clSelectedTag)//me.currentRow >= 0)
        {
            // var oItems = me.clDiv.getElementsByTagName(me.sDivTag);
            var sItemValue = clSelectedTag.getAttribute('MasterId');
            //alert("---"+sItemValue)
            if (typeof(sItemValue ) == 'string') {
                sItemValue = util.trim(sItemValue)
                var sindex = sItemValue.lastIndexOf('|');
                if (sindex > 0)
                    return sItemValue.substring(sindex + 1, sItemValue.length);
                else
                    return sItemValue;
            }
            else
                return sItemValue;
        }
        return "";
    };
    /**
     returns array [0=id,[1]=type,masterid from div's attribute i,e MasterId... set at the time of filling the combobox
     **/
    this.getSelectedMaster = function () {  //  alert('getSelectedMaster '+me.txtField.id)
        var iReturn;
        //var clSelectedTag=me.txtField.getAttribute('selectedTag')
        var clSelectedTag = objSelectedTags[me.txtField.id];
        // alert('clSelectedTag='+clSelectedTag)
        if (clSelectedTag)//me.currentRow >= 0)
        {
            //var oItems = me.clDiv.getElementsByTagName(me.sDivTag);
            var sItemValue = clSelectedTag.getAttribute('MasterId');
            iReturn = new Array();
            if (typeof(sItemValue ) == 'string') {
                sItemValue = util.trim(sItemValue)
                var index = sItemValue.indexOf('|');
                if (index > 0) {
                    var index = sItemValue.indexOf('|');
                    iReturn[0] = parseInt(sItemValue.substring(0, index))
                    iReturn[1] = parseInt(sItemValue.substring(index + 1, sItemValue.indexOf('|', index + 1)))
                }
                else
                    iReturn[0] = parseInt(sItemValue);
            }
            else
                iReturn[0] = parseInt(sItemValue);

        }
        return iReturn;
    };
    this.getItemSelectedIndex = function () {
        return me.currentRow;
        /* var index=me.txtField.getAttribute('selectedIndex');
         if(index)
         return index;
         else
         return -1;*/
    };
    this.getSelectedIndex = function () {
        var index = parseInt(me.txtField.getAttribute('selectedIndex'));
        if (index >= 0)
            return index;
        else
            return -1;
    };

    this.getSelectedHolder = function () {
        return me.currentRow;
    };
    this.getAccountType = function () {
        return parseInt(ltxtField.setAttribute('accounttype'));
    };


    this.setAccountType = function (iAcctType) {
        this.iAccountType = iAcctType;
        ltxtField.setAttribute('accounttype', iAcctType);
    };

    this.setMasterType2 = function (iMasterType, selectby, selecttype, parentid, iTargetModule, isAlwaysFetchValues) {
        this.iMasterType = iMasterType;
        this.iSelectionBy = selectby;//ltxtField.getAttribute('selectionby');
        this.iSelectionType = selecttype;// ltxtField.getAttribute('selectiontype');
        this.iTargetModule = iTargetModule;
        // this.iAccountType = ltxtField.getAttribute('accounttype');
        this.iParentSeqId = parentid;
        this.isAlwaysFetchValues = isAlwaysFetchValues;
        ltxtField.setAttribute('mastertype', iMasterType);
        ltxtField.setAttribute('selectionby', selectby);
        ltxtField.setAttribute('selectiontype', selecttype);
        ltxtField.setAttribute('targetmodule', iTargetModule);
        ltxtField.setAttribute('parentseqid',parentid);
    };

    this.setMasterType = function (iMasterType, iSelect) {
        this.iMasterType = iMasterType;
        ltxtField.setAttribute('mastertype', iMasterType);
    };

    this.getMasterType = function () {
        return this.iMasterType;
    };

    this.getParentId = function () {
        return this.iParentSeqId;
    };

    /* this.getAttribute = function(sKey)
     {
     return this.txtField.getAttribute(sKey);
     };
     */
    this.setSelectedIndex = function (selectRow) {
        me.currentRow = selectRow;
        me.setSelectedText(me.getItemText(me.currentRow));

        //if(me.currentRow>=0)
        // alert(me.txtField.id+" ----sel="+me.currentRow)

        //me.txtField.setAttribute('selectedIndex',me.currentRow)
        //if(me.currentRow>=0)
        //alert(me.txtField.id+" ----sel--- "+me.currentRow)

    };
    this.setParentSeqId = function (iParentSeqId) {

        //alert("iParentSeqId="+iParentSeqId+"  "+me.txtField.id)
        me.txtField.setAttribute("parentseqid", iParentSeqId);
        if(iParentSeqId>0)
            me.iParentSeqId = iParentSeqId;
        else
          me.iParentSeqId=0;
    };


    this.setSelectedMasterId = function (iMasterId) {
        /* var oItems = me.clDiv.getElementsByTagName(me.sDivTag);
         var index = 0;
         var sValue = null;
         var clDivObject = null;
         for (var i = 0; i < oItems.length; i++)
         {
         clDivObject = oItems[i];
         sValue = clDivObject.getAttribute('MasterId')
         if ((index = sValue.indexOf('|')) != -1)
         sValue = sValue.substring(0, index)

         if (sValue == iMasterId)
         {

         me.currentRow = i;
         me.setSelectedText(me.getItemText(me.currentRow))
         break;
         }
         }
         */
        var iRow = this.getRowFromSeqId(iMasterId)
        if (iRow >= 0) {
            me.currentRow = iRow;
            me.setSelectedText(me.getItemText(me.currentRow))
        }

    };

    this.getRowFromSeqId = function (iMasterId) {
        var oItems = me.getComboElements();//me.clDiv.childNodes;//getElementsByTagName(me.sDivTag);
        var index = 0;
        var sValue = null;
        var clDivObject = null;
        var i = 0;
        var isFound = false;
        for (; i < oItems.length; i++)
        {
            clDivObject = oItems[i];
            sValue = clDivObject.getAttribute('MasterId');

            if(  typeof(sValue)=='string' &&  (index = sValue.indexOf('|')) != -1)
                sValue = sValue.substring(0, index);

            if (sValue == iMasterId)
            {
                isFound = true;
                break;

            }
        }
        if (isFound)
            return i;
        else
            return -1;


    }
    this.setSelectedHolder = function (iMasterId) {

    };

    this.clearSelection = function () {
        objSelectedTags[me.txtField.id] = null;
        me.txtField.setAttribute('selectedIndex', -1);

        me.txtField.value="";
        me.currentRow=-1;
        setMasterIdToHidden(null);
    };

    this.showPopupItems = function (iItems) {
        me.iDisplayItems = iItems;
    };


    this.HidePopUp = function ()
    {

        var selectedDiv = me.getItemElement(me.currentRow);
        // clear highlight color
        if (selectedDiv)
            me.setStyle(selectedDiv, "aAutoComplete");


        if (me.isPopUpVisible())
        {

            me.clDiv.style.visibility = "hidden";
            me.clContainer.style.visibility = "hidden";

            this.clDiv.style.height =  "0px";
            this.clContainer.style.height = "0px";


           // me.clDiv.style.height="0px";
            //me.clContainer.style.height="0px";

            /*me.clDiv.style.display = "none";
            me.clContainer.style.display = "none";
            */


           // if (objIFrameDiv)
             //   objIFrameDiv.style.display = "none";
        }

    };


    this.ShowPopUp = function ()
    {
      //  util.writeToLog("pop="+me.txtField.getAttribute("hidepopup"))
        if (
            !me.isPopUpVisible()
              &&  (  !me.txtField.getAttribute("hidepopup")
                     ||
                     me.txtField.getAttribute("hidepopup")==0
                  )
              && !me.txtField.getAttribute("readonly")
                )
        {

            me.clContainer.style.visibility = "visible";
            me.clDiv.style.visibility = "visible";

            this.clDiv.style.height = (this.iRowHeight * this.iDisplayItems) + "px";
            this.clContainer.style.height = (this.iRowHeight * this.iDisplayItems) + 2 + "px";





//            me.clDiv.style.display = "none";
//            me.clContainer.style.display = "none";


            //            window.status=me.clContainer.offsetTop+","+me.clContainer.offsetLeft;
            //alert(me.clContainer.offsetTop+","+me.clContainer.offsetLeft)
            me.resizeDiv();

          /*  if (objIFrameDiv != null) {
                //var objPosition=cross.getPosition(me.clContainer);
                objIFrameDiv.style.width = me.clContainer.style.width;
                objIFrameDiv.style.height = me.clContainer.style.height;
                objIFrameDiv.style.left = me.clContainer.offsetLeft;
                objIFrameDiv.style.top = me.clContainer.offsetTop;
                objIFrameDiv.style.display = "block";
            }*/
        }

      // me.isShowPopUp=true;
    };

    /*this.hideComboPopUp = function()
     {

     var sValue = me.txtField.value;
     alert(sValue)
     if (me.iMasterType == Genernal_StaticValues)
     {
     //  alert('narr')
     //if(me.currentRow=-1)
     me.checkAndAddItem(sValue, true)
     //else
     //me.setSelectedText(me.getSelectedItem())
     }
     else
     {   //window.status='tab='+me.currentRow

     me.setSelectedText(me.getItemText(me.currentRow))
     }

     if (me.isPopUpVisible())
     {
     me.clDiv.style.visibility = "hidden";
     me.clContainer.style.visibility = "hidden";
     objIFrameDiv.style.display = "none";
     }
     };
     */
    this.isPopUpVisible = function () {  // alert(me.clDiv)


        if (me.clDiv && me.clDiv.style.visibility == "hidden")
            return false;
        else
            return true;
    };

    //-----------------private methods ----------------------------------------------------------------------------------//

    this.setStyle = function (clTag, sClassName)   // setting styles to div, span elements
    {
        //me.setWidth();
        clTag.className = sClassName;

        switch (sClassName.charAt(0)) {
            case "m":
                clTag.style.fontSize = "13px";
                clTag.style.fontFamily = "Arial,Helvetica,sans-serif";
                clTag.style.wordWrap = "break-word";
                clTag.style.backgroundColor = "white";
                break;
            case "l"://hide the tag

                clTag.style.display = "block";
                clTag.style.paddingLeft = "3";
                clTag.style.paddingRight = "3";
                clTag.style.height = this.iRowHeight + "px";
                clTag.style.overflow = "hidden";

                break;
            case "a":
                clTag.style.fontSize = "13px";
                clTag.style.color = "black";
                clTag.style.cssText = "color:black !important";

                clTag.style.height = this.iRowHeight + "px";
                if (clTag.displaySpan)
                    clTag.displaySpan.style.color = "green"
                break;
            case "b":
                clTag.style.fontSize = "13px";
                clTag.style.height = this.iRowHeight + "px";

                clTag.className = "comboSelRow";

                if (clTag.displaySpan)
                    clTag.displaySpan.style.color = "green"
                break;
            case "c": // setting width to tag
                clTag.style.fontSize = "13px";
                clTag.style.width = me.width + "%";
                clTag.style.cssFloat = "left";
                break;
            case "d":
                clTag.style.color = "#696969"
                break
        }
    };
    this.AddStyles = function (clCompleteDiv) {
        //me.setWidth();
        me.setStyle(clCompleteDiv, "mAutoComplete")
    };

    this.isShiftPressed = function (evt) {
        //alert(evt)
        var nav4 = window.Event ? true : false;
        if (nav4) {
            if (evt)
                return evt.modifiers & Event.SHIFT_MASK;
        }
        else
            return  window.event.shiftKey;
        return false;
    };

    this.resizeDiv = function () {      // alert(me.parentElement)
        if (me.clDiv) {

            // alert(me.parentElement)
            if (me.parentElement) {

                me.clContainer.style.left = me.paddingLeft(me.txtField) - (me.parentElement.scrollLeft) + "px";
                me.clContainer.style.top = me.paddingTop(me.txtField) - me.parentElement.scrollTop + me.txtField.offsetHeight - 1 + "px";

            }
            else {
                //alert(me.parentElement);

                //alert(getBodyScrollLeft()+","+getBodyScrollTop())

                //me.clContainer.style.left = me.paddingLeft(me.txtField) - (getBodyScrollLeft())+ "px";
                //me.clContainer.style.top = me.paddingTop(me.txtField)- (getBodyScrollTop() + me.txtField.offsetHeight - 1) + "px";
            }


            me.clContainer.style.width = me.getOffsetWidth() + "px"
            var iScrollBarWidth = 20;
            // assumed  to avoid horizontal scroll bars
            me.clDiv.style.left = 0;
            me.clDiv.style.top = me.clContainer.scrollTop;
            me.clDiv.style.width = me.getOffsetWidth() - iScrollBarWidth + "px"

        }
    };

    this.getOffsetWidth = function () {
        if (navigator && navigator.userAgent.toLowerCase().indexOf("msie") == -1)
            return this.txtField.offsetWidth - this.rlBorderWidth * 2 + 100
        else
            return this.txtField.offsetWidth + 100
    };

    /**
     replaces "\n\r" with (" ") empty space
     **/
    this.replaceHtml = function (sOldInnerHtml) {
        for (var c = 0, sNewInnerHtml = "", sReplaceString = "\n\r"; c < sOldInnerHtml.length; c++)
            if (sReplaceString.indexOf(sOldInnerHtml.charAt(c)) == -1)
                sNewInnerHtml += sOldInnerHtml.charAt(c);
            else
                sNewInnerHtml += " ";
        return sNewInnerHtml;
    }
    /**
     search all the span tags which have sClassName and replace '\n\r' in innerHTML with space
     **/
    this.SearchAndReplaceHtml = function (clDivTag, sClassName) {
        var clSpanTag = clDivTag.getElementsByTagName(me.sSpanTag);
        if (clSpanTag) {
            for (var c = 0; c < clSpanTag.length; ++c) {
                if (clSpanTag[c].className == sClassName) {
                    var sInnerHtml = clSpanTag[c].innerHTML;
                    if (sInnerHtml == "&nbsp;")
                        return"";
                    else {
                        var sNewInnerHtml = me.replaceHtml(sInnerHtml);
                        return sNewInnerHtml;
                    }
                }
            }
        }
        else {
            return""
        }
    }

    this.leftAlign = function (clDivTag) {
        if (!clDivTag)
            return null;
        return me.SearchAndReplaceHtml(clDivTag, "cAutoComplete")
    }
    this.rightAlign = function (clDivTag) {
        if (!clDivTag)
            return null;
        return me.SearchAndReplaceHtml(clDivTag, "dAutoComplete")
    }
    this.handleHide = function () {
        if (!me.isAjaxSupported) {
            me.setCookie("qu", "", 0, this.url, null, null)
        }
     //  alert("**")
        me.HidePopUp();
    }
    /*this.encodeURI = function(Va)
     {
     if (encodeURIComponent)
     return encodeURIComponent(Va);
     if (escape)
     return escape(Va)
     }*/
    /* this.trim = function(sValue)
     {
     if (!sValue || sValue.length == 0)
     return "";
     */
    /*var sNewValue = "";
     var iStartIndex = -1,iEndIndex;
     for (var index = 0; index < sValue.length; index++)
     {
     if (iStartIndex == -1 && sValue.charAt(index) != ' ')
     iStartIndex = index;
     else
     {
     if (sValue.charAt(index) == ' ')
     iEndIndex = index;
     else if (sValue.charAt(index) != ' ')
     iEndIndex = -1;
     }
     }
     //alert("sVlaue  "+sVlaue)
     if (iEndIndex != -1)
     return sValue.substring(iStartIndex, iEndIndex);
     else
     return sValue.substring(iStartIndex, sValue.length);*/
    /*
     return sValue.replace(/^\s+|\s+$/, '');

     }*/

    /* this.startsWith = function(sValue, sStartString)
     {
     sValue = sValue.substring(0, sStartString.length)
     if (sValue == sStartString)
     return true;
     else
     return false;
     }*/
    this.endssWith = function (sValue, sEndString) {
        sValue = sValue.substring(sValue.length - sEndString.length, sValue.length)
        if (sValue == sEndString)
            return true;
        else
            return false;
    }


    this.paddingLeft = function (s) {
        return me.setPadding(s, "offsetLeft")
    }

    this.paddingTop = function (s) {
        return me.setPadding(s, "offsetTop")
    }
    this.setPadding = function (s, na) {
        var wb = 0;
        while (s) {
            wb += s[na];
            s = s.offsetParent
        }
        return wb
    }
    this.setCookie = function (z, Y, ab, tb, qb, cc) {
        var Vb = z + "=" + Y + (ab ? "; expires=" + ab.toGMTString() : "") + (tb ? "; path=" + tb : "") + (qb ? "; domain=" + qb : "") + (cc ? "; secure" : "");
        document.cookie = Vb
    }
    this.setFldSize = function () {
        var Ga = document.body.scrollWidth - 220;
        Ga = 0.73 * Ga;
        me.txtField.size = Math.floor(Ga / 6.18)
    }
    this.getTextRange = function (o) {
        var M = -1;
        if (o.createTextRange) {
            var TxtFld = document.selection.createRange().duplicate();
            M = TxtFld.text.length
        }
        else if (o.setSelectionRange) {
            M = o.selectionEnd - o.selectionStart
        }
        return M
    }
    this.getFldLength = function (o) {
        var w = 0;
        if (o.createTextRange) {
            var TxtFld = document.selection.createRange().duplicate();
            TxtFld.moveEnd("textedit", 1);
            w = o.value.length - TxtFld.text.length
        }
        else if (o.setSelectionRange) {
            w = o.selectionStart
        }
        else {
            w = -1
        }
        return w
    }
    this.removeTxtSelection = function (agrs) {
        if (!agrs)
            agrs = arguments;
        //alert(arguments.length)
        var ltxtField = agrs[0]
        if (ltxtField && ltxtField.createTextRange) {
            var u = ltxtField.createTextRange();
            u.moveStart("character", ltxtField.value.length);
            u.select()
        }
        else if (ltxtField && ltxtField.setSelectionRange) {
            ltxtField.setSelectionRange(ltxtField.value.length, ltxtField.value.length)
        }
    }

    this.setEmptyValue= function(sEmptyValue)
    {
       me.sEmptyValue=sEmptyValue;
    }
    this.setWidth = function () {
        me.width = 65;

    }

    /*
     this.AddRule = function(sClass,sStyle)
     {
     if(me.Ua)
     {   alert('AddRule')
     var oStyleSheet=document.styleSheets[0];
     if(oStyleSheet.addRule)
     oStyleSheet.addRule(z,rb)
     else if(oStyleSheet.insertRule)
     oStyleSheet.insertRule(sClass+" { "+sStyle+" }",oStyleSheet.cssRules.length)
     }
     }*/


    /**
     *  it searches the value in the list of items and then sets the row ....
     * @param sValue
     */
    me.setSelectedKey = function (sKey)
    {


        var i = -1;
        var dvSelect=null;
        var sValue=null;

         var oItems =me.getComboElements();// me.clDiv.childNodes;//getElementsByTagName(me.sDivTag);

         if (oItems.length > 0)
          {
             for(i=0; i < oItems.length; i++)
               {

                 sValue = oItems.item(i).childNodes[0].childNodes[0].innerHTML;
               //   alert(sKey+" ------------"+sValue)
                if(sValue==sKey)
                {
                  me.setSelectedIndex(i);
                   //alert(sValue+"33")
                  break;
                }
               }
          }

    };


    /**
     set the name from the item selected in the list to the text field and set the master id to the hidden field name+'_id'
     @param sValue sValue is the item selected in the list
     **/

    me.setSelectedText = function (sValue)
    {

        this.txtField.value = html_entity_decode(sValue);
        /*var clHiddenTag = null;
         var sHiddenName = me.txtField.getAttribute('hiddenName');
         if (sHiddenName)
         clHiddenTag = document.getElementById(sHiddenName+"Id");
         else
         clHiddenTag = document.getElementById(me.txtField.name + 'Id');

         if (clHiddenTag == null)
         {
         clHiddenTag = document.createElement("input");
         clHiddenTag.setAttribute("type", "hidden");
         if (sHiddenName)
         { //alert("sHiddenName="+me.sHiddenName)
         clHiddenTag.setAttribute("name", sHiddenName);
         clHiddenTag.setAttribute("id", sHiddenName+"Id");

         }
         else
         {
         clHiddenTag.setAttribute("name", me.txtField.name + 'Id');
         clHiddenTag.setAttribute("id", me.txtField.name + 'Id');
         }
         me.txtField.parentNode.appendChild(clHiddenTag);
         }*/
        setMasterIdToHidden(sValue);

        /*if(me.iSelectionBy==Constants.COMBO_BY_CODE)
        {
         sValue=me.getSelectedElement().getAttribute("name");
         me.FieldValue=sValue;
        }*/

        this.txtField.value = html_entity_decode(sValue);

    }

    function setMasterIdToHidden (sValue)
    {

        var clHiddenTag = me.getHiddenField();
        me.txtField.setAttribute('selectedIndex', me.currentRow)

        objSelectedTags[me.txtField.id] = me.getItemElement(me.currentRow);




        if (me.iMasterType == Genernal_StaticValues)// std narration
            clHiddenTag.setAttribute("value", sValue);
        else
        {
            sValue = me.getSelectedId();
            //  alert(clHiddenTag.name+"=sValue=="+sValue)
            // clHiddenTag.value=sValue;
            clHiddenTag.setAttribute("value", sValue);

            // alert(clHiddenTag.name+"---"+clHiddenTag.value);
        }
    }

    //-------------------------------------------- event handlers ----------------------------------------------------------------//
    this.setItemName = function (sMasterName) {
        //alert("setItemName "+sMasterName);
        var objComboItem = me.getItemElement(me.currentRow);
        //alert("objComboItem  "+objComboItem.innerHTML);
        this.txtField.value = sMasterName;
        var objSpan = objComboItem.childNodes[0].childNodes[0];
        objSpan.innerHTML = sMasterName;
    }

    this.handleKeyEvent = function (evt)
    {


        //    evt = evt ? evt : window.event;
        //    evt = evt ? evt : window.event;
        //     var objSrc = evt.srcElement ? evt.srcElement : evt.target;
        //       me.txtField=objSrc

        if (!this.stopHandlingEvts)
        {
            var key;

            if (evt)
                key = evt.keyCode;


            var sValue = me.txtField.value;

            //me.txtField.title = key


            if (key != 0)
            {
               if(me.isAllowMultiSelect && (key == 46 || key ==8))// DEL
               {
                 //clMultiCombo.onClkDelete(me.sComboId,evt);
                // return false;
               }
               else if (evt.ctrlKey
                        || key == 33
                        || key == 34
                        || key == 35
                        || key == 36
                        || key == 37
                        || key == 39
                        || key == 45

                        || key == 127
                        || key == 155
                        || key == 18
                        || key == 17
                        || key == 16
                     || key == 113// F2
                    //|| me.isShiftPressed(evt)
                    || ( !me.isPopUpVisible() && key == 9))
                {   //alert("222 "+key+','+me.isShiftPressed(evt));
                    // evt.cancelBubble = true;
                    // evt.returnValue = false;
                    return false;

                }
                else if (key == 13
                    || key == 3
                    || ( !me.isShiftPressed(evt) && key == 9 )
                    )   // enter or tab
                {  // alert("1111");
                    var f = me.txtField;
                    if (f.createTextRange) {
                        var u = f.createTextRange();
                        u.moveStart("character", f.value.length);
                        u.select()
                    }
                    else if (f.setSelectionRange)
                    {
                        f.setSelectionRange(f.value.length, f.value.length)
                    }


                    me.handleHide()// hide Div and set value to text field........

                      //    me.iSelectionBy=Constants.COMBO_BY_NAME;
                    me.FieldValue = sValue;
                    //alert('narr111')
                    if (me.iMasterType == Genernal_StaticValues || isAllowToAddItems)
                    {
                        //  alert('narr')
                        //if(me.currentRow=-1)
                        me.checkAndAddItem(f.value, true)
                        //else
                        //me.setSelectedText(me.getSelectedItem())
                    }
                    else {   //window.status='tab='+me.currentRow

                        me.setSelectedText(me.getItemText(me.currentRow))
                    }




                    if (me.key == 13 || me.key == 3)
                    {
                     //   alert("13")
                        me.HidePopUp();
                    }

                    return false;
                }
                else
                {
                    //me.txtField.title='ppppppppppppppp'

                    /*if (! me.isPopUpVisible() && me.currentRow != -1)// to highlight the item in the combo set in the textfield
                     {
                     me.ShowPopUp()
                     me.highlightRow(me.currentRow);
                     return false
                     }*/
                    if (me.isPopUpVisible())
                    {
                        if (key == 40)// down arrow
                        {

                            var iSelectRow = me.currentRow + 1;


                            me.highlightRow(iSelectRow);
                            me.movedown(iSelectRow);
                           // alert("0")
                            return false;
                        }
                        else if (key == 38) // up arrow
                        {

                            var iSelectRow = me.currentRow - 1;
                            //window.status=window.status+' ---me.currentRow='+me.currentRow+","+iSelectRow;
                            me.highlightRow(iSelectRow);
                            me.moveup(iSelectRow);
                            return false;
                        }
                        else
                        {
                            if (me.txtField.value != sValue)
                            {
                                me.setSelectedText(sValue)
                            }
                        }
                    }

                    //me.txtField.title = '00000' + sValue
                }
            }


            
            me.FieldValue = sValue;//+String.fromCharCode(evt.keyCode);
            //util.writeToLog(me.FieldValue+" "+evt.keyCode)


            // me.txtField.title = 'evt.keyCode=' + evt.keyCode;
            /*if(me.iSelectionBy==Constants.COMBO_BY_CODE)
            { // alert("--")
                me.LastValue="";
                me.iSelectionBy=Constants.COMBO_BY_NAME;
                me.getValues(true);
            }
           else*/
           // {   //alert("--222")
                //me.iSelectionBy=Constants.COMBO_BY_NAME;
                me.getValues();
           // }
           // if (evt) {
                //  evt.cancelBubble = true;
                // evt.returnValue = false;
         //   }
            //Event.stopPropagation();
        }
        else
            this.stopHandlingEvts = false;
    }
    this.stopEventHandling = function (isStopHandlingEvts) {
        this.stopHandlingEvts = isStopHandlingEvts;
    }
    this.movedown = function (iRow) {
        // alert('move down')
        /*var contentheight=me.clDiv.style.offsetHeight;
         if (me.iens6 && parseInt(me.clDiv.style.top) >= (contentheight*(-1)+100))
         me.clDiv.style.top = parseInt(contentobj.style.top)-16+"px"
         else if (me.ns4&&me.clDiv.top >= (contentheight*(-1)+100))
         me.clDiv.top -= speed
         */
        //alert(me.clDiv.scrollTop)

        var selectedDiv = me.getItemElement(iRow);

        if (selectedDiv) {
            var iRowY = ((iRow + 1) * this.iRowHeight);//parseInt(selectedDiv.style.height));
            //-parseInt(me.clDiv.scrollTop);
            var iDivHieght = parseInt(me.clDiv.style.height);
            var iDivTop = (iDivHieght - iRowY);

            if (iRowY > iDivHieght) {
                //  if (me.isIE)
                me.clDiv.style.top = iDivTop + "px";
                //  else
                //      me.clDiv.top = iDivTop + "px";


            }
            //writeToLog("iDivTop-d="+ me.clDiv.top+"  "+iRow);
        }
    }

    this.moveup = function (iRow) {
        /*var contentheight=me.clDiv.style.offsetHeight;
         if (me.iens6&&parseInt(me.clDiv.style.top)<=0)
         me.clDiv.style.top=parseInt(me.clDiv.style.top)+"px"
         else if (me.ns4&&me.clDiv.top<=0)
         me.clDiv.top+=speed
         */
        //moveupvar=setTimeout("moveup()",10)

        var selectedDiv = me.getItemElement(iRow);
        if (selectedDiv) {


            var iRowY = ((iRow + 1) * this.iRowHeight);// parseInt(selectedDiv.style.height));
            var iDivHieght = parseInt(me.clDiv.style.height);
            var iDivOffsetTop = 0;
            if (me.isIE)
                iDivOffsetTop = parseInt(me.clDiv.style.offsetTop);
            else
                iDivOffsetTop = parseInt(me.clDiv.offsetTop);


            var iDivTop = (iDivHieght - (iRowY));

            //var iDivTop =(iDivHieght-(iDivOffsetTop+iRowY)) ;

            //  writeToLog("iDivTop="+iDivTop+"  "+iDivOffsetTop);

            if (iDivTop <= 0) {


                // if (me.isIE)
                me.clDiv.style.top = iDivTop + "px";
                // else
                //      me.clDiv.top = iDivTop + "px";


            }


        }
    }


    this.onKeyUpHandler = function (evt) {
        if (!evt && window.event)
            evt = window.event;
        //alert("key up  "+evt.keyCode);
        if (evt.keyCode == 118) // not handling F7 event
        {
            me.txtField.blur();
            cross.cancelBubble(evt);
            return false;
        }
        else if (evt.keyCode == 115)
        {
          cross.cancelBubble(evt);
          return false;
        }

        me.handleKeyEvent(evt);
        if (evt.keyCode == 38 || evt.keyCode == 40)//38-up,     40-down,   9-tab,    (9+e.shiftKey==true) -shift+tab
        {

            cross.cancelBubble(evt);
             return false;
           // alert("0")
            //evt.cancelBubble = true;
            //evt.returnValue = false;
        }
        //        return false;
    };
    this.onKeyDownHandler = function (evt)
    {
        if (!evt && window.event)
            evt = window.event;
        //alert(evt.keyCode)



        //evt.keyCode==13 ||
        if(me.isAllowMultiSelect && (evt.keyCode == 46 || evt.keyCode ==8))// DEL
        {
         clMultiCombo.onClkDelete(me.sComboId,evt);
//          return false;
        }

       else  if (evt.keyCode == 113)// F@ works only for the master module
        {
          if(me.iMasterType>Constants.MASTER_MODULE && me.iMasterType< (Constants.MASTER_MODULE+Constants.MODULE_SLAB) )
          {
             //alert("000");
             if(me.iSelectionBy==Constants.COMBO_BY_NAME)
                me.iSelectionBy=Constants.COMBO_BY_CODE;
           else
                me.iSelectionBy=Constants.COMBO_BY_NAME;
              me.getValues(true);
               cross.cancelBubble(evt);
            return false;

        }
        }
        else if (evt.keyCode == 118) // 13-Enter , 116 - F5, 118 - F7
        {
            // disabling form submission when enter key pressed
            if (evt.keyCode == 118) // opening advance search dialog
            {
                cross.cancelBubble(evt);
                /* if (evt.preventDefault) // works for mozilla
                 evt.preventDefault();*/

                /*evt.cancelBubble = true;
                 evt.returnValue = false;
                 */
                //evt.keyCode = 0;
                //var objAdvSearch = new ComboAdvSearch();
                //alert(me.txtField.name)
               // var iGodownId = 0;
                //if (typeof openAdvSearchDlg == 'function')
                //{
                //    openAdvSearchDlg(me); // function from transutil.js
                //}
                }

            //me.setNodeSelected();
            return false;
        }
        else if (evt.keyCode == 38 || evt.keyCode == 40)//38-up,     40-down,   9-tab,    (9+e.shiftKey==true) -shift+tab
        {
            cross.cancelBubble(evt);
            return false;
            /*evt.cancelBubble = true;
             evt.returnValue = false;*/
        }
        //        return false;
    };

    this.onResizeHandler = function () {
        me.resizeDiv();
    }


    this.setOnLostScript = function (sScript) {

        if (this.onLostScript && this.onLostScript.length > 0)
            this.onLostScript = this.onLostScript + ";" + sScript;
        else
            this.onLostScript = sScript;
    }
    this.setOnFocusScript = function (sScript) {
        if (this.onFocusScript && this.onFocusScript.length > 0)
            this.onFocusScript = this.onFocusScript + ";" + sScript;
        else
            this.onFocusScript = sScript;
    }

    this.onFocusHandler = function (evt)
    {
        //alert("----")
        if (!evt && window.event)
            evt = window.event;


        if (!me.isMouseDown && !me.isPopUpVisible())
        {
            var sValue = me.txtField.value;// @@new
            if (sValue && sValue.length > 0)            // @@new
                me.searchByKey(sValue, true)// @@new
            else // @@new
                me.ShowPopUp();
        }

        me.isMouseDown = false;

       // alert(me.arCascadeFields)



        //  me.movedown(me.currentRow);
        // me.clDiv.style.top='40px';


        /* if(me.onFocusScript && me.onFocusScript.length>0)
         {    me.onLostScript=me.onLostScript.replace('this','me.txtField')
         eval(me.onLostScript)
         }*/

    }

    this.onTxtFocusHandler = function (evt) {
        if (!evt && window.event)
            evt = window.event;

        //me.txtField.style.cssText = "color:black !important;background-color:lightyellow";
        me.txtField.style.color = "black";
        me.txtField.style.backgroundColor = "lightyellow";
        //        me.txtField.style.backgroundColor = 'lightyellow';


      //
        if(me.arCascadeFields!=null && me.arCascadeFields[0]>0)
        {
           if(me.isCascadeChanged())
           {
            
            me.txtField.value='';
            me.removeAllItems();
              if(me.iMasterType==0
                      ||  me.iMasterType==Genernal_Master)
              {   // alert("com.focus="+me.iMasterType)
                  me.iParentSeqId=parseInt(me.txtField.id.substring(1));// YUG need to change
                //  alert(parseInt(me.txtField.id.substring(1)))
                  me.iMasterType2=me.iMasterType;
                  me.iMasterType=Genernal_SERVER_VALUES;
              }
           }
        }



        if (me.onFocusScript && me.onFocusScript.length > 0) {
            me.onFocusScript = me.onFocusScript.replace('this', 'me.txtField');

            if (me.onFocusScript.indexOf('handleProductEvents') >= 0
                || me.onFocusScript.indexOf('handleFocusEvent') >= 0)  // Note assumed event handlers  handleFocusEvent,handleProductEvents ll have first parameter as row index as well txt field name ll be like row[1][2] where [1]=row index
            {
                me.onFocusScript = me.onFocusScript.substring(0, me.onFocusScript.indexOf('(') + 1) + me.txtField.id.substring(me.txtField.id.indexOf('[') + 1, me.txtField.id.indexOf(']')) + me.onFocusScript.substring(me.onFocusScript.indexOf(','));
                // alert(me.onLostScript);
            }
        ///   alert(me.onFocusScript)
            eval(me.onFocusScript)
        }
    }

    this.onBlurHandler = function (evt)
    {
        if (!evt && window.event)
            evt = window.event;
        me.txtField.style.backgroundColor = '';//white

        if (me.iMasterType == Genernal_Narration)
        {
            /* //alert(me.txtField.value)
             // if(me.getSelectedItem().toLowerCase()!= me.txtField.value)
             me.checkAndAddItem(me.txtField.value,true)
             else
             me.checkAndAddItem(me.getSelectedItem(),true)*/
             me.setSelectedText(me.getItemText(me.currentRow));

        }
        else
        {
            if (me.isPopUpVisible()) {  // window.status="bbbbbbb="+me.currentRow

                //alert("me.currentRow333="+me.currentRow)
                //alert(me.txtField.innerHTML)
                me.setSelectedText(me.getItemText(me.currentRow));
                //  window.status="bbbbbbb sss="+me.currentRow
            }
        }


        if(me.isAllowMultiSelect)// assumed comboMultiSelect.js is included
        {
           clMultiCombo.addItem(me.sComboId,this.txtField.getAttribute("hiddenName"),false);
        }
        if (me.onLostScript && me.onLostScript.length > 0)
        {

            me.onLostScript = me.onLostScript.replace('this', 'me.txtField')


            if (me.onLostScript.indexOf('handleProductEvents') >= 0
                || me.onLostScript.indexOf('handleFocusEvent') >= 0)  // Note assumed event handlers  handleFocusEvent,handleProductEvents ll have first parameter as row index as well txt field name ll be like row[1][2] where [1]=row index
            {
                me.onLostScript = me.onLostScript.substring(0, me.onLostScript.indexOf('(') + 1) + me.txtField.id.substring(me.txtField.id.indexOf('[') + 1, me.txtField.id.indexOf(']')) + me.onLostScript.substring(me.onLostScript.indexOf(','));
                // alert(me.onLostScript);
            }

            //fun(10,20)
      //    alert(me.onLostScript)
            eval(me.onLostScript)


        }

        if(me.iSelectionBy==Constants.COMBO_BY_CODE)
        {

              var sValue=me.getSelectedElement().getAttribute("name");

              me.FieldValue=sValue;
              me.txtField.value = html_entity_decode(sValue);

              me.txtField.setAttribute("hidepopup",1);
              //me.isShowPopUp=false;// maintaine for txtfield-wise
             me.iSelectionBy=Constants.COMBO_BY_NAME;
             me.isSelectItemText=true;
              me.getValues(true);
               me.sLastValue="";

        }
       // alert("lost")
          me.HidePopUp();

    }

    this.onMouseDown = function (evt) {
        if (!evt && window.event)
            evt = window.event;

        me.currentRow = me.getIndexFromTag(this)
        me.isMouseDown = true;
        //alert("dd")
        me.HidePopUp();
        //alert("me.currentRow44444="+me.currentRow)
        me.setSelectedText(me.getItemText(me.currentRow))
        //  me.txtField=me.txtField;
        // alert(me.txtField.id)
        var agrs = new Array();
        agrs[0] = me.txtField;
        //arguments[arguments.length]=me.txtField;
        //me.removeTxtSelection();
        setTimeout(cross.createCallbackFunc(me, me.removeTxtSelection, agrs));
        //setTimeout(me.removeTxtSelection, 2)
    };

    /*this.createComboObjectCallback=function(obj, fn, args)
     {
     return new function()
     {

     var newargs = [args];
     for (var i = 0; i < arguments.length; i++)
     newargs.push(arguments[i]);
     fn.apply(obj, newargs);
     };
     };*/
    this.onMouseOver = function (evt) {
        if (!evt && window.event)
            evt = window.event;
        me.highlightItem(this);
        // if (me.isPopUpVisible())
        //    me.clDiv.com.focus();


        // me.movedown(me.currentRow);
        // me.clDiv.style.top   =me.clDiv.scrollTop;

    };
    this.onMouseOut = function (evt) {
        if (!evt && window.event)
            evt = window.event;
        // alert("our-"+me.txtField.id)
        me.setStyle(this, "aAutoComplete")// deselect the div from which mouse is out
    };

    this.setScope = function (iScope) {
        if (iScope == COMBO_APP_SCOPE) {
            me.isAppScope = true;
            //getComboInstance(this.txtField)
        }


    }

    this.getHiddenField = function () {

        return document.getElementById(me.txtField.id + "Id");
    };

    //  Advance search dialog. Displayed when F5 key is presssed in combobox.
    function ComboAdvSearch() {
        var advSearch = this;
        this.init = function () {
            if (!this.clDialogBox) {
                this.clDialogBox = new DialogBox("Advsrch", ":: Advance Search ::", 2, 2, 830, 430);
                var uiFactory = new UIfactory();

                var objDialogDiv = this.clDialogBox.getContentPane();
                objDialogDiv.className = "dialogContent1";
                //objDialogDiv.onkeyup = handleComboKeyUp;

                var objForm = uiFactory.createForm(document.body, null, null);
                uiFactory.addComponent(objDialogDiv, document.createElement("BR"));
                uiFactory.addComponent(objDialogDiv, document.createElement("BR"));
                uiFactory.addComponent(objDialogDiv, document.createElement("BR"));

                var objCenter = uiFactory.createTag("left");
                uiFactory.addComponent(objCenter, " Search Text :   ");

                var txtSearch = uiFactory.createInputTag("text", "advsrch", null, null, "50");
                var bAdvSrch = uiFactory.createInputTag("button", "bAdvSrch", "Refresh");
                uiFactory.addComponent(objCenter, txtSearch);
                uiFactory.addComponent(objCenter, "         ");
                uiFactory.addComponent(objCenter, bAdvSrch);

                uiFactory.addComponent(objCenter, document.createElement("BR"));
                uiFactory.addComponent(objCenter, document.createElement("BR"));
                var objFieldSet = uiFactory.createTag("FIELDSET")
                var objLegend = uiFactory.createTag("LEGEND", null, "dialogContent1", "Search Result")
                objFieldSet.appendChild(objLegend);

                uiFactory.addComponent(objCenter, document.createElement("BR"));
                var divTag = uiFactory.createTag("div", "divSearch", "divTag")
                objFieldSet.appendChild(divTag);
                uiFactory.addComponent(objCenter, objFieldSet);

                //uiFactory.addComponent(objCenter,objFieldSet);
                //alert(objCenter.innerHTML);
                uiFactory.addComponent(objDialogDiv, "         ");
                uiFactory.addComponent(objDialogDiv, objCenter);

                //        bAdvSrch.onclick=this.setNodeSelected;
                var bOk = uiFactory.createInputTag("button", "bOk", "    Ok   ");
                //      bOk.onclick=this.setNodeSelected;

                var bCancel = uiFactory.createInputTag("button", "bCancel", "Cancel ");
                bCancel.onclick = advSearch.clDialogBox.hide;

                var objDiv = uiFactory.createTag("div", "buttonDiv");
                objDiv.style.position = "absolute";
                objDiv.style.bottom = "15px";
                objDiv.style.right = "5px";

                uiFactory.addComponent(objDiv, bOk);
                uiFactory.addComponent(objDiv, bCancel);
                uiFactory.addComponent(objDialogDiv, objDiv);

                this.clDialogBox.addFormContent(objForm, objDialogDiv);
                this.clDialogBox.setOnClose(me.handleDlgCloseEvent);
                this.clDialogBox.show();
            }
            else
                this.clDialogBox.show();
        }
        this.init();
    }





} /// combo class end class..............................

 /*function Ob() {
    if (document.createEventObject) {
        var Ka = document.createEventObject();
        Ka.ctrlKey = true;
        Ka.keyCode = 70;
        document.fireEvent("onkeydown", Ka)
    }
}


function getRequestObject1() {
    if (!xmlHttpReq) {
        try {
            xmlHttpReq = new window.ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                xmlHttpReq = new window.ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (sc) {
                xmlHttpReq = null;
            }
        }
        if (!xmlHttpReq && typeof window.XMLHttpRequest != "undefined")
            xmlHttpReq = new window.XMLHttpRequest()
    }
    return xmlHttpReq;
}*/
function html_entity_decode(str) {
    /* var element=document.getElementById('entyconv');
     if(!element)
     {
     element=document.createElement("textarea");
     element.setAttribute("id","entyconv");
     //  element.style.display='hidden';
     document.body.appendChild(element);
     //alert('4')
     }
     element.innerHTML=str.replace(/</g,"&lt;").replace(/>/g,"&gt;");
     return element.value;*/
    return str;
}

/*
 Refer : Crossbrowser.js for the function
 function createObjectCallback(obj, fn, arguments)
 {
 return function()
 {

 var newargs = [args];
 for (var i = 0; i < arguments.length; i++)
 newargs.push(arguments[i]);

 fn.apply(obj, newargs);
 };
 }
 */

//added by yugandhar
var objComboInstances = new Array(); //saving combobox instances based on combobox id
var objComboInstanceScope = new Array(); //saving combobox instances based on combobox id
var objSelectedTags = new Array(); //saving selected tags based on combobox id
//var objCurrentTxtField=null;; //saving combobox instances based on combobox id
var objIFrameDiv = null; //creating common iframe tag to overlay combo popup on select box in IE6
//added by yugandhar

UnInstallAC = function (fld)
{
    // alert("--")
    if (fld.parentNode) {
        var clHiddenTag;
        var sHiddenName = fld.getAttribute('hiddenName');
        if (sHiddenName)
            clHiddenTag = document.getElementById(fld.id + "Id"); //asummption....
        else
            clHiddenTag = document.getElementById(fld.name + 'Id');
        if (clHiddenTag)
            fld.parentNode.removeChild(clHiddenTag);
    }

    fld.value = "";
//    if(fld.instanceid)
        cross.removeInstanceFromPool(objComboInstances, fld.id);

    fld.removeAttribute("hiddenName");
    fld.removeAttribute("mastertype");
    fld.removeAttribute("targetmodule");
    fld.removeAttribute("selectionby");
    fld.removeAttribute("selectiontype");
    fld.removeAttribute("accounttype");
    fld.removeAttribute("appendscrollId");
    fld.removeAttribute("parentseqid");

    fld.onfocus =fld.onblur =fld.onkeydown=fld.onkeyup = null;
    fld.autocomplete = "off";

}


function setOptionControl  (iMastertype, iSelectionby, iSelectiontype, iAccounttype, clForm, clFieldElement, sHiddenName, onFocus, onLost, sscrollId, sURL)
{
    if (clFieldElement)
    {
        clFieldElement.setAttribute("mastertype", iMastertype)
        clFieldElement.setAttribute("selectionby", iSelectionby)
        clFieldElement.setAttribute("selectiontype", iSelectiontype)
        clFieldElement.setAttribute("accounttype", iAccounttype)

        clFieldElement.setAttribute("autocomplete", "off")
        clFieldElement.setAttribute("appendscrollId", "false");
        clFieldElement.setAttribute("isOtherInfo", "false");

        InstallAC(clForm, clFieldElement, sHiddenName, sURL, onFocus, onLost, null, null, null, sscrollId)
    }
}


InstallAC=function (form, fld, sHiddenName, url, onFocus, onLost, sKey,
                    sNamesAsArray, sIdsAsArray, sScrollId, sDefaultValue, iDefaultKey,
                    iParentSeqId, sSelectValue, sRefTable, sCondition, sColAttributeNames,
                    sAttrNames, sAttrValues, clAttributes,sEmptyValue,sCascadeFields,isAllowMultiSelect,
                    isAllowToAddItems)
{
  //  alert("sCascadeFields="+sCascadeFields)
    if (fld)
    {

    if (!fld)
        return;
    //  alert(iParentSeqId)
    var oComboBox = new SComboBox(form, fld, sHiddenName, url, onFocus,
            onLost, sKey, sNamesAsArray, sIdsAsArray, clAttributes,
            sScrollId, null, iParentSeqId, sRefTable, sCondition,
            sColAttributeNames, sAttrNames, sAttrValues,sEmptyValue,sCascadeFields,isAllowMultiSelect,isAllowToAddItems);

    oComboBox.init();
   // fld.setAttribute("instance", oComboBox);
    objComboInstances[fld.id] = oComboBox;
    InstallTableAc(fld.id, fld.id, sHiddenName, sDefaultValue, iDefaultKey, iParentSeqId, sSelectValue);//, sRefTable,sCondition


    sServlet = "search";
    oComboBox.sServlet = sServlet;


    var Sb = "";
    if (!oComboBox.lang || oComboBox.lang.length < 1)
        oComboBox.lang = "en";
    oComboBox.lang = util.encodeURI(oComboBox.lang);


    if (objIFrameDiv == null)
    {
        objIFrameDiv = document.createElement("IFRAME");
        objIFrameDiv.src = "";  // removed # as in chrome source url is getting called twice.
        objIFrameDiv.style.position = "absolute";
        objIFrameDiv.style.display = "none";
        document.body.appendChild(objIFrameDiv);
    }
      return oComboBox;
    }
   else
     return null;

}



  // TODO transfer this to contants.js


var Genernal_StaticValues = 56;  // dont store id and do not call servlet
var Genernal_Narration = 57;  // dont store id and do not call servlet  but add new items

var Genernal_Master = 58;        // store id and do not call servlet

var Genernal_SCRIPTValues = 59;        // store id and do not call servlet
var Genernal_SERVER_VALUES = 170;        // connect to the server only once and get values
var LISTMASTER = 2048;

var COMBO_APP_SCOPE = 1;


/*
 function FComboBox(lform ,ltxtField,sComboId,iMasterType,iSelectionBy,iSelectionType,iAccountType)
 {
 this.iMasterType=iMasterType;
 this.iSelectionBy=iSelectionBy;
 this.iSelectionType=iSelectionType;
 this.iAccountType=iAccountType;


 }
 FComboBox.prototype = new SComboBox;
 */


function InstallTableAc(txtFieldId, parentTxtFieldid, sHiddenFieldName, sDefaultValue, iDefaultKey, iParentSeqId, sSelectValue) {
    //alert(txtFieldId+","+parentTxtFieldid+","+sHiddenFieldName)
    var txtField = document.getElementById(txtFieldId)
    if (txtField)                                                             // used in case of add
    {
        if(!iParentSeqId)
           iParentSeqId=0;
        txtField.setAttribute('hiddenName', sHiddenFieldName);
        txtField.setAttribute('instanceid', parentTxtFieldid);
        txtField.setAttribute('selectedIndex', -1);
        txtField.setAttribute("parentseqid", iParentSeqId);
        txtField.onkeyup = onComboKeyUpHandler;
        txtField.onkeydown = onComboKeyDownHandler;
        txtField.onblur = onComboBlurHandler;
        txtField.onfocus = onComboTxtFocusHandler;
        txtField.autocomplete = "off";

        var comboInstance = getComboInstance(parentTxtFieldid);
        comboInstance.createHiddenField(txtField);
        //alert("sDefaultValue==>"+sDefaultValue+","+comboInstance.iMasterType)
        if (sDefaultValue || iDefaultKey >= 0 || sSelectValue) {
            //var comboInstance = getComboInstance(parentTxtFieldid);
            comboInstance.initTextField(txtField, -1);

            //alert(comboInstance.iMasterType)
            if (comboInstance.iMasterType == Genernal_StaticValues ||  comboInstance.iMasterType==0)
            {
                //alert("comboInstance.getItemCount() "+comboInstance.getItemCount())
              //  alert(sDefaultValue+"==="+sSelectValue)
                if (sSelectValue) // used in case of editing
                {
                    if(typeof sSelectValue=="object")
                        addMultiComboValues(txtFieldId,sHiddenFieldName,sSelectValue);
                    else
                        comboInstance.checkAndAddItem(sSelectValue, true);
                }
                else  if (comboInstance.getItemCount() >=1)
                    comboInstance.setSelectedIndex(1);
                //else if(comboInstance.getItemCount() >0)
                  // comboInstance.setSelectedIndex(0);

            }
           else
            {
                //alert(sDefaultValue+"-----"+iDefaultKey+"--------"+sSelectValue+"----"+(typeof sSelectValue))
                if (sSelectValue) // used in case of editing
                {
                    if(typeof sSelectValue=="object")
                        addMultiComboValues(txtFieldId,sHiddenFieldName,sSelectValue);
                    else
                        comboInstance.checkAndAddItem(sSelectValue, true);
                }
                else if (sDefaultValue) // used in case of add
                    comboInstance.checkAndAddItem(sDefaultValue, true);
                else if (iDefaultKey >= 0) // used in case of add
                        comboInstance.setSelectedMasterId(iDefaultKey);
            }

            //  alert("end"+comboInstance.getSelectedMaster())
        }
        else if(objSelectedTags && objSelectedTags[txtFieldId]!=null)
        {               
//            alert("making null  "+txtFieldId)
            objSelectedTags[txtFieldId]=null;
        }
        /*  else
         {    // alert(comboInstance.getItemCount())
         if(comboInstance.getItemCount()>0)
         comboInstance.setSelectedIndex(0);
         }*/

    }

    function addMultiComboValues(txtFieldId,sHiddenFieldName,sMultiSelectValues)
    {
        var sArrIds=sMultiSelectValues[0];
        var sArrNames=sMultiSelectValues[1];

        for(var i=0;i < sArrNames.length;i++)
        {
            //alert("multi-- "+sMultiSelectValues[i])                 
            clMultiCombo.addItem(txtFieldId,sHiddenFieldName,true,sArrIds[i],sArrNames[i]);
        }
    }
}


function onComboKeyUpHandler(evt) {
    // alert("combo2 keyup")

    evt = evt ? evt : window.event;
    var objSrc = evt.srcElement ? evt.srcElement : evt.target;
    var txtField = objSrc

    var comboInstance = objComboInstances[txtField.getAttribute('instanceid')];//txtField.getAttribute('instance')

    comboInstance.onKeyUpHandler(evt);


}
function onComboKeyDownHandler(evt) {

    evt = evt ? evt : window.event;
    var objSrc = evt.srcElement ? evt.srcElement : evt.target;
    var txtField = objSrc
    var comboInstance = objComboInstances[txtField.getAttribute('instanceid')];//txtField.getAttribute('instance')
    //comboInstance.initTextField(txtField,-1);
    return comboInstance.onKeyDownHandler(evt);
}

function onComboBlurHandler(evt) {

    evt = evt ? evt : window.event;
    var objSrc = evt.srcElement ? evt.srcElement : evt.target;

    var txtField = objSrc

    var comboInstance = objComboInstances[txtField.getAttribute('instanceid')];//txtField.getAttribute('instance')
    //  comboInstance.initTextField(txtField,txtField.getAttribute('selectedIndex'));

    comboInstance.onBlurHandler(evt);


}

function onComboTxtFocusHandler(evt) {

    evt = evt ? evt : window.event;
    var objSrc = evt.srcElement ? evt.srcElement : evt.target;
    var txtField = objSrc

    //alert('d')

    var comboInstance = objComboInstances[txtField.getAttribute('instanceid')];//txtField.getAttribute('instance')
    // alert('---'+txtField.getAttribute('selectedIndex'))
    comboInstance.initTextField(txtField, txtField.getAttribute('selectedIndex'));
    comboInstance.onTxtFocusHandler(evt);

}

/* function onComboMouseDownHandler(evt)
 {

 evt = evt ? evt : window.event;
 var objSrc = evt.srcElement ? evt.srcElement : evt.target;

 var txtField=objSrc

 var comboInstance=objComboInstances[txtField.getAttribute('instanceid')];//txtField.getAttribute('instance')
 //  comboInstance.initTextField(txtField,txtField.getAttribute('selectedIndex'));

 comboInstance.onBlurHandler(evt);



 }*/


function getComboInstance(sTextFieldId)
{
    var clElement = document.getElementById(sTextFieldId);
    if (clElement)
    {

        if ( typeof(clElement.getAttribute('instanceid')) == 'string')
        {
            var objcombo = objComboInstances[clElement.getAttribute('instanceid')]
            if (objcombo)
                objcombo.initTextField(clElement, clElement.getAttribute('selectedIndex'))
            return objcombo;
        }
        else
            return objComboInstances[sTextFieldId]
    }
    else
        return null;
}

function removeAllComboInstances()
{
    var key;
    var value;
    for (key in objComboInstances)
    {
        removeComboInstance(key);
        /*value=objComboInstances[key];
         if(value && !value.isAppScope)  // in case not defined then do not delete
         {
         delete objComboInstances[key];
         delete objSelectedTags[key];
         value=null;
         }*/
    }
}

function removeComboInstance(key)
{
    var value = objComboInstances[key];
    if (value && !value.isAppScope)  // in case not defined then do not delete
    {
        delete objComboInstances[key];

        delete objSelectedTags[key];

        value = null;
    }

}

function getComboHiddenFld(objFld)
{
    var objComboInst = getComboInstance(objFld.id);
    if (objComboInst)
        return objComboInst.getHiddenField();
    return null;
}








