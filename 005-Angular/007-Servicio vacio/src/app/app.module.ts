import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PrincipalComponent } from './principal/principal.component';
import { PiedepaginaComponent } from './piedepagina/piedepagina.component';
import { MenuComponent } from './menu/menu.component';
import { EventosComponent } from './eventos/eventos.component';
import { LateralComponent } from './lateral/lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PrincipalComponent,
    PiedepaginaComponent,
    MenuComponent,
    EventosComponent,
    LateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
