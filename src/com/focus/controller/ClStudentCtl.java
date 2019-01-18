package com.focus.controller;

import com.focus.beans.ClStudentBean;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Dipak on 12/12/2018.
 */
public class ClStudentCtl extends ActionSupport {


    public String execute() {

        return "success";
    }

    public String searchDetail() {
        Connection connection=null;
        List<ClStudentBean> l = null;
        HttpServletRequest hrq = ServletActionContext.getRequest();
        String name = hrq.getParameter("name");
        name = name+"%";
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            connection = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe","system","mayur");
            PreparedStatement ps = connection.prepareStatement("select * from student where name like ?");
            ps.setString(1, name);
            ResultSet rs = ps.executeQuery();
            l = new ArrayList<>();
            while (rs.next()) {
                ClStudentBean cls = new ClStudentBean();
                cls.setName(rs.getString(1));
                cls.setId(rs.getString(2));
                cls.setCourse(rs.getString(3));
                l.add(cls);
                System.out.println(l);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        for (ClStudentBean cl : l) {
            hrq.setAttribute("Std", l);
        }
        return SUCCESS;

    }
}



