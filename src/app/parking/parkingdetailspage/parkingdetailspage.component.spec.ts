import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingdetailspageComponent } from './parkingdetailspage.component';

describe('ParkingdetailspageComponent', () => {
  let component: ParkingdetailspageComponent;
  let fixture: ComponentFixture<ParkingdetailspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingdetailspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkingdetailspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
