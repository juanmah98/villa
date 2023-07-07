import { Component, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  googleUser: any

  constructor() { }

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '112109968528-8s98plf90uargeq2t4imemec1ilap2j9.apps.googleusercontent.com',
      callback: this.handleCredentialResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }
    );

    google.accounts.id.prompt();
  }

  handleCredentialResponse(response: any) {
    response.credential;

    var base64Url = response.credential.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64)
      .split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

    this.googleUser = JSON.parse(jsonPayload);
    localStorage.setItem("email", this.googleUser.email);
    localStorage.setItem("profilePhoto", this.googleUser.picture)

    document.location.href = "/loading"
  }
}
