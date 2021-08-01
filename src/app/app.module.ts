import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityComponent } from './components/city/city.component';
import { FetchWeatherService } from './services/fetch-weather.service';

@NgModule({
  declarations: [AppComponent, CityListComponent, CityComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [FetchWeatherService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
