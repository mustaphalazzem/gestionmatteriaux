package com.example.stagefourniture.repository;



import com.example.stagefourniture.entity.FormeAchat;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormeAchatRepository extends JpaRepository<FormeAchat, Long> {

    Optional<FormeAchat> findByType(String type);
}
