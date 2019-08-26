import { Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaComponent } from './components/lista/lista.component';

export const ROUTES:Routes =[
  {path:'buscar', component:BuscarComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'lista', component: ListaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'buscar'}
];
