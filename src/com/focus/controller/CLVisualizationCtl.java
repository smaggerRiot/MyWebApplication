package com.focus.controller;

import com.focus.beans.CLJsonBean;
import com.focus.beans.ClStudentBean;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;
import org.codehaus.jackson.map.ObjectMapper;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Dipak on 1/14/2019.
 */
public class CLVisualizationCtl extends ActionSupport
{


        public String getTreeview() throws IOException {

          List<CLJsonBean> l=new ArrayList<>();
            l.add(new CLJsonBean("1","mayur",""));
            l.add(new CLJsonBean("2","dfh",""));
            l.add(new CLJsonBean("3","dsfh","1"));
            l.add(new CLJsonBean("4","dfh","1"));
            l.add(new CLJsonBean("5","dfh","2"));
            ObjectMapper objectMapper = new ObjectMapper();
            String value = objectMapper.writeValueAsString(l);
            System.out.println(value);
            HttpServletRequest request= ServletActionContext.getRequest();
            request.setAttribute("jsondata",value);
            return "jsondata";
        }
}





