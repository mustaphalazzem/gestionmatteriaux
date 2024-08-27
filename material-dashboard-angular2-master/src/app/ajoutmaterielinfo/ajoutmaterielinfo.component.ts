import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TypeMateriel, SituationC } from "../service/regres";
import { MaterielInformatiqueService } from "../service/materiel-informatique.service";
import { TypeMaterielService } from "../service/type-materiel.service";
import { SituationService } from "../service/situation.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-ajoutmaterielinfo',
  templateUrl: './ajoutmaterielinfo.component.html',
  styleUrls: ['./ajoutmaterielinfo.component.scss']
})
export class AjoutmaterielinfoComponent implements OnInit {

  fournitureForm: FormGroup;
  typemateriels: TypeMateriel[] = [];
  situations: SituationC[] = [];

  constructor(
      private typeMaterielService: TypeMaterielService,
      private situationService: SituationService,
      private fb: FormBuilder,
      private matrielinformatiqueService: MaterielInformatiqueService,
      private router: Router
  ) {
    this.fournitureForm = this.fb.group({
      model: ['', Validators.required],
      dateAjout: ['', Validators.required],
      typeMateriel: ['', Validators.required],
      situation: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadTypeMateriels();
    this.loadSituations();
  }

  loadTypeMateriels(): void {
    this.typeMaterielService.getAll().subscribe(
        (data: TypeMateriel[]) => {
          this.typemateriels = data;
        },
        (error) => {
          console.error('There was an error!', error);
        }
    );
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

  onSubmit(): void {
    if (this.fournitureForm.valid) {
      const formValue = this.fournitureForm.value;

      const selectedType = formValue.typeMateriel;
      const selectedSituation = formValue.situation;

      const typeMateriel = this.typemateriels.find(t => t.type === selectedType) ;
      const situation = this.situations.find(s => s.situation === selectedSituation) ;

      const fournitureData = {
        model: formValue.model,
        dateAjout: formValue.dateAjout,
        typeMateriel,
        situation
      };

      this.matrielinformatiqueService.create(fournitureData).subscribe(
          data => {
            console.log(data);
            this.router.navigate(['listemat']);
          },
          error => {
            console.error('There was an error!', error);
          }
      );
    }
  }
}
