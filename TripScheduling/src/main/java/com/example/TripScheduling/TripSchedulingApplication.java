package com.example.TripScheduling;

import com.example.TripScheduling.Admin.Admin;
import com.example.TripScheduling.Admin.AdminService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class TripSchedulingApplication {


	public static void main(String[] args) {
		SpringApplication.run(TripSchedulingApplication.class, args);
	}

}
