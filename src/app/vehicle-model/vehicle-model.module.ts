import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VehicleModelRoutingModule } from './vehicle-model-routing.module'

import { VehicleModelComponent } from './vehicle-model/vehicle-model.component';
import { VehicleModelUpdateComponent } from './vehicle-model-update/vehicle-model-update.component';
import { VehicleModelCreateComponent } from './vehicle-model-create/vehicle-model-create.component'

@NgModule({
  declarations: [
    VehicleModelComponent,
    VehicleModelUpdateComponent,
    VehicleModelCreateComponent
  ],
  imports: [
    CommonModule,
    VehicleModelRoutingModule,
    ReactiveFormsModule
  ]
})
export class VehicleModelModule { }
