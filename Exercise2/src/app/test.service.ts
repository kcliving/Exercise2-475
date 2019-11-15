import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  sharedValue:number = 5;
  constructor() { }
}
