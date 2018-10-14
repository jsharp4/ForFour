import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { SwipingPage } from '../pages/swiping/swiping';
import { CalendarViewPage } from '../pages/calendar-view/calendar-view';
import { ProfilePage} from '../pages/profile/profile';
import { ItineraryPage } from '../pages/itinerary/itinerary';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Api } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';

//import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarModule } from 'ion2-calendar';
import { User } from '../providers/user/user';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    CalendarViewPage,
    TabsPage,
    WelcomePage,
    SwipingPage,
    ProfilePage,
    ItineraryPage
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
    TabsPage,
    WelcomePage,
    SwipingPage,
    ProfilePage,
    ItineraryPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    User,
    Api,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
