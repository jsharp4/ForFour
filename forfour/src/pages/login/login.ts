import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import { SwipingPage } from '../swiping/swiping';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, password: string } = {
    email: 'test_user@gmail.com',
    password: 'test'
  };

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController) {
    }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      // Set navigation root to following page, so that user can't go back to the login screen
      // TODO: Swiping page should only be displayed the first time the user logs in
      console.log(resp);
      if(resp) {
        this.navCtrl.setRoot(SwipingPage);
        console.log("Login success");
      }
      else {
        console.log("Login fail");
        let toast = this.toastCtrl.create({
          message: "Unable to login",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }, (err) => {
      //this.navCtrl.setRoot(SwipingPage);
      // Unable to log in
      console.log("Login fail");
      let toast = this.toastCtrl.create({
        message: "Unable to login",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
