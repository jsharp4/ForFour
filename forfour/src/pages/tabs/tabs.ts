import { Component } from '@angular/core';

import { CalendarViewPage } from '../calendar-view/calendar-view';
import { ProfilePage } from '../profile/profile';
import { ItineraryPage } from '../itinerary/itinerary';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = CalendarViewPage;
  tab3Root = ItineraryPage;

  constructor() {

  }
}
