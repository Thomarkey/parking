import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingdetailsComponent } from './parking/parkingdetails/parkingdetails.component';
import { ParkinglistComponent } from './parking/parkinglist/parkinglist.component';
import { ParkingFormComponent } from './parking/parking-form/parking-form.component';
import { ParkingFilterPipe } from './parking/parking-filter-pipe';
import { ParkingOpenFilterPipe } from './parking/parking-open-filter-pipe';
import { ParkingdetailspageComponent } from './parking/parkingdetailspage/parkingdetailspage.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkingdetailsComponent,
    ParkinglistComponent,
    ParkingFormComponent,
    ParkingFilterPipe,
    ParkingOpenFilterPipe,
    ParkingdetailspageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
