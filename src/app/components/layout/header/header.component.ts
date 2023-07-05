import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  googleEmail: string;
  currentUser: User;
  fullName: string;

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.googleEmail = sessionStorage.getItem('email')
    this.currentUser = this.databaseService.getUserByEmail(this.googleEmail)
  }

}
