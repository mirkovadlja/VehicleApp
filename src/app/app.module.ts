import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { VehicleMakeModule } from './vehicle-make/vehicle-make.module';
import { VehicleModelModule } from './vehicle-model/vehicle-model.module'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    VehicleMakeModule,
    VehicleModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
