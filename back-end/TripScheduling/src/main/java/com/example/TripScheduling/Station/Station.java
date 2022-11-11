package com.example.TripScheduling.Station;

import com.example.TripScheduling.Trip.Trip;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Station {

    @Id
    @SequenceGenerator(
            name = "station_sequence",
            sequenceName = "station_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "station_sequence"
    )
    private Integer id;
    @Column(unique = true)
    private String name ;
    @OneToMany(mappedBy = "fromStation")
    private List<Trip> fromStationTrips;
    @OneToMany(mappedBy = "toStation")
    private List<Trip> toStationTrips;


    public Station() {}
    public Station(String name)
    {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public void setidd(Integer idd){
        this.id = idd;
    }

    public Integer getId() {
        return id;
    }
}
