import { Component, OnInit } from '@angular/core';
import { FormeAchat } from "../service/regres";
import { FournitureService } from "../service/fourniture-service.service";
import { Router } from "@angular/router";
import { FormeAchatService } from "../service/forme-achat-service.service";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listaddformatachat',
  templateUrl: './listaddformatachat.component.html',
  styleUrls: ['./listaddformatachat.component.scss']
})
export class ListaddformatachatComponent implements OnInit {
  paginatedFournitures!: FormeAchat[];
  pageSize: number = 5;
  currentPage: number = 0;
  searchTerm: string = '';  // Initialisation du terme de recherche
  fournitures!: FormeAchat[];

  constructor(
    private fournitureService: FournitureService,
    private router: Router,
    private formeachat: FormeAchatService,
  ) {}

  ngOnInit(): void {
    this.getformachat();
  }

  private getformachat() {
    this.formeachat.getAllFormeAchats().subscribe(data => {
      this.fournitures = data;
      this.updatePaginatedFournitures(); // Mise à jour de la pagination lors du chargement initial
    });
  }

  removeMaison(id: number) {
    this.formeachat.deleteFormeAchat(id).subscribe(
      data => {
        console.log(data);
        this.getformachat(); // Recharger la liste après suppression
      },
      error => {
        console.log(error);
      }
    );
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedFournitures();
  }

  // Mettre à jour la pagination en fonction des résultats filtrés
  private updatePaginatedFournitures() {
    const filtered = this.filteredFournitures;  // Utilisation des résultats filtrés
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedFournitures = filtered.slice(startIndex, endIndex);
  }

  // Filtrer les fournitures en fonction du terme de recherche
  get filteredFournitures() {
    return this.fournitures.filter(fourniture =>
      fourniture.type.toString().toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
