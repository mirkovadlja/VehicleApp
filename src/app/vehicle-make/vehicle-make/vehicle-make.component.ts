import { Component, OnInit } from '@angular/core';
import { VehicleMakeService } from '../shared/vehicle-make.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehicle-make',
  templateUrl: './vehicle-make.component.html',
  styleUrls: ['./vehicle-make.component.css']
})
export class VehicleMakeComponent implements OnInit {

  vehicleMakes: Object;
  constructor(private service: VehicleMakeService, private router: Router) {}

  ngOnInit() {
    this.GetVehicleMakes();
  }

  GetVehicleMakes(){
    this.service.GetVehicleMakes().then(data => {
      this.vehicleMakes = data;
    });
  }
  OnEditClick(id){
    this.router.navigate(['/vehicleMake/update/' + id])
  }
  OnDeleteClick(id){
    this.service.DeleteVehicleMake(id).then(response => {
      alert('Delete success');
      this.GetVehicleMakes()
    });
  }
}
