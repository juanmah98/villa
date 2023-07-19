import { Component, OnInit } from '@angular/core';
import { MedalsPopupService } from 'src/app/services/medals-popup.service';

@Component({
  selector: 'app-popup-medals',
  templateUrl: './popup-medals.component.html',
  styleUrls: ['./popup-medals.component.scss']
})
export class PopupMedalsComponent {

  constructor(private popupService: MedalsPopupService) { }

  onBackgroundTouched() {
    this.popupService.actualizarMostrar(false)
  }

}
