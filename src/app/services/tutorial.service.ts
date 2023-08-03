import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  mostrar: boolean = true;

  actualizarMostrar(valor: boolean) {
    this.mostrar = valor;
  }
}
