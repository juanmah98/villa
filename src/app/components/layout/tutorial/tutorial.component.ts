import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent {

  constructor(private tutorialService: TutorialService) { }

  onBackgroundTouched() {
    this.tutorialService.actualizarMostrar(false)

    console.log()
  }
}
