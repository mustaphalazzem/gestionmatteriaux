package com.example.materielinformatique.repositories;

import com.example.materielinformatique.dto.InventairesDTO;
import com.example.materielinformatique.entity.SituationC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Optional;
public interface SituationCRepository extends JpaRepository<SituationC, Long> {
    @Query("SELECT new com.example.materielinformatique.dto.InventairesDTO(s.situation, COUNT(m.code)) " +
    "FROM MaterielInformatique m " +
    "JOIN m.situation s " +
    "GROUP BY s.situation")
List<InventairesDTO> findInventaireParSituation();

    Optional<SituationC> findBySituation(String situation);
}