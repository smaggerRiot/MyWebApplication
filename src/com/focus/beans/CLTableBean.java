package com.focus.beans;

import java.io.Serializable;

public class CLTableBean implements Serializable
{
        private String name;
        private long uname;
       /* private float salary;
        private String city;
        private String emailId;*/

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

       /* public String getEmailId() {
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
        }*/


}
