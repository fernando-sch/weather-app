import { AxiosInstance, AxiosResponse } from "axios";
import { axiosInstance, envObject } from "@/config";
import { RemoteWeather } from "@/weather/dto";

export class WeatherService {
  #axiosIntance: AxiosInstance = axiosInstance;

  async getLocationWeather(
    lat: number,
    lon: number
  ): Promise<AxiosResponse<RemoteWeather>> {
    const defaultParams = { units: "metric", lang: "pt_br" };
    const params = { lat, lon, appid: envObject.apiKey, ...defaultParams };
    return await this.#axiosIntance.get("/data/2.5/weather", { params });
  }
}
