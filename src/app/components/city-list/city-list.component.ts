import { Component, OnInit } from '@angular/core';
import { FetchWeatherService } from '../../services/fetch-weather.service';
import { City, Forecast } from '../../interfaces';
import { convertToCelsius } from 'src/app/utils/convertUtils';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss'],
})
export class CityListComponent implements OnInit {
  public cities: City[] = [];
  public forecast: Forecast | undefined;

  constructor(
    private fetchWeatherService: FetchWeatherService,
    private stateService: StateService
  ) {}

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
    this.stateService.getForecast().subscribe((result) => {
      this.forecast = result;
    });
  }
}
