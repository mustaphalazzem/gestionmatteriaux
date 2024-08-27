package com.example.stagefourniture.controller;



import com.example.stagefourniture.dto.InventaireDTO;
import com.example.stagefourniture.entity.FormeAchat;
import com.example.stagefourniture.entity.fourniture;
import com.example.stagefourniture.repository.FournitureRepository;
import com.example.stagefourniture.service.FournitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/fournitures")
public class FournitureController {

    @Autowired
    private FournitureService fournitureService;

    @GetMapping
    public List<fourniture> getAllFournitures() {
        return fournitureService.getAllFournitures();
    }

    @GetMapping("/{id}")
    public ResponseEntity<fourniture> getFournitureById(@PathVariable Long id) {
        Optional<fourniture> fourniture = fournitureService.getFournitureById(id);
        return fourniture.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public fourniture createFourniture(@RequestBody fourniture fourniture) {
        System.out.println(fourniture);
        return fournitureService.createFourniture(fourniture);
    }

    @PutMapping("/{id}")
    public ResponseEntity<fourniture> updateFourniture(@PathVariable Long id, @RequestBody fourniture fournitureDetails) {
        Optional<fourniture> updatedFourniture = fournitureService.updateFourniture(id, fournitureDetails);
        return updatedFourniture.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @GetMapping("/sum-prix")
    public int getSumOfPrix() {
        return fournitureService.getSumOfPrix();
    }

   @GetMapping("/par-forme-achat")
    public List<InventaireDTO> getInventaireParFormeAchat() {
        return fournitureService.getInventaireParFormeAchat();
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFourniture(@PathVariable Long id) {
        boolean isDeleted = fournitureService.deleteFourniture(id);
        if (isDeleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/{id}/formeAchat")
    public ResponseEntity<FormeAchat> getFormeAchatByFournitureId(@PathVariable Long id) {
        Optional<fourniture> fourniture = fournitureService.getFournitureById(id);
        if (fourniture.isPresent()) {
            FormeAchat formeAchat = fourniture.get().getFormeAchat();
            return ResponseEntity.ok(formeAchat);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
