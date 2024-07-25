import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any>{
    return this.http.get( "https://api.open-meteo.com/v1/forecast")
  }
}
