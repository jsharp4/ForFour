import { Component } from '@angular/core';

import { CalendarViewPage } from '../calendar-view/calendar-view';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = CalendarViewPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
