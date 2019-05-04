import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleMakeUpdateComponent } from './vehicle-make-update.component';

describe('VehicleMakeUpdateComponent', () => {
  let component: VehicleMakeUpdateComponent;
  let fixture: ComponentFixture<VehicleMakeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleMakeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleMakeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
