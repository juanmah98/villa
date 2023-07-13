import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MedalsComponent } from './header/medals/medals.component';
import { PopupInfoComponent } from './popupInfo/popup-info/popup-info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MedalsComponent,
    PopupInfoComponent
  ],
  exports: [
    HeaderComponent,
    PopupInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
