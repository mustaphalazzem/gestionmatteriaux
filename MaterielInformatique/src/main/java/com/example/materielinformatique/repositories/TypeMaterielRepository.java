package com.example.materielinformatique.repositories;


import com.example.materielinformatique.dto.InventairetDTO;
import com.example.materielinformatique.entity.TypeMateriel;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TypeMaterielRepository extends JpaRepository<TypeMateriel, Long> {
    @Query("SELECT new com.example.materielinformatique.dto.InventairetDTO(tm.type, COUNT(m.code)) " +
    "FROM MaterielInformatique m " +
    "JOIN m.typeMateriel tm " +
    "GROUP BY tm.type")
List<InventairetDTO> findInventaireParTypeMateriel();

    Optional<TypeMateriel> findByType(String type);


}

