package com.focus.controller;

import com.focus.beans.CLSessionBean;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;


public class ClloginCtl extends ActionSupport
{
    CLSessionBean csb;
    public CLSessionBean getCsb() {
        return csb;
    }

    public void setCsb(CLSessionBean csb) {
        this.csb = csb;
    }

  public void validate()
  {
      setFieldErrors(null);
  }



    public String login()
    {
        HttpServletRequest request=ServletActionContext.getRequest();
        if(request.getMethod()=="POST")

        {

            if ((csb.getUsername().equalsIgnoreCase("mayur")) && (csb.getPassword().equals("admin"))) {
                HttpSession hs = ServletActionContext.getRequest().getSession();
                hs.setAttribute("username", csb.getUsername());
                return "welcome";
            } else {


                return "success";
            }
        }
        else{
            return "success";
        }
    }
    public String logout(){
        HttpSession hs=ServletActionContext.getRequest().getSession();
        hs.invalidate();


        return "logout";
    }


}
