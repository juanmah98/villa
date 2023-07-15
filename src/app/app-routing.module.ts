import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/routes/home/home.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { LoadingComponent } from './components/routes/loading/loading.component';
import { NewPersonComponent } from './components/routes/new-person/new-person.component';

const routes: Routes = [
  {path: 'new', component: NewPersonComponent},
  {path: '', component: InicioComponent},
  {path: 'loading', component: LoadingComponent},
  {path: 'home', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
