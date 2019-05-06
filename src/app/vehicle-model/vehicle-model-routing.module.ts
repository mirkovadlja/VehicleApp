import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleModelComponent } from './vehicle-model/vehicle-model.component'
import { VehicleModelCreateComponent } from './vehicle-model-create/vehicle-model-create.component'
import { VehicleModelUpdateComponent } from './vehicle-model-update/vehicle-model-update.component'


const vehicleModelRoutes: Routes = [
  { path: 'vehicleModel', component: VehicleModelComponent},
  { path: 'vehicleModel/update/:id', component: VehicleModelUpdateComponent},
  { path: 'vehicleModel/create', component: VehicleModelCreateComponent},

];

@NgModule({
  imports: [RouterModule.forChild(vehicleModelRoutes)],
  exports: [RouterModule]
})
export class VehicleModelRoutingModule { }
