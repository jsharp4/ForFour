import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl = 'https://localhost:3000/';
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/data').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/data', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  // post(data){
  //   this.http.post(this.apiUrl+'/users', JSON.stringify(data), {
  //       headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
  //       params: new HttpParams().set('id', '3'),
  //     })
  //     .subscribe(res => {
  //       resolve(res);
  //     }, (err) => {
  //       reject(err);
  //     } );
  // }



}
