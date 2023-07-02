import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routes/home/home.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},  
  {path: '', component: InicioComponent},  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
