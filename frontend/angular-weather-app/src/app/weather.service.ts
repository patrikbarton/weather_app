import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {WeatherDto} from "./weather_api.interface";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiUrl = 'http://api.weatherapi.com/v1/current.json?key=f09ff240632f45688da81422240908&q=London&aqi=no';

  constructor(private http: HttpClient) { }

  getWeatherDto(): Observable<WeatherDto>{
    return this.http.get<WeatherDto>(`${this.apiUrl}/weather`)
  }

}
