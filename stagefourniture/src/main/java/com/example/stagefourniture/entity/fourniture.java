package com.example.stagefourniture.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class fourniture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numFacture;
    private String dateAchat;
    private String nom;
    private int prix;

    @ManyToOne
    @JoinColumn(name = "forme_achat_id",  nullable = true)
    private FormeAchat formeAchat;

    // Constructors
    public fourniture() {
    }

    public fourniture(String dateAchat, String nom, int prix, FormeAchat formeAchat) {
        this.dateAchat = dateAchat;
        this.nom = nom;
        this.prix = prix;
        this.formeAchat = formeAchat;
    }

    public fourniture(String dateAchat, int prix) {
        this.dateAchat = dateAchat;
        this.prix = prix;
    }
}
