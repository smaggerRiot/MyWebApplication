package com.focus.beans;

/**
 * Created by Dipak on 12/12/2018.
 */
public class ClStudentBean
{
    @Override
    public String toString() {
        return "ClStudentBean{" +
                "name='" + name + '\'' +
                ", id='" + id + '\'' +
                ", course='" + course + '\'' +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String name;
    public String id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String course;

}
