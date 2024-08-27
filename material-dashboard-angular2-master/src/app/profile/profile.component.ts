import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  menuItems: any[];
  currentUser: any = null;
  id: any = null;
constructor(private tokenStorageService: TokenStorageService,private router : Router){
}
ngOnInit() {

  this.currentUser = this.tokenStorageService.getCurrentUser();
  console.log(this.currentUser);
  this.id = this.tokenStorageService.getUserId();
  console.log(this.id);
}

goToChangePassword(){
  this.router.navigate(['changepassword']);

}}
