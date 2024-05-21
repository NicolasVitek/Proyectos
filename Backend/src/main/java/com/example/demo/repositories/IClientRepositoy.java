package com.example.demo.repositories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.client;

@Repository
public interface IClientRepositoy extends JpaRepository<client, Long> {

}
