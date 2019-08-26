import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarComponent } from './components/buscar/buscar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';

export const routes:Routes =[
  {path:'buscar', component: BuscarComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'lista/:nombre/:tipodocumento', component: ListaComponent},
  {path: 'formulario/:id', component: FormularioComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'buscar'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
