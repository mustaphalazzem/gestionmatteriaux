package com.example.stageeuser.Controller;

import com.example.stageeuser.AuthRequestDTO;
import com.example.stageeuser.ChangePasswordDTO;
import com.example.stageeuser.JwtResponseDTO;
import com.example.stageeuser.Repository.UtilisateurRepository;
import com.example.stageeuser.Security.JwtService;
import com.example.stageeuser.Service.CustomUserDetails;
import com.example.stageeuser.entity.Utilisateur;
import com.example.stageeuser.utility.MailConstructor;
import com.example.stageeuser.utility.SecurityUtility;
import org.springframework.ui.Model;

import jakarta.servlet.http.HttpServletRequest;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class UtilisateurController {
    @Autowired
    private MailConstructor mailConstructor;
    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtService jwtService;

    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    @Autowired
    public UtilisateurController(@Lazy PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager) {
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/login")
    public JwtResponseDTO authenticateAndGetToken(@RequestBody AuthRequestDTO authRequestDTO) {
        try {
            CustomUserDetails userDetails= (CustomUserDetails) userDetailsService.loadUserByUsername(authRequestDTO.getUsername());

            if (passwordEncoder.matches(authRequestDTO.getPassword(), userDetails.getPassword())) {
                Authentication authentication= authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(
                                authRequestDTO.getUsername(),
                                authRequestDTO.getPassword()
                        )
                );

                if (authentication.isAuthenticated()) {
                    Utilisateur currentUser= utilisateurRepository.findByUsername(authRequestDTO.getUsername())
                            .orElseThrow(() -> new UsernameNotFoundException("User not found"));

                    return JwtResponseDTO.builder()
                            .accessToken(jwtService.generateToken(authRequestDTO.getUsername()))
                            .currentUser(currentUser)
                            .build();
                }
            }
            throw new UsernameNotFoundException("Invalid credentials");

        } catch (Exception e) {
            throw new RuntimeException("Authentication failed", e);
        }
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/register")
    public Utilisateur registerUser(@RequestBody Utilisateur utilisateur) {
        Optional<Utilisateur> usernamee = utilisateurRepository.findByUsername(utilisateur.getUsername());
        Optional<Utilisateur> emaile = utilisateurRepository.findByEmail(utilisateur.getEmail());

        // Si une situation avec cette valeur existe déjà, vous pouvez choisir quoi faire :
        if (usernamee.isPresent()||emaile.isPresent()) {
            throw new IllegalArgumentException("Un username et email avec cette valeur existe déjà.");
        }
        utilisateur.setPassword(passwordEncoder.encode(utilisateur.getPassword()));
        return utilisateurRepository.save(utilisateur);
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/users/{id}")
    public Utilisateur getUserById(@PathVariable Long id) {
        return utilisateurRepository.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with id: " + id));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/users")
    public List<Utilisateur> getAllUsers() {
        return (List<Utilisateur>) utilisateurRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/current-user")
    public Utilisateur getCurrentUser() {
        Object principal= SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username;

        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        } else {
            username = principal.toString();
        }

        return utilisateurRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/email/{data}")
    public Utilisateur findByUsername(@PathVariable("data") String email) {
        return utilisateurRepository.findByUsername(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/changer-password/{data}")
    public void changePassword(@PathVariable("data") String username ,@RequestBody ChangePasswordDTO changePasswordDTO) {
        // Récupérer l'utilisateur authentifié
    
        // Récupérer l'utilisateur depuis la base de données
        Utilisateur utilisateur = utilisateurRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    
        // Mettre à jour le mot de passe
        utilisateur.setPassword(passwordEncoder.encode(changePasswordDTO.getNewPassword()));
        utilisateurRepository.save(utilisateur);
    }
    @CrossOrigin
    @RequestMapping("/forget_password")
    public String forgetPassword(HttpServletRequest request, @RequestBody String email, Model model) {

        model.addAttribute("classActiveForgetPassword", true);

        Optional<Utilisateur> user1 = utilisateurRepository.findByEmail(email);
        if (user1 .isPresent()) {
        Utilisateur user = user1.get();
        if (user == null) {
            model.addAttribute("emailNotExist", true);
            return "forget_password";
        }

        String password = SecurityUtility.randomPassword();

       // String encryptedPassword = SecurityUtility.passwordEncoder().encode(password);
       // user.setPassword(encryptedPassword);

        utilisateurRepository.save(user);
        //String token = UUID.randomUUID().toString();
       // utilisateurRepository.createPasswordResetTokenForUser(user, token);
        String appUrl = "http://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();

        SimpleMailMessage newEmail = mailConstructor.constructResetTokenEmail(appUrl, request.getLocale(),  user,
                password);

                mailSender.send(newEmail);


        model.addAttribute("forgetPasswordEmailSent", "true");

        return "forget_password";
    }return "forget_password";
    }
}
