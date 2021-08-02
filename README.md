# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.3.

The Single Page Application that presents the weather of 5 European cities.
The weather information is fetched  from Open Weather Data.
To fetch data Angular provides a client HTTP API for Angular applications, the HttpClient service class in [@angular/common/http](https://angular.io/guide/http)
For each city there is a card to display:
Name of the city
Temperature
Wind speed

When we click on one of the five city items, the app display the forecast for the next few hours for the city
that was clicked using [chart.js](https://www.chartjs.org/docs/latest/) library.

That's the only external library for UI, everything else is done by pure css (SCSS).


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).