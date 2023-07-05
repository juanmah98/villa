import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { User } from '../../models/user.model';
import { HeaderComponent } from '../../layout/header/header.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  googleEmail: string;

  constructor(
    private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.googleEmail = sessionStorage.getItem('email')
    this.currentUser = this.databaseService.getUserByEmail(this.googleEmail)

    console.log(this.currentUser)
  }
}
