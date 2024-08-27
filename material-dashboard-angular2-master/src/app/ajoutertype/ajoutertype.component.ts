import { Component } from '@angular/core';
import { FournitureService } from "../service/fourniture-service.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormeAchatService } from "../service/forme-achat-service.service";
import { Router } from "@angular/router";
import { FormeAchat } from "../service/regres";

@Component({
  selector: 'app-ajoutertype',
  templateUrl: './ajoutertype.component.html',
  styleUrls: ['./ajoutertype.component.scss']
})
export class AjoutertypeComponent {
  fournitureForm: FormGroup;
  formesAchat: FormeAchat[] = [];
  errorMessage: string | null = null;
  constructor(
      private fournitureService: FournitureService,
      private fb: FormBuilder,
      private formeAchatService: FormeAchatService,
      private router: Router
  ) {
    this.fournitureForm = this.fb.group({
      type: ['', [
        Validators.required,
        Validators.minLength(3), // Le type doit avoir au moins 3 caractères
        Validators.pattern('^[a-zA-Z ]*$') // Le type ne peut contenir que des lettres et des espaces
      ]],
    });
  }

  onSubmit(): void {
    if (this.fournitureForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const fournitureData = this.fournitureForm.value;
    console.log(fournitureData);
    this.formeAchatService.createFormeAchat(fournitureData).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['listea']);
        },
        (error) => {
          console.error('There was an error!', error);
          this.errorMessage = error;
        }
    );
  }
}
