package com.focus.beans;

import java.io.Serializable;
import java.util.ArrayList;


public class CLTabBean implements Serializable
{
    public int tabIndex;
    ArrayList<CLTableBean> tableList;



    public int getTabIndex() {
        return tabIndex;
    }

    public void setTabIndex(int tabIndex) {
        this.tabIndex = tabIndex;
    }
    public ArrayList<CLTableBean> getTableList() {
        return tableList;
    }

    public void setTableList(ArrayList<CLTableBean> tableList) {
        this.tableList = tableList;
    }

}
