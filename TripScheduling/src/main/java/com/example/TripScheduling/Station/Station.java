package com.example.TripScheduling.Station;

import java.util.Set;

public class Station {


    private int id;
    private String name ;


    public Station() {
    }
    public Station(String name)
    {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public int getId() {
        return id;
    }
    public void setName(String name) {
        this.name = name;
    }


}
