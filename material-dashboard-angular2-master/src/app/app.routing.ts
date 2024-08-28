import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { AuthGuardLoggedIn } from './auth/auth.guard';
import { AuthGuardLoggedOut } from './auth/AuthGuardLoggedOut';

const routes: Routes = [
  { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
  { path: 'login', component: LoginComponent/*, canActivate: [AuthGuardLoggedOut]*/ },
  { path: 'register', component: RegisterComponent/*, canActivate: [AuthGuardLoggedOut]*/ },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ],
    canActivate: [AuthGuardLoggedIn]
  },
//  { path: '**', redirectTo: 'acceuil' } // Fallback route for undefined paths
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
