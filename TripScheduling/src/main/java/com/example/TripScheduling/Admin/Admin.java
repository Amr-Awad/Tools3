package com.example.TripScheduling.Admin;

import javax.persistence.*;

@Entity
@Table
public class Admin {

    @Id
    @SequenceGenerator(
            name = "admin_sequence",
            sequenceName = "admin_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "admin_sequence"
    )
    private Integer id;
    private String username;
    private String password;

    public Admin(){}
    public Admin(String userName, String password){
        this.username = userName;
        this.password = password;
    }

    public void setUsername(String userName) {
        this.username = userName;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername(){
        return this.username;
    }
    public String getPassword(){
        return this.password;
    }
}
