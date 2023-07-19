import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup-service.service';

@Component({
  selector: 'app-popup-info',
  templateUrl: './popup-info.component.html',
  styleUrls: ['./popup-info.component.scss']
})
export class PopupInfoComponent {
  constructor(private popupService: PopupService) { }
  description = "Sexta edición de la Villa. donde por primera vez repetimos destino, fue la casa selecionada para 2021, la segunda de España. En esta ocasión confiamos despertanos de nuevo con churros para todos y resaca para nadie. Ubicada en Finestrat, cerca de Benidormcon una capacidad de 20 camas aseguradas, zona de barbacoa al lado de la piscina, aislada de los vecinos, además de varias neveras industriales y cocina grande. La casa esta a 10 minutos en coche del supermercado más cercano, lo que nos permite reponer cualquier cosa en cuanto falte, además de tener fácil acceso y espacio para aparcar."

  onBackgroundTouched() {
    this.popupService.actualizarMostrar(false)
  }
}
