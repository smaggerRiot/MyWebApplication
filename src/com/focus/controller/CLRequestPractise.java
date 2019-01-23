package com.focus.controller;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Dipak on 1/21/2019.
 */
public class CLRequestPractise extends ActionSupport
{

    public String reqSend()
    {
        HttpServletRequest hreq= ServletActionContext.getRequest();
        String result = hreq.getParameter("option");
        hreq.setAttribute("result",result);
        return "result";
    }
}
