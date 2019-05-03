import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VehicleMakeService } from '../vehicle-make.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-make-create',
  templateUrl: './vehicle-make-create.component.html',
  styleUrls: ['./vehicle-make-create.component.css']
})
export class VehicleMakeCreateComponent implements OnInit {

  vehicleMakeForm = new FormGroup({
    name: new FormControl(''),
    abrv: new FormControl(''),
  });
  
  submitted = false;

  constructor(private service: VehicleMakeService,private router: Router) { }

  ngOnInit() {
    
  }
  onSubmit() {
    this.service.CreateVehicleMake(this.vehicleMakeForm.value).subscribe(data => {
      console.log(data);
    });
    console.warn(this.vehicleMakeForm.value, );
    this.router.navigate(['/vehicleMake'])
  }
}
