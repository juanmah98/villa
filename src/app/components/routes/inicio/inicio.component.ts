import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public objetounico:any = {};
  constructor() { }
login:string="0";
ngOnInit(): void {

  this.login = "0";
  google.accounts.id.initialize({
     /* LOCAL */
     /*  client_id: '501716064015-c8od71c598jvqprag4vi88s2kkjr4sge.apps.googleusercontent.com',   */
     /*  */
     client_id: '112109968528-8s98plf90uargeq2t4imemec1ilap2j9.apps.googleusercontent.com',
     callback: this.handleCredentialResponse
   });
   google.accounts.id.renderButton(
     document.getElementById("buttonDiv"),
     { theme: "outline", size: "large" }  // customization attributes
   );
   google.accounts.id.prompt(); // also display the One Tap dialog

console.log("Fin google");

/* document.location.href = "/user"   */

}

handleCredentialResponse(response:any){



    response.credential;

    var base64Url =  response.credential.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c){
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
     }).join(''));

     this.objetounico = JSON.parse(jsonPayload);
     console.log( JSON.parse(jsonPayload));

     console.log(this.objetounico.email);
     sessionStorage.setItem("email", this.objetounico.email);
     sessionStorage.setItem("name", this.objetounico.name);
     sessionStorage.setItem("picture", this.objetounico.picture);
     sessionStorage.setItem("picture", this.objetounico.picture);
     this.login = "1";
      sessionStorage.setItem("login", this.login);
     console.log(this.objetounico.name)
       document.location.href = "/home"

  console.log("Fin google btn");
}


}
