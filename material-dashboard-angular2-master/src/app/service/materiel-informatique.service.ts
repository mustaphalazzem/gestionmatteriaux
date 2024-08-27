import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {InventaireDTO, InventairesDTO, InventairetDTO, MaterielInformatique, MaterielInformatiquee, MaterielInformatiqueee} from "./regres"; // Assurez-vous de créer ce modèle

@Injectable({
  providedIn: 'root'
})
export class MaterielInformatiqueService {
  private apiUrl1 = 'http://localhost:8083/api/inventaire'; 
  private apiUrl = 'http://localhost:8083/api/materiel';  // Changez l'URL si nécessaire

  constructor(private http: HttpClient) { }

  getAll(): Observable<MaterielInformatiquee[]> {
    return this.http.get<MaterielInformatiquee[]>(this.apiUrl);
  }
  getMaterielsGroupedByYear(): Observable<Map<number, any[]>> {
    return this.http.get<Map<number, any[]>>(`${this.apiUrl}/groupedByYear`);
  }
  getById(id: string): Observable<MaterielInformatiqueee> {
    return this.http.get<MaterielInformatiqueee>(`${this.apiUrl}/${id}`);
  }

  create(materiel: MaterielInformatique): Observable<MaterielInformatique> {
    return this.http.post<MaterielInformatique>(this.apiUrl, materiel);
  }

  update(id: string, materiel: MaterielInformatique): Observable<MaterielInformatique> {
    return this.http.put<MaterielInformatique>(`${this.apiUrl}/${id}`, materiel);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  getInventaireParModel(): Observable<InventaireDTO[]> {
    return this.http.get<InventaireDTO[]>(`${this.apiUrl1}/parModel`);
  }

  getInventaireParTypeMateriel(): Observable<InventairetDTO[]> {
    return this.http.get<InventairetDTO[]>(`${this.apiUrl1}/parTypeMateriel`);
  }
  getMaterielInformatiqueCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }
  getInventaireParSituation(): Observable<InventairesDTO[]> {
    return this.http.get<InventairesDTO[]>(`${this.apiUrl1}/parSituation`);
  }
  updateMateriel(code: string, updateData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${code}`, updateData);
  }
}
