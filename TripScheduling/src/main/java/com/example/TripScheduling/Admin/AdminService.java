package com.example.TripScheduling.Admin;

import com.example.TripScheduling.Station.Station;
import com.example.TripScheduling.Station.StationService;
import com.example.TripScheduling.Trip.Trip;
import com.example.TripScheduling.Trip.TripService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {
    private AdminRepo a;
    private StationService s;
    private TripService t;

    @Autowired
    public AdminService(AdminRepo a , StationService s , TripService t) {
        this.a = a;
        this.s = s;
        this.t = t;
    }

    public void signup(Admin ad)
    {
        a.save(ad);
    }

    public Admin signin(String username, String password)
    {
        if(a.findAll().stream().anyMatch(admin -> admin.getUsername().equals(username) && admin.getPassword().equals(password)))
        {
            return a.findAll().stream().filter(admin -> admin.getUsername().equals(username) && admin.getPassword().equals(password)).findFirst().get();
        }
        return null;
    }

    private void createStation(String fromstation, String toStation)
    {
        if(s.getStationByName(fromstation) == null){
            s.createStation(new Station(fromstation));
        }

        if(s.getStationByName(toStation) == null){
            s.createStation(new Station(toStation));
        }
    }

    public void createTrip(Trip trip)
    {

            createStation(trip.getFromStationName(), trip.getToStationName());
            t.createTrip(trip);
    }

    public void updateTrip(Trip trip, Integer id)
    {
        createStation(trip.getFromStationName(), trip.getToStationName());
        t.updateTrip(trip,id);
    }

    public void deleteTrip(Integer id)
    {
        t.deleteTrip(id);
    }

    public Iterable<Trip> getAllTrips()
    {
        return t.getAllTrips();
    }

    public Iterable<Station> getAllStations()
    {
        return s.getAllStations();
    }

    public void updateAdmin(Admin ad, Integer id)
    {
        Optional<Admin> admin = a.findById(id);
        if(admin.isPresent())
        {
            ad.setidd(id);
            a.save(ad);
        }
    }

    public void deleteAdmin(Integer id)
    {
        a.deleteById(id);
    }

    public Admin getAdmin(Integer id) {
        if (a.findById(id).isPresent()) {
            return a.findById(id).get();
        }
        return null;
    }

    public Iterable<Admin> getAllAdmins() {
        return a.findAll();
    }
}
