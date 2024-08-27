import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormeAchat, Fourniture, InventairefDTO} from "./regres";


@Injectable({
  providedIn: 'root'
})
export class FournitureService {
  private apiUrl = 'http://localhost:8081/api/fournitures'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  getAllFournitures(): Observable<Fourniture[]> {
    return this.http.get<Fourniture[]>(this.apiUrl);
  }

  getFournitureById(id: number): Observable<Fourniture> {
    return this.http.get<Fourniture>(`${this.apiUrl}/${id}`);
  }

  createFourniture(fourniture: Fourniture): Observable<Fourniture> {
    console.log(fourniture)
    return this.http.post<Fourniture>(this.apiUrl, fourniture);
  }

  updateFourniture(id: number, fourniture: Fourniture): Observable<Fourniture> {
    return this.http.put<Fourniture>(`${this.apiUrl}/${id}`, fourniture);
  }

  deleteFourniture(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getFormeAchatByFournitureId(id: number): Observable<FormeAchat> {
    return this.http.get<FormeAchat>(`${this.apiUrl}/${id}/formeAchat`);
  }
  getSumOfPrix(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/sum-prix`);
  }

  getInventaireParFormeAchat(): Observable<InventairefDTO[]> {
    return this.http.get<InventairefDTO[]>(`${this.apiUrl}/par-forme-achat`);
  }
}
