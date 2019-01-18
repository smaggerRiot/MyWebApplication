package com.focus.controller;

import com.focus.beans.CLFormBean;
import com.focus.dao.CLFormDAO;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletResponse;

public class CLFormHandlerCtl extends ActionSupport {
    CLFormBean list=null;
    public CLFormBean getList() {


        return list;
    }

    public void setList(CLFormBean list) {
        this.list = list;
    }




    HttpServletResponse hres=ServletActionContext.getResponse();
    CLFormDAO clfd =new CLFormDAO();
   public void validate()
   {
       setFieldErrors(null);
   }
    public String register()
    {
      clfd.storeData(list);

      return "success";
    }
    public String addTab()
    {
        return "addTab";
    }
   /* public String execute()
    {
        return "success";
    }*/
/*    public String dispData()
    {
        List<CLFormBean> alUserData=clfd.getData();
        HttpServletRequest request =ServletActionContext.getRequest();

        request.setAttribute("tableData", alUserData);
        return "tableData";


    }
    public String dispUpdate()
    {
        clfd.update( list);
        return "updated";
    }*/

}