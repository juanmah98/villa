import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routes/home/home.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { LoadingComponent } from './components/routes/loading/loading.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'loading', component: LoadingComponent},
  {path: 'home', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
