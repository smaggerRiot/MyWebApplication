package com.focus.dao;

import com.focus.beans.CLFormBean;


import java.sql.*;

public class CLFormDAO
{
   public Connection getConnection()
   {
       Connection con=null;
       try{
       Class.forName("oracle.jdbc.driver.OracleDriver");
       con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe", "system", "mayur");
       } catch (ClassNotFoundException e) {
           e.printStackTrace();
       } catch (SQLException e) {
           e.printStackTrace();
       }
       System.out.println("connection successful");
       return con;
   }
    public void storeData(CLFormBean clfb)
    {
        Connection con=getConnection();
        try {

            PreparedStatement ps=con.prepareStatement("insert into login values(?,?,?,?,?,?)");
            ps.setString(1,clfb.getName());

            ps.setString(2,String.valueOf(clfb.getUname()));
            ps.setString(3,clfb.getEmailId());
            String salary=String.valueOf(clfb.getSalary());
            ps.setString(4,salary);
            ps.setString(5, "null");
            ps.setString(6, clfb.getCity());
            ps.executeUpdate();
            /*List<CLTableBean> l= clfb.getTableList();
*//*
            List<CLTableBean> l= (List<CLTableBean>) clfb.getTableList();
*//*
            for(int i=0;i<l.size();i++)
            {
                HttpServletRequest req= ServletActionContext.getRequest();
                CLTableBean tableDto =  l.get(i);
                PreparedStatement pState=con.prepareStatement("insert into login values(?,?,?,?,?,?)");
                pState.setString(1, req.getParameter("list.tableList[" + i + "].name"));
                pState.setString(2,String.valueOf(tableDto.getUname()));
                pState.setString(3, tableDto.getEmailId());
                String salaries=String.valueOf(tableDto.getSalary());
                pState.setString(4,salaries);
                pState.setString(5,"null");
                pState.setString(6, tableDto.getCity());
                pState.executeUpdate();
            }
            List<CLTable1Bean> l1=clfb.getTableList1();
            for(int i=0;i<l1.size();i++)
            {
                CLTable1Bean tableDto1=l1.get(i);
                PreparedStatement pState1=con.prepareStatement("insert into login values(?,?,?,?,?,?)");
                pState1.setString(1, tableDto1.getName());
                pState1.setString(2,String.valueOf(tableDto1.getUname()));
                pState1.setString(3,tableDto1.getEmailId());
                String salaries=String.valueOf(tableDto1.getSalary());
                pState1.setString(4,salaries);
                pState1.setString(5,"null");
                pState1.setString(6, tableDto1.getCity());
                pState1.executeUpdate();
            }*/

        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
   /* public List<CLFormBean> getData()
    {
        List<CLFormBean> l=new ArrayList<CLFormBean>();
        Connection con=getConnection();
        try {
            PreparedStatement ps = con.prepareStatement("select *  from login");
            ResultSet rs=ps.executeQuery();
            while(rs.next())
            {
                CLFormBean clfb=new CLFormBean();
                clfb.setName(rs.getString(1));
                clfb.setUname(rs.getString(2));
                clfb.setEmailId(rs.getString(3));
                float salary= Float.parseFloat(rs.getString(4));
                clfb.setSalary(salary);
*//*
                clfb.setDate(rs.getString(6));
*//*
                clfb.setCity(rs.getString(6));
                l.add(clfb);
                System.out.println(l);


            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return  l;
    }
    public void update(CLFormBean clfb)
    {
        Connection con=getConnection();
        try{
            PreparedStatement ps=con.prepareStatement("update login set name=?,uname=?, emailid=?, salary=?,idate=?,city=? where username=?");
            ps.setString(1,clfb.getName());
            ps.setString(2,clfb.getUname());
            ps.setString(3,clfb.getEmailId());
            String salary=String.valueOf(clfb.getSalary());
            ps.setString(4,salary);

            ps.setString(6,clfb.getCity());
            ps.execute();



        }catch(Exception e)
        {
            System.out.println(e);
        }
    }*/
    }





