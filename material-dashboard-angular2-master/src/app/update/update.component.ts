import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MaterielInformatiqueService } from 'app/service/materiel-informatique.service';
import { SituationC, TypeMateriel } from 'app/service/regres';
import { SituationService } from 'app/service/situation.service';
import { TypeMaterielService } from 'app/service/type-materiel.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {
  fournitureForm: FormGroup;
  maison_id!: any;
  typemateriels: TypeMateriel[] = [];
  situations: SituationC[] = [];
  constructor(
    private materielService: MaterielInformatiqueService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private typeMaterielService: TypeMaterielService,
    private situationService: SituationService,
    private router: Router
  ) {
    this.fournitureForm = this.fb.group({
     
      typeMateriel: ['', Validators.required],
      situation: ['', Validators.required]
    });
  }
  loadSituations(): void {
    this.situationService.getAll().subscribe(
        (data: SituationC[]) => {
          this.situations = data;
        },
        (error) => {
          console.error('There was an error!', error);
        }
    );
  }
  loadTypeMateriels(): void {
    this.typeMaterielService.getAll().subscribe(
        (data: TypeMateriel[]) => {
          this.typemateriels = data;
        },
        (error) => {
          console.error('There was an error!', error);
        }
      )
  }
  ngOnInit(): void {
    this.maison_id = this.route.snapshot.params['id'];

    this.loadTypeMateriels();
    this.loadSituations();
   

  }
  onSubmit() {
    const updateData = {
      typeMaterielId: this.fournitureForm.value.typeMaterielId,
      situationId: this.fournitureForm.value.situationId
    };
    
    
    this.materielService.updateMateriel(this.maison_id, updateData).subscribe(
      response => {
        console.log('Mise à jour réussie', response);
        this.router.navigate(['listemat']);  
              // Gérer la réussite (par exemple, afficher un message de succès)
      },
      error => {
        console.error('Erreur lors de la mise à jour', error);
        // Gérer l'erreur (par exemple, afficher un message d'erreur)
      }
    );
  }
}
