/*namespace("Focus.crm.fbooks.common");*/
var clFBooksWizard=new function()
{

    var switchBtn=false;
    var me = this;
    this.initRoles = function (isFinishBtDisble) {
        //  this.enableButtonOrSteps(3);
    };



    /*TODO this method is use for Next Button
     * */
    this.onClkNext = function (isSkipValidation)
    {
        var iCurrentSteps=parseInt(document.getElementById("iCurrentSteps").value);
        if (!isSkipValidation)
            isSkipValidation = false;
        switchBtn=false;
        if (this.onClkStepValidation(iCurrentSteps, isSkipValidation))
        {
            me.stepNavigation((iCurrentSteps - 1), iCurrentSteps, false);
        }
    };
    /*TODO this method is use for Previous Button
     * */
    this.onClkPrevious = function () {
        var iCurrentStep=parseInt(document.getElementById("iCurrentSteps").value);
        me.stepNavigation((iCurrentStep - 1), iCurrentStep, true);
    };

    this.getHiddenIndex=function(iCurrentIndex)
    {
        var sHidden=document.getElementById("hfiHiddenIndex"+iCurrentIndex);
        if(sHidden!=null)
        {
            var iHdIndex=parseInt(sHidden.value);
            return iHdIndex;
        }
        else
        {
            return 0;
        }

    };


    /*TODO This method is use for Separate getNext() And getPrevious
     * */
    this.stepNavigation = function (iPrevsStepNo, iCurrentStep, isPrev) {
        var iHiddenIndex=0;
        var sReturn = false;
        var sFnName = null;
        var sPrevFnName = null;

        var ilength=parseInt(document.getElementById("ilength").value);


        if (!isPrev)
            sFnName = document.getElementById("dvstep-" + iCurrentStep).getAttribute("onValidate");
        else if (isPrev && document.getElementById("dvstep-" + iPrevsStepNo).getAttribute("onPrevValidate"))
            sPrevFnName = document.getElementById("dvstep-" + iPrevsStepNo).getAttribute("onPrevValidate");

        if (isPrev || (sFnName != null)) {
            var iNextPrevVal = iCurrentStep + 1;


            if (isPrev)
            {
                iNextPrevVal = iCurrentStep - 1;
                iHiddenIndex=this.getHiddenIndex(iNextPrevVal);
                if (iNextPrevVal == iHiddenIndex)
                {
                    if (iHiddenIndex == 1)
                        this.getPrevious(iNextPrevVal, iCurrentStep);
                    else
                        this.getPrevious(iNextPrevVal - 1, iCurrentStep);
                }
                else {
                    this.getPrevious(iNextPrevVal, iCurrentStep);
                }
            }
            else
            {

                iNextPrevVal = iCurrentStep + 1;
                iHiddenIndex=this.getHiddenIndex(iNextPrevVal);
                if (iNextPrevVal == iHiddenIndex)
                {
                    this.getNext(iNextPrevVal + 1, iCurrentStep);
                }
                else
                {
                    this.getNext(iNextPrevVal, iCurrentStep);
                }

            }
            sReturn = true;
        }
        else sReturn = false;
        return sReturn;
    };



    this.onClkFinishWizard = function () {
        document.getElementById("btFinish").disabled = true;
        cross.setVisible(document.getElementById("imgLoader"), true);
        clGoogleAuthentication.onClkFinish();

    };


    this.onClkFinish = function (iCurrentStepNo, iTotalCount) {
        var iPrevStepNo = 0, sReturn = false;
        for (var i = iCurrentStepNo; i <= iTotalCount; i++) {
            iPrevStepNo = iCurrentStepNo;
            var sStep = document.getElementById("dvstep-" + (i));
            if (sStep.style.display == "none") {
                continue;

            }

            if (!me.stepNavigation(iPrevStepNo, i, false)) {
                sReturn = false;
                break;
            }
            else sReturn = true;
        }
        return sReturn;
    };


    /*TODO This method is use for calling your method Which is Defined by Ctl*/
    this.eventHandler = function (sFnName) {
        var sReturn = true;
        if (util.trim(sFnName).length > 0) {
            var fnRef = sFnName.substring(0, sFnName.indexOf("("));
            var sParams = sFnName.substring(sFnName.indexOf("(") + 1, sFnName.indexOf(")"));
            sParams = sParams.split(",");

            sReturn = cross.callFunction(window, eval(fnRef), sParams);

        }

        return sReturn;
    };

    this.addContentWithInStep = function (response, step) {
        document.getElementById("contentDivStep_" + step).innerHTML = response;
        loadResources(document.getElementById("contentDivStep_" + step), util.onScriptsLoad);
    };


    this.onClkDisablePrevious = function (iCurrentStep) {
        document.getElementById("step" + iCurrentStep).style.display = "none";
    };

    /*TODO this Method is Use for Geting Previous Step */
    this.getPrevious = function (iPrev, iCurrentStep) {
        document.getElementById("step" + iCurrentStep).style.display = "";
        document.getElementById("step" + iPrev).style.display = "";
        document.getElementById("dvstep-" + iCurrentStep).style.display = "none";
        document.getElementById("dvstep-" + iPrev).style.display = "";

        document.getElementById("stepanchor" + iCurrentStep).style.cursor = "pointer";
        util.removeClass(document.getElementById("stepanchor" + iCurrentStep), "btn-primary");
        util.addClass(document.getElementById("stepanchor" + iCurrentStep), "btn-default");

        var sStepAnchorChild = cross.getFirstElement(document.getElementById("stepanchor" + iCurrentStep).childNodes);
        sStepAnchorChild.parentNode.removeChild(sStepAnchorChild);

        document.getElementById("dvstep-" + iPrev).style.display = "";
        document.getElementById("stepanchor" + iPrev).style.opacity = "1";
        document.getElementById("stepanchor" + iPrev).style.cursor = "pointer";
        //document.getElementById("stepanchor" + iNextPrevVal).disabled = true;
        util.addClass(document.getElementById("stepanchor" + iPrev), "btn-primary");
        document.getElementById("iCurrentSteps").value=iPrev;

    };
    /*TODO this Method is Use for Geting Next Step */
    this.getNext = function (iNext, iPrev) {
        if(document.getElementById("step" + iNext)!=null){
            document.getElementById("step" + iNext).style.display = "";
            var ilength=parseInt(document.getElementById("ilength").value);

            if(ilength!=iNext ){
                document.getElementById("idNext" + iNext).style.display = "";
                if( document.getElementById("btFinish" + iNext)!=null)
                    document.getElementById("btFinish" + iNext).style.display = "none";
            }
            if((ilength-1)==iNext){
                var iHidIndex=this.getHiddenIndex(ilength);
                if(iHidIndex!=0){
                    document.getElementById("idNext" + (iNext)).style.display = "none";
                    document.getElementById("btFinish" + iNext).style.display = "";
                }
            }
            document.getElementById("dvstep-" + iPrev).style.display = "none";
            document.getElementById("stepanchor" + iPrev).style.cursor = "pointer";
            util.removeClass(document.getElementById("stepanchor" + iPrev), "pointer");
            util.addClass(document.getElementById("stepanchor" + iPrev), "btn-default");


            if (switchBtn) {
                util.removeClass(document.getElementById("stepanchor" + (iNext - 1)), "btn-primary");
            }
            else {
                util.removeClass(document.getElementById("stepanchor" + iPrev), "btn-primary");

            }

            var a = cross.getChildren(document.getElementById("stepanchor" + iNext));
            var bb = a.length;
            if (bb == 0) {
                var sImg = document.createElement("img");
                sImg.setAttribute("src", "res/global/images/right_mark.png");
                sImg.setAttribute("style", " height: 30px; margin-top: -6px;");
                document.getElementById("stepanchor" + iNext).appendChild(sImg);
            }

            document.getElementById("dvstep-" + iNext).style.display = "";
            document.getElementById("stepanchor" + iNext).style.opacity = "1";
            document.getElementById("stepanchor" + iNext).style.cursor = "pointer";
            //document.getElementById("stepanchor" + iNextPrevVal).disabled = true;
            util.addClass(document.getElementById("stepanchor" + iNext), "btn-primary");

            document.getElementById("iCurrentSteps").value=iNext;
        }
    };
    /*TODO This method is Use for getNext and getPrevious By clicking  Top Option  Buttons */
    this.onClkGetPosition = function (iCurrentStep, iLastStep) {
        switchBtn = true;
        var iNextSteps = iCurrentStep;
        var isValid = true;
        var iSteps = iCurrentStep;
        var i = 1;
        var iVar = 0;

        /*for(i=1;i<=iLastStep;i++){
            document.getElementById("dvstep-" + i).style.display = "none";
        }


        var flag=true;

        for(i=1;i<=iLastStep;i++){

            if(this.onClkStepValidation(i,false) == false){
                flag = false;
                document.getElementById("dvstep-" + i).style.display = "";
                break;
            }
        }
        if(iVar == 0 && flag){
            document.getElementById("dvstep-" + iCurrentStep).style.display = "";
        }*/


        while (i < iCurrentStep) {
            isValid = this.onClkStepValidation(i, false);

            if (isValid == false){
                iVar = i;
                for(iVar=1;iVar<=iLastStep;iVar++){
                    document.getElementById("dvstep-" + iVar).style.display = "none";
                    if(iVar == i)
                        continue;
                }
                document.getElementById("dvstep-" + i).style.display = "";
                //this.getNext(i,(i-1));
                break;
            }
            i++;
        }


        if (isValid) {

            if (iCurrentStep == iLastStep) {
                for (var j = iCurrentStep - 1; j > 1; j--) {
                    this.getNext(j, iNextSteps);
                }
                //this.getNext(iCurrentStep-1,iNextSteps);
                this.getNext(iCurrentStep, iNextSteps);
            }
            else if (iCurrentStep < iLastStep) {
                this.getNext(iCurrentStep, iNextSteps + 1);
            }
            iCurrentStep = iSteps;
            while (iCurrentStep > 1) {
                document.getElementById("dvstep-" + (iCurrentStep - 1)).style.display = "none";
                util.removeClass(document.getElementById("stepanchor" + (iCurrentStep - 1)), "btn-primary");
                iCurrentStep--;
            }
            iCurrentStep = iSteps;
            while (iCurrentStep < iLastStep) {
                var sStepAnchorChild1 = cross.getFirstElement(document.getElementById("stepanchor" + (iCurrentStep + 1)).childNodes);
                if (sStepAnchorChild1 != null) {
                    sStepAnchorChild1.parentNode.removeChild(sStepAnchorChild1);
                }
                document.getElementById("dvstep-" + (iCurrentStep + 1)).style.display = "none";
                util.removeClass(document.getElementById("stepanchor" + (iCurrentStep + 1)), "btn-primary");
                iCurrentStep++;
            }
        }
    };





    /*TODO this method is use for skip Validaions and Call  eventHandler() method*/
    this.onClkStepValidation = function (iCurrentStep, isSkipValidation) {
        if (isSkipValidation)
            return true;
        var isValid = true;
        /*if(iCurrentStep==0)
         iCurrentStep=iCurrentStep+1;*/
        var sMethodCall = document.getElementById("dvstep-" + iCurrentStep).getAttribute("onValidate");
        isValid = me.eventHandler(sMethodCall);
        return isValid;

    };
    /*TODO this method is use for Hide All Top Steps from Selected Steps */
    this.disableButtonOrSteps = function (iStepId) {
        for (var i = iStepId; i >= 0; i--) {
            cross.setVisible(document.getElementById("step" + i), false);
        }
        cross.setVisible(document.getElementById("btFinish"), false);
    };


    this.onClkSetNextBtEnlable = function (iBtnId, slabel) {
        if (document.getElementById("idNext" + iBtnId))
            document.getElementById("idNext" + iBtnId).innerHTML = slabel;

    };

    /*TODo this method is use for Show And Hide Steps
     * */
    this.showAndHideSteps=function(iStepId,isHideAndShow){
        if(isHideAndShow){
            var ilength=parseInt(document.getElementById("ilength").value);
            cross.setVisible(document.getElementById("step" + iStepId), true);
            if(document.getElementById("hfiHiddenIndex"+(iStepId))!=null)
                document.getElementById("hfiHiddenIndex"+(iStepId)).value="0";
        }
        else{
            var ilength=parseInt(document.getElementById("ilength").value);
            cross.setVisible(document.getElementById("step" + iStepId), false);
            if(document.getElementById("hfiHiddenIndex"+(iStepId))!=null)
                document.getElementById("hfiHiddenIndex"+(iStepId)).value=iStepId;
        }

    };
};




