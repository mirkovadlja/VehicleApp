import { Component, OnInit } from '@angular/core';
import { VehicleMakeService, VehicleMake } from '../shared/vehicle-make.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vehicle-make-update',
  templateUrl: './vehicle-make-update.component.html',
  styleUrls: ['./vehicle-make-update.component.css']
})
export class VehicleMakeUpdateComponent implements OnInit {
 
  vehicleMake= new VehicleMake();
  id: number;

  vehicleMakeForm = new FormGroup({
    name: new FormControl(''),
    abrv: new FormControl(''),
  });
  constructor(private service: VehicleMakeService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log('in oninit');
    this.id = +this.route.snapshot.params['id'];
    this.GetVehicleMake();
  }
  GetVehicleMake(){
    this.service.GetVehicleMake(this.id).then(data => {
      this.vehicleMake = data as VehicleMake;
    
      this.vehicleMakeForm.setValue({
        name: this.vehicleMake.Name,
        abrv: this.vehicleMake.Abrv
      });
    });
  
  }
  onSubmit() {
    var a = new VehicleMake();
    a.Id= this.id;
    a.Name = this.vehicleMakeForm.value.name;
    a.Abrv = this.vehicleMakeForm.value.abrv;
    this.service.UpdateVehicleMake(a).then(data => {
      console.log(data);
      this.router.navigate(['/vehicleMake'])
    });
    //console.warn(this.vehicleMakeForm.value, );
    
  }
}

