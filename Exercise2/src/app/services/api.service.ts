import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const WeeklySpreadsUrl = 'http://localhost:3002/api/getSpreads';
const myUserUrl = '';
const myUserBets = '';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //API_KEY = 'blah'; we dont have an api key so w/e
  constructor(private httpClient: HttpClient) { }

  public getSpreads(){
    return this.httpClient.get(WeeklySpreadsUrl);
  }

  // gets the user
  public getUser(){

  }
  // get user bets
  public getBets() {
    
  }
}