import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  googleEmail: string;
  currentUser: User

  constructor(
    private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.googleEmail = localStorage.getItem('email')
    this.databaseService.setUserContextByEmail(this.googleEmail)
  }
}
