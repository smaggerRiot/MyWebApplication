package com.focus.controller;

import com.focus.beans.CLFormBean;
import com.focus.dao.CLFormDAO;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by Dipak on 1/2/2019.
 */
public class CLFormCtl extends ActionSupport
{
    CLFormBean list=null;
    public CLFormBean getList() {


        return list;
    }

    public void setList(CLFormBean list) {
        this.list = list;
    }




    HttpServletResponse hres= ServletActionContext.getResponse();

    CLFormDAO clfd =new CLFormDAO();
    public void validate()
    {
        setFieldErrors(null);
    }
    public String register()
    {
     clfd.storeData(list);

        return null;
    }
    public String addTab()
    {
        HttpServletRequest hreq= ServletActionContext.getRequest();
        hreq.setAttribute("index",hreq.getParameter("index"));
        return "addTab";
    }
}
