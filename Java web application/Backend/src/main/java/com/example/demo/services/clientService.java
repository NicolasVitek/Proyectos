package com.example.demo.services;
import java.util.Optional;
import org.springframework.stereotype.Service;

import com.example.demo.model.Client;
import com.example.demo.repositories.IClientRepositoy;

@Service
public class clientService {
    private final IClientRepositoy clientRepository;
    public clientService(IClientRepositoy clientRepository) {
        this.clientRepository = clientRepository;
    }
    public Optional<Client> getClient(int id){
        return this.clientRepository.findById(id);
    }
    public Client saveClient(Client client){
        return this.clientRepository.save(client);
    }
    public Client getClientByUserName(String userName){
        return this.clientRepository.getByUserName(userName);
    }
}
