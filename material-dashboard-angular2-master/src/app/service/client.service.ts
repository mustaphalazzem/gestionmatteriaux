import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { CLIENT } from './regres';
import { baseUrl } from '../config';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
 // Here, store the full user or the user id, depending your needs.

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });


    private ressource = `${baseUrl}/api/v1/auth`
  CLIENT: CLIENT|any;
    constructor(private http: HttpClient) { }

    public userLogin(payload: any)  {

      //this.currentUser = payload.CLIENT;
      //console.log(this.currentUser)
      return this.http.post(`${this.ressource}/login`,payload);

    }
    findexcursion (data : string) {
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.get(`${this.ressource}/findpart/`,{params});

  }

    public getCurrentUser(): CLIENT{
      return this.CLIENT; // Here you get the current user.
    }
    findOne() {
        return this.http.get(this.ressource)
    }



    findAll () {
      return this.http.get(this.ressource);
  }
    create(data: CLIENT): Observable<any> {
        return this.http.post<any>(this.ressource,data);
    }

    update(id: any, data: CLIENT){
        return this.http.put(`${this.ressource}/${id}`, data);
    }

        createNewUser(payload: any) {
          return this.http.post(`${this.ressource}/register`, payload);
        }

        getProtectedData() {
          return this.http.get(`${this.ressource}/data`);
        }
        registreNewUser (data: CLIENT): Observable<any> {
          return this.http.post<any>(this.ressource,data);
      }
      findemail(data : string){
        let params = new HttpParams()
       console.log(data);
        return this.http.get(`http://localhost:8084/api/v1/email/${data}`);

    }
    findemaill(data : string){
      let params = new HttpParams()
      if(data) params = params.set('email',data)
      return this.http.get(`${this.ressource}/findemaill/`,{params});

  }
    findClient(data : string) {
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.get(`${this.ressource}/find`,{params});

  }
    deletee(data:string){

      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.delete(`${this.ressource}/delete`,{params});

  }
  removeexcursion(data:any) {
    // let params = new HttpParams()
    //  if(data) params = params.set('idexcursion',data)
    console.log(data.idexcursion)

      return this.http.put(`${this.ressource}/removeexcursion/`,data);}





    insert(data:any) : Observable<any>  {

      return this.http.put(`${this.ressource}/insert/`,data);
    }

    fetchPanier(clientId:string) : Observable<any> {
      return this.http.get(`${this.ressource}/${clientId}/panier`)
    }
    addToFavorite(clientId:string,data:any){
      return this.http.put(`${this.ressource}/${clientId}/favorites/add`,data)
    }
    removeFromFavorite(clientId:string,data:any){
      return this.http.put(`${this.ressource}/${clientId}/favorites/remove`,data)
    }
    fetchFavorites(clientId:string){
      return this.http.get(`${this.ressource}/${clientId}/favorites`)
    }

    }
