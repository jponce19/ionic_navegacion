import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    Pagina2Page,
    Pagina3Page,
    TabsPage,
    PrincipalPage } from "../pages/index.paginas";

@NgModule({
  declarations: [
    MyApp,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    Pagina2Page,
    Pagina3Page,
    TabsPage,
    PrincipalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: 'Volver'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AjustesPage,
    Ajustes2Page,
    ModalPage,
    Pagina2Page,
    Pagina3Page,
    TabsPage,
    PrincipalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
