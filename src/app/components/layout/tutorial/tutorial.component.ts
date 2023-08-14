import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {
  isLogrosVisible: boolean = true;
  isInfoVisible: boolean = true;
  isLowerVisible: boolean = true;

  flechaHeader: SafeResourceUrl;
  flechaLogos: SafeResourceUrl;
  flechaInfo: SafeResourceUrl;
  flechaDrive: SafeResourceUrl;
  flechaSpoty: SafeResourceUrl;
  flechaTricount: SafeResourceUrl;
  flechaEncuestas: SafeResourceUrl;
  flechaInsta: SafeResourceUrl;
  verified: SafeResourceUrl;

  constructor(
    private tutorialService: TutorialService,
    private el: ElementRef,
    private sanitizer: DomSanitizer) {
      const flechaHeaderUrl = "../../../../assets/Imagenes/Tutorial/Flecha1.svg";
      this.flechaHeader = this.sanitizer.bypassSecurityTrustResourceUrl(flechaHeaderUrl);
      const flechaLogrosUrl = "../../../../assets/Imagenes/Tutorial/Flecha2.svg";
      this.flechaLogos = this.sanitizer.bypassSecurityTrustResourceUrl(flechaLogrosUrl);
      const flechaInfoUrl = "../../../../assets/Imagenes/Tutorial/Flecha3.svg";
      this.flechaInfo = this.sanitizer.bypassSecurityTrustResourceUrl(flechaInfoUrl);
      const flechaDriveUrl = "../../../../assets/Imagenes/Tutorial/Flecha4.svg";
      this.flechaDrive = this.sanitizer.bypassSecurityTrustResourceUrl(flechaDriveUrl);
      const flechaSpotyUrl = "../../../../assets/Imagenes/Tutorial/Flecha5.svg";
      this.flechaSpoty = this.sanitizer.bypassSecurityTrustResourceUrl(flechaSpotyUrl);
      const flechaTricountUrl = "../../../../assets/Imagenes/Tutorial/Flecha6.svg";
      this.flechaTricount = this.sanitizer.bypassSecurityTrustResourceUrl(flechaTricountUrl);
      const flechaEncuestasUrl = "../../../../assets/Imagenes/Tutorial/Flecha7.svg";
      this.flechaEncuestas = this.sanitizer.bypassSecurityTrustResourceUrl(flechaEncuestasUrl);
      const flechaInstaUrl = "../../../../assets/Imagenes/Tutorial/Flecha8.svg";
      this.flechaInsta = this.sanitizer.bypassSecurityTrustResourceUrl(flechaInstaUrl);
      const verifiedUrl = "../../../../assets/svg/VerifiedIcon.svg";
      this.verified = this.sanitizer.bypassSecurityTrustResourceUrl(verifiedUrl);
    }

  onBackgroundTouched() {
    this.tutorialService.actualizarMostrar(false)
  }

    // Temporal para poder obtener las posiciones del scroll
    @HostListener('window:scroll', ['$event'])
    onScroll(event: Event) {
      const scrollPosition = this.el.nativeElement.scrollTop || window.scrollY;
      this.isLogrosVisible = scrollPosition < 200
      this.isInfoVisible = scrollPosition < 445
      // console.log('Scroll:', scrollPosition);
    }
}
