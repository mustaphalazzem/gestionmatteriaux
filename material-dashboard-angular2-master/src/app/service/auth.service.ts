import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {USER} from "./regres";
const AUTH_API = 'http://localhost:8084/api/v1';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  userLogin(credentials:USER): Observable<any> {
    return this.http.post(AUTH_API + '/login', {
      username: credentials.username,
     password: credentials.password
    }, httpOptions);
  }
  register(user: USER): Observable<any> {
    return this.http.post(AUTH_API + '/register', {
      nom: user.nom,
      prenom: user.prenom,
      username: user.username,
      password: user.password,
      email: user.email

    }, httpOptions);
  }
  /*register1(user: USER): Observable<any> {
    return this.http.post(AUTH_API + '/registerclient', {
      lastname: user.lastname,
      firstname: user.firstname,
      email: user.email,
      password: user.password,
      numtel: user.numtel,
    }, httpOptions);
  }*/
  updatepassword(user: USER): Observable<any> {
    return this.http.post(AUTH_API + '/updatepassword/${id}', {
      lastname: user.prenom,
      firstname: user.nom,
      email: user.email,
      username: user.username,
      password: user.password
    }, httpOptions);
  }

}
