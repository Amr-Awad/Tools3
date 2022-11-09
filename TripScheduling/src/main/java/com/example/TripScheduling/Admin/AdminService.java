package com.example.TripScheduling.Admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminService {
    private AdminRepo a;

    @Autowired
    public AdminService(AdminRepo a) {
        this.a = a;
    }

    public void createAdmin(Admin ad)
    {
        a.save(ad);
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
