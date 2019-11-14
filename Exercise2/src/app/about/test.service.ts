import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  sharedvalue:number = 5;
  constructor() { }
}
