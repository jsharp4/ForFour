import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import { Api } from '../../providers/api/api';
import {
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';
import 'rxjs/Rx';
import { isBoolean } from 'ionic-angular/umd/util/util';
import questions from '../../mock/questions.js';

/**
 * Generated class for the SwipingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-swiping',
  templateUrl: 'swiping.html',
})
export class SwipingPage {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  cards: Array<any>;
  stackConfig: StackConfig;
  recentCard: string = '';
  resultObj: any = {
    answers: []
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http, private api: Api) {
    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }

  ngAfterViewInit() {
    // Either subscribe in controller or set in HTML
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.background = '#ffffff';
    });
    
    this.cards = [{
      id: '-1',
      title: "Finished!",
      subtitle: "You're ready to be matched.",
      thumbnailUrl: "https://images.pexels.com/photos/796607/pexels-photo-796607.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
    }];
    this.addCards();
  }

  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16*16 - abs, 16*16));
    let hexCode = this.decimalToHex(min, 2);
    
    if (x < 0) {
      color = '#FF' + hexCode + hexCode;
    } else {
      color = '#' + hexCode + 'FF' + hexCode;
    }
    
    var overlay = element.getElementsByClassName('color')[0];
    overlay.style.background = color;
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  goHome() {
    console.log(this.resultObj);
    // Uncomment as soon as api server is ready
    console.log(JSON.stringify(this.resultObj));
    let seq = this.api.post('answers', JSON.stringify(this.resultObj));
    seq.subscribe((res: any) => {
      console.log("Success");
      console.log(res);
      // If the API returned a successful response, mark the user as logged in
      //if (res.status == 'success') {
      this.navCtrl.setRoot(TabsPage);
      //}
    }, err => {
      console.log("Failure");
      console.error('ERROR', err);
    });
    
  }
  
  // Connected through HTML
  voteUp(like: boolean) {
    let removedCard = this.cards.pop();
    if(removedCard.id == -1){
      this.goHome();
    }
    let answerData = {
      id: removedCard.id,
      answer: undefined
    }
    if (!like) {
      answerData.answer = true;
      this.recentCard = 'You like ' + removedCard.verb + '.';
    } else {
      answerData.answer = false;
      this.recentCard = 'You dislike ' + removedCard.verb + '.';
    }
    this.resultObj.answers.push(answerData);
  }
  
  // Add new cards to our array
  addCards() {
    /*this.http.get('http://localhost:3000/questions')
    .map(data => data.json().results)
    */
    console.log(questions);
    questions.questions.results.forEach(result => {
      console.log(result);
      this.cards.push(result);
    })
  }
  
  // http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript
  decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;
    
    while (hex.length < padding) {
      hex = "0" + hex;
    }
    return hex;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SwipingPage');
  }

}
