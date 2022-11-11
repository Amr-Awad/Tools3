package com.example.TripScheduling.Trip;

import com.example.TripScheduling.Station.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TripService {
    private TripRepo t;
    private StationService s;

    @Autowired
    public TripService(TripRepo t, StationService s) {
        this.t = t;
        this.s = s;
    }

    public void createTrip(Trip tr)
    {
        tr.fromStation_setter(s.getStationByName(tr.getFromStationName()));
        tr.toStation_setter(s.getStationByName(tr.getToStationName()));
        t.save(tr);
    }

    public void updateTrip(Trip tr, Integer id)
    {
        if(t.findById(id).isPresent())
        {
            tr.setidd(id);
            tr.fromStation_setter(s.getStationByName(tr.getFromStationName()));
            tr.toStation_setter(s.getStationByName(tr.getToStationName()));
            t.save(tr);
        }
    }

    public void deleteTrip(Integer id)
    {
        t.deleteById(id);
    }

    public Trip getTrip(Integer id) {
        if (t.findById(id).isPresent()) {
            return t.findById(id).get();
        }
        return null;
    }

    public Iterable<Trip> getAllTrips() {
        return t.findAll();
    }

}
