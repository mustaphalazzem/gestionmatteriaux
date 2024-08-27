export interface CLIENT{
    _id:string;
    client_id:number
    name: string;
    prenom: string;
    email: string;
    genre: string;
    addresse: string;
    mdp: string;
    numtel: Number;
    user:USER  []

    excursions:EXCURSION[];
}
export interface FormData{
id:number|any;
  name: string|any;
  email:string|any;
  message: string|any;
  subject:string|any;

}
export interface InventaireDTO {
  model: string;
  quantiteTotale: number;
}export interface InventairefDTO {
  type:String ;
  totalFournitures: number ;
}
export interface InventairesDTO {
  situation: string;
  quantiteTotale: number;
}
export interface InventairetDTO {
  typeMateriel: string;
  quantiteTotale: number;
}

export interface reservation{
  id: number|any;
  nom: string|any;
  dateDebut: Date|any;
  dateFin: Date|any;
  description: string|any;
  maison	: number|any;
  userId: number|any;


}
export interface ReservationData {
  month: string;
  count: number;
}
export interface Imagem{
  id: number|any;
  fileName: string|any;
  maison_id:number |any;
  picByte: Uint8Array|any;
  type: string|any;



}
export  interface passwordRequest {
  password :String|any;


}
export class Fournituree {
  numFacture: number;
  nom: string;
  description: string;
  formeAchat: FormeAchat;
  dateAchat: string; // or use Date if preferred
  prix: number;

  constructor(
    numFacture: number,
    nom: string,
    description: string,
    formeAchat: FormeAchat,
    dateAchat: string, // or use Date if preferred
    prix: number
  ) {
    this.numFacture = numFacture;
    this.nom = nom;
    this.description = description;
    this.formeAchat = formeAchat;
    this.dateAchat = dateAchat;
    this.prix = prix;
  }
}
export class MaterielInformatiqueee {
    code: string;
    model: string;
    dateAjout: Date;
    typeMateriel: TypeMateriel | null;
    situation: SituationC | null;

    constructor(code: string, model: string, dateAjout: Date, typeMateriel: TypeMateriel | null, situation: SituationC | null) {
        this.code = code;
        this.model = model;
        this.dateAjout = dateAjout;
        this.typeMateriel = typeMateriel;
        this.situation = situation;
    }
}
export interface Fourniture {
  numFacture: number;
  nom: string;
  //description: string;
  formeAchat: FormeAchat;
  dateAchat: string; // ou Date si vous préférez travailler avec des objets Date
  prix: number;

}
export interface FormeAchat {
  id: number;
  type: string;

}
export class FormeAchate {
  id: number;
  type: string;

  constructor(id: number, type: string) {
    this.id = id;
    this.type = type;
  }
}
export interface MaterielInformatique {
  //  code: string|null;
    model: string;
    dateAjout: Date;
    typeMateriel: TypeMateriel | null;
    situation: SituationC | null;
}
export interface MaterielInformatiquee {
    code: string;
    model: string;
    dateAjout: Date;
    typeMateriel: TypeMaterielClass | null;
    situation: SituationCClass | null;
}
export interface TypeMateriel {
    id: number;
    type: string;
    // Ajoutez d'autres champs si nécessaire
}

export interface SituationC {
    id: number;
    situation: string;
    // Ajoutez d'autres champs si nécessaire
}
export class TypeMaterielClass implements TypeMateriel {
    id: number;
    type: string;

    constructor(id: number, type: string) {
        this.id = id;
        this.type = type;
    }
}

export class SituationCClass implements SituationC {
    id: number;
    situation: string;

    constructor(id: number, situation: string) {
        this.id = id;
        this.situation = situation;
    }
}
export interface USER {
  email: any;
  prenom: any;
  codeUtilisateur: any;
  nom: any;
  password: any;
 
  username:any ;
}
export interface User {
  firstname: string;
  email: string;
  lastname: string;
}
export interface changePasswordDTO {
  newPassword:string ;
}
export class USERR {
  constructor(email: any, firstname: any, lastname: any) {
    this.email = email;
    this.firstname = firstname;
    this.lastname = lastname;
  }
  email: any;
  firstname: any;
  numFacture: any;
  lastname: any;
  password: any;
  role: any;
}



export interface EXCURSION{
    _id:string;
    nom_exc: string;
    destination: string,
    depart_exc: string;
    prix: Number,
    date_depart: Date,
    date_fin: Date,
    photos: string,
    client:CLIENT[],
    idorg: string

}

export interface NONEXCURSION{
    _id:string;
    nom_exc: string;
    destination: string,
    depart: string;
    prix: Number,
    date_depart: Date,
    date_modif:Date,
    date_fin: Date,
    photos: string,
    idorg: string
    Client:CLIENT[],
}
export interface PANIER {
    excursions:EXCURSION[],
    idclient: string ,

}

export interface BUS {
    _id:string,
    marque:string,
    idlouer:EXCURSION[],
    email : string ,
    idagence:string,
    nb_place_bus:Number,
}
export interface FAVORIS {
    idclient: String ;
    idexcursion :String ;
}
