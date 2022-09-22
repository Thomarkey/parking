import { Pipe, PipeTransform } from '@angular/core';
import Parking from '../models/parking';

@Pipe({
  name: 'parkingOpenFilter'
})
export class ParkingOpenFilterPipe implements PipeTransform {



  transform(parkings: Parking[], args: boolean): any {

    if (!parkings) {
      return;
    }
    

    return parkings.filter(p => p.isOpenNow == args);
  }

}
