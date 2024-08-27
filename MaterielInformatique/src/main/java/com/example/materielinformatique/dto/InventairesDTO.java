package com.example.materielinformatique.dto;


public class InventairesDTO {

    private String situation;
    private Long quantiteTotale;

    public InventairesDTO(String situation, Long quantiteTotale) {
        this.situation = situation;
        this.quantiteTotale = quantiteTotale;
    }

    // Getters and Setters
    public String getSituation() {
        return situation;
    }

    public void setSituation(String situation) {
        this.situation = situation;
    }

    public Long getQuantiteTotale() {
        return quantiteTotale;
    }

    public void setQuantiteTotale(Long quantiteTotale) {
        this.quantiteTotale = quantiteTotale;
    }
}