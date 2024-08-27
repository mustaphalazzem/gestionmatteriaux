import { Component, OnInit } from '@angular/core';
import { TypeMateriel } from '../service/regres';
import { TypeMaterielService } from '../service/type-materiel.service';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-typemateriel-list',
  templateUrl: './typemateriel-list.component.html',
  styleUrls: ['./typemateriel-list.component.scss']
})
export class TypematerielListComponent implements OnInit {

  searchTerm: string = '';
  fournitures!: TypeMateriel[];
  paginatedFournitures!: TypeMateriel[];
  pageSize: number = 5;
  currentPage: number = 0;
  id!: number;

  constructor(private typeMaterielService: TypeMaterielService, private router: Router) { }

  ngOnInit(): void {
    this.getTypeMateriel();
  }

  private getTypeMateriel() {
    this.typeMaterielService.getAll().subscribe(data => {
      this.fournitures = data;
      this.updatePaginatedFournitures();
    });
  }

  private updatePaginatedFournitures() {
    const filtered = this.filteredFournitures;
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedFournitures = filtered.slice(startIndex, endIndex);
  }

  get filteredFournitures() {
    return this.fournitures.filter(fourniture =>
      fourniture.type.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updatePaginatedFournitures();
  }

  maisonDetails(id: number) {
    this.router.navigate(['fournituredetail', id]);
  }

  removeMaison(id: number) {
    this.typeMaterielService.delete(id).subscribe(
      data => {
        console.log(data);
        this.getTypeMateriel();
      },
      error => {
        console.log(error);
      }
    );
  }
}
