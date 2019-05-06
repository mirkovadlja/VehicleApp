import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

export interface IVehicleModel {
  Id: number;
  Name: string;
  Abrv: string;
  VehicleMakeId: number;
}
export class VehicleModel implements IVehicleModel {
  Id: number;
  Name: string;
  Abrv: string;
  VehicleMakeId: number;
}


@Injectable({
  providedIn: 'root'
})
export class VehicleModelService {

  constructor(private http: HttpClient) { }
  
  GetVehicleModel(id){
    return this.http.get('http://localhost:8486/api/vehiclemodel/get/'+ id).toPromise();
 }
 
 GetVehicleModelsFiltered(id){
  return this.http.get('http://localhost:8486/api/vehiclemodel/getall/' + id).toPromise();
}

  GetVehicleModels(){
     return this.http.get('http://localhost:8486/api/vehiclemodel/getall').toPromise();
  }
  CreateVehicleModel(vehicleModel){
    return this.http.post<IVehicleModel>('http://localhost:8486/api/vehiclemodel/insert', vehicleModel, httpOptions).toPromise();
  }
  UpdateVehicleModel(vehicleModel){    
    return this.http.post<IVehicleModel>('http://localhost:8486/api/vehiclemodel/update', vehicleModel, httpOptions).toPromise();
  }
  
  DeleteVehicleModel(id) {
    return this.http.get('http://localhost:8486/api/vehiclemodel/delete/' + id).toPromise();
  }
  GetVehicleMakes(){
    return this.http.get('http://localhost:8486/api/vehiclemake/get').toPromise();
 }
}
