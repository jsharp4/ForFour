import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { SwipingPage } from '../pages/swiping/swiping';
import { CalendarViewPage } from '../pages/calendar-view/calendar-view';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Api } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';

//import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarModule } from 'ion2-calendar';

import { WelcomePage } from '../pages/welcome/welcome';
import { User } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    CalendarViewPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    SwipingPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SwingModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalendarViewPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    SwipingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    User,
    Api,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
