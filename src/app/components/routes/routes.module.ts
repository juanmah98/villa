import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoadingComponent } from './loading/loading.component';
import { LayoutModule } from "../layout/layout.module";
import { HeaderComponent } from '../layout/header/header.component';

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
        CommonModule,
        LayoutModule
    ]
})
export class RoutesModule { }
