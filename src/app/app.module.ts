import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import{HttpClientModule} from '@angular/common/http';
import { ContactComponent } from './Components/contact/contact.component';
import { PeliculaComponent } from './Components/pelicula/pelicula.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    MainComponent,
    ContactComponent,
    PeliculaComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
