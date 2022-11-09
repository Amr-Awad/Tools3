package com.example.TripScheduling.Station;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("station")
public class StationController {
    StationService ser;

    public StationController(StationService ser) {
        this.ser = ser;
    }

    @PostMapping("create")
    public void createStation(@RequestBody Station station)
    {
        ser.createStation(station);
    }

    @PutMapping(value = "update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void updateStation(@RequestBody Station station, @PathVariable(value="id") int id)
    {
        ser.updateStation(station, id);
    }

    @DeleteMapping(value = "delete/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void deleteStation(@PathVariable(value="id") int id)
    {
        ser.deleteStation(id);
    }

    @GetMapping(value = "get/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Station getStation(@PathVariable(value="id") int id) {
        return ser.getStation(id);
    }

    @GetMapping(value = "getall", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Station> getAllStations() {
        return ser.getAllStations();
    }
}
