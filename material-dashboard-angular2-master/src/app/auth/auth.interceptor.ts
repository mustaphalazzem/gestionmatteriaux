import {HttpErrorResponse,HttpEvent,HttpHandler,HttpInterceptor,HttpRequest} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
//import { UserAuthService } from '../services/user-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
        constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Get the auth token from  localstorage.
        const authToken = localStorage.getItem('Token');
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const authReq = req.clone({
            headers: req.headers.set('Authorization', authToken)
        });
        // send cloned request with header to the next handler.
        return next.handle(authReq);
    }
}