import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { User } from '../../models/user.model';
import { UserContextService } from 'src/app/services/userContext.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private googleUser: User

  currentUser: User;

  constructor(
    private databaseService: DatabaseService,
    private userContextService: UserContextService) {
      this.currentUser.Email = userContextService.userContext.Email
    }

  ngOnInit(): void {

    console.log(this.currentUser)

    debugger
    this.currentUser = this.databaseService.getUserByEmail(this.currentUser.Email)

    console.log(this.currentUser)
  }
}
