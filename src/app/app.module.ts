import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobrenosotrosComponent } from './Components/sobrenosotros/sobrenosotros.component';
import { ContactoComponent } from './Components/contacto/contacto.component';
import { AlimentosComponent } from './Components/alimentos/alimentos.component';
import { AseoComponent } from './Components/aseo/aseo.component';
import { HeaderComponent } from './Components/header/header.component';
import { ArrozComponent } from './Components/arroz/arroz.component';


@NgModule({
  declarations: [
    AppComponent,
    SobrenosotrosComponent,
    ContactoComponent,
    AlimentosComponent,
    AseoComponent,
    HeaderComponent,
    ArrozComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
