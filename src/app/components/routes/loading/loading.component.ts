import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  googleEmail: string;
  currentUser: User

  loadingMessage: string = "Sensitive content inside.";

  timmerMin: number = 3000
  timmerMax: number = 6000

  constructor(
    private databaseService: DatabaseService,
    private router: Router) { }

  ngOnInit(): void {
    this.startAnimation()

    this.googleEmail = localStorage.getItem('email')
    this.databaseService.setUserContextByEmail(this.googleEmail)

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, Math.floor(Math.random() * (this.timmerMax - this.timmerMin + 1)) + this.timmerMin);
    //Esto es para que genere una sensacion falsa de carga, porque en verdad le estoy haciendo esperar un tiempo aleatorio entre 3 y 6 segundos por la cara
  }

  private startAnimation() {
    const messages = [
      "Sensitive content inside..",
      "Sensitive content inside...",
      "Sensitive content inside."
    ];

    let index = 0;
    setInterval(() => {
      this.loadingMessage = messages[index];
      index = (index + 1) % messages.length;
    }, 1000);
  }
}
