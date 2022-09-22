import { Component, Input, OnInit } from '@angular/core';
import Parking from 'src/app/models/parking';

@Component({
  selector: 'app-parkingdetails',
  templateUrl: './parkingdetails.component.html',
  styleUrls: ['./parkingdetails.component.scss']
})
export class ParkingdetailsComponent implements OnInit {
  @Input() parking!: Parking;

  constructor() { }

  ngOnInit(): void {
  }

  isFull(): Boolean {
    return this.parking.availablecapacity == 0;
  }

  isAlmostFull(): Boolean {
    return (this.parking.availablecapacity / this.parking.totalcapacity) < 0.5;
  }

  isOpen(): Boolean {
    return this.parking.isOpenNow;
  }

  goToPage():void{
    console.log("test");
  }

}
