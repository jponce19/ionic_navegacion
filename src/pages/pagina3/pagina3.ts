import { Component } from '@angular/core';
import { NavParams , NavController} from "ionic-angular";


@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})

export class Pagina3Page {


  // variables para ser usada en el html dela pagina3
  obj_mutantes:any = {};

  constructor(private navParams:NavParams,
              private navCtrl:NavController){

    // se obtiene la data pasada por parametros de la pagina2
    this.obj_mutantes = this.navParams.get("mutantes");

    console.log(navParams);
  }

  irAtras(){

      this.navCtrl.pop();
  }

  irRoot(){
      this.navCtrl.popToRoot();
  }

}
