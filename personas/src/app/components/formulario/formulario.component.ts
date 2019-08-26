import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonaModel } from '../../model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})
export class FormularioComponent implements OnInit{
  persona = new PersonaModel();
  id:string = null;
  constructor(private personaService: PersonaService, private activatedRoute:ActivatedRoute) {
     this.activatedRoute.params.subscribe(params => {
        this.id = params['id'];
        console.log(this.id);
     })
 }

  guardar(form: NgForm){
     if(this.persona.id == null){
      this.personaService.save(this.persona).subscribe(resp => {
         console.log(resp);
      });
      }else {
         this.personaService.update(this.persona).subscribe();
      }
  }
  ngOnInit(){
     if(this.id != null){
        this.personaService.getOne(this.id).subscribe(resp =>{
           this.persona.id = resp[0].toString();
           this.persona.apellido = resp[1].toString();
           this.persona.fechanacimiento = resp[2].toString();
           this.persona.nombre = resp[3].toString();
           this.persona.numerodocumento = resp[4].toString();
           this.persona.tipodocumento = resp[5].toString();
           console.log(resp);
        });
        //console.log(this.persona);
     }
 }
}
