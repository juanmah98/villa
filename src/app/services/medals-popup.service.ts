import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedalsPopupService {
  mostrar: boolean = false;

  actualizarMostrar(valor: boolean) {
    this.mostrar = valor;
  }
}
