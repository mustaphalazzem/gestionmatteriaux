package com.example.materielinformatique.repositories;



import com.example.materielinformatique.dto.InventaireDTO;
import com.example.materielinformatique.entity.MaterielInformatique;
import com.example.materielinformatique.entity.SituationC;
import com.example.materielinformatique.entity.TypeMateriel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;
@Repository

public interface MaterielInformatiqueRepository extends JpaRepository<MaterielInformatique, String> {

    @Query("SELECT mi FROM MaterielInformatique mi WHERE SUBSTRING(mi.code, 1, 8) = :datePart ORDER BY mi.code DESC")
    List<MaterielInformatique> findMaterielsForDate(String datePart);
    List<MaterielInformatique> findBySituation(SituationC situation);
    List<MaterielInformatique> findByTypeMateriel(TypeMateriel formeAchat);

    long countByDateAjout(Date dateAjout);


    @Query("SELECT new com.example.materielinformatique.dto.InventaireDTO(m.model, COUNT(m)) " +
           "FROM MaterielInformatique m " +
           "GROUP BY m.model " +
           "ORDER BY m.model ASC")
    List<InventaireDTO> findInventaireParModel();
    @Query("SELECT COUNT(m) FROM MaterielInformatique m")
    long countMaterielInformatique();
}
