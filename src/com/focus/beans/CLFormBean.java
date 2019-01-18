package com.focus.beans;

import sun.org.mozilla.javascript.internal.json.JsonParser;
import sun.plugin.javascript.navig.JSObjectFactory;

import java.io.Serializable;
import java.util.ArrayList;


public class CLFormBean implements Serializable {
    private String name;
    private long uname;
    private String emailId;
    private float salary;
    private String city;

    ArrayList<CLTabBean> tabList;
   /* List<CLTableBean> tableList;



    List<CLTable1Bean> tableList1;*/



/*                private List<ArrayList<CLTableBean>> tableList;
    CLTableBean clTableBean=new CLTableBean();
    List<ArrayList<CLTableBean>> tableList;*/

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public long getUname() {
        return uname;
    }

    public void setUname(long uname) {
        this.uname = uname;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public float getSalary() {
        return salary;
    }

    public void setSalary(float salary) {
        this.salary = salary;
    }




    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }


    public ArrayList<CLTabBean> getTabList() {
        return tabList;
    }

    public void setTabList(ArrayList<CLTabBean> tabList) {
        this.tabList = tabList;
    }


    /*public List<CLTableBean> getTableList() {
        return tableList;
    }

    public void setTableList(List<CLTableBean> tableList) {
        this.tableList = tableList;
    }*/
    /*public List<ArrayList<CLTableBean>> getTableList() {
        return tableList;
    }

    public void setTableList(List<ArrayList<CLTableBean>> tableList) {
        this.tableList = tableList;


    }*/

   /* ArrayList<CLTableBean> al=new ArrayList<>();
    {
        int i=0;
        while(i<al.size())
        {
            CLTableBean ctb=new CLTableBean();

            al.add(i,ctb);
        }
    }*/
   /* public List<CLTableBean> getTableList() {
        return tableList;
    }

    public void setTableList(List<CLTableBean> tableList) {
        this.tableList = tableList;
    }
    public List<CLTable1Bean> getTableList1() {
        return tableList1;
    }*/

  /*  public void setTableList1(List<CLTable1Bean> tableList1) {
        this.tableList1 = tableList1;
    }*/
 /* public Object getList()
  {
      CLTableBean tableList=new CLTableBean();

      return tableList;
  }*/

    /*public List<CLTable1Bean> getTableList1() {
        return tableList1;
    }

    public void setTableList1(List<CLTable1Bean> tableList1) {
        this.tableList1 = tableList1;
    }
    public List<CLTableBean> getTableList() {
        return tableList;
    }

    public void setTableList(List<CLTableBean> tableList) {
        this.tableList = tableList;
    }*/
}