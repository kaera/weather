export interface City {
  name: string;
  temperature: number;
  windSpeed: number;
}
export interface Forecast {
  labels: Array<string>;
  data: Array<ChartData>;
}

interface ChartData {
  data: Array<number>;
  label: string;
}
