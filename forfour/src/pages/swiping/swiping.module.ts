import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwipingPage } from './swiping';

@NgModule({
  declarations: [
    SwipingPage,
  ],
  imports: [
    IonicPageModule.forChild(SwipingPage),
  ],
})
export class SwipingPageModule {}
