import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';
import { AppRoutingModule } from './app-routing.module'
import { FormsModule } from '@angular/forms';

import { PersonaService } from './services/persona.service';


@NgModule({
  declarations: [
    AppComponent,
    BuscarComponent,
    FormularioComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
