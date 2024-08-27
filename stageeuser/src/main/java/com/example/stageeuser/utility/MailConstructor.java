package com.example.stageeuser.utility;


import com.example.stageeuser.entity.Utilisateur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Component;

import java.util.Locale;

@Component
public class MailConstructor {
	@Autowired
	private Environment env;

	public SimpleMailMessage constructResetTokenEmail(
			String contextPath, Locale locale, Utilisateur user, String password
	) {

		
		String message = "\nVotre mot de passe a ete reinstaller correctement. \nvotre mot de passe est: \n"+password;
		SimpleMailMessage email = new SimpleMailMessage();
		email.setTo(user.getEmail());
		email.setSubject("Reinstallation de mot de passe");
		email.setText(message);
		email.setFrom(env.getProperty("support.email"));
		return email;

	}
}
