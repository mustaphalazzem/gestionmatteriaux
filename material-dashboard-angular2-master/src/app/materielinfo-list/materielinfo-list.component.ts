import { Component } from '@angular/core';
import {FormeAchat, Fourniture, MaterielInformatique, MaterielInformatiquee} from "../service/regres";
import {FournitureService} from "../service/fourniture-service.service";
import {Router} from "@angular/router";
import {FormeAchatService} from "../service/forme-achat-service.service";
import {MaterielInformatiqueService} from "../service/materiel-informatique.service";
import * as moment from "moment";
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-materielinfo-list',
  templateUrl: './materielinfo-list.component.html',
  styleUrls: ['./materielinfo-list.component.scss']
})
export class MaterielinfoListComponent {
  materiaux: MaterielInformatiquee[] = [];
  paginatedFournitures!: MaterielInformatiquee[];
  pageSize: number = 5;
  currentPage: number = 0;
  //searchTerm!:any ;
  materielInformatiques!: MaterielInformatiquee[];
  id!:number;
  forme!:FormeAchat[]
  
  constructor(private materielInformatiqueService : MaterielInformatiqueService ,private router: Router ,  private formeachat: FormeAchatService) {

  }
  searchTerm: string = ''; // Propriété liée à l'input de recherche
  
  get filteredMaterielInformatiques() {
    return this.materielInformatiques.filter(maison =>
      maison.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      maison.model.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      maison.typeMateriel?.type.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      maison.situation?.situation.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      this.formatDate(maison.dateAjout).toLowerCase().includes(this.searchTerm.toLowerCase())
    );
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
    this.materielInformatiqueService.getAll().subscribe(data => {
      this.materielInformatiques = data;
      this.materiaux = data; 
      console.log(data)

    });

  }
  formatDate(date?: Date): string {
    if (!date) {
      return 'N/A'; // Valeur par défaut si la date est undefined
    }
    return moment(date).format('YYYY-MM-DD'); // Utilisation de moment.js pour formater la date
  }
  maisonDetails(id: string){
    this.router.navigate(['matiereinfodet', id]);
  }
  Edit(id: string){
    this.router.navigate(['updateMateriel', id]);
  }
  /*
    updateMaison(id: number){
      this.router.navigate(['update-maison', id]);
    }*/

  removeMaison(id: string) {
    this.materielInformatiqueService.delete(id).subscribe(
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
    this.paginatedFournitures = this.materiaux.slice(startIndex, endIndex);
  }
}




