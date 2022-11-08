package com.example.TripScheduling.Admin;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin")
public class AdminController {
    AdminService ser;

    public AdminController(AdminService ser) {
        this.ser = ser;
    }

    @PostMapping
    public void signUp(@RequestBody Admin admin)
    {
        ser.save(admin);
    }

}
