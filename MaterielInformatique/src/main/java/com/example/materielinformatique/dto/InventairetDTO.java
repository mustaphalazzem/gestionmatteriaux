package com.example.materielinformatique.dto;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InventairetDTO {

    private String typeMateriel;
    private Long quantiteTotale;

    public InventairetDTO(String typeMateriel, Long quantiteTotale) {
        this.typeMateriel = typeMateriel;
        this.quantiteTotale = quantiteTotale;
    }

}
