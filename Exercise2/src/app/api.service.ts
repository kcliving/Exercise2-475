import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const WeeklySpreadsUrl = 'http://localhost:3002/api/getSpreads';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //API_KEY = 'blah'; we dont have an api key so w/e
  constructor(private httpClient: HttpClient) { }

  public getSpreads(){
    return this.httpClient.get(WeeklySpreadsUrl);
  }
}