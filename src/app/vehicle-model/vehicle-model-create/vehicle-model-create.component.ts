import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VehicleModelService } from '../shared/vehicle-model.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-model-create',
  templateUrl: './vehicle-model-create.component.html',
  styleUrls: ['./vehicle-model-create.component.css']
})
export class VehicleModelCreateComponent implements OnInit {

  vehicleModelForm = new FormGroup({
    name: new FormControl(''),
    abrv: new FormControl(''),
    vehicleMakeId: new FormControl('')
  });
  vehicleMakes;
  submitted = false;

  constructor(private service: VehicleModelService,private router: Router) { }

  ngOnInit() {
    this.service.GetVehicleMakes().then(makes => {
      this.vehicleMakes = makes;
    });
  }
  onSubmit() {
    //console.log(this.vehicleModelForm.value);
    this.service.CreateVehicleModel(this.vehicleModelForm.value).then(data => {
      this.router.navigate(['/vehicleModel'])
    });
  }
}
