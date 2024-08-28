import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { TokenStorageService } from "app/service/token-storage.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuardLoggedOut implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
  
    constructor(private authService: TokenStorageService, private router: Router) { }
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.checkUserLogOut();
    }
  
    canActivateChild(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.canActivate(next, state);
    }
  
    canDeactivate(
      component: unknown,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
    }
  
    canLoad(
      route: Route,
      segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return true;
    }
  
    checkUserLogOut(): boolean | UrlTree {
      // Si l'utilisateur n'est pas connecté (pas de token), on le laisse accéder
      if (!this.authService.getToken()) {
        return true;
      }
      // Si l'utilisateur est connecté, on le redirige vers la page d'accueil ou un autre chemin approprié
      return this.router.createUrlTree(['/acceuil']);
    }
  }
  