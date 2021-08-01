import { Forecast } from '../interfaces';

export function convertToCelsius(tempKelvin: number) {
  return Math.floor(tempKelvin - 273.15);
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
      { data: tempData, label: 'Temp' },
      { data: windData, label: 'Wind' },
    ],
  };
}
