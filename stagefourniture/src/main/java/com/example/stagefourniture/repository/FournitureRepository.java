package com.example.stagefourniture.repository;



import com.example.stagefourniture.dto.InventaireDTO;
import com.example.stagefourniture.entity.FormeAchat;
import com.example.stagefourniture.entity.fourniture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FournitureRepository extends JpaRepository<fourniture, Long> {
    List<fourniture> findByFormeAchat(FormeAchat formeAchat);
@Query("SELECT new com.example.stagefourniture.dto.InventaireDTO(fa.type, COUNT(f)) " +
           "FROM fourniture f JOIN f.formeAchat fa " +
           "GROUP BY fa.type")
    List<InventaireDTO> findInventaireParFormeAchat();
    @Query("SELECT SUM(f.prix) FROM fourniture f")
    int findSumOfPrix();
}
