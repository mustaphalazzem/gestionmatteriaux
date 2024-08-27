package com.example.stageeuser;

import com.example.stageeuser.entity.Utilisateur;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JwtResponseDTO {
    private String accessToken;
    private Utilisateur currentUser;
    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken (String accessToken) {
        this.accessToken = accessToken;
    }

    public Utilisateur getCurrentUser() {
        return currentUser;
    }

    public void setCurrentUser(Utilisateur currentUser) {
        this.currentUser = currentUser;
    }
}