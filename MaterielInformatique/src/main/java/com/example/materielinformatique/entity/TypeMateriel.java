package com.example.materielinformatique.entity;

import jakarta.persistence.*;

@Entity
public class TypeMateriel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, nullable = false)
    private String type;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public  String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}