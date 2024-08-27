package com.example.materielinformatique.services;

import com.example.materielinformatique.entity.MaterielInformatique;
import com.example.materielinformatique.entity.SituationC;
import com.example.materielinformatique.entity.TypeMateriel;
import com.example.materielinformatique.repositories.MaterielInformatiqueRepository;
import com.example.materielinformatique.repositories.TypeMaterielRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TypeMaterielService {

    @Autowired
    private TypeMaterielRepository typeMaterielRepository;
    @Autowired
    private MaterielInformatiqueRepository materielInformatiqueRepository;

    public List<TypeMateriel> findAll() {
        return typeMaterielRepository.findAll();
    }

    public TypeMateriel findById(Long id) {
        return typeMaterielRepository.findById(id).orElse(null);
    }

    public TypeMateriel save(TypeMateriel typeMateriel) {
        Optional<TypeMateriel> existingSituationC = typeMaterielRepository.findByType(typeMateriel.getType());
    
        // Si une situation avec cette valeur existe déjà, vous pouvez choisir quoi faire :
        if (existingSituationC.isPresent()) {
            throw new IllegalArgumentException("Un type avec cette valeur existe déjà.");
        }
        return typeMaterielRepository.save(typeMateriel);
    }

    public TypeMateriel update(Long id, TypeMateriel typeMaterielDetails) {
        TypeMateriel typeMateriel = typeMaterielRepository.findById(id).orElse(null);
        if (typeMateriel != null) {
            typeMateriel.setType(typeMaterielDetails.getType());
            return typeMaterielRepository.save(typeMateriel);
        }
        return null;
    }

    public boolean delete(Long id) {
        Optional<TypeMateriel> typeMaterielOptional = typeMaterielRepository.findById(id);
        if (typeMaterielOptional.isPresent()) {
            TypeMateriel typeMateriel = typeMaterielOptional.get();
            List<MaterielInformatique> materiels = materielInformatiqueRepository.findByTypeMateriel(typeMateriel);

            // Remove references to TypeMateriel
            for (MaterielInformatique materiel : materiels) {
                materiel.setTypeMateriel(null); // This should set the typeMateriel to null
                materielInformatiqueRepository.save(materiel);
            }

            typeMaterielRepository.delete(typeMateriel);
            return true;
        } else {
            return false;
        }
    }

}