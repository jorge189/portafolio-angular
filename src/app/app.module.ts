import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';   // este es el componente para llamar el header
import { FooterComponent } from './shared/footer/footer.component';   // este es el componente para llamar el footer
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';  // este es el componente para llamar el cuerpo
import { HttpClient } from 'selenium-webdriver/http';
// para crear un nuevo componente en la terminal ejecutamos ng g c pages/portafolio --spec=false (eso estando en la ruta del proyecto) 


@NgModule({   // modulos que se van a ejecutar en el app.component.html
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent
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
