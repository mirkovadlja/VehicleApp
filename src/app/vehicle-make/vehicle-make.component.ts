import { Component, OnInit } from '@angular/core';
import { VehicleMakeService } from '../vehicle-make.service';


@Component({
  selector: 'app-vehicle-make',
  templateUrl: './vehicle-make.component.html',
  styleUrls: ['./vehicle-make.component.css']
})
export class VehicleMakeComponent implements OnInit {

  vehicleMakes: Object;
  constructor(private service: VehicleMakeService) {}

  ngOnInit() {
    this.GetVehicleMakes();
  }

  GetVehicleMakes(){
    this.service.GetVehicleMakes().subscribe(data => {
      this.vehicleMakes = data;
    });
  }

  OnDeleteClick(id){
    this.service.DeleteVehicleMake(id).subscribe(response => {
      alert('Delete success');
      this.GetVehicleMakes()
    });
  }



  
  

}
