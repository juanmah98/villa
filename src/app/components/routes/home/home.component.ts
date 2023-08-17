import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { PopupService } from 'src/app/services/popup.service';
import { MedalsPopupService } from 'src/app/services/medals-popup.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { surveysPopupService } from 'src/app/services/surveys-popup.service';
import { TutorialService } from 'src/app/services/tutorial.service';
import { FamilyService } from 'src/app/services/family.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  currentUser: User;
  description: string;
  playlist: string;
  instagram: string;
  tricuount: string;
  encuesta: string;

  isLowerThanX: boolean = true
  medalsVisible: boolean;

  laVillaLogoImg: SafeResourceUrl;
  buttonIconImg: SafeResourceUrl;
  buttonTutorial: SafeResourceUrl;

  constructor(
    public popupService: PopupService,
    public medalsPopupService: MedalsPopupService,
    public surveysPopupService: surveysPopupService,
    public tutorialService: TutorialService,
    public familyService: FamilyService,
    private sanitizer: DomSanitizer) {
      const logoImgUrl = "../../../../../assets/svg/LogoIcon.svg";
      this.laVillaLogoImg = this.sanitizer.bypassSecurityTrustResourceUrl(logoImgUrl);
      const buttonIconImgUrl = "../../../../../assets/svg/ButtonIcon.svg";
      this.buttonIconImg = this.sanitizer.bypassSecurityTrustResourceUrl(buttonIconImgUrl);
      const buttonTutorial = "../../../../../assets/Imagenes/Tutorial/Info.svg";
      this.buttonTutorial = this.sanitizer.bypassSecurityTrustResourceUrl(buttonTutorial);
  }

  ngOnInit(): void {
    const storedUserString = localStorage.getItem("user");
    this.currentUser = JSON.parse(storedUserString);

    //Este quizas lo podemos pasar a la base de datos, asi tenemos capacidad de modificar estos valores sin tener que volver a montar la app, ya que en cada inicio accederia a los valores de firebase
    this.description = "Sexta edición de la Villa. Donde por primera vez repetimos destino, fue la casa seleccionada para 2021, la segunda de España. En esta ocasión confiamos despertarnos de nuevo con churros para todos y resaca para nadie."

    this.playlist = "¿Quieres escuchar una lista que ha sonado y no te acuerdas de cuál es? Seguramente este aquí."
    this.instagram = "Cobertura en directo desde dentro de la villa para todos los afortunados que puedan verlo."
    this.tricuount = "Apunta y consulta cuánto dinero debes y te deben de manera fácil y rápida"
    this.encuesta = "¿Dónde cenamos? ¿Qué día nos disfrazamos? ¿Cuál es la temática de este año? ¿Alguna sugerencia?"

    this.isLowerThan(5000);

    this.familyService.statusObservable.subscribe(newStatus => {
      this.medalsVisible = newStatus;
    })
  }

  ngAfterViewInit() {
    const scrollPosition = 350;

    window.scrollTo({
      top: scrollPosition
    });
  }

  isLowerThan(miliseconds: number) {
    setTimeout(() => {
      this.isLowerThanX = false
    }, miliseconds)
  }

  onHeaderTouch() {
    const scrollPosition = 0;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }

  onTutorialTouch() {
    this.tutorialService.actualizarMostrar(true)
  }

  onLogoTouch() {
    const scrollPosition = 350;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }

  onInfoTouch() {
    this.popupService.actualizarMostrar(true)
  }

  onAlbumTouch() {
    const enlaceTricount = "https://drive.google.com/drive/folders/18hNZqdmp0aL-GuEadGDaWIUTjlQviZnO?usp=drive_link"
    window.open(enlaceTricount, '_blank');
  }

  onSpotyTouch() {
    // const enlacePerfilSpotifyWeb = "https://open.spotify.com/user/3132ezyyqsq76vsxm3jbgkphiefm?si=ajPdOnevTIuMAYEN8oaTcg"
    const enlacePerfilSpotifyApp = "spotify:user:3132ezyyqsq76vsxm3jbgkphiefm"
    window.open(enlacePerfilSpotifyApp, '_blank');
  }

  onInstaTouch() {
    const enlacePerfilInstagramApp = "https://instagram.com/la_villa_oficial?igshid=NTc4MTIwNjQ2YQ=="
    window.open(enlacePerfilInstagramApp, '_blank');
  }

  onTricountTouch() {
    const enlaceTricount = "https://tricount.com/aCmHjyzqCMdwSxmScu"
    window.open(enlaceTricount, '_blank');
  }

  onSurveyTouch() {
    this.surveysPopupService.actualizarMostrar(true)
  }

  onLoguut(): void {
    localStorage.removeItem('user')
    document.location.href = "/"
  }
}
