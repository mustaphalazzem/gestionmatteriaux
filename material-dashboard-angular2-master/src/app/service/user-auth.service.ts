import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }
  // public setRoles(roles:any) {
  //   localStorage.setItem("roles", JSON.stringify(roles));
  // }
  // public getRoles() {
  //   return JSON.parse(localStorage.getItem("roles"));
  // }
  public setToken(jwtToken: string) {
    localStorage.setItem("jwtToken", jwtToken);
  }
  public getToken(): string |any{
    return localStorage.getItem("jwtToken");
  }
  public clear() {
    return localStorage.clear();
  }
  public isLoggedIn() {
    return this.getToken();
  }
}
