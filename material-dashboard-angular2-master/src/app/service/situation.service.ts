import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import {SituationC} from "./regres";


@Injectable({
  providedIn: 'root'
})
export class SituationService {

  private apiUrl = 'http://localhost:8083/api/situation';  // Changez l'URL si nécessaire

  constructor(private http: HttpClient) { }

  getAll(): Observable<SituationC[]> {
    return this.http.get<SituationC[]>(this.apiUrl);
  }

  getById(id: number): Observable<SituationC> {
    return this.http.get<SituationC>(`${this.apiUrl}/${id}`);
  }

  create(situation: SituationC): Observable<SituationC> {
    return this.http.post<SituationC>(this.apiUrl, situation).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
}

  update(id: number, situation: SituationC): Observable<SituationC> {
    return this.http.put<SituationC>(`${this.apiUrl}/${id}`, situation);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
