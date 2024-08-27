import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: any = {};
  isSuccessful = false;
  errorMessage: string | null = null;

  // isSuccessful = false;
  isSignUpFailed = false;
  
  constructor(private authService: AuthService,private router: Router) { }
  ngOnInit() {
  }
  onSubmit() {
    this.authService.register(this.form).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.router.navigate(['login']);
        },
        err => {
         // this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          
          this.errorMessage = err;
        }
    );
  }
  onLogin() {
    this.router.navigate(['login']);
}
}
