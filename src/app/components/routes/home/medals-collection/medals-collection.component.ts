import { Component } from '@angular/core';
import { User } from 'src/app/components/models/user.model';

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

  private currentUser: User

  constructor() { }

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
}
