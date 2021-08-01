import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FetchWeatherService } from './fetch-weather.service';
import { City } from '../interfaces';
import { config } from '../config';

describe('FetchWeatherService', () => {
  let service: FetchWeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FetchWeatherService],
    });

    service = TestBed.inject(FetchWeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch cities weather', () => {
    const expectedCities = [
      { name: 'Test', temperature: 12, windSpeed: 0.3 },
      { name: 'Test2', temperature: 13, windSpeed: 0.5 },
    ] as City[];
    const url =
      config.BASE_URL +
      config.weatherPath +
      config.queryWeatherString +
      '&appid=' +
      config.API_KEY;

    service.fetchCities().subscribe((cities) => {
      expect(cities).toEqual(expectedCities);
      expect(cities.length).toEqual(2);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toEqual('GET');
  });
  it('should fetch weather forecast for one city', () => {
    const queryString = ['q=Amsterdam', 'cnt=5'].join('&');
    const url =
      config.BASE_URL +
      config.forecastPath +
      queryString +
      '&appid=' +
      config.API_KEY;
    const expectedForecast = [
      { time: '21:00:00', temperature: 12, windSpeed: 0.3 },
      { time: '22:00:00', temperature: 12, windSpeed: 0.3 },
      { time: '21:00:00', temperature: 12, windSpeed: 0.3 },
    ];

    service.fetchForecast('Amsterdam').subscribe((response) => {
      expect(response).toEqual(expectedForecast);
      expect(response.length).toEqual(2);
    });

    const req = httpMock.expectOne(url);
    expect(req.request.method).toEqual('GET');
  });
});
