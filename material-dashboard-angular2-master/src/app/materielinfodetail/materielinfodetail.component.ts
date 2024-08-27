import { Component } from '@angular/core';
import {
  MaterielInformatiquee,
  MaterielInformatiqueee,
  SituationC, SituationCClass,
  TypeMateriel,
  TypeMaterielClass
} from "../service/regres";
import {TokenStorageService} from "../service/token-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FournitureService} from "../service/fourniture-service.service";
import {MaterielInformatiqueService} from "../service/materiel-informatique.service";

@Component({
  selector: 'app-materielinfodetail',
  templateUrl: './materielinfodetail.component.html',
  styleUrls: ['./materielinfodetail.component.scss']
})
export class MaterielinfodetailComponent {

  selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any = {};
  message!: string;
  imageName: any;
  closeResult!: string;
  maison_id!: string;
  maison!: MaterielInformatiqueee;
  user_id!: any;
  currentuser: any;
  isLoggedIn = false;

  constructor(
      private tokenStorage: TokenStorageService,
      private userService: TokenStorageService,
      private router: Router,
      private httpClient: HttpClient,
      private route: ActivatedRoute,
      private materielInformatiqueService: MaterielInformatiqueService,
  ) { }

  ngOnInit(): void {
    this.maison_id = this.route.snapshot.params['id'];

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
    const situationC = new TypeMaterielClass(0, '');
    const typeMateriel = new SituationCClass(0, '');

    this.maison = new MaterielInformatiqueee('', '', new Date(),situationC,typeMateriel); // Provide default values
    this.materielInformatiqueService.getById(this.maison_id).subscribe(data => {
      this.maison = data;
    });

  }





}

