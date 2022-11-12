package com.example.TripScheduling.Trip;

import com.example.TripScheduling.Station.StationService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("trip")
public class TripController {
    TripService ser;
    StationService s;


    public TripController(TripService ser , StationService s) {
        this.ser = ser;
        this.s = s;
    }

    @PostMapping("create")
    public void createTrip(@RequestBody Trip tr)
    {

        ser.createTrip(tr);
    }

    @PutMapping(value = "update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void updateTrip(@RequestBody Trip tr, @PathVariable(value="id") int id)
    {
        ser.updateTrip(tr, id);
    }

    @DeleteMapping(value = "delete/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void deleteTrip(@PathVariable(value="id") int id)
    {
        ser.deleteTrip(id);
    }

    @GetMapping(value = "get/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Trip getTrip(@PathVariable(value="id") int id) {
        return ser.getTrip(id);
    }

    @GetMapping(value = "getall", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Trip> getAllTrips() {
        return ser.getAllTrips();
    }

}
