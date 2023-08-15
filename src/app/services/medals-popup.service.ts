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
      let realMedalInfo = MEDALS.find((medal) => medal.index == index && medal.type === type)

      let medalImg = realMedalInfo.image
      let medal = MEDALS.find((medal) => medal.type === 'unknown')

      this.actualImage = medalImg
      this.actualTitle = realMedalInfo.title
      this.actualDescription = realMedalInfo.description
      this.actualType = medal.type
    }
  }
}
