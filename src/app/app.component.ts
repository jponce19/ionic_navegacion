import { Component } from '@angular/core';
import { Platform , MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage, Ajustes2Page} from "../pages/index.paginas";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  // declaracion de variables
  vtabs = TabsPage;
  vajustes2 = Ajustes2Page;


  rootPage:any = TabsPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private MenuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(xpagina:any){

      // rootPage proviene desde app.html

      this.rootPage = xpagina;
      this.MenuCtrl.close();
  }
}
