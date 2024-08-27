package com.example.stagefourniture.service;


import com.example.stagefourniture.dto.InventaireDTO;
import com.example.stagefourniture.entity.fourniture;
import com.example.stagefourniture.repository.FournitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FournitureService {

    @Autowired
    private FournitureRepository fournitureRepository;

    public List<fourniture> getAllFournitures() {
        return fournitureRepository.findAll();
    }

    public Optional<fourniture> getFournitureById(Long id) {
        return fournitureRepository.findById(id);
    }

    public fourniture createFourniture(fourniture fourniture) {
        return fournitureRepository.save(fourniture);
    }

    public Optional<fourniture> updateFourniture(Long id, fourniture fournitureDetails) {
        return fournitureRepository.findById(id).map(fourniture -> {
            fourniture.setDateAchat(fournitureDetails.getDateAchat());
            fourniture.setPrix(fournitureDetails.getPrix());
            fourniture.setNom(fournitureDetails.getNom());

            return fournitureRepository.save(fourniture);
        });
    }
     public List<InventaireDTO> getInventaireParFormeAchat() {
        return fournitureRepository.findInventaireParFormeAchat();
    }
    public int getSumOfPrix() {
        return fournitureRepository.findSumOfPrix();
    }
    
    public boolean deleteFourniture(Long id) {
        return fournitureRepository.findById(id).map(fourniture -> {
            fournitureRepository.delete(fourniture);
            return true;
        }).orElse(false);
    }
}
