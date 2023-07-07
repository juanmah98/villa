import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profilePicture: string;
  type: string
  fullName: string

  private currentUser: User

  constructor() { }

  ngOnInit(): void {
    const storedUserString = localStorage.getItem("user");
    this.currentUser = JSON.parse(storedUserString);

    this.profilePicture = this.currentUser.Picture
    this.type = this.currentUser.Type
    this.fullName = this.currentUser.Name + ' ' + this.currentUser.LastName
  }
}
