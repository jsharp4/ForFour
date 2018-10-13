import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginView } from './login';

@NgModule({
  declarations: [
    LoginView,
  ],
  imports: [
    IonicPageModule.forChild(LoginView)
  ],
  exports: [
    LoginView
  ]
})
export class LoginViewModule { }
