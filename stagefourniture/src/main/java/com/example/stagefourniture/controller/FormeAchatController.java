package com.example.stagefourniture.controller;

import com.example.stagefourniture.entity.FormeAchat;
import com.example.stagefourniture.service.FormeAchatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@CrossOrigin(origins = "http://localhost:4200")

@RestController
@RequestMapping("/api/formeAchats")
public class FormeAchatController {

    @Autowired
    private FormeAchatService formeAchatService;

    @GetMapping
    public List<FormeAchat> getAllFormeAchats() {
        return formeAchatService.getAllFormeAchats();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormeAchat> getFormeAchatById(@PathVariable Long id) {
        Optional<FormeAchat> formeAchat = formeAchatService.getFormeAchatById(id);
        return formeAchat.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public FormeAchat createFormeAchat(@RequestBody FormeAchat formeAchat) {
        return formeAchatService.createFormeAchat(formeAchat);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FormeAchat> updateFormeAchat(@PathVariable Long id, @RequestBody FormeAchat formeAchatDetails) {
        Optional<FormeAchat> updatedFormeAchat = formeAchatService.updateFormeAchat(id, formeAchatDetails);
        return updatedFormeAchat.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFormeAchat(@PathVariable Long id) {
        boolean isDeleted = formeAchatService.deleteFormeAchat(id);
        if (isDeleted) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
