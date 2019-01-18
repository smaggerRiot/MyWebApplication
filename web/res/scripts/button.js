

var CLButtonUtil = new function()
{
    this.enableButton = function(clButton)
    {
        var clClickEvent= clButton.oldClick;//getAttribute('oldClick');
        if (clClickEvent)
        {
            //clButton.onClick =  clClickEvent;
            clButton.onclick =clButton.oldClick;// clButton.getAttribute("oldClick");
            clButton.onMouseOver = clButton.oldMouseOver;//clButton.getAttribute("oldMouseOver");
            clButton.onMouseOut = clButton.oldMouseOut;//clButton.getAttribute("oldMouseOut");
            clButton.onMouseUp =  clButton.oldMouseUp;//clButton.getAttribute("oldMouseUp");
        }
        clButton.className = 'nButton';
    };

    this.disableButton = function (clButton)
    {
        if(clButton.onclick)
        {
            clButton.oldClick=clButton.onclick;
            clButton.oldMouseOver= clButton.onMouseOver;
            clButton.oldMouseOut= clButton.onMouseOut;
            clButton.oldMouseUp=clButton.onMouseUp;

            clButton.onclick =null;
            clButton.onMouseOver = null;
            clButton.onMouseOut = null;
            clButton.onMouseUp = null;
        }
        clButton.className = 'dButton';
    };

    //function handleEnterKey(){}
    this.onMouseOver = function(clButton)
    {
        //if(clButton.className!='disableButton2')
        // clButton.className='button2MouseOver';

        if (clButton.className != 'dButton')
            clButton.className = 'mOverButton';
    }
    this.onMouseOut = function (clButton)
    {
        if (clButton.className != 'dButton')
            clButton.className = 'nButton';
    }

    this.onMouseDown = function (clButton)
    {
        //if(clButton.className!='disableButton2')
        //  clButton.className='buttonPress';

        if (clButton.className != 'dButton')
            clButton.className = 'pButton';

    }
    this.onMouseUp = function (clButton)
    {
        if (clButton.className != 'dButton')
            clButton.className = 'nButton';
    }


    this.checkEnterKey = function (event)
    {
        var code;
        if (document.layers)
        {
            code = event.which;
        }
        else
        {
            code = event.keyCode;
        }

        if (code == 13)
        {
            //var clSource=event.source;
            //clSource.onClick();
            //checkPreSubmit (document.logonForm);      return false;
        }
        else
        {
            return true;
        }
    };

};
