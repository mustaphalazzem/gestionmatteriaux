import { Component, OnInit } from '@angular/core';
import { MaterielInformatiqueService } from 'app/service/materiel-informatique.service';

@Component({
  selector: 'app-rapportinventaire',
  templateUrl: './rapportinventaire.component.html',
  styleUrls: ['./rapportinventaire.component.scss']
})
export class RapportinventaireComponent implements  OnInit {
  groupedMateriels: Map<number, any[]> = new Map();
  formatDate(date: string): string {
    return new Date(date).toLocaleDateString();
  }
  
  constructor(private materielService: MaterielInformatiqueService) { }

  ngOnInit(): void {
    this.materielService.getMaterielsGroupedByYear().subscribe(data => {
      this.groupedMateriels = data;
    });
  }}