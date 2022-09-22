import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingdetailspageComponent } from './parking/parkingdetailspage/parkingdetailspage.component';


const routes: Routes = [
  { path: 'parkingdetailspage', component: ParkingdetailspageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


