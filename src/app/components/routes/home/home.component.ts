import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  description: string;
  encuesta: string;
  playlist: string;
  tricuount: string;

  constructor() { }

  ngOnInit(): void {
    const storedUserString = localStorage.getItem("user");
    this.currentUser = JSON.parse(storedUserString);


    //Este quizas lo podemos pasar a la base de datos, asi tenemos capacidad de modificar estos valores sin tener que volver a montar la app, ya que en cada inicio accederia a los valores de firebase
    this.description = "Sexta edicion de la Villa. Donde por primera vez repetimos destino, fue la casa seleccionada para 2021, la segunda de España. En esta ocasión confiamos despertarnos de nuevo con churros para todos y resaca para nadie."

    this.tricuount = "Apunta y consulta cuanto dinero debes y te deben de manera fácil y rápida"
    this.playlist = "¿Quieres escuchar una lista que ha sonado y no te acuerdas de cual es? Seguramente este aquí."
    this.encuesta = "¿Dónde cenamos? ¿Qué día nos disfrazamos? ¿Cuál es la tematica de este año? ¿Alguna sugerencia?"

  }
}
