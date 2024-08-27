import { Component, OnInit } from '@angular/core';
import { SituationC } from "../service/regres";
import { Router } from "@angular/router";
import { SituationService } from "../service/situation.service";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-situation-list',
  templateUrl: './situation-list.component.html',
  styleUrls: ['./situation-list.component.scss']
})
export class SituationListComponent implements OnInit {
  paginatedFournitures!: SituationC[];
  pageSize: number = 5;
  currentPage: number = 0;
  searchTerm: string = '';
  fournitures!: SituationC[];

  constructor(private situationService: SituationService, private router: Router) {}

  ngOnInit(): void {
    this.getSituations();
  }

  private getSituations() {
    this.situationService.getAll().subscribe(data => {
      this.fournitures = data;
      this.updatePaginatedFournitures(); // Mise à jour de la pagination après récupération des données
    });
  }

  maisonDetails() {
    this.router.navigate(['ajoutsut']);
  }

  removeMaison(id: number) {
    this.situationService.delete(id).subscribe(
      data => {
        console.log(data);
        this.getSituations(); // Recharger la liste après suppression
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

  private updatePaginatedFournitures() {
    const filtered = this.filteredFournitures;
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedFournitures = filtered.slice(startIndex, endIndex);
  }

  get filteredFournitures() {
    return this.fournitures.filter(fourniture =>
      fourniture.situation.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
