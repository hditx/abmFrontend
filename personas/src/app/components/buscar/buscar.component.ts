import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent{
   nombre = null;
   tipodocumento = "";
   constructor( private personaService:PersonaService) { }


}
