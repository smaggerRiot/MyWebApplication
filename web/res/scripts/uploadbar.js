var size,file,g_iUploadId,t;
function initUpload(iUploadId,iButtonId)
{
   // alert("iUploadId="+iUploadId);
    g_iUploadId= iUploadId;
    var td,tbody,tr;
    tbody = document.getElementById('tbody_'+iUploadId);
    tr = document.createElement('tr');
    tr.id = "progressBarBoxContent_"+iUploadId;
    tr.style.backgroundColor = "#8F8F8F";
    size = document.getElementById('progressTab_'+iUploadId).getAttribute('count');
    for( var i=0; i<size; i++)
    {
        td = document.createElement('td');
        td.style.height='4px';
        //td.style.backgroundColor='red';
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
    //    var uploadForm;
    //    var progressDiv = document.getElementById("progressDiv_"+iUploadId);
    //    var mainTab = document.getElementById("mainTab_"+iUploadId);
    //    uploadForm = document.getElementById("uploadForm_"+iUploadId);
    //
    //    uploadForm.appendChild(mainTab)
    //    uploadForm.appendChild(progressDiv)
    //    alert(uploadForm.outerHTML)
}

function submitdata()
{

    //sendPostRequest("upload!saveFile.do", null, null, null, false);
    file = document.getElementById(g_iUploadId);
    //alert("submitdata->file="+escape(file.value));
    if(file.value.length>0)
    {
        document.getElementById("fileName_"+g_iUploadId).value=file.value;

/*
        var btnUpload = document.getElementById("uploadBt_"+g_iUploadId);
        alert(btnUpload.onclick);
        btnUpload.oldClick = btnUpload.onclick;
        btnUpload.onclick = null;
        alert(btnUpload.onclick);
*/
        t=window.setTimeout('refreshDiv()',500);
        //refreshDiv();
    }

    else
    {
        alert("select a file before upload");
        file.focus();
        return false;
    }
    return true;
}

function refreshDiv()
{
   // alert("refreshDiv");
    //alert("upload"+g_iUploadId+"="+escape(file.value));
    con.sendPostRequest("progress.do", "upload"+g_iUploadId+"="+escape(file.value),null, 'show',null,null,'enctype');// , 'multipart/form-data');
    //sendPostRequest("progress.do", "upload="+escape(file.value),null, 'show',null,null,'enctype');// , 'multipart/form-data');
}

function show(sresponse)
{
    //    alert(sresponse);

    if(sresponse!=null)
    {
        var width,sFileName,cnt,barWidth,sArray,progressPercent,objProgressBarContent,objPlaceHolder;

        document.getElementById("progressTab_"+g_iUploadId).style.display='block';
        document.getElementById("progressDiv_"+g_iUploadId).style.display='block';
        objPlaceHolder = document.getElementById('placeHolder_'+g_iUploadId);

        sArray  = eval(sresponse);

        sFileName = sArray[0];
        document.getElementById("fileName_"+g_iUploadId).innerHTML = sFileName;
        progressPercent = Math.ceil((sArray[1]/sArray[2]) * 100);
        document.getElementById('progressBarText_'+g_iUploadId).innerHTML = 'upload......... ' + progressPercent + '%';
        cnt = 100/size;
        objProgressBarContent = document.getElementById('progressBarBoxContent_'+g_iUploadId);

        var destination = document.getElementById('destination_'+g_iUploadId).value;
        var sUrl = con.getStruts2Url(null, "removefile", "downloadFile");
        sUrl = sUrl + "destPath=" + destination + "&fileName="+sFileName;
        objPlaceHolder.innerHTML = "<a href='"+sUrl+"' style='text-decoration:underline;'>"+sFileName+"</>";
        for(var i=cnt,j=0;i<=progressPercent;i=i+cnt,j++)
        {
            objProgressBarContent.children[j].style.background = '#0000FF';
            if(progressPercent==100)
            {
                objProgressBarContent.children[j].style.background = '#15A518';
                objProgressBarContent.children[j].style.background = "#8F8F8F";
                document.getElementById("progressDiv_"+g_iUploadId).style.display='none';
                document.getElementById("fileName_"+g_iUploadId).value=sFileName;

                //objPlaceHolder.innerHTML = file.value;
                document.getElementById('removeLink_'+g_iUploadId).style.display = "block";
                file.value = "";
            }
        }
        width = document.getElementById('progressTab_'+g_iUploadId).getAttribute('width');
        barWidth = width/100;
        objProgressBarContent.style.width = parseInt((progressPercent* barWidth) + 'px');

        if(progressPercent!=100)
        {
           t= window.setTimeout('refreshDiv()',500);
        }
        else
        {
            clearTimeout(t);
            document.getElementById('mainDiv_'+g_iUploadId).style.display = "none";
            document.getElementById('progressMainDiv_'+g_iUploadId).style.display = "none";
            document.getElementById('placeHolderMainDiv_'+g_iUploadId).style.display = "block";
        }
    }
}

function removeLink()
{
    var sFileName = document.getElementById('fileName_'+g_iUploadId).value;
    var destination = document.getElementById('destination_'+g_iUploadId).value;
    var sUrl = con.getStruts2Url(null, "removefile", "removeFile");
    var sSubmitData = "destPath=" + destination + "&fileName=" + sFileName;
    //alert(sSubmitData);
    con.sendPostRequest(sUrl, sSubmitData,null, 'removeHandler', null);
};

function removeHandler()
{
    document.getElementById('mainDiv_'+g_iUploadId).style.display = "block";
    document.getElementById('progressMainDiv_'+g_iUploadId).style.display = "block";
    document.getElementById('placeHolderMainDiv_'+g_iUploadId).style.display = "none";
}
