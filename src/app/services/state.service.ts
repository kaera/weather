import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Forecast } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private forecastSource: BehaviorSubject<Forecast | undefined>;
  constructor() {
    this.forecastSource = new BehaviorSubject<Forecast | undefined>(undefined);
  }
  setForecast(forecast: Forecast) {
    this.forecastSource.next(forecast);
  }

  getForecast(): Observable<Forecast | undefined> {
    return this.forecastSource.asObservable();
  }
}
