import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { SwipingPage } from '../pages/swiping/swiping';
import { CalendarViewPage } from '../pages/calendar-view/calendar-view';
import { ItineraryPage } from '../pages/itinerary/itinerary';
import { ProfilePage} from '../pages/profile/profile';
import { LoginPage} from '../pages/login/login';
import { SignupPage} from '../pages/signup/signup';
import { FeedbackPage } from '../pages/feedback/feedback';
import { RatingPage } from '../pages/rating/rating';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Api } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SwingModule } from 'angular2-swing';

//import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarModule } from 'ion2-calendar';
import { User } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    CalendarViewPage,
    ItineraryPage,
    TabsPage,
    WelcomePage,
    SwipingPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    RatingPage,
    FeedbackPage
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
    ItineraryPage,
    TabsPage,
    WelcomePage,
    SwipingPage,
    ProfilePage,
    LoginPage,
    SignupPage,
    RatingPage,
    FeedbackPage
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
