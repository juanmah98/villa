import { Component, OnInit } from '@angular/core';
import { surveysPopupService } from 'src/app/services/surveys-popup.service';

@Component({
  selector: 'app-popup-survey',
  templateUrl: './popup-survey.component.html',
  styleUrls: ['./popup-survey.component.scss']
})
export class PopupSurveyComponent {

  constructor(private surveysPopupService: surveysPopupService) { }

  onBackgroundTouched() {
    this.surveysPopupService.actualizarMostrar(false)
  }
}
