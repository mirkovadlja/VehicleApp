import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
export interface VehicleMake {
  name: string;
  abrv: string;
}

@Injectable({
  providedIn: 'root'
})
export class VehicleMakeService {

  constructor(private http: HttpClient) { }

  GetVehicleMakes(){
     return this.http.get('http://localhost:8486/api/vehiclemake/get');
  }
  CreateVehicleMake(vehicleMake){
    console.log(vehicleMake);
    
    return this.http.post<VehicleMake>('http://localhost:8486/api/vehiclemake/insert', vehicleMake, httpOptions);
  }
  DeleteVehicleMake(id) {
    return this.http.get('http://localhost:8486/api/vehiclemake/delete/' + id);
  }
}
