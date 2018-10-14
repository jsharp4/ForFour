import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarModule, CalendarComponentOptions } from 'ion2-calendar';
import { ToastController } from 'ionic-angular';
import { Api } from '../../providers/api/api';

/**
 * Generated class for the CalendarViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendar-view',
  templateUrl: 'calendar-view.html',

})
export class CalendarViewPage {
  //dateRange: { from: string; to: string; };
  dateMulti: string[];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
    color: 'secondary'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, public api: Api) {
  }

  saveDates(){
    this.api.post('userAvailability', JSON.stringify(this.dateMulti)).share();
  }

  presentToast() {
      const toast = this.toastCtrl.create({
        message: 'Dates Saved!',
        duration: 1000
      });
      this.saveDates();
      toast.present(toast);


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarViewPage');


  }

}
