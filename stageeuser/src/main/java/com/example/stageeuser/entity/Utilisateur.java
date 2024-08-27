package com.example.stageeuser.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "utilisateur", uniqueConstraints = {
    @UniqueConstraint(columnNames = "email"),
    @UniqueConstraint(columnNames = "username")
})
public class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codeUtilisateur;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;

    private String nom;

    private String prenom;

    @Column(unique = true, nullable = false)
    private String username;

    // Vous pouvez ajouter d'autres méthodes ou comportements si nécessaire.
}
