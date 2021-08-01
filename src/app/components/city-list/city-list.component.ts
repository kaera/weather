import { Component, OnInit } from '@angular/core';
import { FetchWeatherService } from '../../services/fetch-weather.service';
import { City } from '../../interfaces';
import { convertToCelsius } from 'src/app/utils/convertUtils';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {
  public cities: City[] = [];

  constructor(private fetchWeatherService: FetchWeatherService) {}

  ngOnInit(): void {
    this.fetchWeatherService.fetchCities().subscribe(
      (response) =>
        (this.cities = response.list.map((city: any) => {
          return {
            name: city.name,
            temperature: convertToCelsius(city.main.temp),
            windSpeed: city.wind.speed,
          };
        }))
    );
  }
}
