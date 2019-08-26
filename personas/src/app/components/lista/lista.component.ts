import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../services/persona.service';
import {PersonaModel } from '../../model/persona.model';
import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent implements OnInit{

   personas: PersonaModel[] = [];
   nombre:string = "";
   tipodocumento:string = "";
   constructor(private activatedRoute: ActivatedRoute, private personaService:PersonaService) {
     this.activatedRoute.params.subscribe( params => {
        this.nombre = params['nombre'];
        this.tipodocumento = params['tipodocumento'];
     });
  }
  ngOnInit(){
     if(this.nombre != null && this.tipodocumento == 'todas'){
          this.personaService.findAllPersonByNombre(this.nombre).subscribe(resp => this.personas = resp);
      } else if(this.nombre == 'vacio' && this.tipodocumento != 'todas'){
         this.personaService.findAllPersonByTipdoc(this.nombre).subscribe(resp => this.personas = resp);
      } else if(this.nombre == 'vacio' && this.tipodocumento == 'todas'){
         this.personaService.findAllPerson().subscribe(resp => this.personas = resp);
      } else if(this.nombre != null && this.tipodocumento != 'todas'){
         this.personaService.findAllPersonByNombreAndTipdoc(this.nombre, this.tipodocumento).subscribe(resp => this.personas = resp);
      }
  }
  delete(persona: PersonaModel, i:number){
     Swal.fire({
        title: '¿Esta seguro?',
        text: 'Se eliminara la persona',
        type: 'question',
        showConfirmButton: true,
        showCancelButton: true
     }).then(resp =>{
        if(resp.value){
           this.personas.splice(i,1);
          this.personaService.delete(persona.id).subscribe();
        }
     });
 }


}
