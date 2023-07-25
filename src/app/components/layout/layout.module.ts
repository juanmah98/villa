import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MedalsComponent } from './header/medals/medals.component';
import { PopupInfoComponent } from './popup-info/popup-info.component';
import { PopupMedalsComponent } from './popup-medals/popup-medals.component';
import { PopupSurveyComponent } from './popup-survey/popup-survey.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MedalsComponent,
    PopupInfoComponent,
    PopupMedalsComponent,
    PopupSurveyComponent
  ],
  exports: [
    HeaderComponent,
    PopupInfoComponent,
    PopupMedalsComponent,
    PopupSurveyComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
