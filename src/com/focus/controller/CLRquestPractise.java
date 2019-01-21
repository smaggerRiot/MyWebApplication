package com.focus.controller;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by Dipak on 1/21/2019.
 */
public class CLRquestPractise extends ActionSupport
{

    public String execute()
    {
        HttpServletRequest hreq= ServletActionContext.getRequest();
        String option = hreq.getParameter("option");
        hreq.setAttribute("result",option);
        return "result";
    }
}
