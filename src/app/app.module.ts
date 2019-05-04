import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { VehicleMakeModule } from './vehicle-make/vehicle-make.module';

import {  VehicleModelComponent } from './vehicle-model/vehicle-model.component'
//import { VehicleMakeComponent } from './vehicle-make/vehicle-make-list/vehicle-make.component'
//import {VehicleMakeCreateComponent } from './vehicle-make/vehicle-make-create/vehicle-make-create.component'
//import {VehicleMakeUpdateComponent} from './vehicle-make/vehicle-make-update/vehicle-make-update.component'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VehicleModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    VehicleMakeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
