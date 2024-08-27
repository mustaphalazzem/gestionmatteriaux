package com.example.materielinformatique.dto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InventaireDTO {

    private String model;
    private Long quantiteTotale;

    public InventaireDTO(String model, Long quantiteTotale) {
        this.model = model;
        this.quantiteTotale = quantiteTotale;
    }
}
