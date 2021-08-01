import { Component, Input, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent {
  @Input() city: City | undefined;

  onClick(cityName: string) {
    console.log('City', cityName);
  }
}
