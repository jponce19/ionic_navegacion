import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';



@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  // declaracion de variables
  nombre:string ="";
  edad:number=0;

  constructor(public navParams: NavParams, public ViewCtrl: ViewController) {

      this.nombre = this.navParams.get("nombre");
      this.edad   = this.navParams.get("edad");
  }

  cerrar_con_param(){
      let xdata ={
          nombre :"mateo", edad:"2", coords:{ lat:10, lng:-1}
      };


      this.ViewCtrl.dismiss(xdata);

  }

  cerrar_sin_param(){

        this.ViewCtrl.dismiss();
  }


}
