import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MedalsComponent } from './header/medals/medals.component';
import { PopupInfoComponent } from './popup-info/popup-info.component';
import { PopupMedalsComponent } from './popup-medals/popup-medals.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MedalsComponent,
    PopupInfoComponent,
    PopupMedalsComponent
  ],
  exports: [
    HeaderComponent,
    PopupInfoComponent,
    PopupMedalsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
