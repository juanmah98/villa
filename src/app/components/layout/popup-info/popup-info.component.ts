import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';

@Component({
  selector: 'app-popup-info',
  templateUrl: './popup-info.component.html',
  styleUrls: ['./popup-info.component.scss']
})
export class PopupInfoComponent {

  enlaceUbicacionCena = "https://goo.gl/maps/irUZfyqXY71C5nHEA"

  constructor(private popupService: PopupService) { }
  description = "Sexta edición de la Villa. Donde por primera vez repetimos destino, fue la casa seleccionada para 2021, la segunda de España. En esta ocasión confiamos despertanos de nuevo con churros para todos y resaca para nadie. Ubicada en Finestrat, cerca de Benidorm una capacidad de 20 camas aseguradas, zona de barbacoa al lado de la piscina, aislada de los vecinos, además de varias neveras industriales y cocina grande. La casa está a 10 minutos en coche del supermercado más cercano, lo que nos permite reponer cualquier cosa en cuanto falte, además de tener fácil acceso y espacio para aparcar."

  onBackgroundTouched() {
    this.popupService.actualizarMostrar(false)
  }

  onSecundaryAdressTouched() {
    window.open(this.enlaceUbicacionCena, '_blank');
  }
}
