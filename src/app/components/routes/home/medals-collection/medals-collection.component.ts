import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { User } from 'src/app/components/models/user.model';
import { MedalsPopupService } from 'src/app/services/medals-popup.service';

@Component({
  selector: 'app-medals-collection',
  templateUrl: './medals-collection.component.html',
  styleUrls: ['./medals-collection.component.scss']
})
export class MedalsCollectionComponent {
  medallas = [{
    oro: [], // Medallas de oro
    plata: [], // Medallas de plata
    bronce: [], // Medallas de bronce
    cobre: []  // Medallas de cobre
  }];

  goldMedalImg: SafeResourceUrl;
  silverMedalImg: SafeResourceUrl;
  bronzeMedalImg: SafeResourceUrl;
  copperMedalImg: SafeResourceUrl;

  private currentUser: User

  constructor(public medalsPopupService: MedalsPopupService, private sanitizer: DomSanitizer) {
    const goldUrl = "../../../../../assets/svg/GoldMedalIcon.svg";
    this.goldMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(goldUrl);
    const silverUrl = "../../../../../assets/svg/SilverMedalIcon.svg";
    this.silverMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(silverUrl);
    const bronzeUrl = "../../../../../assets/svg/BronzeMedalIcon.svg";
    this.bronzeMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(bronzeUrl);
    const copperUrl = "../../../../../assets/svg/CopperMedalIcon.svg";
    this.copperMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(copperUrl);
  }


  ngOnInit(): void {
    const storedUserString = localStorage.getItem("user");
    this.currentUser = JSON.parse(storedUserString);

    for (let index = 0; index < 5; index++) {
      this.medallas[0].oro.push(this.currentUser.Medals[0].oro[index]);
      this.medallas[0].plata.push(this.currentUser.Medals[0].plata[index]);
      this.medallas[0].cobre.push(this.currentUser.Medals[0].cobre[index]);
      this.medallas[0].bronce.push(this.currentUser.Medals[0].bronce[index]);
    }
  }

  onMedalTouch(event: any, value: boolean) {
    this.medalsPopupService.actualizarMostrar(true)
    this.medalsPopupService.selectedMedal(value, event.target.id, event.target.title)
  }
}
