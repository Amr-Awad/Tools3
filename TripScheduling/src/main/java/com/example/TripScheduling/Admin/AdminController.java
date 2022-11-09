package com.example.TripScheduling.Admin;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("admin")
public class AdminController {
    AdminService ser;

    public AdminController(AdminService ser) {
        this.ser = ser;
    }

    @PostMapping("create")
    public void signUp(@RequestBody Admin admin)
    {
        ser.createAdmin(admin);
    }

    @PutMapping(value = "update/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void updateAdmin(@RequestBody Admin admin,@PathVariable(value="id") int id)
    {
        ser.updateAdmin(admin, id);
    }

    @DeleteMapping(value = "delete/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public void deleteAdmin(@PathVariable(value="id") int id)
    {
        ser.deleteAdmin(id);
    }

    @GetMapping(value = "get/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Admin getAdmin(@PathVariable(value="id") int id) {
        return ser.getAdmin(id);
    }

    @GetMapping(value = "getall", produces = MediaType.APPLICATION_JSON_VALUE)
    public Iterable<Admin> getAllAdmins() {
        return ser.getAllAdmins();
    }

}
