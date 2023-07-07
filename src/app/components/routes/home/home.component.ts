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

  constructor() { }

  ngOnInit(): void {
    const storedUserString = localStorage.getItem("user");
    this.currentUser = JSON.parse(storedUserString);

    this.description = "Sexta edicion de la Villa. Donde por primera vez repetimos destino, fue la casa seleccionada para 2021, la segunda de España. En esta ocasión confiamos despertarnos de nuevo con churros para todos y resaca para nadie."
  }
}
