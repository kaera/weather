export const config = {
  BASE_URL: 'https://api.openweathermap.org/data/2.5/',
  API_KEY: '686ed6ba158ca8607a0c819472d610d4',
  queryWeatherString: ['lat=' + 59.3, 'lon=' + 7.8, 'cnt=5'].join('&'),
  weatherPath: 'find?',
  forecastPath: 'forecast?',
};
