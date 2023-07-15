import { Component, ElementRef, HostListener } from '@angular/core';
import { PopupService } from 'src/app/services/popup-service.service';

@Component({
  selector: 'app-popup-info',
  templateUrl: './popup-info.component.html',
  styleUrls: ['./popup-info.component.scss']
})
export class PopupInfoComponent {
  constructor(private popupService: PopupService) { }

  onBackgroundTouched() {
    this.popupService.actualizarMostrar(false)
  }
}
