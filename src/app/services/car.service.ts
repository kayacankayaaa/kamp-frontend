import { HttpClient } from '@angular/common/http'; //API'ye bağlanmayı sağlar
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44371/api/cars/getcardetails";
  constructor(private httpClient: HttpClient) { }

  getCars():Observable<CarResponseModel>{
    return this.httpClient.get<CarResponseModel>(this.apiUrl)  
    //ApiURL'e gir ve gelen modeli CarResponseModel'e getir ve cars dizisine aktar.
  }

  
}
