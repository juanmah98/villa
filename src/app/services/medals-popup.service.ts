import { Injectable } from '@angular/core';
import { MEDALS } from '../components/models/medals'

@Injectable({
  providedIn: 'root'
})
export class MedalsPopupService {
  mostrar: boolean = false;
  isActualActive: boolean;

  actualIndex: number;
  actualType: string;

  actualImage: string;
  actualTitle: string;
  actualDescription: string;

  actualizarMostrar(valor: boolean) {
    this.mostrar = valor
  }

  selectedMedal(isActive: boolean, index: number, type: string) {

    if (isActive) {
      let medal = MEDALS.find((medal) => medal.index == index && medal.type === type)

      this.actualImage = medal.image
      this.actualType = medal.type
      this.actualTitle = medal.title
      this.actualDescription = medal.description

    } else {

      this.actualImage = ''
      this.actualTitle = '???'
      this.actualDescription = 'Yo que sé, prueba a hacer cosas, quizás consigues algo.'
      this.actualType = 'unkown'
    }
  }
}
