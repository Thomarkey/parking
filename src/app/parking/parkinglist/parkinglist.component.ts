import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Parking from 'src/app/models/parking';
import { ParkingService } from 'src/app/services/parking.service';

@Component({
  selector: 'app-parkinglist',
  templateUrl: './parkinglist.component.html',
  styleUrls: ['./parkinglist.component.scss']
})
export class ParkinglistComponent implements OnInit {

  parkings: Parking[] = [];
  filter: string ="";
  isOpenFilter: boolean=false;

  constructor(private http: HttpClient, private parkingService: ParkingService) { }


  //moved to service!
  // loadParkingsFromHttp(): void {
  //   this.http.get<any>('https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time')
  //     .subscribe(resp => {
  //       for (let i = 0; i < resp.records.length; i++) {
  //         const element = resp.records[i].fields;
  //         this.parkings.push(
  //           new Parking(
  //             element.id,
  //             element.name,
  //             element.isopennow,
  //             element.totalcapacity,
  //             element.availablecapacity
  //           )
  //         )

  //       }
  //     });

  // }


  loadParkings() {        
    this.parkings = this.parkingService.loadParkings();
  }


  // loadParkings(): void {
  //   this.parkings = new Array<Parking>();
  //   this.parkings.push(
  //     new Parking(
  //       "1",
  //       "Reep",
  //       true,
  //       500,
  //       300,));
  //   this.parkings.push(
  //     new Parking(
  //       "2",
  //       "Bos",
  //       true,
  //       400,
  //       200,));
  //   this.parkings.push(
  //     new Parking(
  //       "3",
  //       "Bas",
  //       true,
  //       500,
  //       300,));
  // }


  ngOnInit(): void {
    this.loadParkings();
  }

}
