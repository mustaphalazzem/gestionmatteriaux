import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TypeMateriel} from "./regres";

@Injectable({
  providedIn: 'root'
})
export class TypeMaterielService {

  private apiUrl = 'http://localhost:8083/api/typeMateriel';  // Changez l'URL si nécessaire

  constructor(private http: HttpClient) { }

  getAll(): Observable<TypeMateriel[]> {
    return this.http.get<TypeMateriel[]>(this.apiUrl);
  }

  getById(id: number): Observable<TypeMateriel> {
    return this.http.get<TypeMateriel>(`${this.apiUrl}/${id}`);
  }

  create(typeMateriel: TypeMateriel): Observable<TypeMateriel> {
    return this.http.post<TypeMateriel>(this.apiUrl, typeMateriel);
  }

  update(id: number, typeMateriel: TypeMateriel): Observable<TypeMateriel> {
    return this.http.put<TypeMateriel>(`${this.apiUrl}/${id}`, typeMateriel);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
