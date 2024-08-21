import { Injectable } from '@angular/core';
import {heroe} from 'src/app/models/heroe';
 
@Injectable({
  providedIn: 'root'
})
export class ServiceHeroeService {

  lista_de_heroes: heroe[] = [
   {
    "id": 1,
    "nombre": "batman",
    "pelicula":[
      {
        "id": 1,
        "nombre": "batman 1"
      }
    ]
  }
  ]
constructor() {}
   public obtener_lista_heroes(): heroe[]{
    return this.lista_de_heroes;
    }
   
  }


