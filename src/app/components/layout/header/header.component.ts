import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  profilePicture: string;
  type: string
  fullName: string
  isVerified: boolean;

  isVerifiedImg: SafeResourceUrl;

  private currentUser: User

  constructor(private sanitizer: DomSanitizer) {
    const isVerifiedImgdUrl = "../../../../../assets/svg/VerifiedIcon.svg";
    this.isVerifiedImg = this.sanitizer.bypassSecurityTrustResourceUrl(isVerifiedImgdUrl);
  }

  ngOnInit(): void {
    const storedUserString = localStorage.getItem("user");
    this.currentUser = JSON.parse(storedUserString);

    this.profilePicture = this.currentUser.Picture
    this.type = this.currentUser.Type
    this.fullName = this.currentUser.Name + ' ' + this.currentUser.LastName
    this.isVerified = this.currentUser.HasManaged //Si quieres verlo cambia el valor en la base de datos o niega el valor de esta variable
  }
}
