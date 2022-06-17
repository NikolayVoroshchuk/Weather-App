export interface IMainField {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface IWeatherField {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface IWindField {
  deg: number;
  gust: number;
  speed: number;
}

export interface ISysField {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface IWeather {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lat: number; lon: number };
  dt: number;
  id: number;
  main: IMainField;
  name: string;
  sys: ISysField;
  timezone: number;
  visibility: number;
  weather: Array<IWeatherField>;
  wind: IWindField;
}

export interface IWeatherList {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: IMainField;
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: Array<IWeatherField>;
  wind: IWindField;
}

interface IHourlyWeatherCityField {
  coord: { lat: number; lon: number };
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

interface IHourlyWeatherListField {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: IMainField;
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: Array<IWeatherField>;
  wind: IWindField;
}
export interface IHourlyWeather {
  city: IHourlyWeatherCityField;
  cnt: number;
  cod: string;
  list: Array<IHourlyWeatherListField>;
  message: number;
  weather: IHourlyWeatherField;
}
interface IHourlyWeatherField {
  cod: string;
  list: Array<IWeatherList>;
  city: IHourlyWeatherCityField;
}
