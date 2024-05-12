import { AxiosInstance, AxiosResponse } from "axios";
import { openWeatherAxiosInstance, envObject } from "@/config";
import { RemoteWeather } from "@/weather/dto";

export class WeatherService {
  #axiosInstance: AxiosInstance = openWeatherAxiosInstance;

  async getLocationWeather(
    lat?: string,
    lon?: string
  ): Promise<AxiosResponse<RemoteWeather>> {
    const defaultParams = { units: "metric", lang: "pt_br" };
    const params = { lat, lon, appid: envObject.apiKey, ...defaultParams };
    return await this.#axiosInstance.get("/data/2.5/weather", { params });
  }
}
