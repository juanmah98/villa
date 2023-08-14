import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { FamilyService } from 'src/app/services/family.service';

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
  isAndreu: boolean = false;

  isVerifiedImg = "../../../../../assets/svg/VerifiedIcon.svg";
  isVerifiedAndreuImg = "../../../../../assets/svg/VerifiedIconAndreu.svg";
  profilePictureAndreu = "../../../../../assets/Imagenes/Home/Andreu.png";

  private currentUser: User
  private familyModeCount: number = 0

  constructor(public familyService: FamilyService) { }

  ngOnInit(): void {
    const storedUserString = localStorage.getItem("user");
    this.currentUser = JSON.parse(storedUserString);

    this.profilePicture = this.currentUser.Picture
    this.type = this.currentUser.Type
    this.fullName = this.currentUser.Name + ' ' + this.currentUser.LastName
    this.isVerified = this.currentUser.HasManaged
    this.isAndreu = this.currentUser.isAndreu
  }

  onPictureTouch() {
    if(this.familyModeCount <= 3) {
      this.familyModeCount += 1
    } else {
      this.familyService.setStatus(true)
    }
    setTimeout(() => { this.familyModeCount = 0 }, 2000)
  }
}
