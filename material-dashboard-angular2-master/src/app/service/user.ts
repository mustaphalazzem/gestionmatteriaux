
export class user {
   email!: any;
   firstname!: any;
   id!: any;
   lastname!: any;
   password!: any;
   role!: any;
   numtel!:any ;


  constructor(email: any, firstname: any, id: any, lastname: any, password: any, role: any,numtel: any) {
    this.email = email;
    this.firstname = firstname;
    this.id = id;
    this.lastname = lastname;
    this.password = password;
    this.role = role;
    this.numtel = numtel;

  }


}
export class passwordRequest {

  password!: any;


  constructor(password: any) {

    this.password = password;

  }
}
  export class emailRequest {

   email!: any;



  constructor( password: any) {

    this.email = password;

  }


}


