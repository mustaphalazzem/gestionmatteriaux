package com.example.materielinformatique.controllers;

import com.example.materielinformatique.entity.TypeMateriel;
import com.example.materielinformatique.services.TypeMaterielService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Remplacez par l'URL de votre application Angular

@RequestMapping("/api/typeMateriel")
public class TypeMaterielController {

    @Autowired
    private TypeMaterielService typeMaterielService;

    @GetMapping
    public List<TypeMateriel> getAllTypeMateriels() {
        return typeMaterielService.findAll();
    }

    @GetMapping("/{id}")
    public TypeMateriel getTypeMaterielById(@PathVariable Long id) {
        return typeMaterielService.findById(id);
    }

    @PostMapping
    public TypeMateriel createTypeMateriel(@RequestBody TypeMateriel typeMateriel) {
        return typeMaterielService.save(typeMateriel);
    }

    @PutMapping("/{id}")
    public TypeMateriel updateTypeMateriel(@PathVariable Long id, @RequestBody TypeMateriel typeMaterielDetails) {
        return typeMaterielService.update(id, typeMaterielDetails);
    }

    @DeleteMapping("/{id}")
    public void deleteTypeMateriel(@PathVariable Long id) {
        typeMaterielService.delete(id);
    }
}