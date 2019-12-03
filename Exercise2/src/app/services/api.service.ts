import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// argument within the api controls which week of spreads is returned
// perhaps change this?
const WeeklySpreadsUrl = 'http://localhost:3002/api/getSpreads';
// this login url returns user information
const myLoginUrl = '';
// this login adds a user to the db, registers them, but does not log them in!
const myRegisterUrl = '';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //API_KEY = 'blah'; we dont have an api key so w/e
  constructor(private httpClient: HttpClient) { }

  public getSpreads(){
    return this.httpClient.get(WeeklySpreadsUrl);
  }

  // ? calls get on the api
  public login(){

  }
  // get user bets ? calls post on the api
  public register() {
    
  }
}