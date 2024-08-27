package com.example.stageeuser;

public class ChangePasswordDTO {
   // Ancien mot de passe
    private String newPassword; // Nouveau mot de passe

 

    // Getter pour le nouveau mot de passe
    public String getNewPassword() {
        return newPassword;
    }

    // Setter pour le nouveau mot de passe
    public void setNewPassword(String newPassword) {
        this.newPassword = newPassword;
    }
}
