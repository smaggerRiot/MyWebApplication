package com.focus.beans;

import java.io.Serializable;

/**
 * Created by Dipak on 1/4/2019.
 */
public class CLCardBean implements Serializable
{
    String titleLogo;
    String title;
    String description;
    String buttonValue;



    CLActionBean[] clActionBean;

    public CLActionBean[] getClActionBean() {
        return clActionBean;
    }

    public void setClActionBean(CLActionBean[] clActionBean) {
        this.clActionBean = clActionBean;
    }

    public String getTitleLogo() {
        return titleLogo;
    }

    public void setTitleLogo(String titleLogo) {
        this.titleLogo = titleLogo;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getButtonValue() {
        return buttonValue;
    }

    public void setButtonValue(String buttonValue) {
        this.buttonValue = buttonValue;
    }



}
