import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarViewPage } from './calendar-view';

@NgModule({
  declarations: [
    CalendarViewPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarViewPage),
  ],
})
export class CalendarViewPageModule {}
