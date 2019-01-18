package com.focus.beans;

/**
 * Created by Dipak on 1/14/2019.
 */
public class CLJsonBean
{
    String id;
    String name;
    String ParentId;

    public CLJsonBean(String id, String name, String parentId) {
        this.id = id;
        this.name = name;
        ParentId = parentId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getParentId() {
        return ParentId;
    }

    public void setParentId(String parentId) {
        ParentId = parentId;
    }
}
