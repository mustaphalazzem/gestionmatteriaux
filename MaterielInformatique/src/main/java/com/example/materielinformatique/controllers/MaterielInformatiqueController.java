package com.example.materielinformatique.controllers;

import com.example.materielinformatique.dto.UpdateMaterielDTO;
import com.example.materielinformatique.entity.MaterielInformatique;
import com.example.materielinformatique.services.MaterielInformatiqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200") // Remplacez par l'URL de votre application Angular

@RequestMapping("/api/materiel")
public class MaterielInformatiqueController {

    @Autowired
    private MaterielInformatiqueService materielInformatiqueService;

    @GetMapping
    public List<MaterielInformatique> getAllMaterielInformatique() {
        return materielInformatiqueService.findAll();
    }
    @GetMapping("/count")
    public long getMaterielInformatiqueCount() {
        return materielInformatiqueService.getCountOfMaterielInformatique();
    }
    @GetMapping("/{id}")
    public ResponseEntity<MaterielInformatique> getMaterielInformatiqueById(@PathVariable String id) {
        Optional<MaterielInformatique> materielInformatique = materielInformatiqueService.findById(id);
        return materielInformatique.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public MaterielInformatique createMaterielInformatique(@RequestBody MaterielInformatique materielInformatique) {
        return materielInformatiqueService.save(materielInformatique);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MaterielInformatique> updateMaterielInformatique(@PathVariable String id, @RequestBody MaterielInformatique materielInformatiqueDetails) {
        Optional<MaterielInformatique> materielInformatiqueOptional = materielInformatiqueService.findById(id);
        if (materielInformatiqueOptional.isPresent()) {
            MaterielInformatique materielInformatique = materielInformatiqueOptional.get();
            materielInformatique.setModel(materielInformatiqueDetails.getModel());
            materielInformatique.setDateAjout(materielInformatiqueDetails.getDateAjout());
            materielInformatique.setTypeMateriel(materielInformatiqueDetails.getTypeMateriel());
            materielInformatique.setSituation(materielInformatiqueDetails.getSituation());
            MaterielInformatique updatedMaterielInformatique = materielInformatiqueService.save(materielInformatique);
            return ResponseEntity.ok(updatedMaterielInformatique);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMaterielInformatique(@PathVariable String id) {
        Optional<MaterielInformatique> materielInformatiqueOptional = materielInformatiqueService.findById(id);
        if (materielInformatiqueOptional.isPresent()) {
            materielInformatiqueService.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/groupedByYear")
    public ResponseEntity<Map<Integer, List<MaterielInformatique>>> getMaterielsGroupedByYear() {
        Map<Integer, List<MaterielInformatique>> groupedMateriels = materielInformatiqueService.getMaterielsGroupedByYear();
        return ResponseEntity.ok(groupedMateriels);
    }  
    @PutMapping("/update/{code}")
    public MaterielInformatique updateMateriel(@PathVariable String code, @RequestBody UpdateMaterielDTO updateMaterielDTO) {
        return materielInformatiqueService.updateMateriel(code, updateMaterielDTO);
    }
}
