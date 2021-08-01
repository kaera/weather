import { Component, Input } from '@angular/core';
import { City } from 'src/app/interfaces';
import { FetchWeatherService } from 'src/app/services/fetch-weather.service';
import { StateService } from 'src/app/services/state.service';
import {
  convertToCelsius,
  convertForecastToChartFormat,
} from 'src/app/utils/convertUtils';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent {
  @Input() city: City | undefined;
  constructor(
    private fetchWeatherService: FetchWeatherService,
    private stateService: StateService
  ) {}

  onClick(cityName: string) {
    this.fetchWeatherService.fetchForecast(cityName).subscribe((response) => {
      const data = response.list.map((item: any) => {
        return {
          time: item.dt_txt,
          temperature: convertToCelsius(item.main.temp),
          windSpeed: item.wind.speed,
        };
      });
      this.stateService.setForecast(convertForecastToChartFormat(data));
    });
  }
}
