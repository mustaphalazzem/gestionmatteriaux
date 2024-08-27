package com.example.materielinformatique.dto;

public class UpdateMaterielDTO {
    private Long typeMaterielId;
    private Long situationId;

    // Getters and Setters
    public Long getTypeMaterielId() {
        return typeMaterielId;
    }

    public void setTypeMaterielId(Long typeMaterielId) {
        this.typeMaterielId = typeMaterielId;
    }

    public Long getSituationId() {
        return situationId;
    }

    public void setSituationId(Long situationId) {
        this.situationId = situationId;
    }
}
