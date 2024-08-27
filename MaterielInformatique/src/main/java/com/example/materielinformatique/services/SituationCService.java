package com.example.materielinformatique.services;

import com.example.materielinformatique.entity.MaterielInformatique;
import com.example.materielinformatique.entity.SituationC;
import com.example.materielinformatique.repositories.MaterielInformatiqueRepository;
import com.example.materielinformatique.repositories.SituationCRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SituationCService {
    @Autowired
    private SituationCRepository situationCRepository;
    @Autowired
    private MaterielInformatiqueRepository materielInformatiqueRepository;
    public List<SituationC> findAll() {
        return situationCRepository.findAll();
    }

    public SituationC findById(Long id) {
        return situationCRepository.findById(id).orElse(null);
    }

    public SituationC save(SituationC situationC) {
        Optional<SituationC> existingSituationC = situationCRepository.findBySituation(situationC.getSituation());
    
    // Si une situation avec cette valeur existe déjà, vous pouvez choisir quoi faire :
    if (existingSituationC.isPresent()) {
        throw new IllegalArgumentException("Une situation avec cette valeur existe déjà.");
    }
        return situationCRepository.save(situationC);
    }

    public SituationC update(Long id, SituationC situationCDetails) {
        SituationC situationC = situationCRepository.findById(id).orElse(null);
        if (situationC != null) {
            situationC.setSituation(situationCDetails.getSituation());
            return situationCRepository.save(situationC);
        }
        return null;
    }

    public boolean delete(Long id) {
        Optional<SituationC> formeAchatOptional = situationCRepository.findById(id);
        if (formeAchatOptional.isPresent()) {
            SituationC formeAchat = formeAchatOptional.get();
            List<MaterielInformatique> fournitures = materielInformatiqueRepository.findBySituation(formeAchat);

            // Remove references to FormeAchat
            for (MaterielInformatique fourniture : fournitures) {
                fourniture.setSituation(null); // This might be causing the issue if formeAchat is non-nullable
                materielInformatiqueRepository.save(fourniture);
            }

            situationCRepository.delete(formeAchat);
            return true;
        } else {
            return false;
        }
    }
}