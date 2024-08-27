package com.example.stagefourniture.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class FormeAchat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true, nullable = false)
    private String type;

    // Constructors
    public FormeAchat() {
    }

    public FormeAchat(String type) {
        this.type = type;
    }
}
