import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';

import { ModalPage} from "../index.paginas";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl: ModalController) {

  }

  activaPrincipal(){

    this.navCtrl.parent.select(2);

  }

  mostrarModal(){

    // this.modalCtrl.create( ModalPage).present();
    // despues del modalpage, se pueden enviar parametrpos u objetos...
    let vmodal =  this.modalCtrl.create( ModalPage , {nombre :"jose", edad:41 });

    vmodal.present();

    vmodal.onDidDismiss( parametros =>{

        if (parametros){
          console.log("data del modal");
          console.log(parametros)

        }else{
          console.log("se cerro sin parametros");  

        }


    })


  }

}
