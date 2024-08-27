import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../service/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FournitureService} from "../service/fourniture-service.service";
import {FormeAchate, Fourniture, Fournituree} from "../service/regres";

@Component({
  selector: 'app-fournituredetai',
  templateUrl: './fournituredetai.component.html',
  styleUrls: ['./fournituredetai.component.scss']
})
export class FournituredetaiComponent implements OnInit {
  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any = {};
  message!: string;
  imageName: any;
  closeResult!: string;
  maison_id!: number;
  maison!: Fourniture;
  user_id!: any;
  currentuser: any;
  isLoggedIn = false;

  constructor(
      private tokenStorage: TokenStorageService,
      private userService: TokenStorageService,
      private router: Router,
      private httpClient: HttpClient,
      private route: ActivatedRoute,
      private employeService: FournitureService,
  ) { }

  ngOnInit(): void {
    this.maison_id = +this.route.snapshot.params['id'];

    /*if (this.userService.getToken()) {
      this.isLoggedIn = true;
      this.currentuser = this.userService.getUser();
      console.log(this.currentuser);
    }

    const user1 = this.userService.getUser();
    console.log(user1?.id);

    if (user1 && user1.id) {
      this.user_id = user1.id;
      console.log(this.user_id);
    } else {
      console.error("User ID is not available.");
    }*/
    const defaultFormeAchat = new FormeAchate(0, '');
    this.maison = new Fournituree(0, '', '',defaultFormeAchat,'',0); // Provide default values
    this.employeService.getFournitureById(this.maison_id).subscribe(data => {
      this.maison = data;
    });

  }





}
