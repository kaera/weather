import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { City } from 'src/app/interfaces';
import { FetchWeatherService } from 'src/app/services/fetch-weather.service';

describe('CityComponent', () => {
  @Component({
    template: ` <app-city [city]="city"></app-city> `,
  })
  class ComponentCityContainerComponent {
    city: City | undefined;
  }
  let fetchWeatherService: FetchWeatherService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentCityContainerComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
    fetchWeatherService = TestBed.inject(FetchWeatherService);
  });

  function createContainer() {
    const fixture = TestBed.createComponent(ComponentCityContainerComponent);
    fixture.detectChanges();

    return {
      fixture: fixture,
      containerComponent: fixture.componentInstance,
      element: fixture.debugElement.query(By.css('app-city')),
    };
  }
  it('should render city tile', () => {
    const city = {
      name: 'Test',
      temperature: 12.3,
      windSpeed: 0.8,
    };
    const { containerComponent, fixture, element } = createContainer();
    containerComponent.city = city;
    fixture.detectChanges();
    expect(element.properties.city).toEqual(city);
  });

  it('should not render component if no data is', () => {
    const { element, fixture } = createContainer();
    expect(element.properties.city).toBeUndefined();
  });
});
