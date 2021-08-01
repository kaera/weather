import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { City } from 'src/app/interfaces';
import { FetchWeatherService } from 'src/app/services/fetch-weather.service';
import { CityComponent } from '../city/city.component';

describe('ComponentCityListContainerComponent', () => {
  let component: ComponentCityListContainerComponent;
  let fixture: ComponentFixture<ComponentCityListContainerComponent>;
  let fakeFetchWeatherService: FetchWeatherService;

  @Component({
    template: `<app-city-list></app-city-list>`,
  })
  class ComponentCityListContainerComponent {}

  beforeEach(async () => {
    const data = [
      { name: 'Test', temperature: 12, windSpeed: 0.3 },
      { name: 'Test2', temperature: 13, windSpeed: 0.5 },
    ] as City[];

    fakeFetchWeatherService = jasmine.createSpyObj<FetchWeatherService>(
      'FetchWeatherService',
      {
        fetchCities: of(data),
      }
    );
    await TestBed.configureTestingModule({
      declarations: [ComponentCityListContainerComponent, CityComponent],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: FetchWeatherService, useValue: fakeFetchWeatherService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCityListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
