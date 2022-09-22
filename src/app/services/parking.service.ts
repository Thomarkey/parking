import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import Parking from '../models/parking';

@Injectable({
    providedIn: 'root'
})

export class ParkingService {

    parkings!: Parking[];

    constructor(private http: HttpClient) {

    };

    loadParkings() {
        this.parkings = new Array<Parking>();
        this.http.get<any>('https://data.stad.gent/api/records/1.0/search/?dataset=bezetting-parkeergarages-real-time')
            .subscribe(resp => {
                for (let i = 0; i < resp.records.length; i++) {
                    const element = resp.records[i].fields;
                    this.parkings.push(
                        new Parking(
                            element.id,
                            element.name,
                            element.isopennow,
                            element.totalcapacity,
                            element.availablecapacity
                        )
                    )
                }
            });

        return this.parkings;
    }


}