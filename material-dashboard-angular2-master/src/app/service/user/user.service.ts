import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { baseUrl } from 'C:/Users/mustapha/Downloads/material-dashboard-angular2-master/material-dashboard-angular2-master/src/app/config.ts';
import { UserAuthService } from '../user-auth.service';
import {Observable} from "rxjs";
import { User, USER,changePasswordDTO} from "../regres";
import {user} from "../user";
import {passwordRequest} from "../user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl ='http://localhost:8084'
  private baseURL = "http://localhost:8084/api/UserInfo";
  private baseURL1 = "http://localhost:8084/api/ListUser";
  private baseURL2 = "http://localhost:8084";
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  private ressource = `${this.baseUrl}/users`
  constructor(private httpclient:HttpClient,private userAuthService:UserAuthService) { }
  public login(loginData:any) {
    return this.httpclient.post(`${this.ressource}/login`,loginData,{headers:this.requestHeader},)
  }
  getUserList(): Observable<USER[]>{
    return this.httpclient.get<USER[]>(`${this.baseURL1}`);
  }

  checkEmailUnique(email: string): Observable<boolean> {
    return this.httpclient.get<boolean>(`${this.baseURL2}/api/check-email-uniqueness?email=${email}`);
  }
 
  changePassword(data: string, changePasswordDTO: changePasswordDTO): Observable<changePasswordDTO> {
    const url = `http://localhost:8084/api/v1/changer-password/${data}`;
    return this.httpclient.put<changePasswordDTO>(url, changePasswordDTO);
  }

  updateUser(id: number, user: user): Observable<user[]> {
    console.log(user);
    return this.httpclient.put<user[]>(`${this.baseURL2}/api/modifieruser/${id}`, user);
  }



  getuser(): Observable<USER> {
    return this.httpclient.get<USER>(`${this.baseURL2}/api/v1/current-user`);
  }
  checkEmailUniqueness(email: string): Observable<boolean> {
    const url = `${this.baseURL2}/api/check-email-uniqueness`;
    return this.httpclient.get<boolean>(url, { params: { email } });
  }
  removeuser(id: number): Observable<USER> {
    return this.httpclient.delete<USER>(`${this.baseURL2}/api/removeUser/${id}`);
  }
  updatepassword(id: number,   p:passwordRequest): Observable<passwordRequest> {
    return this.httpclient.put<passwordRequest>(`${this.baseURL2}/api/updatepassword/${id}`,p);
  }
  forgetPassword(email: string): Observable<any> {
    console.log(email);
    return this.httpclient.post<any>(`${this.baseURL2}/api/forget_password`, email);
  }


  searchByPropertyName(lastname: string): Observable<USER[]> {
    const url = `${this.baseURL2}/api/user/searchh?lastname=${lastname}`;
    return this.httpclient.get<USER[]>(url);
  }
}
