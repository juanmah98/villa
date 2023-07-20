import { Component, OnInit } from '@angular/core';
import { MedalsPopupService } from 'src/app/services/medals-popup.service';

@Component({
  selector: 'app-popup-medals',
  templateUrl: './popup-medals.component.html',
  styleUrls: ['./popup-medals.component.scss']
})
export class PopupMedalsComponent implements OnInit {
  image: string
  title: string
  description: string

  constructor(public medalsPopupService: MedalsPopupService) { }

  ngOnInit(): void {
    this.title = this.medalsPopupService.actualTitle
    this.description = this.medalsPopupService.actualDescription
  }

  onBackgroundTouched() {
    this.medalsPopupService.actualizarMostrar(false)
  }

}
