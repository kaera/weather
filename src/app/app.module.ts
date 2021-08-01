import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityComponent } from './components/city/city.component';
import { FetchWeatherService } from './services/fetch-weather.service';
import { ForecastChartComponent } from './components/forecast-chart/forecast-chart.component';
import { StateService } from './services/state.service';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityComponent,
    ForecastChartComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, ChartsModule],
  providers: [FetchWeatherService, StateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
