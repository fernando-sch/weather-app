type RemoteWeatherObj = {
  description: string;
  icon: string;
};

type RemoteMainObj = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
};

export type RemoteWeather = {
  weather: RemoteWeatherObj[];
  main: RemoteMainObj;
  name: string;
};

export class Weather {
  cityName: string;
  description: string;
  icon: string;
  temp: number;
  feelsLikeTemp: number;
  minTemp: number;
  maxTemp: number;
  humidity: number;

  constructor(private readonly remoteWeather: RemoteWeather) {
    this.cityName = this.remoteWeather.name;
    this.description = this.remoteWeather.weather[0].description;
    this.icon = this.remoteWeather.weather[0].icon;
    this.temp = this.remoteWeather.main.temp;
    this.feelsLikeTemp = this.remoteWeather.main.feels_like;
    this.minTemp = this.remoteWeather.main.temp_min;
    this.maxTemp = this.remoteWeather.main.temp_max;
    this.humidity = this.remoteWeather.main.humidity;
  }

  get formattedTemp() {
    return `${this.temp}°C`;
  }

  get formattedFeelsLikeTemp() {
    return `${this.feelsLikeTemp}°C`;
  }

  get formattedMinTemp() {
    return `${this.minTemp}°C`;
  }

  get formattedMaxTemp() {
    return `${this.maxTemp}°C`;
  }

  get formattedHumidity() {
    return `${this.humidity}%`;
  }
}

export const buildWeatherDTO = (remoteWeather: RemoteWeather) =>
  new Weather(remoteWeather);
