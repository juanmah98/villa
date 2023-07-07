import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MedalsComponent } from './medals/medals.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MedalsComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
