import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { VehicleMakeRoutingModule } from '../vehicle-make/vehicle-make-routing.module'

import { VehicleMakeComponent } from './vehicle-make/vehicle-make.component';
import { VehicleMakeCreateComponent } from './vehicle-make-create/vehicle-make-create.component';
import { VehicleMakeUpdateComponent } from './vehicle-make-update/vehicle-make-update.component';

@NgModule({
  declarations: [
    VehicleMakeComponent, 
    VehicleMakeCreateComponent, 
    VehicleMakeUpdateComponent
  ],
  imports: [
    CommonModule,
    VehicleMakeRoutingModule,
    ReactiveFormsModule
  ]
})
export class VehicleMakeModule { }

