package com.example.stageeuser.Repository;

import com.example.stageeuser.entity.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UtilisateurRepository extends CrudRepository<Utilisateur, Long> {
   // public Utilisateur findByUsername(String username);
    Optional<Utilisateur> findByUsername(String username);
    Optional<Utilisateur> findByEmail (String email);
}
