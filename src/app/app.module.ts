import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleModelComponent } from './vehicle-model/vehicle-model.component';
import { VehicleMakeComponent } from './vehicle-make/vehicle-make.component';
import { NavComponent } from './nav/nav.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VehicleMakeCreateComponent } from './vehicle-make-create/vehicle-make-create.component';
import { VehicleMakeUpdateComponent } from './vehicle-make-update/vehicle-make-update.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleModelComponent,
    VehicleMakeComponent,
    NavComponent,
    VehicleMakeCreateComponent,
    VehicleMakeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
