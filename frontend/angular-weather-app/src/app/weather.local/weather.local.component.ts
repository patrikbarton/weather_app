import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../weather.service';
import {WeatherDto} from "../weather_api.interface";

@Component({
  selector: 'app-weather-local',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.local.component.html',
  styleUrls: ['./weather.local.component.css']
})
export class WeatherLocalComponent implements OnInit {

  weather: WeatherDto | undefined;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getWeatherDto().subscribe((weather) => {
      this.weather = weather;
    });
  }
}
