package com.focus.controller;

import com.focus.beans.CLActionBean;
import com.focus.beans.CLCardBean;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;

import javax.servlet.http.HttpServletRequest;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Dipak on 1/4/2019.
 */
public class CLCardCtl extends ActionSupport
{



    public String execute()
    {
        /*try {
            List<CLCardBean> l=new ArrayList<CLCardBean>();
            Class.forName("oracle.jdbc.driver.OracleDriver");
            Connection con= DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "mayur");
            PreparedStatement ps = con.prepareStatement("SELECT * FROM carddetails");
            ResultSet rs = ps.executeQuery();
            while(rs.next())
            {
                CLCardBean ccb=new CLCardBean();
                ccb.setTitleLogo(rs.getString(1));
                ccb.setTitle(rs.getString(2));
                ccb.setDescription(rs.getString(3));
                ccb.setButtonValue(rs.getString(4));
                l.add(ccb);
            }
            HttpServletRequest hreq= ServletActionContext.getRequest();
            hreq.setAttribute("cardList",l);
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }*/

        /*List<CLCardBean> l=new ArrayList<CLCardBean>();
        CLActionBean clActionBean=new CLActionBean();
        clActionBean.setLabel("save");
        clActionBean.setAction("alert()");

        CLActionBean clActionBean2=new CLActionBean();
        clActionBean2.setLabel("edit");
        clActionBean2.setAction("alert()");


        CLCardBean clCardBean=new CLCardBean();
        clCardBean.setTitle("Settings");
        clCardBean.setTitleLogo("fas fa-wrench");
        clCardBean.setDescription("Change the module settings");
        CLCardBean clCardBean2=new CLCardBean();
        clCardBean.setTitle("Contacts");
        clCardBean.setTitleLogo("fas fa-address-book");
        clCardBean.setDescription("get the contact address details");
        clCardBean.setClActionBean(new CLActionBean[]{clActionBean, clActionBean2});
        clCardBean2.setClActionBean(new CLActionBean[]{clActionBean});
        l.add(clCardBean);
        l.add(clCardBean2);

        HttpServletRequest hreq= ServletActionContext.getRequest();
        for(l.size())
        {
            hreq.setAttribute("cardList", l);
        }*/
        List<CLCardBean> l=new ArrayList<CLCardBean>();
        CLActionBean clActionBean=new CLActionBean();
        clActionBean.setLabel("save");
        clActionBean.setAction("alert()");

        CLActionBean clActionBean2=new CLActionBean();
        clActionBean2.setLabel("edit");
        clActionBean2.setAction("alert()");

        CLCardBean clCardBean = new CLCardBean();
        clCardBean.setTitle("Settings");
        clCardBean.setTitleLogo("fas fa-wrench");
        clCardBean.setDescription("Change the module settings");
        clCardBean.setClActionBean(new CLActionBean[]{clActionBean, clActionBean2});
        CLCardBean clCardBean2=new CLCardBean();
        clCardBean2.setTitle("Contacts");
        clCardBean2.setTitleLogo("fas fa-address-book");
        clCardBean2.setDescription("get the contact address details");
        clCardBean2.setClActionBean(new CLActionBean[]{clActionBean});
        l.add(clCardBean);
        l.add(clCardBean2);
        HttpServletRequest hreq= ServletActionContext.getRequest();
        hreq.setAttribute("cardList", l);

        return "cardList";
    }


}
