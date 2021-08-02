import { Forecast } from '../interfaces';

export function convertToCelsius(tempKelvin: number) {
  return (tempKelvin - 273.15).toFixed(1);
}

export function convertForecastToChartFormat(data: any): Forecast {
  const tempData = [];
  const windData = [];
  const chartLabels = [];

  for (let item of data) {
    tempData.push(item.temperature);
    windData.push(item.windSpeed);
    chartLabels.push(item.time);
  }
  return {
    labels: chartLabels,
    data: [
      { data: tempData, label: 'Temperature °C' },
      { data: windData, label: 'Wind speed m/s' },
    ],
  };
}
