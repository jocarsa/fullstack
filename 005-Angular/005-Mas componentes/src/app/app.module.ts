import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PrincipalComponent } from './principal/principal.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PrincipalComponent,
    PiedepaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
