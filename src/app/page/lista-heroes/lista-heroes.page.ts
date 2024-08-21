import { Component, OnInit } from '@angular/core';
import { ServiceHeroeService } from 'src/app/api/services-heroes/service-heroe.service';
import { heroe } from 'src/app/models/heroe';

@Component({
  selector: 'app-lista-heroes',
  templateUrl: './lista-heroes.page.html',
  styleUrls: ['./lista-heroes.page.scss'],
})
export class ListaHeroesPage implements OnInit {

  heroes: heroe[] =[];


  constructor(private _heroeService: ServiceHeroeService) { }


  ngOnInit() {
    this.heroes = this._heroeService.obtener_lista_heroes();
    console.info(this.heroes);
  }

}
