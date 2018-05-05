<<<<<<< HEAD
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
=======
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
>>>>>>> 67a3ee9ea689c4bed7658b2e52e0f236c08ca9cd

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
=======
    HomePage
>>>>>>> 67a3ee9ea689c4bed7658b2e52e0f236c08ca9cd
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
=======
    HomePage
>>>>>>> 67a3ee9ea689c4bed7658b2e52e0f236c08ca9cd
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
