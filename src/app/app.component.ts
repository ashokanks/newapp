import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

<<<<<<< HEAD
import { TabsPage } from '../pages/tabs/tabs';

=======
import { HomePage } from '../pages/home/home';
>>>>>>> 67a3ee9ea689c4bed7658b2e52e0f236c08ca9cd
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = TabsPage;
=======
  rootPage:any = HomePage;
>>>>>>> 67a3ee9ea689c4bed7658b2e52e0f236c08ca9cd

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
<<<<<<< HEAD
=======

>>>>>>> 67a3ee9ea689c4bed7658b2e52e0f236c08ca9cd
