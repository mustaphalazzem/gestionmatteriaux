package com.example.materielinformatique.entity;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class MaterielInformatique {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY) // Utilisation d'une stratégie de génération automatique
    private String code;

    private String model;
    private Date dateAjout;

    @ManyToOne
    @JoinColumn(name = "type_materiel_id",nullable = true)
    private TypeMateriel typeMateriel;

    @ManyToOne
    @JoinColumn(name = "situation_id", nullable = true)
    private SituationC situation;

    // Getters and Setters
    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Date getDateAjout() {
        return dateAjout;
    }

    public void setDateAjout(Date dateAjout) {
        this.dateAjout = dateAjout;
    }

    public TypeMateriel getTypeMateriel() {
        return typeMateriel;
    }

    public void setTypeMateriel(TypeMateriel typeMateriel) {
        this.typeMateriel = typeMateriel;
    }

    public SituationC getSituation() {
        return situation;
    }

    public void setSituation(SituationC situation) {
        this.situation = situation;
    }
}
