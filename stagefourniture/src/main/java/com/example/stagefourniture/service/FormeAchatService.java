package com.example.stagefourniture.service;


import com.example.stagefourniture.entity.FormeAchat;
import com.example.stagefourniture.entity.fourniture;
import com.example.stagefourniture.repository.FormeAchatRepository;
import com.example.stagefourniture.repository.FournitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FormeAchatService {

    @Autowired
    private FormeAchatRepository formeAchatRepository;
    @Autowired
    private FournitureRepository fournitureRepository;
    public List<FormeAchat> getAllFormeAchats() {
        return formeAchatRepository.findAll();
    }

    public Optional<FormeAchat> getFormeAchatById(Long id) {
        return formeAchatRepository.findById(id);
    }

    public FormeAchat createFormeAchat(FormeAchat formeAchat) {
        Optional<FormeAchat> existingSituationC = formeAchatRepository.findByType(formeAchat.getType());
    
        // Si une situation avec cette valeur existe déjà, vous pouvez choisir quoi faire :
        if (existingSituationC.isPresent()) {
            throw new IllegalArgumentException("Une forme avec cette valeur existe déjà.");
        }
        return formeAchatRepository.save(formeAchat);
    }

    public Optional<FormeAchat> updateFormeAchat(Long id, FormeAchat formeAchatDetails) {
        return formeAchatRepository.findById(id).map(formeAchat -> {
            formeAchat.setType(formeAchatDetails.getType());
            return formeAchatRepository.save(formeAchat);
        });
    }

    public boolean deleteFormeAchat(Long id) {
        Optional<FormeAchat> formeAchatOptional = formeAchatRepository.findById(id);
        if (formeAchatOptional.isPresent()) {
            FormeAchat formeAchat = formeAchatOptional.get();
            List<fourniture> fournitures = fournitureRepository.findByFormeAchat(formeAchat);

            // Remove references to FormeAchat
            for (fourniture fourniture : fournitures) {
                fourniture.setFormeAchat(null); // This might be causing the issue if formeAchat is non-nullable
                fournitureRepository.save(fourniture);
            }

            formeAchatRepository.delete(formeAchat);
            return true;
        } else {
            return false;
        }
    }


}
