import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LayoutModule } from "../layout/layout.module";



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
        CommonModule,
        LayoutModule
    ]
})
export class RoutesModule { }
