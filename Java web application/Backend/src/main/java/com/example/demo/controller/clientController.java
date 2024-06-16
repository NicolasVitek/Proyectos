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

    @GetMapping(path = "/id/{id}")
    public Optional<Client> getClient(@PathVariable int id) {
        return this.clientService.getClient(id);
    }

    @GetMapping(path = "/userName/{userName}")
    public Client getClientByUserName(@PathVariable String userName) {
        return this.clientService.getClientByUserName(userName);
    }

    @PostMapping()
    public Client saveClient(@RequestBody Client client) {
        return this.clientService.saveClient(client);
    }
}