import { Component, OnInit } from '@angular/core';
import { VehicleModelService } from '../shared/vehicle-model.service'
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-vehicle-model',
  templateUrl: './vehicle-model.component.html',
  styleUrls: ['./vehicle-model.component.css']
})
export class VehicleModelComponent implements OnInit {
  
  vehicleModels: Object[];
  vehicleMakes: Object[];
  constructor(private service: VehicleModelService, private router: Router) { }

  ngOnInit() {
    this.service.GetVehicleMakes().then(vehicleMakes => {
      this.vehicleMakes = vehicleMakes as Object[];
      this.GetVehicleModels();
    })
  }

  OnFilterChange(id){
    console.log(id);
    if(id == 0){
      this.GetVehicleModels();
    }else{
      this.service.GetVehicleModelsFiltered(id).then(vehicleModels => {
        this.vehicleModels = vehicleModels as Object[];
      });
    }
    
  }

  GetVehicleModels(){
    this.service.GetVehicleModels().then(data => {
      this.vehicleModels = data as Object[];
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
