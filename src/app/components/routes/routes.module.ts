import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent
  ],
  exports: [
    HomeComponent,
    InicioComponent
  ],
  imports: [
    CommonModule
  ]

})
export class RoutesModule { }
