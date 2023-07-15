import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoadingComponent } from './loading/loading.component';
import { LayoutModule } from "../layout/layout.module";
import { MedalsCollectionComponent } from './home/medals-collection/medals-collection.component';
import { NewPersonComponent } from './new-person/new-person.component';

@NgModule({
    declarations: [
        HomeComponent,
        MedalsCollectionComponent,
        InicioComponent,
        LoadingComponent,
    ],
    exports: [
        HomeComponent,
        InicioComponent,
        LoadingComponent,        
    ],
    imports: [
        CommonModule,
        LayoutModule
    ]
})
export class RoutesModule { }
