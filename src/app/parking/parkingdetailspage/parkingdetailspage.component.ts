import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parkingdetailspage',
  templateUrl: './parkingdetailspage.component.html',
  styleUrls: ['./parkingdetailspage.component.scss']
})
export class ParkingdetailspageComponent implements OnInit {

  constructor(private http: HttpClient) {

  };

  ngOnInit(): void {
  }

  getParkingDetail():void{
    
  }

}