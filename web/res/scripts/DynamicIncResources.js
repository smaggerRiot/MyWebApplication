

if(typeof window["loadResources"]!="function")
{    

var iScriptCount=0;
var iScriptTotal=0;
var iStyleCount=0;
var iStyleTotal=0;
var iResCount=0;


var callBackFnHandler;
var objResourcesToDelete=[];
var isLoadInlineScripts=false;
var sInlineScript=null;
var bStopResLoad=false;
//var hashBodyContent=true;

function loadResources(objDivDynContent,fnCallBack)
{
  //   clearStopLoading();
    //hashBodyContent=false;
    callBackFnHandler=fnCallBack;
    loadHtmlResources(objDivDynContent,true);
   //  alert("3333r")
	loadHtmlResources(objDivDynContent,false);
    //alert("r")
    removeResources(document.getElementsByTagName("HEAD")[0]);
}

/*
function loadScripts(objDivTag)
{

}
function loadStyles(objDivTag)
{
 loadHtmlResources(objDivTag)
}
*/


function loadHtmlResources(objDivTag,isStyle)
{

	var objResources ;
    if(isStyle)
       objResources=objDivTag.getElementsByTagName("LINK");
    else
      objResources=objDivTag.getElementsByTagName("SCRIPT");

	var objResourceTag;
  //  alert(bStopResLoad)

	iScriptCount=0;
	iScriptTotal=0;
    isLoadInlineScripts=false;
	var objHeadTag=document.getElementsByTagName("HEAD")[0];
    var sSrc;
    /*for (var i = 0; i < objResources.length; i++)
    {
      writeToLog("Res-Len-------"+objResources[i].href)
    }*/

   // objResources.sort()

	for (var i = 0; i < objResources.length; i++)
	{
       if(bStopResLoad)
       {   bStopResLoad=false;
           break;
       }

       if(isStyle)
       {
          objResourceTag=document.createElement("LINK");
          objResourceTag.type="text/css";
         if(objResourceTag.async)
            objResourceTag.async = true;  
          objResourceTag.rel="stylesheet";
          sSrc=objResources[i].href;
       }
      else
       {

         objResourceTag=document.createElement("SCRIPT");
		 objResourceTag.id="dyn_"+(iResCount++);
		 objResourceTag.type="text/javascript";
        if(objResourceTag.async)
            objResourceTag.async = true;
		 objResourceTag.language="javascript";

         sSrc=objResources[i].src;
        // loadScript(sSrc,(iResCount++));

        // writeToLog(sSrc);
          // document.removeChild(objResources[i]);
       //  alert("--")
       }



        if( (isStyle && isIncludeResource(sSrc)) || !isStyle )
        {  //    alert(sSrc)
              if(isStyle)
              {
                iStyleTotal++;
                  //<script type="text/javascript">
                  //ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';  
                  objResourceTag.href=sSrc;
                  objHeadTag.appendChild(objResourceTag);
              }
             else
              {

               try
               {
                    iScriptTotal++;
                    if(sSrc.length==0) // in case of inline script
                    { // alert(objResources[i].text)
                        objResourceTag.text=objResources[i].text;
                      //  objResources[i].setAttribute("objResources[i]")
                    }
                    else
                    {   objResourceTag.src = sSrc;


                    }
                      objHeadTag.appendChild(objResourceTag);

               }
               catch(ee) { alert(ee.message); }

              }

                if(sSrc.length==0)
                {
                  //  alert(objResources[i].getAttribute("isLineScript"))
                   // alert(objResources[i].innerHTML)
                   if(objResources[i].getAttribute("isLineScript"))
                   {
                      sInlineScript=objResources[i].innerHTML;

                      // eval(objResources[i].innerHTML)
                   }
                  trackScripts(objDivTag,false,isStyle);
                //    alert(sInlineScript)

                }
                else
                {
                    if (objResourceTag.readyState) //IE ,opera
                    {
                            objResourceTag.onreadystatechange = function()
                            {
                                /*if(isStyle)
                                    writeToLog("loaded:"+this.href)
                                else
                                    writeToLog("loaded:"+this.src)*/
                                if (this.readyState == "loaded" ||this.readyState == "complete")
                                    trackScripts(objDivTag,false,isStyle);
                            };
                    }
                   else //Other browsers
                   {
                        objResourceTag.onload = function(event)
                        {
                           // alert("www")
                        //    if(isStyle)
                             //writeToLog("loaded:"+this.href)
                         //  else
                           //  writeToLog("loaded:"+this.src)
                            trackScripts(objDivTag,false,isStyle);
                         };
                    }
                }
        }
      /* else
        {
        // alert(objResources[i].innerText)
         alert(objResources[i].innerHTML)
        }*/

	}
    //isLoadInlineScripts=true;
      //trackScripts(objDivTag,true,isStyle);// load inlne scritps
}

function loadScript(sSrc,iResCount)
{
        var objResourceTag=document.createElement("SCRIPT");
		 objResourceTag.id="dyn_"+(iResCount);
		 objResourceTag.type="text/javascript";
		 objResourceTag.language="javascript";
        var objHeadTag=document.getElementsByTagName("HEAD")[0];
         objResourceTag.src = sSrc;
        if (objResourceTag.readyState) //IE ,opera
            {
                    objResourceTag.onreadystatechange = function()
                    {
                        /*if(isStyle)
                            writeToLog("loaded:"+this.href)
                        else
                            writeToLog("loaded:"+this.src)*/
                       // if (this.readyState == "loaded" ||this.readyState == "complete")
                        //    trackScripts(objDivTag,false,isStyle);
                    };
            }
           else //Other browsers
           {
                objResourceTag.onload = function(event)
                {
                   // alert("www")
                //    if(isStyle)
                     //writeToLog("loaded:"+this.href)
                 //  else
                   //  writeToLog("loaded:"+this.src)
                   // trackScripts(objDivTag,false,isStyle);
                 };
            }

       return objResourceTag;
}

function trackScripts(objDivTag,isLoadInline,isStyle)
{
  trackScripts(objDivTag,isLoadInline,false);
}
function trackScripts(objDivTag,isLoadInline,isStyle)
{
  if(isStyle)
   {
     iStyleCount++;

   }
  else
  {
    isStyle=false;
   if(!isLoadInline)
   {  iScriptCount++;
       //isLoadInlineScripts=false;
   }
    //else
   //{
       isLoadInlineScripts=true;
       // writeToLog(iScriptTotal+"--style-- "+iScriptCount+"--"+isLoadInlineScripts)
   //}

   //}
      //util. writeToLog(iScriptTotal+"--style-- "+iScriptCount+"--"+isLoadInlineScripts)
     // util. writeToLog("dddddddddddd----"+((isLoadInlineScripts && ( iScriptTotal<=iScriptCount  ||  iScriptTotal==iScriptCount ) )));
  }


     //isLoadInlineScripts &&
    msg.setPageStatus("  ... Loading "+iScriptCount+" ( "+iScriptTotal+" )");
  // alert("set ")
  if( (isLoadInlineScripts && ( iScriptTotal<=iScriptCount  ||  iScriptTotal==iScriptCount ) )
             //            &&
           // (isStyle &&iStyleTotal==iStyleCount)
     ) //!isStyle  &&
	{
        //   alert(iScriptTotal+"--"+iScriptCount+"  "+isLoadInlineScripts)
     //    writeToLog("Callback for init "+isStyle)
         //writeToLog(iStyleTotal+"--style-- "+iStyleCount+"--"+isLoadInlineScripts)
         //alert("call back")

		/*var objScripts = objDivTag.getElementsByTagName("script");
		var objScriptTag;
        var isInitScript=false;

		for (var i = 0; i < objScripts.length; i++)
		{
			if(objScripts[i].src.length==0)// assuming only script with src as empty
			{
                isInitScript=true;
				objScriptTag=document.createElement("SCRIPT");
				objScriptTag.type="text/javascript";
				objScriptTag.language="javascript";
				objScriptTag.text=objScripts[i].text;

                document.getElementsByTagName("HEAD")[0].appendChild(objScriptTag);

                if (objScriptTag.readyState) //IE
                {
                        objScriptTag.onreadystatechange = function()
                        {
                            if (this.readyState == "loaded"
                                    ||this.readyState == "complete")
                            {
                                invokeCallBack();
                            }
                        };
                }
               else //Other browsers
               {
                  //  objScriptTag.onload = function() // onload is getting fired for inline script
                    //{
                     //alert("jjj");
                     invokeCallBack(); // need to check
                   //};
                }




                objScripts[i].parentNode.removeChild(objScripts[i]);

                //eval(objScriptTag.text);

			}
		}
     if(!isInitScript)    // assuming only one script without src in a jsp page
        invokeCallBack();
        */
       // alert("invokeCallBack:"+iScriptTotal+"-- scripts sum -"+iScriptCount)
       if(sInlineScript)
       {  // alert(iScriptTotal+","+iScriptCount)
          // alert(clTinyMce+"  "+tinymce+"  "+tinyMCE)
           //alert(sInlineScript)
          eval(sInlineScript)
       }
       if(iScriptTotal==iScriptCount)
        invokeCallBack();
   }
  else if(isLoadInline &&  iScriptTotal!=iScriptCount)
  {
     // alert(isLoadInline+","+iScriptTotal+","+iScriptCount)
     //alert('Failed to load script(s), could be invalid script name or path')
  }

}




function invokeCallBack()
{
    if(iScriptTotal<=0 || iScriptTotal==iScriptCount)
    { //  alert(iScriptTotal+"-"+iScriptCount)
           msg.closePageStatus();    
    }

    if(typeof(callBackFnHandler)=="function")
    {
        ///alert("---")
        callBackFnHandler();
        callBackFnHandler=null;
    }

     //bStopResLoad=false;

  //  hashBodyContent=true;
}

function loadStyles(objDivDynContent)
{
    var objStyles = objDivDynContent.getElementsByTagName("LINK");
	var objStyleTag;
	var objHeadTag=document.getElementsByTagName("HEAD")[0];

	for (var i = 0; i < objStyles.length; i++)
	{
        if(isIncludeResource(objStyles[i].href))
        {
            objStyleTag=document.createElement("LINK");
            objStyleTag.type="text/css";
            objStyleTag.rel="stylesheet";
            objStyleTag.href=objStyles[i].href;
            objHeadTag.appendChild(objStyleTag);


//             writeToLog("CSS: "+objStyles[i].href)
        }
	}
}

function isIncludeResource(sSrc)
{
    if(objResourcesToDelete)
    {
//                writeToLog(objResourcesToDelete[]+"=="+sSrc)
        for(var j=0;j < objResourcesToDelete.length; j++)
        {
           // alert(objResourcesToDelete[j].nodeName+"=="+sSrc)
         //   alert("isIncludeResource="+objResourcesToDelete[j].href+","+objResourcesToDelete[j].src)
            if(objResourcesToDelete[j]!=null &&
                    (
                            objResourcesToDelete[j].href && objResourcesToDelete[j].href==sSrc    //CSS
                           /* ||
                            objResourcesToDelete[j].src && objResourcesToDelete[j].src==sSrc*/
                    )
                    )
            {

                objResourcesToDelete[j]=null;
                return false;
            }
        }
    }


    
    return true;
}

function removeResources(objHeadTag)
{       //  alert("removeResources")
    if(objResourcesToDelete)
    {
        for (var j = 0; j < objResourcesToDelete.length; j++)
        {
            if (objResourcesToDelete[j] != null)
            {
                try
                {
                    //  alert("remove---"+objResourcesToDelete[j].href+","+objResourcesToDelete[j].src)
                    objHeadTag.removeChild(objResourcesToDelete[j]);
                }
                catch (e)
                {
                }
            }
        }
        objResourcesToDelete = [];
    }
}

/////// Resource unloading functions
/**
 * srikanth ---ll be used later
 * @param objDivDynContent
 */
function unloadInitScripts(objDivDynContent)
{
     var objHeadTag = document.getElementsByTagName("HEAD")[0];
     var objScripts= objHeadTag.getElementsByTagName("SCRIPT");

  for (var i = 0; i < objScripts.length; i++)
	{

       if( util.trim(objScripts[i].src).length==0)//if(util.trim(sSrc).length>0)
			{
               try
                {
                     objScripts[i].parentNode.removeChild(objScripts[i])

                }
                catch(e)
                {
                    alert(e)
                }
            }
    }
}
function stopResourceLoading()
{
    bStopResLoad=true;
    sInlineScript=null;
}

function unloadResources(objDivDynContent)
{
    unloadResByType(objDivDynContent,2);//"LINK"
   // unloadResByType(objDivDynContent,1);//"SCRIPT"
}

function unloadResByType(objDivDynContent,sResType)
{
	var sTagName="";
	if(sResType==1)
		sTagName="SCRIPT";
	else if(sResType==2)
		sTagName="LINK";

	var objResToDelete = objDivDynContent.getElementsByTagName(sTagName);
	var objHeadTag = document.getElementsByTagName("HEAD")[0];
	var objTotalResources,sSrc,sSrc2;

	for (var i = 0; i < objResToDelete.length; i++)
	{
		if(sResType==1)
			sSrc=objResToDelete[i].src;
		else if(sResType==2)
			sSrc=objResToDelete[i].href;

		if(util.trim(sSrc).length>0)
		{
			objTotalResources = objHeadTag.getElementsByTagName(sTagName);
			//alert("objTotalResources.length... "+objTotalResources.length);
			for (var j = 0; j < objTotalResources.length; j++)
			{
				if(sResType==1)
					sSrc2=objTotalResources[j].src;
				else if(sResType==2)
					sSrc2=objTotalResources[j].href;

				if(sSrc==sSrc2)
				{  // alert("unload--"+sSrc)
                    if(!objResourcesToDelete)
                        objResourcesToDelete=[];

                    objResourcesToDelete[objResourcesToDelete.length]=objTotalResources[j];
				}
               /* else if(sSrc.length==0)
                {
                  objHeadTag.removeChild(objTotalResources[j]);
                }*/
			}
		}
	}
}

}