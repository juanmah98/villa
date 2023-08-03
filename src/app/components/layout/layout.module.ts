import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MedalsComponent } from './header/medals/medals.component';
import { PopupInfoComponent } from './popup-info/popup-info.component';
import { PopupMedalsComponent } from './popup-medals/popup-medals.component';
import { PopupSurveyComponent } from './popup-survey/popup-survey.component';
import { TutorialComponent } from './tutorial/tutorial.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MedalsComponent,
    PopupInfoComponent,
    PopupMedalsComponent,
    PopupSurveyComponent,
    TutorialComponent
  ],
  exports: [
    HeaderComponent,
    PopupInfoComponent,
    PopupMedalsComponent,
    PopupSurveyComponent,
    TutorialComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
