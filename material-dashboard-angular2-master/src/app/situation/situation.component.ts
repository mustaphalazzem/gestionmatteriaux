import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormeAchat} from "../service/regres";
import {TypeMaterielService} from "../service/type-materiel.service";
import {Router} from "@angular/router";
import {SituationService} from "../service/situation.service";

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.scss']
})
export class SituationComponent {


  fournitureForm: FormGroup;
  errorMessage: string | null = null;
  constructor(
      //private fournitureService: FournitureService,
      private fb: FormBuilder,
      private formeAchatService: SituationService,
      private router: Router
  ) {
    this.fournitureForm = this.fb.group({
      situation: ['', Validators.required],

    });
  }
  maisonDetails(){
    this.router.navigate['ajoutsut'];
  }
  onSubmit(): void {
    const fournitureData = this.fournitureForm.value;
    this.formeAchatService.create(fournitureData).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['listes']);
      },
      error => {
        console.error('There was an error!', error);
        this.errorMessage = error; // Affiche le message d'erreur
      }
    );
  }

}
