package com.example.stagefourniture.dto;

public class InventaireDTO {

    private String type;
    private Long totalFournitures;

    public InventaireDTO(String type, Long totalFournitures) {
        this.type = type;
        this.totalFournitures = totalFournitures;
    }

    // Getters and Setters
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Long getTotalFournitures() {
        return totalFournitures;
    }

    public void setTotalFournitures(Long totalFournitures) {
        this.totalFournitures = totalFournitures;
    }
}
