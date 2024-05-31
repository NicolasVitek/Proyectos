package com.example.demo.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Client;
import com.example.demo.services.clientService;

@RestController
@RequestMapping("/client")
public class clientController {
    @Autowired
    clientService clientService;

    @GetMapping( path = "/{id}")
    public Optional<Client> getClient(@PathVariable("id") int id) {
        return this.clientService.getClient(id);
    }
    @PostMapping()
    public Client savClient(@RequestBody Client client){
        return this.clientService.saveClient(client);
    }
}
