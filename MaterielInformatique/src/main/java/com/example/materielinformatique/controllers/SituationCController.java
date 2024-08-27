package com.example.materielinformatique.controllers;

import com.example.materielinformatique.entity.SituationC;
import com.example.materielinformatique.services.SituationCService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Remplacez par l'URL de votre application Angular

@RequestMapping("/api/situation")
public class SituationCController {

    @Autowired
    private SituationCService situationCService;

    @GetMapping
    public List<SituationC> getAllSituations() {
        return situationCService.findAll();
    }

    @GetMapping("/{id}")
    public SituationC getSituationById(@PathVariable Long id) {
        return situationCService.findById(id);
    }

    @PostMapping
    public SituationC createSituation(@RequestBody SituationC situationC) {
        return situationCService.save(situationC);
    }

    @PutMapping("/{id}")
    public SituationC updateSituation(@PathVariable Long id, @RequestBody SituationC situationCDetails) {
        return situationCService.update(id, situationCDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteSituation(@PathVariable Long id) {
        situationCService.delete(id);
    }
}