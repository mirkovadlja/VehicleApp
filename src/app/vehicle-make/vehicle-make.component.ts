import { Component, OnInit } from '@angular/core';
import { VehicleMakeService } from '../vehicle-make.service';
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
    this.service.GetVehicleMakes().subscribe(data => {
      this.vehicleMakes = data;
    });
  }
  onEditClick(id){
    this.router.navigate(['/vehicleMakeUpdate/' + id])
  }
  OnDeleteClick(id){
    this.service.DeleteVehicleMake(id).subscribe(response => {
      alert('Delete success');
      this.GetVehicleMakes()
    });
  }



  
  

}
