import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {TokenStorageService} from "../service/token-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string[] = [];
  constructor(private route:Router,private authService: AuthService, private tokenStorage: TokenStorageService) { }
  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      //this.role = this.tokenStorage.getUser().role;
    }
  }
  onSubmit() {
    this.authService.userLogin(this.form).subscribe(
        (data: any) => {

          this.tokenStorage.saveToken(data.token);
          this.tokenStorage.saveUser(data);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          // this.role = this.tokenStorage.getUser().role;
          // const rolee=this.role.toString();

          
             this.route.navigate(['acceuil']);
            },
       
          err => { 
            this.errorMessage = 'Erreur de connexion. Veuillez réessayer.';
          this.isLoginFailed = true;
        }
    );
  }
  reloadPage() {
    window.location.reload();
  }
  onSignup(){
    this.route.navigate(['register']);
  }}

