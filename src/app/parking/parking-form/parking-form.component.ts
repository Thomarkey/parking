import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Parking from 'src/app/models/parking';


@Component({
  selector: 'app-parking-form',
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.scss']
})
export class ParkingFormComponent implements OnInit {

  // parkings: any;
  @Input() parkings!:Parking[];


  constructor() { }

  parkingForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    isOpenNow: new FormControl(),
    totalcapacity: new FormControl(),
    availablecapacity: new FormControl()
  })


  onFormSubmit(): void {
    this.parkings.push(
      new Parking(this.parkingForm.value.id,
        this.parkingForm.value.name,
        this.parkingForm.value.isOpenNow,
        this.parkingForm.value.totalcapacity,
        this.parkingForm.value.availablecapacity));
        
        this.parkingForm.reset();

  }
  
  ngOnInit(): void {
  }

}
