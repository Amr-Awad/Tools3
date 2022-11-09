package com.example.TripScheduling.Admin;

import com.example.TripScheduling.Station.Station;
import com.example.TripScheduling.Trip.Trip;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin")
public class AdminController {
    AdminService ser;

    public AdminController(AdminService ser) {
        this.ser = ser;
    }

    @PostMapping("signup")
    public Admin signUp(@RequestBody Admin admin)
    {
        ser.signup(admin);
        return admin;
    }

    @GetMapping("signin")
    public Admin signIn(@RequestBody Admin admin)
    {
        return ser.signin(admin.getUsername(),admin.getPassword());
    }

    @PostMapping("createtrip")
    public void createTrip(@RequestBody Trip trip)
    {
        ser.createTrip(trip);
    }

    @PutMapping("updatetrip/{id}")
    public void updateTrip(@RequestBody Trip trip, @PathVariable Integer id)
    {
        ser.updateTrip(trip,id);
    }

    @DeleteMapping("deletetrip/{id}")
    public void deleteTrip(@PathVariable Integer id)
    {
        ser.deleteTrip(id);
    }

    @GetMapping("getalltrips")
    public Iterable<Trip> getAllTrips()
    {
        return ser.getAllTrips();
    }

    @GetMapping("getallstations")
    public Iterable<Station> getAllStations()
    {
        return ser.getAllStations();
    }



}
