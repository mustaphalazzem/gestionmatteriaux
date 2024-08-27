import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER, User } from 'app/service/regres';
import { TokenStorageService } from 'app/service/token-storage.service';
import { UserService } from 'app/service/user/user.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/acceuil', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/listef', title: 'Fourniture',  icon:'content_paste', class: '' },
    { path: '/listea', title: 'Forme achat',  icon:'library_books', class: '' },
    { path: '/listety', title: 'Types de materiaux',  icon:'bubble_chart', class: '' },
    { path: '/listes', title: 'Situations',  icon:'location_on', class: '' },
    { path: '/listemat', title: 'Materiaux informatiques',  icon:'notifications', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  typemateriels: USER;
  constructor(private userservice : UserService , private tokenStorageService: TokenStorageService,private router: Router) { }
  currentUser: any = null;
  id: any = null;

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.currentUser = this.tokenStorageService.getCurrentUser();
    console.log(this.currentUser);
    this.id = this.tokenStorageService.getUserId();
    console.log(this.id);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
  logout() {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }
 }
  
