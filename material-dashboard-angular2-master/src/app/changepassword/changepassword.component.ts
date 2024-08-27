import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormeAchat ,changePasswordDTO} from 'app/service/regres';
import { TokenStorageService } from 'app/service/token-storage.service';
import { TypeMaterielService } from 'app/service/type-materiel.service';
import { UserService } from 'app/service/user/user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {

  fournitureForm: FormGroup;
  formesAchat: FormeAchat[] = [];

  constructor(
      //private fournitureService: FournitureService,
      private fb: FormBuilder,
      private formeAchatService: TypeMaterielService,
      private router: Router,
      private userservice:UserService ,
      private tokenstorage: TokenStorageService
  ) {
    this.fournitureForm = this.fb.group({
      newpassword: ['', Validators.required],
    });
  }
  onSubmit(): void {
    const fournitureData = this.fournitureForm.value;
    const username = this.tokenstorage.getCurrentUser().username;
    console.log(username);
    
    // Create ChangePasswordDTO
    const changePasswordDTO: changePasswordDTO = {
      newPassword: fournitureData.newpassword // Correct key based on form control name
    };
  
    this.userservice.changePassword(username, changePasswordDTO).subscribe(
      () => {
        console.log('Password changed successfully');
        this.router.navigate(['acceuille']);
      },
      (error) => {
        console.error('Error changing password', error);
      }
    );
  }
  }
