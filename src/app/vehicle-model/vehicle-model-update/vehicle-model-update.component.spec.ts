import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleModelUpdateComponent } from './vehicle-model-update.component';

describe('VehicleModelUpdateComponent', () => {
  let component: VehicleModelUpdateComponent;
  let fixture: ComponentFixture<VehicleModelUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleModelUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleModelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
