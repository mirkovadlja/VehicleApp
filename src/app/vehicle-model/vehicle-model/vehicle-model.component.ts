import { Component, OnInit } from '@angular/core';
import { VehicleModelService } from '../shared/vehicle-model.service'
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-vehicle-model',
  templateUrl: './vehicle-model.component.html',
  styleUrls: ['./vehicle-model.component.css']
})
export class VehicleModelComponent implements OnInit {
  
  vehicleModels: Object;

  constructor(private service: VehicleModelService, private router: Router) { }

  ngOnInit() {
    this.GetVehicleModels();
  }

  GetVehicleModels(){
    this.service.GetVehicleModels().then(data => {
      console.log(data);
      this.vehicleModels = data;
    });
  }
  OnEditClick(id){
    this.router.navigate(['/vehicleModel/update/' + id])
  }
  OnDeleteClick(id){
    this.service.DeleteVehicleModel(id).then(response => {
      alert('Delete success');
      this.GetVehicleModels()
    });
  }
}
