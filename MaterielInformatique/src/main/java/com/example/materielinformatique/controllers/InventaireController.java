package com.example.materielinformatique.controllers;

import java.util.List;
import com.example.materielinformatique.dto.InventaireDTO;
import com.example.materielinformatique.dto.InventairesDTO;
import com.example.materielinformatique.dto.InventairetDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.materielinformatique.services.MaterielInformatiqueService;

@RestController
@CrossOrigin// Remplacez par l'URL de votre application Angular

@RequestMapping("/api/inventaire")
public class InventaireController {

    @Autowired
    private MaterielInformatiqueService materielInformatiqueService;

    @GetMapping("/parModel")
    public List<InventaireDTO> getInventaireParModel() {
        return materielInformatiqueService.getInventaireParModel();
    }

    @GetMapping("/parTypeMateriel")
    public List<InventairetDTO> getInventaireParTypeMateriel() {
        return materielInformatiqueService.getInventaireParTypeMateriel();
    }

    @GetMapping("/parSituation")
    public List<InventairesDTO> getInventaireParSituation() {
        return materielInformatiqueService.getInventaireParSituation();
    }
}
