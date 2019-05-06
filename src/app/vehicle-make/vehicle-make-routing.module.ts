import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleMakeComponent } from './vehicle-make/vehicle-make.component';
import { VehicleMakeCreateComponent } from './vehicle-make-create/vehicle-make-create.component';
import { VehicleMakeUpdateComponent } from './vehicle-make-update/vehicle-make-update.component';

const vehicleMakeRoutes: Routes = [
  { path: 'vehicleMake', component: VehicleMakeComponent},
  { path: 'vehicleMake/update/:id', component: VehicleMakeUpdateComponent},
  { path: 'vehicleMake/create', component: VehicleMakeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(vehicleMakeRoutes)],
  exports: [RouterModule]
})
export class VehicleMakeRoutingModule { }
