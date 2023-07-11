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

arre:any[]=[];

private currentUser: User

  constructor() { }

  ngOnInit(): void {
    this.medallas[0].oro.splice(0, this.medallas[0].oro.length);
    this.medallas[0].plata.splice(0, this.medallas[0].plata.length);
    this.medallas[0].bronce.splice(0, this.medallas[0].bronce.length);
    this.medallas[0].cobre.splice(0, this.medallas[0].cobre.length);
    const storedUserString = localStorage.getItem("user");
    this.currentUser = JSON.parse(storedUserString);
    console.log( this.currentUser)
    let i=0;
    this.currentUser.Medals.forEach(element => {
      console.log(element.oro)
      this.arre=element.oro;
      /* this.medallas[0].oro[i]=element.oro; */
     /*  this.medallas[0].oro.push(this.arre[i++]) */
    })
    console.log(this.medallas)
    
    for (let index = 0; index < 5; index++) {
      this.currentUser.Medals[i].oro

      this.medallas[0].oro.push(this.currentUser.Medals[0].oro[index]);
      this.medallas[0].plata.push(this.currentUser.Medals[0].plata[index]);
      this.medallas[0].cobre.push(this.currentUser.Medals[0].cobre[index]);
      this.medallas[0].bronce.push(this.currentUser.Medals[0].bronce[index]);
    } 


  
     
  
   
  }
}
