import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  spreads: any[]; // our variable to hold our data

  constructor(private apiService:ApiService) { 
    this.spreads = [];
  }
  /* on init, call getSpread() method and subscribe to the returned
     observable which sends GET to the football endpoint
  */
  ngOnInit() {
    this.apiService.getSpreads().subscribe((spreads: any[])=> {
      this.spreads=spreads;
      console.log(spreads);
    });

  }

}
