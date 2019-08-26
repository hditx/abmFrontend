import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonaModel } from '../model/persona.model';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
   private url = 'http://127.0.0.1:8081'
  constructor( private http:HttpClient) {
  }

  save(persona:PersonaModel){
     return this.http.post(`${this.url}/persona`, persona);
 }
 update(persona:PersonaModel){
    return this.http.put(`${this.url}/persona/${persona.id}`, persona);
}
   findAllPerson(){
    return this.http.get('http://127.0.0.1:8081/personas').pipe(map(this.crearArreglo));
  }
  findAllPersonByNombre(nombre:string){
     return this.http.get(`${this.url}/personas/nombre/${nombre}`).pipe(map(this.crearArreglo));
  }
  findAllPersonByTipdoc(tipodocumento:string){
     return this.http.get(`${this.url}/personas/tipodoc/${tipodocumento}`).pipe(map(this.crearArreglo));
  }
  findAllPersonByNombreAndTipdoc(nombre:string, tipodocumento:string){
     return this.http.get(`${this.url}/personas/nombreTipdoc/${nombre}&${tipodocumento}`).pipe(map(this.crearArreglo));
 }
   getOne(id:string){
      return this.http.get(`${this.url}/persona/${id}`).pipe(map(this.crearArreglo));

   }
   delete(id:string){
      return this.http.delete(`${this.url}/persona/${id}`);
   }
 private crearArreglo(personasObj: object){
    const personas: PersonaModel[] = [];
    Object.keys(personasObj).forEach(key =>{
      const persona: PersonaModel = personasObj[key];
      personas.push(persona);
   });
    if (personasObj == null){ return []; }
   return personas;
}
}
