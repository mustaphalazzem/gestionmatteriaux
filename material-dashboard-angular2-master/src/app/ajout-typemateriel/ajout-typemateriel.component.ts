import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormeAchat} from "../service/regres";
import {FournitureService} from "../service/fourniture-service.service";
import {FormeAchatService} from "../service/forme-achat-service.service";
import {Router} from "@angular/router";
import {TypeMaterielService} from "../service/type-materiel.service";

@Component({
  selector: 'app-ajout-typemateriel',
  templateUrl: './ajout-typemateriel.component.html',
  styleUrls: ['./ajout-typemateriel.component.scss']
})
export class AjoutTypematerielComponent {

  fournitureForm: FormGroup;
  formesAchat: FormeAchat[] = [];
  errorMessage: string | null = null;

  constructor(
      //private fournitureService: FournitureService,
      private fb: FormBuilder,
      private formeAchatService: TypeMaterielService,
      private router: Router
  ) {
    this.fournitureForm = this.fb.group({
      type: ['', Validators.required],

    });
  }
  onSubmit(): void {
    const fournitureData = this.fournitureForm.value;
    console.log(fournitureData);
    this.formeAchatService.create(fournitureData).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['listety']);
        },
        (error) => {
          console.error('There was an error!', error);
          this.errorMessage = error;
        }
    );
  }

}
