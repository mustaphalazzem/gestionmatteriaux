import { Component, ViewChild } from '@angular/core';
import {FormeAchat, Fourniture} from "../service/regres";
import {FournitureService} from "../service/fourniture-service.service";
import {Router} from "@angular/router";
import {FormeAchatService} from "../service/forme-achat-service.service";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-listefourniture',
  templateUrl: './listefourniture.component.html',
  styleUrls: ['./listefourniture.component.scss']
})
export class ListefournitureComponent {
  paginatedFournitures!: Fourniture[];
  pageSize: number = 5;
  currentPage: number = 0;
  //searchTerm!:any ;
  searchTerm: string = ''; // Propriété liée à l'input de recherche

  fournitures!: Fourniture[];
  id!:number;
  forme!:FormeAchat[]
  //displayedColumns: string[] = ['numFacture', 'nom', 'prix', 'formeAchat.type', 'dateAchat', 'actions'];

  dataSource = new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private fournitureService : FournitureService ,private router: Router ,  private formeachat: FormeAchatService) {

  }

  ngOnInit(): void {
    this.getfourniture() ;
    this.getCategories() ;

  }
  private getCategories() {
    this.formeachat.getAllFormeAchats().subscribe(data => {
      this.forme = data;
    });
  }
  searchMaisons() {
    // Filter maisons based on the search term
    /* this.maisonService.searchByPropertyName(this.searchTerm).subscribe(data => {
       this.maisons = data;
       console.log(data);
     });*/
  }
  private getfourniture() {
    this.fournitureService.getAllFournitures().subscribe(data => {
      this.fournitures = data;
      console.log(data)

    });

  }

  maisonDetails(id: number){
    this.router.navigate(['fournituredetail', id]);
  }
  /*
    updateMaison(id: number){
      this.router.navigate(['update-maison', id]);
    }*/

  removeMaison(id: number) {
    this.fournitureService.deleteFourniture(id).subscribe(
        data => {
          console.log(data);
          this.getfourniture();      },
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
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedFournitures = this.fournitures.slice(startIndex, endIndex);
  }
  get filteredFournitures() {
    return this.fournitures.filter(fourniture => 
      fourniture.numFacture.toString().toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      fourniture.nom.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      fourniture.prix.toString().toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      fourniture.formeAchat?.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      this.formatDate(fourniture.dateAchat).toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
  // Assurez-vous que cette méthode est incluse dans votre composant
  formatDate(date?: any): string {
    if (!date) {
      return 'N/A'; 
    }
    if (typeof date === 'string') {
      date = new Date(date);
    }
    return date.toISOString().split('T')[0];
  }
}




