import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormeAchat } from '../service/regres';
import { FournitureService } from '../service/fourniture-service.service';
import { FormeAchatService } from '../service/forme-achat-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fourniture-ajouter',
  templateUrl: './fourniture-ajouter.component.html',
  styleUrls: ['./fourniture-ajouter.component.scss']
})
export class FournitureAjouterComponent implements OnInit {
  fournitureForm: FormGroup;
  formesAchat: FormeAchat[] = [];

  constructor(
      private fournitureService: FournitureService,
      private fb: FormBuilder,
      private formeAchatService: FormeAchatService,
      private router: Router
  ) {
    this.fournitureForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      formeAchat: ['', Validators.required],
      dateAchat: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {
    this.loadFormesAchat();
  }

  loadFormesAchat(): void {
    this.formeAchatService.getAllFormeAchats().subscribe(
        (data: FormeAchat[]) => {
          this.formesAchat = data;
        },
        (error) => {
          console.error('There was an error!', error);
        }
    );
  }

  onSubmit(): void {
    if (this.fournitureForm.valid) {
      // Find the selected formeAchat object by its type
      const selectedType = this.fournitureForm.value.formeAchat;
      const selectedFormeAchat = this.formesAchat.find(formeAchat => formeAchat.type === selectedType);

      // Construct the fourniture data
      const fournitureData = {
        ...this.fournitureForm.value,
        formeAchat: selectedFormeAchat
      };

      this.fournitureService.createFourniture(fournitureData).subscribe(
          data => {
            console.log(data);
            this.router.navigate(['listef']);
          },
          (error) => {
            console.error('There was an error!', error);
          }
      );
    }
  }
}
