import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  googleEmail: string;
  currentUser: User

  loadingMessage: string = "Sensitive content inside";

  timmerMin: number = 3000
  timmerMax: number = 6000
  backgroundText: string;

  sensitiveContentImg: SafeResourceUrl;

  constructor(
    private databaseService: DatabaseService,
    private router: Router,
    private sanitizer: DomSanitizer) {
      const sensitiveContentImgUrl = "../../../../../assets/svg/PrivacyIcon.svg";
      this.sensitiveContentImg = this.sanitizer.bypassSecurityTrustResourceUrl(sensitiveContentImgUrl);
    }

  ngOnInit(): void {
    this.startAnimation()
    this.backgroundText = "LaVilla.".repeat(1000)

    this.googleEmail = localStorage.getItem('email')
    this.databaseService.setUserContextByEmail(this.googleEmail)

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, Math.floor(Math.random() * (this.timmerMax - this.timmerMin + 1)) + this.timmerMin);
  }

  private startAnimation() {
    const messages = [
      "Sensitive content inside.",
      "Sensitive content inside..",
      "Sensitive content inside...",
      "Sensitive content inside"
    ];

    let index = 0;
    setInterval(() => {
      this.loadingMessage = messages[index];
      index = (index + 1) % messages.length;
    }, 1000);
  }
}
