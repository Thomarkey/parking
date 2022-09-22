import { Pipe, PipeTransform } from '@angular/core';
import Parking from '../models/parking';

@Pipe({
  name: 'parkingFilter'
})
export class ParkingFilterPipe implements PipeTransform {

  transform(parkings: Parking[], args: string): any {
    if (!parkings) {
      return null;
    }
    if (args == "") {
      return parkings;
    }

    return parkings.filter(
      p => p.name.toLowerCase().indexOf(args.toLowerCase()) !== -1
      // p => p.name.toLowerCase().includes(args.toLowerCase())
    );

  }


}
