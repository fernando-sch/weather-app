import { AxiosInstance, AxiosResponse } from "axios";
import { openWeatherAxiosInstance, envObject } from "@/config";
import { RemoteGeolocation } from "@/geolocation/dto";

export class GeolocationService {
  #axiosInstance: AxiosInstance = openWeatherAxiosInstance;

  async getCityLocation(
    cityName?: string,
    state?: string,
    limit: string = "1"
  ): Promise<AxiosResponse<RemoteGeolocation[]>> {
    const params = {
      q: `${cityName},${state},BR`,
      appid: envObject.apiKey,
      limit,
    };
    return await this.#axiosInstance.get("/geo/1.0/direct", {
      params,
    });
  }
}
