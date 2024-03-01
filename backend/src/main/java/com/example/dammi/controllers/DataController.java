package com.example.dammi.controllers;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DataController {

    @PostMapping("/data/get")
    public List<String> getData() {
        return List.of("Prasanna", "Kaif");
    }

}
