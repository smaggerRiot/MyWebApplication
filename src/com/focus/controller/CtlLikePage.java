package com.focus.controller;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.*;

/**
 * Created by Dipak on 12/13/2018.
 */
public class CtlLikePage extends ActionSupport {

    public String execute()
    {

        HttpServletRequest hrq = ServletActionContext.getRequest();
        String status = hrq.getParameter("Status");

        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "mayur");
            PreparedStatement ps = conn.prepareStatement("select status from  LikePage");
            ResultSet rs=ps.executeQuery();
            if(rs.next()){
                String s = rs.getString(1);
                hrq.setAttribute("Status",s);
            }


        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return "success";
    }
    public String like()
    {
        HttpServletRequest hrq = ServletActionContext.getRequest();
        String status = hrq.getParameter("Status");

        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
            Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "mayur");
            PreparedStatement ps = conn.prepareStatement("update LikePage set status = ?");
            ps.setString(1,status);
            ps.executeUpdate();

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return null;
    }
    public String sendRediret()
    {
        return "w3";
    }
}
