import { TestBed } from '@angular/core/testing';
import { Forecast } from '../interfaces';

import { StateService } from './state.service';

describe('StateService', () => {
  let service: StateService;
  let actualForecast: Forecast | undefined;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateService);
  });

  it('should get updated forecast', () => {
    const forecast = {
      labels: ['test', 'test2'],
      data: [{ data: [12.6, 13.0, 14.1], label: 'test3' }],
    } as Forecast;

    service.setForecast(forecast);

    service.getForecast().subscribe((result) => (actualForecast = result));
    expect(actualForecast).toEqual(forecast);
  });

  it('should get initial empty forecast', () => {
    service.getForecast().subscribe((result) => (actualForecast = result));
    expect(actualForecast).toEqual(undefined);
  });
});
