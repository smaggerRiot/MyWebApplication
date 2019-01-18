 //alert("included")
var tabbedPane=new function()
{
    this.getTabId=function(sTabpaneId)
    {
        return sTabpaneId+"tab";
    };

    this.getTabContentId=function(sTabpaneId)
    {
        return sTabpaneId+"content";
    };

    //returns selected tabindex based on the tab display order
    this.getSelectedIndex=function(sTabpaneId)
    {
        var objTabbedpane=document.getElementById(sTabpaneId);
        var ulTabs=objTabbedpane.getElementsByTagName("UL")[0];
        var liTabs=ulTabs.childNodes;
        for(var i=0; i < liTabs.length; i++)
        {
            if(liTabs[i].className.indexOf("Active")!=-1)
            {
                return i;
            }
        }
        return 0;
//        return parseInt(document.getElementById(this.getTabId(sTabpaneId)+"0").parentNode.getAttribute("SelTabIndex"));
    };

    /*//returns selected tabid based on the order in which it is created
    this.getSelectedTabId=function(sTabpaneId)
    {
        var objTabbedpane=document.getElementById(sTabpaneId);
        var ulTab=objTabbedpane.getElementsByTagName("UL")[0];
          return parseInt(ulTab.getAttribute("SelTabIndex"));
    };*/


    //tab onclick event handler
    this.selectTab=function(sTabpaneId,iTabIndex)
    {
        //alert(sTabpaneId+","+iTabIndex)
        //tabpaneType
        if(this.isDisabledTab(sTabpaneId,iTabIndex))
            return;

        var objTabbedpane=document.getElementById(sTabpaneId);
        var isTabsAtBottom=objTabbedpane.getAttribute("TabsAtBottom")==1;
        var iTabbedpaneType=objTabbedpane.getAttribute("TabpaneType"); //1 for simple type, 0 for img type
        var sTabId = this.getTabId(sTabpaneId);
        var sTabContentId = this.getTabContentId(sTabpaneId);
        var ulTabParent=document.getElementById(sTabId+iTabIndex).parentNode;
        var objElement=document.getElementById(sTabId+ulTabParent.getAttribute("SelTabIndex"));

        if(ulTabParent.getAttribute("SelTabIndex")>=0 && objElement)
        {
            this.updateSelTab(iTabbedpaneType,sTabId+ulTabParent.getAttribute("SelTabIndex"),false,isTabsAtBottom,false);
            this.setClass(sTabContentId+ulTabParent.getAttribute("SelTabIndex"),"TabberTabHide",isTabsAtBottom,false);

            //objElement.className="TabberTabInactive";
//            document.getElementById(sTabContentId+ulTabParent.getAttribute("SelTabIndex")).className="TabberTabHide";
//            objElement=document.getElementById(sTabContentId+ulTabParent.getAttribute("selTabIndex"));
            //alert(document.getElementById(sTabId+ulTabParent.getAttribute("selTabIndex")).className)
        }


//        this.updateSelTab(iTabbedpaneType,sTabId+iTabIndex,"TabberActive",isTabsAtBottom,false);
        this.updateSelTab(iTabbedpaneType,sTabId+iTabIndex,true,isTabsAtBottom,true);
        if(objTabbedpane.getAttribute("CreateContentBorder")==1)
            this.setClass(sTabContentId+iTabIndex,"TabberTab",isTabsAtBottom,true);
        else
            this.setClass(sTabContentId+iTabIndex,"noBorderTabberTab",isTabsAtBottom,false);

        ulTabParent.setAttribute("SelTabIndex",iTabIndex);
    };

    this.getSelectedTabIndex=function(sTabpaneId)
    {
        var objTabpane=document.getElementById(sTabpaneId);
        var ulTabParent=cross.getFirstElement(objTabpane.childNodes);
        return ulTabParent.getAttribute("SelTabIndex");
    };

    this.isTabDisabled=function(sTabpaneId,iTabIndex)
    {
        var sTabId = this.getTabId(sTabpaneId);
        var objTab=document.getElementById(sTabId+iTabIndex);
        return objTab.getAttribute("isDisabled")=="true";
    }

    //local function for updating tab styles
    this.updateSelTab=function(iTabbedpaneType,sElementId,isActive,isTabsAtBottom,isAddTabBottomCSS)
    {
        if(iTabbedpaneType==1) //simple tab
        {
            var objTab=document.getElementById(sElementId);
            var sClassName;
            if(objTab.getAttribute("isDisabled")=="true")
                sClassName="TabberTabDisabled";
            else if(isActive)
                sClassName="TabberActive"
            else
                sClassName="TabberTabInactive"
            
            this.setClass(sElementId,sClassName,isTabsAtBottom,isAddTabBottomCSS);
            ///this.setClass(sElementId,(isActive?"TabberActive":"TabberTabInactive"),isTabsAtBottom,isAddTabBottomCSS);
        }
        else
        {
            var objCells=document.getElementById(sElementId).rows[0].cells;
            var sTheme;
            if(typeof parent.window["getFromBuffer"]=="function")
                sTheme=parent.getFromBuffer("theme");
            else
                sTheme="default/";

            if(isActive)
            {
                //alert(top.getFromBuffer("theme"))
                objCells[0].getElementsByTagName("IMG")[0].src=sTheme+"res/images/tab_left_active.gif";
                objCells[1].style.backgroundImage="url("+sTheme+"res/images/tab_bg_active.gif)";
                objCells[2].getElementsByTagName("IMG")[0].src=sTheme+"res/images/tab_right_active.gif";
            }
            else
            {
                objCells[0].getElementsByTagName("IMG")[0].src=sTheme+"res/images/tab_left_inactive.gif";
                objCells[1].style.backgroundImage="url("+sTheme+"res/images/tab_bg_inactive.gif)";
                objCells[2].getElementsByTagName("IMG")[0].src=sTheme+"res/images/tab_right_inactive.gif";
            }
        }
    };

    //sets class for tabs that are different for top and bottom tabs. For bottom tabs, prefix 'b' will be added before classnames
    this.setClass=function(sElementId,sClassName,isTabsAtBottom,isAddTabBottomCSS) //local function
    {
        if(isTabsAtBottom && isAddTabBottomCSS)
            document.getElementById(sElementId).className="b"+sClassName;
        else
            document.getElementById(sElementId).className=sClassName;
    };

    this.addTab=function(sTabbedPaneId,sTitle,sContent,sUrl,iInsertAt,iRefTabIndex,isCreateCheckbox,fnOnSelect,isChecked)
    {
        //alert(sTabbedPaneId+"::"+sTitle)
        var objTabbedpane=document.getElementById(sTabbedPaneId);
        var ulTabsContainer=objTabbedpane.childNodes[0];
        while(ulTabsContainer.nodeName!="UL")
            ulTabsContainer=ulTabsContainer.nextSibling;
        if(!ulTabsContainer)
            return;

        if(!iRefTabIndex)
            iRefTabIndex=0;

        var iTabbedpaneType=objTabbedpane.getAttribute("TabpaneType"); //1 for simple type, 0 for img type
        var iNewTabIndex;
        if(objTabbedpane.getAttribute("actualTabIndex"))
            iNewTabIndex=parseInt(objTabbedpane.getAttribute("actualTabIndex"))+1;
        var objNewTab;
        var objPrevTab=null;
        if(iTabbedpaneType==1)
        {
            var liTabs=ulTabsContainer.getElementsByTagName("LI");
            if(!iNewTabIndex)
                iNewTabIndex=liTabs.length;
            if(iInsertAt>=0 && iInsertAt < liTabs.length)
            {
                objPrevTab=liTabs[iInsertAt];
                //alert(iInsertAt+","+objPrevTab.id)
            }

            objNewTab=liTabs[iRefTabIndex].cloneNode(true);
            var objAnchor=objNewTab.getElementsByTagName("A")[0];

            cross.getFirstElement(objAnchor.childNodes).innerHTML=((isCreateCheckbox)?tabbedPane.addCheckBox(iNewTabIndex,sTabbedPaneId,fnOnSelect,isChecked):"")+sTitle;//sTitle;
            objAnchor.onclick=function()
            {
                tabbedPane.selectTab(sTabbedPaneId,iNewTabIndex);
            };
        }
        else
        {
            if(!iNewTabIndex)
                iNewTabIndex=ulTabsContainer.childNodes.length;
            if(iInsertAt>=0 && iInsertAt < ulTabsContainer.childNodes.length)
                objPrevTab=ulTabsContainer.childNodes[iInsertAt];
            objNewTab=ulTabsContainer.childNodes[iRefTabIndex].cloneNode(true);


            objNewTab.tBodies[0].rows[0].cells[1].innerHTML=((isCreateCheckbox)?tabbedPane.addCheckBox(iNewTabIndex,sTabbedPaneId,fnOnSelect,isChecked):"")+sTitle;
            objNewTab.onclick=function()
            {
                tabbedPane.selectTab(sTabbedPaneId,iNewTabIndex);
            };
        }

        objNewTab.id=sTabbedPaneId+"tab"+iNewTabIndex;
        objNewTab.setAttribute("tabIndex",iNewTabIndex);
        if(objPrevTab)
            ulTabsContainer.insertBefore(objNewTab,objPrevTab);
        else
            ulTabsContainer.appendChild(objNewTab);

        var objDiv=ulTabsContainer.nextSibling.childNodes[iRefTabIndex];//document.getElementById(sTabbedPaneId+"content"+(iNewTabIndex-1));
        var objNewContentDiv=objDiv.cloneNode(true);
        objNewContentDiv.id=sTabbedPaneId+"content"+iNewTabIndex;

        var objDivParent=objDiv.parentNode;
        objDivParent.appendChild(objNewContentDiv);
        objTabbedpane.setAttribute("actualTabIndex",iNewTabIndex);

        if(sContent)
        {
            objNewContentDiv.innerHTML=sContent;
            initAllCombos=null;
            loadResources(objNewContentDiv,util.onScriptsLoad);
        }
        else
            objNewContentDiv.innerHTML="New Tab Content";

        tabbedPane.selectTab(sTabbedPaneId,iNewTabIndex);


        /*var dvContents=ulTabsContainer.nextSibling;
        while(dvContents.nodeName!="DIV")
            dvContents=dvContents.nextSibling;
        if(!dvContents)
            return;*/
    };

    /*
    *  callback function from Dynamicresources.js
    * */
    /*this.initCombo = function()
    {
        initAllCombos();
    };*/

    this.setTabTitle=function(sTabbedPaneId,iTabIndex,sTitle)
    {
        var liTab=document.getElementById(this.getTabId(sTabbedPaneId)+iTabIndex);
//        liTab.getElementsByTagName("A")[0].innerHTML=sTitle;
        var span=liTab.getElementsByTagName("A")[0].childNodes[0];
        span.innerHTML=sTitle;
    };

    this.getTab=function(sTabbedPaneId,iTabIndex)
    {
        return document.getElementById(this.getTabId(sTabbedPaneId)+iTabIndex);
    };

    this.getSelectedTab=function(sTabbedPaneId)
    {
        var sTabId = this.getTabId(sTabbedPaneId);;
        var objTab=document.getElementById(sTabId+"0");
        return this.getTab(sTabbedPaneId,objTab.parentNode.childNodes.length-1);        
    };

    this.getTabTitle=function(sTabbedPaneId,iTabIndex)
    {
        var liTab=document.getElementById(this.getTabId(sTabbedPaneId)+iTabIndex);
        return cross.getFirstElement(cross.getFirstElement(liTab.childNodes).childNodes).innerHTML;
    };


    this.getActualTabIndex=function(sTabbedPaneId,iTabIndex)
    {

        //var objTabbedPane=document.getElementById(sTabbedPaneId);
//        alert(this.getTabId(sTabbedPaneId)+iTabIndex)
        var objTabpane=document.getElementById(sTabbedPaneId);
        var ulTabParent=cross.getFirstElement(objTabpane.childNodes);//document.getElementById(this.getTabId(sTabbedPaneId)+iTabIndex).parentNode;
        //alert("getActualTabIndex "+getElementAt(ulTabParent.childNodes,iTabIndex).getAttribute("tabIndex"));
        return cross.getElementAt(ulTabParent.childNodes,iTabIndex).getAttribute("tabIndex");//ulTabParent.childNodes[iTabIndex].getAttribute("tabIndex");
    };

    this.removeTabByIndex = function(thisObj,sTabbedPaneId)
    {
        //iTabId=thisObj.parentNode.parentNode.getAttribute("tabIndex");
        var iTabIndex=tabbedPane.getChildrenIndex(thisObj.parentNode.parentNode);
        var iTabId=tabbedPane.getActualTabIndex(sTabbedPaneId,iTabIndex);
        var objTabbedpane=document.getElementById(sTabbedPaneId);
        if(this.beforeRemove(sTabbedPaneId,iTabId,objTabbedpane.getAttribute("beforeCloseHandler")))
            this.removeTab(sTabbedPaneId,iTabId);
    };

    this.beforeRemove=function(sTabpaneId,iTabId,sBeforeCloseHandler)
    {
        if(sBeforeCloseHandler != null)
            return eval(sBeforeCloseHandler).apply(this,[sTabpaneId,iTabId]);
        return true;
    };

    //function used for for deleting tab. Tab and tab-content related html will be deleted from DOM tree.
    //getActualTabIndex(getSelectedIndex()) function value should be passed as iTabid parameter value
    this.removeTab=function(sTabpaneId,iTabId)
    {
        var objTabbedpane=document.getElementById(sTabpaneId);
        
        //if(this.beforeRemove(sTabpaneId,iTabId,objTabbedpane.getAttribute("beforeCloseHandler")))
        {
            var sTabId = this.getTabId(sTabpaneId);
            var sTabContentId = this.getTabContentId(sTabpaneId);

            if(!objTabbedpane.getAttribute("actualTabIndex"))
            {
                var liTabs=objTabbedpane.getElementsByTagName("UL")[0].childNodes;
                objTabbedpane.setAttribute("actualTabIndex",liTabs.length);
            }

            if(document.getElementById(sTabId+iTabId))
            {
                var objNextTab=document.getElementById(sTabId+iTabId).nextSibling;
                if(!objNextTab)
                    objNextTab=document.getElementById(sTabId+iTabId).previousSibling;
                if(objNextTab)
                    this.selectTab(sTabpaneId,objNextTab.getAttribute("tabIndex"));
                else
                {
                    alert("Default tab cannot be deleted");
                    return;
                }
                //removing tab and tab contents
                this.removeNode(document.getElementById(sTabId+iTabId));
                var objContentDiv=document.getElementById(sTabContentId+iTabId);
                unloadResources(objContentDiv);
                this.removeNode(objContentDiv);

            }


             var sHandlerFn  = objTabbedpane.getAttribute("onCloseHandler");
            if(sHandlerFn != null)
                eval(sHandlerFn).apply(this,[sTabpaneId,iTabId]);
        }
    };

    this.removeNode=function(objElement)
    {
        var objParentNode=objElement.parentNode;
        objParentNode.removeChild(objElement);
    };

    this.getTabIndex=function(objTab,iTabIndex)
    {
        return objTab.getAttribute("tabIndex");
    };
    //function used for enabling and disabling tabs
    this.enableOrDisable=function(isEnable,sTabpaneId,iTabIndex)
    {
//        alert("enableOrDisable")
        var sTabId = this.getTabId(sTabpaneId);
        var objTab=document.getElementById(sTabId+iTabIndex);
        if(objTab)
        {
            var objTabContent = document.getElementById(this.getTabContentId(sTabpaneId)+iTabIndex);
            var elemInput=objTabContent.getElementsByTagName("INPUT");
            var elemSelect=objTabContent.getElementsByTagName("SELECT"),i;
//             alert(elemSelect+"=="+elemSelect.length)
            if(isEnable)
            {
                for(i=0; i < elemInput.length; i++)
                {
                    if(elemInput[i].getAttribute("isIgnore"))
                    {
                        elemInput[i].disabled = false;
                        elemInput[i].removeAttribute("isIgnore");
                    }
                }
                for(i=0; i < elemSelect.length; i++)
                {
                    if(elemSelect[i].getAttribute("isIgnore"))
                    {
                        elemSelect[i].disabled = false;
                        elemSelect[i].removeAttribute("isIgnore");
                    }
                }

                if(objTab.getAttribute("isDisabled"))
                    objTab.removeAttribute("isDisabled");
                objTab.getElementsByTagName("A")[0].style.color="";


                var iActiveTabIndex=tabbedPane.getSelectedIndex(sTabpaneId);
                if(iActiveTabIndex==iTabIndex)
                    objTab.className="TabberActive";
                else
                    objTab.className="TabberTabInactive";

//                if(util.hasClass(objTab,"disabledTab"))
//                    util.removeClass(objTab,"disabledTab");
            }
            else
            {
                objTab.setAttribute("isDisabled",true);
                objTab.getElementsByTagName("A")[0].style.color="#AAA";
                objTab.className="TabberTabDisabled";


                //util.addClass(objTab,"disabledTab");


                for( i=0; i < elemInput.length; i++)
                {
                    if(!elemInput[i].disabled)
                    {
                        elemInput[i].disabled=true;
                        elemInput[i].setAttribute("isIgnore",true);
                    }
                }
                 for( i=0; i < elemSelect.length; i++)
                {
                    if(!elemSelect[i].disabled)
                    {
                        elemSelect[i].disabled = true;
                        elemSelect[i].setAttribute("isIgnore",true);
                    }
                }
            }
        }
    };

    this.isDisabledTab=function(sTabpaneId,iTabIndex)
    {
        var objTab=document.getElementById(this.getTabId(sTabpaneId)+iTabIndex);
        return objTab.disabled;
    };

    this.showHide=function(isShow,sTabpaneId,iTabIndex)
    {
        var sTabId = this.getTabId(sTabpaneId);;
        var objTab=document.getElementById(sTabId+iTabIndex);
        if(objTab)
        {
            if(isShow)
                objTab.style.display="inline";
            else
                objTab.style.display="none";
        }
    };

    this.getTabCount=function(sTabpaneId)
    {
        var sTabId = this.getTabId(sTabpaneId);;
        var objTab=document.getElementById(sTabId+"0");
        //alert(objTab.parentNode.childNodes.length);
        return objTab.parentNode.childNodes.length;
    };

    this.onTabMouseover = function(objLi,sTabpaneId,iTabIndex)
    {
        iTabIndex=tabbedPane.getChildrenIndex(objLi);
        var iTabCount=tabbedPane.getTabCount(sTabpaneId);
        var objTabbedpane=document.getElementById(sTabpaneId);
        var sIgnoreCloseIndexes=objTabbedpane.getAttribute("IgnoreCloseIndexes");
        if(sIgnoreCloseIndexes!=null)
        {
            var arrIgnoreCloseIndexes=sIgnoreCloseIndexes.split(",");
            for(var i=0; i < arrIgnoreCloseIndexes.length; i++)
            {
                if(arrIgnoreCloseIndexes[i]==iTabIndex)
                    return;
                else if(arrIgnoreCloseIndexes[i]==999 && (iTabIndex==iTabCount-1)) //'IgnoreCloseIndexes' will contain '999' to ignore last tab
                    return;
            }
        }
        
//        var imgId = objLi.childNodes[1];
        var arrChilds = cross.getChildren(objLi);
        arrChilds = cross.getChildren(arrChilds[1]);
        arrChilds[0].style.display = 'inline-block';
    };

    this.onTabMouseout = function(objLi,sTabpaneId,iTabIndex)
    {
        var arrChilds = cross.getChildren(objLi);
        arrChilds = cross.getChildren(arrChilds[1]);
        arrChilds[0].style.display = ' none';
    };

    this.checkTab = function(elmChk,iTabIndex,sTabpaneId)//,fnOnClick
    {
        var isChecked = elmChk.checked;
        tabbedPane.enableOrDisable(isChecked,sTabpaneId,iTabIndex);

         /*if(fnOnClick)
            fnOnClick(isChecked,iTabIndex,sTabpaneId);*/
    };

    this.addCheckBox = function(iTabIndex,sTabpaneId,fnOnSelect,isChecked)
    {
        var sText = "<input type='checkbox' class='chkBox' id='chk["+iTabIndex+"]_"+sTabpaneId+ "' onclick='tabbedPane.checkTab(this,"+iTabIndex+","+sTabpaneId+","+fnOnSelect+")' "+(isChecked?"checked":"")+" >";
        return sText;
    };

    this.getChildrenIndex=function(ele)
    {
        //IE is simplest and fastest
        if(ele.sourceIndex)
        {
            return ele.sourceIndex - ele.parentNode.sourceIndex - 1;
        }
        //other browsers
        var i=0;
        while(ele = ele.previousElementSibling){
            i++;
        }
        return i;
    }

};


function enableTab(objChkbox,sTabpaneId,iTabIndex)
{       
    tabbedPane.enableOrDisable(!objChkbox.checked,sTabpaneId,iTabIndex)
}
