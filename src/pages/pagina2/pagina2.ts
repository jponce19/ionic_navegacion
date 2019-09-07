import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pagina3Page} from "../index.paginas";

@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3:any =Pagina3Page; 

  mutantes:any[] =[
    {
        nombre:"magneto",
        poder:"Controlar metales"
    },
    {
        nombre:"wolwerine",
        poder:"regeneracion"
    },
    {
        nombre:"profesor x",
        poder:"poderes psiquicos"
    },
    {
        nombre:"Gambito",
        poder:"cargar objetos"
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irpagina3(xmutates){
      console.log( "pagina2 " );
      console.log(xmutates);

      // enviando parametros un objeto => xmutantes => ojo con las llaves {}
      this.navCtrl.push(  Pagina3Page, {'mutantes' : xmutates });

  }


}
