import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MedalsPopupService } from 'src/app/services/medals-popup.service';

@Component({
  selector: 'app-popup-medals',
  templateUrl: './popup-medals.component.html',
  styleUrls: ['./popup-medals.component.scss']
})
export class PopupMedalsComponent implements OnInit {
  image: string
  type: string;
  title: string
  description: string

  goldMedalImg: SafeResourceUrl;
  silverMedalImg: SafeResourceUrl;
  bronzeMedalImg: SafeResourceUrl;
  copperMedalImg: SafeResourceUrl;
  unknownMedalImg: SafeResourceUrl;

  constructor(public medalsPopupService: MedalsPopupService, private sanitizer: DomSanitizer) {
    const goldUrl = "../../../../../assets/svg/GoldMedalIcon.svg";
    this.goldMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(goldUrl);
    const silverUrl = "../../../../../assets/svg/SilverMedalIcon.svg";
    this.silverMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(silverUrl);
    const bronzeUrl = "../../../../../assets/svg/BronzeMedalIcon.svg";
    this.bronzeMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(bronzeUrl);
    const copperUrl = "../../../../../assets/svg/CopperMedalIcon.svg";
    this.copperMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(copperUrl);
    const unknownUrl = "../../../../../assets/svg/UnknownMedalIcon.svg";
    this.unknownMedalImg = this.sanitizer.bypassSecurityTrustResourceUrl(unknownUrl);
  }

  ngOnInit(): void {
    this.image = this.getImagePath(this.medalsPopupService.actualImage)
    this.type = this.medalsPopupService.actualType
    this.title = this.medalsPopupService.actualTitle
    this.description = this.medalsPopupService.actualDescription
  }

  onBackgroundTouched() {
    this.medalsPopupService.actualizarMostrar(false)
  }

  getImagePath(imageName: string): string {
    return `../../../../assets/Imagenes/Medals/${imageName}`;
  }
}
