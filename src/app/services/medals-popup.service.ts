import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedalsPopupService {
  mostrar: boolean = false;
  isActualActive: boolean;
  actualIndex: number;
  actualType: string;

  actualizarMostrar(valor: boolean) {
    this.mostrar = valor
  }

  selectedMedal(isActive: boolean, index: number, type: string) {
    this.isActualActive = isActive
    this.actualIndex = index
    this.actualType = type
  }
}
