package com.example.TripScheduling.Station;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StationService {
    private StationRepo s;

    @Autowired
    public StationService(StationRepo s) {
        this.s = s;
    }

    public void createStation(Station st)
    {
        s.save(st);
    }

    public void updateStation(Station st, Integer id)
    {
        Optional<Station> station = s.findById(id);
        if(station.isPresent())
        {
            st.setidd(id);
            s.save(st);
        }
    }

    public void deleteStation(Integer id)
    {
        s.deleteById(id);
    }

    public Station getStation(Integer id) {
        if (s.findById(id).isPresent()) {
            return s.findById(id).get();
        }
        return null;
    }

    public Station getStationByName(String name) {
        if (s.findAll().stream().anyMatch(station -> station.getName().equals(name))) {
            return s.findAll().stream().filter(station -> station.getName().equals(name)).findFirst().get();
        }
        return null;
    }

    public Iterable<Station> getAllStations() {
        return s.findAll();
    }
}
