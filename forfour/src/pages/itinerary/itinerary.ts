import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the ItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itinerary',
  templateUrl: 'itinerary.html',
})
export class ItineraryPage {
  users: any;
  jsonFile = [
      {
         "id":1,
         "members":{
            "1":"Mandy Wong",
            "2":"Adam Lane",
            "3":"Alexstrasza Feu"
         },
         "location":"BananaLand",
         "dateTime":"2018-10-15 14:00"
      },
      {
         "id":2,
         "members":{
            "1":"Rexis Kahn",
            "2":"Victoria Rens",
            "3":"Sasha Jackson"
         },
         "location":"Tree House",
         "dateTime":"2018-10-16 19:00"
      },
      {
         "id":3,
         "members":{
            "1":"Baudoin de Sury",
            "2":"Van Freude",
            "3":"Yoko Izashi"
         },
         "location":"Knife's Edge",
         "dateTime":"2018-10-20 12:30"
      }
   ];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:HttpClient, public restProvider:RestProvider) {
    this.getUsers();
    var json;

    // this.http.get('localhost:3000/data').map(res => res.json()).subscribe(data => {
    //     json = data;
    //});
  }

  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  itemSelected(item){
    alert("details of event " + item["id"]);

  }


  refresh(){
    this.getUsers();
  }

  ionViewDidLoad() {
    var json;
    console.log('ionViewDidLoad ItineraryPage');
  }



}
