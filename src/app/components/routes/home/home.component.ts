import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { PopupService } from 'src/app/services/popup-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  currentUser: User;
  description: string;
  encuesta: string;
  playlist: string;
  tricuount: string;

  isLowerThan3: boolean = true

  constructor(public popupService: PopupService) { }

  ngOnInit(): void {
    const storedUserString = localStorage.getItem("user");
    this.currentUser = JSON.parse(storedUserString);


    //Este quizas lo podemos pasar a la base de datos, asi tenemos capacidad de modificar estos valores sin tener que volver a montar la app, ya que en cada inicio accederia a los valores de firebase
    this.description = "Sexta edicion de la Villa. Donde por primera vez repetimos destino, fue la casa seleccionada para 2021, la segunda de España. En esta ocasión confiamos despertarnos de nuevo con churros para todos y resaca para nadie."

    this.tricuount = "Apunta y consulta cuanto dinero debes y te deben de manera fácil y rápida"
    this.playlist = "¿Quieres escuchar una lista que ha sonado y no te acuerdas de cual es? Seguramente este aquí."
    this.encuesta = "¿Dónde cenamos? ¿Qué día nos disfrazamos? ¿Cuál es la tematica de este año? ¿Alguna sugerencia?"

    setTimeout(() => {
      this.isLowerThan3 = false
    }, 2500)
  }

  ngAfterViewInit() {
    const scrollPosition = 350;

    window.scrollTo({
      top: scrollPosition
    });
  }

  onHeaderTouch() {
    const scrollPosition = 0;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  }

  //Ya dejo preparados los botones para cuando queramos enlazarle acciones,
  //los botones hay que sacarlos a un componente propio obviamente que se esta haciendo enorme y se repite mucho codigo

  onInfoTouch() {
    this.popupService.actualizarMostrar(true)
  }

  onAlbumTouch() {
    console.log("fotos")
  }

  onSpotyTouch() {
    const enlacePerfilSpotifyWeb = "https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X"
    const enlacePerfilSpotifyApp = "spotify:artist:4q3ewBCX7sLwd24euuV69X" //Este es el tipo de enlace que tendremos que usar para que le abra la cuenta de la villa en la app directamente
    window.open(enlacePerfilSpotifyWeb, '_blank');
  }

  onTricountTouch() {
    const enlaceTricount = "https://tricount.com/aCmHjyzqCMdwSxmScu"
    window.open(enlaceTricount, '_blank');
  }

  onSurveyTouch() {
    console.log("encuestas")
  }

  onLoguut(): void {
    localStorage.setItem('user', '')
    document.location.href = "/"  
  }
}
