import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
export interface IVehicleMake {
  Id: number;
  Name: string;
  Abrv: string;
}
export class VehicleMake implements IVehicleMake {
  Id: number;
  Name: string;
  Abrv: string;
}


@Injectable({
  providedIn: 'root'
})
export class VehicleMakeService {

  constructor(private http: HttpClient) { }
  
  GetVehicleMake(id){
    return this.http.get('http://localhost:8486/api/vehiclemake/get/'+ id);
 }

  GetVehicleMakes(){
     return this.http.get('http://localhost:8486/api/vehiclemake/get');
  }
  CreateVehicleMake(vehicleMake){
    return this.http.post<IVehicleMake>('http://localhost:8486/api/vehiclemake/insert', vehicleMake, httpOptions);
  }
  UpdateVehicleMake(vehicleMake){    
    return this.http.post<IVehicleMake>('http://localhost:8486/api/vehiclemake/update', vehicleMake, httpOptions);
  }
  
  DeleteVehicleMake(id) {
    return this.http.get('http://localhost:8486/api/vehiclemake/delete/' + id);
  }
}
