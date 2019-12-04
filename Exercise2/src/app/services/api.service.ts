import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// argument within the api controls which week of spreads is returned
// perhaps change this?
const WeeklySpreadsUrl = 'http://localhost:3002/api/getSpreads';
// this login url returns user information
const myLoginUrl = 'http://localhost:3002/api/getUser';
// this login adds a user to the db, registers them, but does not log them in!
const myRegisterUrl = 'http://localhost:3002/api/postUser';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //API_KEY = 'blah'; we dont have an api key so w/e
  constructor(private httpClient: HttpClient) { }

  public getSpreads(){
    return this.httpClient.get(WeeklySpreadsUrl);
  }

  // ? calls getUser on the api -> get current user info
  public login(username: string, password: string){

  }
  //  ? calls postUser on the api -> register new user
  public register(username: string, name: string, passsword: string) {
    
  }
}