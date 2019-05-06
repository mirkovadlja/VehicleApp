import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { VehicleModelService, VehicleModel } from '../shared/vehicle-model.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-model-update',
  templateUrl: './vehicle-model-update.component.html',
  styleUrls: ['./vehicle-model-update.component.css']
})
export class VehicleModelUpdateComponent implements OnInit {

  vehicleModel = new VehicleModel();
  id: number;
  vehicleMakes: Object[];

  vehicleModelForm = new FormGroup({
    name: new FormControl(''),
    abrv: new FormControl(''),
    vehicleMakeId: new FormControl(''),
  });
  constructor(private service: VehicleModelService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.service.GetVehicleMakes().then(data => {
      this.vehicleMakes = data as Object[];
      this.GetVehicleModel();
    });
  }
  GetVehicleModel(){
    this.service.GetVehicleModel(this.id).then(data => {
      
      this.vehicleModel = data as VehicleModel;
    
      this.vehicleModelForm.setValue({
        name: this.vehicleModel.Name,
        abrv: this.vehicleModel.Abrv,
        vehicleMakeId: this.vehicleModel.VehicleMakeId
      });
    });
  
  }
  onSubmit() {
    var a = new VehicleModel();
    a.Id= this.id;
    a.Name = this.vehicleModelForm.value.name;
    a.Abrv = this.vehicleModelForm.value.abrv;
    a.VehicleMakeId = this.vehicleModelForm.value.vehicleMakeId;
    this.service.UpdateVehicleModel(a).then(data => {
      console.log(data);
      this.router.navigate(['/vehicleModel'])
    });
    //console.warn(this.vehicleMakeForm.value, );
    
  }

}
