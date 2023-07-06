import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    HomeComponent,
    InicioComponent,
    LoadingComponent
  ],
  exports: [
    HomeComponent,
    InicioComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ]

})
export class RoutesModule { }
