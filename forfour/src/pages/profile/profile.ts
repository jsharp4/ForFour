import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Api } from '../../providers';

import { FeedbackPage } from '../feedback/feedback';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  // Todo: get Profile from backend
  profile: { name: string, birthday: string, nationality: string, gender: string } = {
    name: 'test@example.com',
    birthday: '26.08.1997',
    gender: 'Male',
    nationality: 'German'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public api: Api, public toastCtrl: ToastController, public modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  updateProfile(){
    let name = document.querySelector('[name=profile_name]').getAttribute('ng-reflect-model');
    let birthday = document.querySelector('[name=profile_name]').getAttribute('ng-reflect-model');
    let nationality = document.querySelector('[name=profile_name]').getAttribute('ng-reflect-model');
    let gender = document.querySelector('[name=profile_name]').getAttribute('ng-reflect-model');
    let profile = {
      name: name,
      birthday: birthday,
      nationality: nationality,
      gender: gender
    }
    // Uncomment as soon as API is up
    //this.api.post('updateprofile', JSON.stringify(profile));
    let toast = this.toastCtrl.create({
      message: "Profile updated",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  feedback(){
    let myModal2 = this.modalCtrl.create(FeedbackPage);
    myModal2.present();
  }


}
