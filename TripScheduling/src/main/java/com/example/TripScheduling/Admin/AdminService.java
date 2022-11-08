package com.example.TripScheduling.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
    AdminRepo a;

    @Autowired
    public AdminService(AdminRepo a) {
        this.a = a;
    }

    public void save(Admin ad)
    {
        a.save(ad);
    }
}
