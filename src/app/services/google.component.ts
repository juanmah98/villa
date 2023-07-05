import { Component, OnInit } from '@angular/core';

declare const gapi: any;

@Component({
  selector: 'app-google-sign-in',
  template: `
    <button (click)="initializeGoogleSignIn()">Iniciar sesión con Google</button>
  `
})
export class GoogleSignInComponent implements OnInit {
  ngOnInit() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '112109968528-8s98plf90uargeq2t4imemec1ilap2j9.apps.googleusercontent.com',
      });
    });
  }

  initializeGoogleSignIn() {
    gapi.load('accounts', () => {
      gapi.accounts.id.initialize({
        client_id: '112109968528-8s98plf90uargeq2t4imemec1ilap2j9.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this),
      });
    });
  }

  handleCredentialResponse(response: any) {
    // Aquí puedes procesar la respuesta con las credenciales del usuario
    console.log('Credenciales de Google:', response.credential);
  }
}
