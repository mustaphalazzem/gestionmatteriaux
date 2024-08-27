import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {FormeAchat} from "./regres";


@Injectable({
  providedIn: 'root'
})
export class FormeAchatService {
  private apiUrl1 = 'http://localhost:8081/api/formeAchats';
  private apiUrl = `${this.apiUrl1}`; // Assurez-vous que cette URL est correcte

  constructor(private http: HttpClient) {}

  getAllFormeAchats(): Observable<FormeAchat[]> {
    return this.http.get<FormeAchat[]>(this.apiUrl);
  }

  getFormeAchatById(id: number): Observable<FormeAchat> {
    return this.http.get<FormeAchat>(`${this.apiUrl}/${id}`);
  }

  createFormeAchat(formeAchat: FormeAchat): Observable<FormeAchat> {
    return this.http.post<FormeAchat>(this.apiUrl, formeAchat);
  }

  updateFormeAchat(id: number, formeAchat: FormeAchat): Observable<FormeAchat> {
    return this.http.put<FormeAchat>(`${this.apiUrl}/${id}`, formeAchat);
  }

  deleteFormeAchat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
