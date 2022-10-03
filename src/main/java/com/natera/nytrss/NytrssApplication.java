package com.natera.nytrss;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class NytrssApplication {

    public static void main(String[] args) {
        SpringApplication.run(NytrssApplication.class, args);
    }

}
