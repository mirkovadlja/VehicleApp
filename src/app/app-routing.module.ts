import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleModelComponent } from 'src/app/vehicle-model/vehicle-model.component';


const routes: Routes = [
  { path: 'vehicleModel', component: VehicleModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
