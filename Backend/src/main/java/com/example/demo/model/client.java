package com.example.demo.model;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity(name = "Clients")
public class client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToMany(mappedBy = "cliente", cascade = CascadeType.ALL)
    private List<resultText> resultados;
    private String name;
    private String lastName;
    private String userName;
    private String city;
    private String state;
    private int zipCode;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getUserName() {
        return userName;
    }
    public void setUserName(String userName) {
        this.userName = userName;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public int getZipCode() {
        return zipCode;
    }
    public void setZipCode(int zipCode) {
        this.zipCode = zipCode;
    }
    public client(){}
    public client(String name, String lastName, String userName, String city, String state, int zipCode){
        this.name=name;
        this.lastName=lastName;
        this.userName=userName;
        this.city=city;
        this.state=state;
        this.zipCode=zipCode;
    }
    public List<resultText> getText(){
        return resultados;
    }
}
