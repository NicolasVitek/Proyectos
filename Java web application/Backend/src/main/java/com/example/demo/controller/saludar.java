package com.example.demo.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("api")
public class saludar {
    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/saludo")
    public String saludo(){
        return "hola a todos";
    }
}

