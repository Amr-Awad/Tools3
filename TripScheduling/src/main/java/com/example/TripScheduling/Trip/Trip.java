package com.example.TripScheduling.Trip;

import com.example.TripScheduling.Station.Station;

import javax.persistence.*;


@Entity
@Table
public class Trip {
    @Id
    @SequenceGenerator(
            name = "trip_sequence",
            sequenceName = "trip_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "trip_sequence"
    )
    private int id;
    private String startTime;
    private String endTime;
    @ManyToOne
    @JoinColumn(name = "from_station_id")
    private Station fromStation;
    @ManyToOne
    @JoinColumn(name = "to_station_id")
    private Station toStation;


    private String fromStationName;
    private String toStationName;

    public Trip() {
    }

    public Trip(String startTime, String endTime, Station fromStation, Station toStation) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.fromStation = fromStation;
        this.toStation = toStation;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public Station fromStation_getter() {
        return fromStation;
    }

    public void fromStation_setter(Station fromStation) {
        this.fromStation = fromStation;
    }

    public Station toStation_getter() {
        return toStation;
    }

    public void toStation_setter(Station toStation) {
        this.toStation = toStation;
    }

    public void setidd(Integer idd) {
        this.id = idd;
    }

    public String getFromStationName() {
        return fromStationName;
    }

    public void setFromStationName(String fromStationName) {
        this.fromStationName = fromStationName;
    }

    public String getToStationName() {
        return toStationName;
    }

    public void setToStationName(String toStationName) {
        this.toStationName = toStationName;
    }
}
