import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleModelComponent } from 'src/app/vehicle-model/vehicle-model.component';
import { VehicleMakeComponent } from 'src/app/vehicle-make/vehicle-make.component';
import { VehicleMakeCreateComponent } from 'src/app/vehicle-make-create/vehicle-make-create.component';
import { VehicleMakeUpdateComponent } from 'src/app/vehicle-make-update/vehicle-make-update.component';

const routes: Routes = [
  { path: 'vehicleMake', component: VehicleMakeComponent},
  { path: 'vehicleMakeCreate', component: VehicleMakeCreateComponent},
  { path: 'vehicleMakeUpdate/:id', component: VehicleMakeUpdateComponent},
  { path: 'vehicleModel', component: VehicleModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
