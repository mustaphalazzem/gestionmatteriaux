import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { RegisterComponent } from './register/register.component';
import { FournitureAjouterComponent } from './fourniture-ajouter/fourniture-ajouter.component';
import { AddformatachatComponent } from './addformatachat/addformatachat.component';
import { AjoutertypeComponent } from './ajoutertype/ajoutertype.component';
import { ListaddformatachatComponent } from './listaddformatachat/listaddformatachat.component';
import { ListefournitureComponent } from './listefourniture/listefourniture.component';
import { FournituredetaiComponent } from './fournituredetai/fournituredetai.component';
import { MaterielajoutComponent } from './materielajout/materielajout.component';
import { TypemateirelComponent } from './typemateirel/typemateirel.component';
import { SituationComponent } from './situation/situation.component';
import { AjoutTypematerielComponent } from './ajout-typemateriel/ajout-typemateriel.component';
import { AjoutmaterielinfoComponent } from './ajoutmaterielinfo/ajoutmaterielinfo.component';
import { TypematerielListComponent } from './typemateriel-list/typemateriel-list.component';
import { SituationListComponent } from './situation-list/situation-list.component';
import { MaterielinfoListComponent } from './materielinfo-list/materielinfo-list.component';
import { MaterielinfodetailComponent } from './materielinfodetail/materielinfodetail.component';
import { AcceuilleComponent } from './acceuille/acceuille.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProfileComponent } from './profile/profile.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';  
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RapportinventaireComponent } from './rapportinventaire/rapportinventaire.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,

    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    RegisterComponent,
    FournitureAjouterComponent,
    AddformatachatComponent,
    AjoutertypeComponent,
    ListaddformatachatComponent,
    ListefournitureComponent,
    FournituredetaiComponent,
    MaterielajoutComponent,
    TypemateirelComponent,
    SituationComponent,
    AjoutTypematerielComponent,
    AjoutmaterielinfoComponent,
    TypematerielListComponent,
    SituationListComponent,
    MaterielinfoListComponent,
    MaterielinfodetailComponent,
    AcceuilleComponent,
    ProfileComponent,
    ChangepasswordComponent,
    RapportinventaireComponent,
    UpdateComponent,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
