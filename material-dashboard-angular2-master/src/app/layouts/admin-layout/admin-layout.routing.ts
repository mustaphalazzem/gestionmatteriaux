import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {LoginComponent} from "../../login/login.component";
import {RegisterComponent} from "../../register/register.component";
import {FournitureAjouterComponent} from "../../fourniture-ajouter/fourniture-ajouter.component";
import {AjoutertypeComponent} from "../../ajoutertype/ajoutertype.component";
import {ListaddformatachatComponent} from "../../listaddformatachat/listaddformatachat.component";
import {ListefournitureComponent} from "../../listefourniture/listefourniture.component";
import {FournituredetaiComponent} from "../../fournituredetai/fournituredetai.component";
import {AjoutTypematerielComponent} from "../../ajout-typemateriel/ajout-typemateriel.component";
import {SituationComponent} from "../../situation/situation.component";
import {AjoutmaterielinfoComponent} from "../../ajoutmaterielinfo/ajoutmaterielinfo.component";
import {TypematerielListComponent} from "../../typemateriel-list/typemateriel-list.component";
import {SituationListComponent} from "../../situation-list/situation-list.component";
import {MaterielinfoListComponent} from "../../materielinfo-list/materielinfo-list.component";
import {MaterielinfodetailComponent} from "../../materielinfodetail/materielinfodetail.component";
import { AcceuilleComponent } from 'app/acceuille/acceuille.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { ChangepasswordComponent } from 'app/changepassword/changepassword.component';
import { RapportinventaireComponent } from 'app/rapportinventaire/rapportinventaire.component';
import { UpdateComponent } from 'app/update/update.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'acceuil',      component: AcceuilleComponent },
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: ProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    {path: 'ajouterf',        component: FournitureAjouterComponent},
    {path: 'ajoutertypeachat',     component: AjoutertypeComponent},
    {path: 'listea',          component: ListaddformatachatComponent},
    {path: 'listef',          component: ListefournitureComponent},
    {path: 'fournituredetail/:id', component: FournituredetaiComponent},
    { path: 'inventaire',        component: RapportinventaireComponent },
    {path: 'ajoutypem',       component:  AjoutTypematerielComponent},
    {path: 'ajoutsut',        component:  SituationComponent},
    {path: 'ajoutmat',        component:  AjoutmaterielinfoComponent},
    {path: 'listety',        component:  TypematerielListComponent},
    {path: 'listes',        component:  SituationListComponent},
    {path: 'listemat',        component:  MaterielinfoListComponent},
    {path: 'changepassword',        component:  ChangepasswordComponent},
    {path: 'matiereinfodet/:id', component: MaterielinfodetailComponent},
    {path: 'updateMateriel/:id', component: UpdateComponent},



//   {path: 'login',           component:LoginComponent},
    //{path: 'register',        component: RegisterComponent} ,
];
