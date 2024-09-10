package com.example.stageeuser;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class StageeuserApplication {

    public static void main(String[] args) {
        SpringApplication.run(StageeuserApplication.class, args);
    }

}
