import { Injectable } from '@angular/core';

import {USER} from "./regres";
import {ClientService} from "./client.service";
const TOKEN_KEY = 'jwtToken';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private clientservice : ClientService) { }
  //_id:string
  signOut() {
    window.localStorage.clear();
  }
  public saveToken(jwtToken: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, jwtToken);
  }
  public getToken(): string {
    // @ts-ignore
    return localStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user:USER) {
    window.localStorage.removeItem(USER_KEY);
    const _id=this.clientservice.findemail(user.username)

    window.localStorage.setItem(USER_KEY, JSON.stringify(user));

  }
  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {

      return JSON.parse(user);

    }
    return {};
  }
  public getCurrentUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      const parsedUser = JSON.parse(user);
      return parsedUser.currentUser || null;
    }
    return null;
  }
  public getUserId(): number | null {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      const parsedUser = JSON.parse(user);
      const currentUser = parsedUser.currentUser;
      return currentUser ? currentUser.codeUtilisateur : null;  // Utilisez la clé appropriée pour l'ID
    }
    return null;
  }
  public getUserusername(): string | null {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      const parsedUser = JSON.parse(user);
      const currentUser = parsedUser.currentUser;
      return currentUser ? currentUser.username : null;  // Utilisez la clé appropriée pour l'ID
    }
    return null;
  }
  /*public roleMatch(allowedRoles):boolean{
    var isMatch = false;
    var userRoles: string[] = JSON.parse(this.getUser().role);
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }*/}
