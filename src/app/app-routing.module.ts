import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { MainComponent } from './Components/main/main.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { PeliculaComponent } from './Components/pelicula/pelicula.component';

const routes: Routes = [
  {path: '',  component: MainComponent},
  {path:'contact' ,component:ContactComponent},
  {path:'pelicula/:id',component:PeliculaComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
