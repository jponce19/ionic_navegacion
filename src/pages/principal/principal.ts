import { Component }    from '@angular/core';
import { NavController, MenuController} from "ionic-angular";
import { Pagina2Page }  from "../index.paginas"

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  //  se declara variable para ser usada en el html principal
  xpagina2:any = Pagina2Page;

  constructor(public navCtrl: NavController, private menuCtrl:MenuController) {}

  navegarPagina(){
    this.navCtrl.push(Pagina2Page);

  }

  mostrarMenu(){
    this.menuCtrl.toggle();

  }

}
