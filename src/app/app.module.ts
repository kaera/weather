import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CityListComponent } from './components/city-list/city-list.component';
import { CityComponent } from './components/city/city.component';

@NgModule({
  declarations: [AppComponent, CityListComponent, CityComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
