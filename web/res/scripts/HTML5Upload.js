

var clHTML5Upload=new function()
{
    app.registerInstance("clHTML5Upload",clHTML5Upload);

    this.UPLOAD_TYPE_FILE = 1;
    this.UPLOAD_TYPE_IMAGE = 2;
    this.UPLOAD_TYPE_PREVIEW = 3;

    // common variables
    var iBytesUploaded = 0;
    var iBytesTotal = 0;
    var iPreviousBytesLoaded = 0;
    var oTimer = 0;


    var me=this;
    var arrUploadFields={};
    var iElapsedTime=0;
    var sUploadFieldId=null;
    var sFileName=null;

    this.init = function(sId,sUrl, sDestPath, iFileLimit, sAllowedExtensions, sDesc, iWidth, iHeight, sOnUploadDone,sAttachCaption,iType,isBorder,
                                                sFileName,isCropper,sHiddenFileName,iCropImgHeight,iCropImgWidth,sAttachImageUrl,sAttachImageCallBack,isAllowRemove)
    {
        var arrProperties={};
        arrProperties["sId"]=sId;
        arrProperties["sUrl"]=sUrl+"?JSESSIONID="+sDesc;
        arrProperties["sDestPath"]=sDestPath;
        arrProperties["sHiddenName"]=sHiddenFileName;
        arrProperties["sOnUploadDone"]=sOnUploadDone;
        arrProperties["sAttachImageCallBack"]=sAttachImageCallBack;
        arrProperties["isAllowRemove"]=isAllowRemove;

        arrProperties["iFileLimit"]=iFileLimit;
        if(sAllowedExtensions)
        {
            sAllowedExtensions=util.trim(sAllowedExtensions);
            if(sAllowedExtensions!="*.*")
                arrProperties["sExtensions"]=sAllowedExtensions;
        }
        arrProperties["iType"]=iType;

        arrProperties["isCropper"]=isCropper;
        arrProperties["iCropImgWidth"]=iCropImgWidth;
        arrProperties["iCropImgHeight"]=iCropImgHeight;

        arrUploadFields[sId]=arrProperties;

        var fileInput=document.getElementById(arrProperties["sId"])
       if(fileInput)
       {

        var dropbox = fileInput.parentNode;
        dropbox.setAttribute("fileid",arrProperties["sId"]);
        //init event handlers
        dropbox.addEventListener("dragenter", me.dragEnter, false);
        dropbox.addEventListener("dragexit", me.dragExit, false);
        dropbox.addEventListener("dragover", me.dragOver, false);
        dropbox.addEventListener("drop", me.dragDrop, false);

       }
    };

    this.getPropertiesArray=function(sId)
    {
        return arrUploadFields[sId];
    };


    this.onFileSelection=function(objButton,sFieldId)
    {
        document.getElementById(sFieldId).click();
    };


    this.validateFileSelection=function(fileInput,objFile)
    {
        if(!objFile)
            return false;

        var isValid=true;
        var objRegExp=null;
        var sExtensions=arrUploadFields[sUploadFieldId].sExtensions;
        if(arrUploadFields[sUploadFieldId].iType==me.UPLOAD_TYPE_PREVIEW || arrUploadFields[sUploadFieldId].iType==me.UPLOAD_TYPE_IMAGE)
        {
            objRegExp=/^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i; // filter for image files
            if(!objRegExp.test(objFile.type))
            {
                msg.showMessage(0,"Invalid image file");
                isValid=false;
            }
        }
        else if(sExtensions)
        {
            if(sExtensions.substring(0,1)=="*")
                sExtensions=sExtensions.substring(1);

            var sPattern="\\"+sExtensions+"$";;
            objRegExp=new RegExp(sPattern);

            if(!objRegExp.test(objFile.name))
            {
                msg.showMessage(0,"Invalid attachment <br>Allowed file types: "+arrUploadFields[sUploadFieldId].sExtensions);
                isValid=false;
            }
        }

        if(!isValid)
        {
            //alert("Selected file is not an Image");
            fileInput.value="";
            return false;
        }

        var iFileLimit=arrUploadFields[sUploadFieldId].iFileLimit;
        //alert(objFile.size+","+iFileLimit)
		// little test for filesize
		if ((objFile.size/1024) > iFileLimit)
        {
            var sSize;
            if(iFileLimit<1024)
                sSize=iFileLimit+" KB";
            else
                sSize=(iFileLimit/1024)+" MB";
            msg.showMessage(0,"File size should be less than "+sSize);

            fileInput.value="";
			return false;
		}

        return true;
    };

     this.dragEnter=function (evt) {
         cross.cancelBubble(evt);
    }
    this.dragExit=function (evt) {
         cross.cancelBubble(evt);
    }
    this.dragOver=function (evt) {
         cross.cancelBubble(evt);
    }
  this.dragDrop=function (evt)
  {
    var clSource=cross.getSrcElement(evt);
    cross.cancelBubble(evt);

    var files = evt.dataTransfer.files;
    var count = files.length;

    // Only call the handler if 1 or more files was dropped.
    if (count==1)
    { //  alert(clSource.nodeName)

    var fileInput=document.getElementById(sUploadFieldId);
    me.startUploading(fileInput,files[0]);
    }
  }
	this.startUploading=function(fileInput,objFile)
    {
         sUploadFieldId=fileInput.id;
       if(!objFile)
            objFile=fileInput.files[0];
        if(!me.validateFileSelection(fileInput,objFile))
        {
             // alert("val -failed")
            return;
        }

        sFileName=objFile.name;

        var dvProgress=document.getElementById("progress_info");
        if(!dvProgress)
            dvProgress=createProgressDiv();
        else
        {
            var oUploadResponse = document.getElementById('upload_response');
            oUploadResponse.innerHTML = 'Uploading...';
            dvProgress.style.display="block";
        }


        fileInput.parentNode.style.display="";
        setHiddenFieldValues(fileInput,objFile);

        if(arrUploadFields[sUploadFieldId].iType==me.UPLOAD_TYPE_PREVIEW || arrUploadFields[sUploadFieldId].iType==me.UPLOAD_TYPE_IMAGE)
            showPreview(fileInput);

		iPreviousBytesLoaded = 0;
        var objTd=fileInput.parentNode;
        objTd.appendChild(dvProgress.parentNode.removeChild(dvProgress));

		document.getElementById('progress_percent').innerHTML = '';
		var oProgress = document.getElementById('progress');
		oProgress.style.display = 'block';
		oProgress.style.width = '0px';



		// get form data for POSTing
		//var vFD = document.getElementById('upload_form').getFormData(); // for FF3

        var fileInputParent=fileInput.parentNode;
        var vFD =null;
        if(objFile)
        {
             vFD = new FormData();
             vFD.append('upload', objFile);

            //for (var i = 0; i < files.length; i++)
            //{
              //if (tests.formdata) formData.append('file', files[i]);
            //  previewfile(files[i]);
            //}
        }
       else
        {
            var objForm=getUploadForm(fileInput);
		    vFD = new FormData(objForm);
        }

        var sUrl=arrUploadFields[sUploadFieldId].sUrl;
        sUrl+="&uploadFileName="+objFile.name;


		// create XMLHttpRequest object, adding few event listeners, and POSTing our data
		var oXHR = new XMLHttpRequest();
		oXHR.upload.addEventListener('progress', uploadProgress, false);
		//oXHR.addEventListener('load', uploadFinish, false);
		oXHR.addEventListener('error', uploadError, false);
		oXHR.addEventListener('abort', uploadAbort, false);
        oXHR.onreadystatechange = function (e)
        {
              if (oXHR.readyState == 4)
              {
                 if(oXHR.status == 200)
                    uploadFinish(oXHR.responseText);
                 else
                     alert("Error loading page\n");
              }
        };

		oXHR.open('POST', sUrl);
		oXHR.send(vFD);


        fileInputParent.appendChild(fileInput);

		// set inner timer
		oTimer = setInterval(doInnerUpdates, 500);
	};


    this.onMOverFileName=function(sFieldId,e)
    {
        var arrProperties=me.getPropertiesArray(sFieldId);
        if(arrProperties.iType==me.UPLOAD_TYPE_PREVIEW)
            document.getElementById("fileName_"+sFieldId).style.display="";
        me.showRemoveImage(sFieldId);
    };

    this.onMOutFileName=function(sFieldId,e)
    {
        var arrProperties=me.getPropertiesArray(sFieldId);
        if(arrProperties.iType==me.UPLOAD_TYPE_PREVIEW)
            document.getElementById("fileName_"+sFieldId).style.display="none";
        me.hideRemoveImage(sFieldId);
    };

    this.showRemoveImage=function(sFieldId)
    {
        if(arrUploadFields[sFieldId].isAllowRemove)
        {
            if(document.getElementById("uploadFileName_"+sFieldId).value!="")
            {
                var imgRemove=document.getElementById("remove_"+sFieldId);
                imgRemove.style.display="inline";
            }
        }
    };

    this.hideRemoveImage=function(sFieldId)
    {
        if(arrUploadFields[sFieldId].isAllowRemove)
        {
            if(document.getElementById("remove_"+sFieldId))
            {
                var imgRemove=document.getElementById("remove_"+sFieldId);
                imgRemove.style.display="none";
            }
        }
    };

    this.onClkRemoveFile=function(sFieldId)
    {
        sUploadFieldId=sFieldId;
        var sFileName = document.getElementById("uploadFileName_"+sFieldId).value;
        //sFileName = sFileName.substring(0, sFileName.indexOf(" "));
        var sUrl = con.getStruts2Url(null, "removefile", "removeFile");
        var sSubmitData = "destPath=" + arrUploadFields[sFieldId].sDestPath + "&uploadFileName=" + sFileName;
        //alert(sSubmitData);
        con.sendPostRequest(sUrl, sSubmitData, this.clearLink, null);
    };


    this.clearLink=function(sFieldId)
    {
        var arrProperties;
        if(sFieldId!=null)
            sUploadFieldId=sFieldId;

        arrProperties=me.getPropertiesArray(sUploadFieldId);

        //document.getElementById("fileName_"+sUploadFieldId).innerHTML="";
        var objUploadField=document.getElementById(sUploadFieldId);
        var objTR=objUploadField.parentNode.parentNode;
        if(arrProperties.iType==me.UPLOAD_TYPE_PREVIEW)
            document.getElementById("preview_"+sUploadFieldId).src=clAppBuffer.getImagePath(true)+"placeholder.png";
        else
            objTR.previousSibling.style.display="none";
        objTR.style.display="";


        if(arrProperties.sOnUploadDone)
            clUpload.onUploadDoneCallback(arrProperties.sOnUploadDone,null,sUploadFieldId,arrProperties.sDestPath,arrProperties.sHiddenName,arrProperties.sFileSize);

        clearHiddenFieldValues(objUploadField);

        //document.getElementById("uploadFileName_"+sUploadFieldId).value="";


        if(arrProperties.iType==me.UPLOAD_TYPE_PREVIEW)
            me.hideRemoveImage(sUploadFieldId);

        sUploadFieldId=null;
    };

    this.zoomImage=function(sId)
    {
        clUpload.zoomImage(sId);
    };

    function setHiddenFieldValues(fileInput,objFile)
    {
        //var objFile=fileInput.files[0];
        document.getElementById("uploadFileName_"+fileInput.id).value=objFile.name;
        //if(arrUploadFields[sUploadFieldId].iType!=me.UPLOAD_TYPE_PREVIEW)
            document.getElementById("fileName_"+fileInput.id).innerHTML=objFile.name;
    };

    function clearHiddenFieldValues(fileInput)
    {
        document.getElementById("uploadFileName_"+fileInput.id).value="";
        //if(arrUploadFields[fileInput.id].iType!=me.UPLOAD_TYPE_PREVIEW)
            document.getElementById("fileName_"+fileInput.id).innerHTML="";
        fileInput.value="";
    };

    function getUploadForm(fileInput)
    {
        var objForm=document.forms['uploadfile'];
        if(objForm)
            objForm.parentNode.removeChild(objForm);


        objForm=document.createElement("form");
        objForm.name="uploadfile";
        objForm.method="post";
        objForm.enctype="multipart/form-data";


        objForm.appendChild(fileInput);
        return objForm;
    };


	function doInnerUpdates()
    { // we will use this function to display upload speed
		var iCB = iBytesUploaded;
		var iDiff = iCB - iPreviousBytesLoaded;

		// if nothing new loaded - exit
		if (iDiff == 0)
			return;

		iPreviousBytesLoaded = iCB;
		iDiff = iDiff * 2;
		var iBytesRem = iBytesTotal - iPreviousBytesLoaded;
		var secondsRemaining = iBytesRem / iDiff;

        //util.writeToLog("secondsRemaining  "+iBytesTotal +","+iPreviousBytesLoaded+","+ iDiff)
		// update speed info
		var iSpeed = iDiff.toString() + 'B/s';
		if (iDiff > 1024 * 1024) {
			iSpeed = (Math.round(iDiff * 100/(1024*1024))/100).toString() + ' MB/s';
		} else if (iDiff > 1024) {
			iSpeed =  (Math.round(iDiff * 100/1024)/100).toString() + ' KB/s';
		}

		document.getElementById('speed').innerHTML = iSpeed;
        if(iElapsedTime%2==0)
		    document.getElementById('remaining').innerHTML =  secondsToTime(secondsRemaining);
        //document.getElementById('elapse').innerHTML =  secondsToTime(iElapsedTime/2);
        iElapsedTime++;
	}

	function uploadProgress(e)
    { // upload process in progress
		if (e.lengthComputable)
        {
			iBytesUploaded = e.loaded;
			iBytesTotal = e.total;
			var iPercentComplete = Math.round(e.loaded * 100 / e.total);
			var iBytesTransfered = bytesToSize(iBytesUploaded);
			var iTotalBytes= bytesToSize(e.total);

			document.getElementById('progress_percent').innerHTML = iPercentComplete.toString() + '%';
			document.getElementById('progress').style.width = (iPercentComplete * 3).toString() + 'px'; //for 300 width,3
			document.getElementById('b_transfered').innerHTML = iBytesTransfered+"/"+iTotalBytes;
			/*if (iPercentComplete == 100)
            {

			}*/
		}
        else
        {
			document.getElementById('progress').innerHTML = 'unable to compute';
		}
	}


	function uploadFinish(sResponse)
    { // upload successfully finished
      //alert("uploadFinish"+sUploadFieldId)

        var oUploadResponse = document.getElementById('upload_response');
        oUploadResponse.innerHTML = 'Done';
        document.getElementById('speed').innerHTML = "&nbsp;";

//        document.getElementById('elapsed').innerHTML = "&nbsp;";
//        document.getElementById('remaining').innerHTML="&nbsp;";

        iElapsedTime=0;
        clearInterval(oTimer);

         var objTR=document.getElementById(sUploadFieldId).parentNode.parentNode;
        objTR.style.display="none";
        objTR.previousSibling.style.display="";
        clUpload.onUploadDone(sUploadFieldId, sResponse);


        setTimeout(function()
                {
                    var dvProgress=document.getElementById("progress_info");
                    dvProgress.style.display="none";
                    if(sUploadFieldId)
                    {
                        //document.getElementById("lblUpload_"+sUploadFieldId).style.display="none";
                        sUploadFieldId=null;
                        sFileName=null;
                    }

                },1000);
          //alert("end")

	}



	function uploadError(e)
    { // upload error
		document.getElementById('error2').style.display = 'block';
		clearInterval(oTimer);
	}

	function uploadAbort(e)
    { // upload abort
		document.getElementById('abort').style.display = 'block';
		clearInterval(oTimer);
	}



	function secondsToTime(secs) { // we will use this function to convert seconds in normal time format
		var hr = Math.floor(secs / 3600);
		var min = Math.floor((secs - (hr * 3600))/60);
		var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

		if (hr < 10) {hr = "0" + hr; }
		if (min < 10) {min = "0" + min;}
		if (sec < 10) {sec = "0" + sec;}
		if (hr) {hr = "00";}
		return hr + ':' + min + ':' + sec;
	};

	function bytesToSize(bytes) {
		var sizes = ['Bytes', 'KB', 'MB'];
		if (bytes == 0) return 'n/a';
		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
		return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
	};

    function showPreview(fileInput)
    {
        // get preview element
		var oImage = document.getElementById('preview_'+fileInput.id);
        oImage.style.display="";

        var objFile=fileInput.files[0];

		// prepare HTML5 FileReader
		var oReader = new FileReader();
        oReader.onload = function(e)
        {
            // e.target.result contains the DataURL which we will use as a source of the image
            oImage.src = e.target.result;
		};

		// read selected file as DataURL
		oReader.readAsDataURL(objFile);
    }


    function createProgressDiv()
    {
        var dvProgress=document.createElement("DIV");
        dvProgress.id="progress_info";
        dvProgress.style.width="300px";
        dvProgress.style.paddingTop="5px";
        dvProgress.style.position="absolute";


        var sInnerHTML="<table width='100%' style='table-layout:fixed'><col width='33%'><col width='33%'><col width='34%'><tr><td>&nbsp;</td>";
        sInnerHTML+="<td  id='upload_response'>Uploading...</td><td id='progress_percent' colspan='3' align='right'>&nbsp;</td></tr>";
        sInnerHTML+="<tr><td colspan='3'><span id='progress'>&nbsp;</span></td></tr>";
        sInnerHTML+="<tr><td id='speed'>&nbsp;</td><td id='remaining'>&nbsp;</td><td id='b_transfered'>&nbsp;</td></tr>";
        sInnerHTML+="</table>";


        /*var sInnerHTML="<div id='progress'></div><div id='progress_percent'>&nbsp;</div>";
        sInnerHTML+="<div><span id='speed'>&nbsp;</span><span id='remaining'>&nbsp;</span><span id='b_transfered'>&nbsp;</span></div>";*/

        dvProgress.innerHTML=sInnerHTML;
        document.body.appendChild(dvProgress);
        return dvProgress;
    }
};



var clUpload=new function()
{
    var me=this;


    me.onUploadDone = function (sId, sResponse)
    {
        var arrProperties=clHTML5Upload.getPropertiesArray(sId);

        var iIndex=sResponse.indexOf("|");

        arrProperties.sFileName = sResponse.substring(0,iIndex);
//        document.getElementById("uploadFileName_"+sId).value = arrProperties.sFileName;
        if(arrProperties.sHiddenName!=null)
            document.getElementById(arrProperties.sHiddenName+"_"+sId).value = arrProperties.sFileName;

        sResponse = sResponse.substring(iIndex+1);
        iIndex=sResponse.indexOf("|");
        if(iIndex!=-1)
        {
            arrProperties.sDestPath = util.encodeURI(sResponse.substring(iIndex+1));
            sResponse = sResponse.substring(0,iIndex);
        }

        if(arrProperties.isCropper)
        {
            clUpload.cropImage(arrProperties);
        }
        else
        {
            arrProperties.sFileSize=sResponse;

            var sUrl = con.getStruts2Url(null, "removefile", "getFile");
            sUrl = sUrl + "destPath=" + arrProperties.sDestPath + "&uploadFileName="+util.encodeURI(arrProperties.sFileName);

            //TODO: create download url
            var iRemoveLink = document.getElementById('removeLink_'+sId);
            if(iRemoveLink)
            {
                iRemoveLink.style.display = 'inline';
                iRemoveLink.style.display = 'block';
            }

            if(arrProperties.sOnUploadDone)
                clUpload.onUploadDoneCallback(arrProperties.sOnUploadDone,arrProperties.sFileName,sId,arrProperties.sDestPath,arrProperties.sHiddenName,arrProperties.sFileSize);
        }

    };


    this.onUploadDoneCallback = function(sOnUploadDone,sFileName,sFieldId,sDestPath,sHiddenFileName,sFileSize)
    {
        var sActionUrl='';

        if(sFileName)
        {
            sActionUrl = con.getStruts2Url(null, "uploadImage", "getImage");
            sActionUrl= sActionUrl+"sourceType="+Constants.IResource.SOURCE_TYPE_TEMP_FOLDER+"&uploadFileName="+sFileName; //preview=1&
        }
        else
            sFileName='';

        //alert("onUploadDone "+sOnUploadDone+","+sFileName)

        me.invokeCallback(sOnUploadDone,sFileName,sActionUrl,sFieldId,sDestPath,sHiddenFileName,sFileSize);

    };


    this.invokeCallback=function(sOnUploadDone,sFileName,sActionUrl,sFieldId,sDestPath,sHiddenFileName,sFileSize)
    {
        var index=0;

        if(sOnUploadDone)
            index = sOnUploadDone.indexOf(".");

        var sObjectName = null;
        var sFuncName = null;
        if (index > 0)
        {
            sObjectName = sOnUploadDone.substring(0, index);
            sFuncName = sOnUploadDone.substring(index + 1);
        }
        else
        {
            sFuncName = sOnUploadDone;
        }


        if ((index > 0 && typeof window[sObjectName][sFuncName] == "function"))
        {
            window[sObjectName][sFuncName](sFileName,sActionUrl,sFieldId,sDestPath,sHiddenFileName,sFileSize);
        }
        else if ((window[sFuncName] == "function"))
        {
            window[sFuncName](sFileName,sActionUrl,sFieldId,sDestPath,sHiddenFileName,sFileSize);
        }
    };


    this.zoomImage = function(sId)
    {
        var objImg=document.getElementById("preview_"+sId);
        msg.showImage(objImg,objImg.src);
    };

    me.downloadLink = function(sDownloadUrl)
    {
       var sFileName = document.getElementById("uploadFileName_"+me.sId).value;
       var sUrl = con.getStruts2Url(null, "removefile", "getFile");
        var sSubmitData = "destPath=" + me.sDestPath + "&uploadFileName=" + sFileName;
        con.sendPostRequest(sUrl, sSubmitData, null, null);
    };



    this.cropImage = function(arrProperties)
    {
        var  arrActions = new Array();
        arrActions[0] = MsgHandler.getMsg(MsgConstants.OK)+"|clImage.onClkCrop";
        arrActions[1] = MsgHandler.getMsg(MsgConstants.CANCEL)+"|";

        var sUrl = "upload!getImageCroppingDlg.do";
        sUrl+="?sId="+arrProperties.sId;
        sUrl+="&filename="+arrProperties.sFileName;

        sUrl+="&maxCropHeight="+arrProperties.iCropImgHeight;
        sUrl+="&maxCropWidth="+arrProperties.iCropImgWidth;
        sUrl+="&callbackCrop=parent.clUpload.callBackCrop";

        var sActionUrl = con.getStruts2Url(null, "upload", "getImage");
        sActionUrl+= "sourceType="+Constants.IResource.SOURCE_TYPE_TEMP_FOLDER+"&uploadFileName="+arrProperties.sFileName;
        sUrl+="&sActionUrl="+util.encodeURI(sActionUrl);

        var sTitle="ImageCrop(MaxHeight="+arrProperties.iCropImgHeight+"px,MaxWidth="+arrProperties.iCropImgWidth+"px)";
        var clDlg = new DialogBox("ImageCrop",sTitle,130,50,350,350,sUrl, true, null, true,true,arrActions,true,null,true,true);
        clDlg.setCenter();
        clDlg.show();
    };


    this.callBackCrop = function(sId,sActionUrl,sFileName,sFileSize)
    {
        //alert("callBackCrop")
        var arrProperties=clHTML5Upload.getPropertiesArray(sId);

        document.getElementById("uploadFileName_"+sId).value = sFileName;
        if(arrProperties.sHiddenName!=null)
            document.getElementById(arrProperties.sHiddenName+"_"+sId).value = sFileName;

        //alert(arrProperties.sOnUploadDone)
        if(arrProperties.sOnUploadDone)
            me.invokeCallback(arrProperties.sOnUploadDone,sFileName,sActionUrl,sId,arrProperties.sDestPath,arrProperties.sHiddenName,sFileSize);
    };



};
