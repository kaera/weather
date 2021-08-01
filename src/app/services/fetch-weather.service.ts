import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root',
})
export class FetchWeatherService {
  constructor(private http: HttpClient) {}

  fetchCities(): Observable<any> {
    const url =
      config.BASE_URL +
      config.weatherPath +
      config.queryWeatherString +
      '&appid=' +
      config.API_KEY;
    return this.http.get(url);
  }
}
