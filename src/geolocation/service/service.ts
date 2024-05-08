import { AxiosInstance, AxiosResponse } from "axios";
import { axiosInstance, envObject } from "@/config";
import { RemoteGeolocation } from "@/geolocation/dto";

export class GeolocationService {
  #axiosInstance: AxiosInstance = axiosInstance;

  async getCityLocation(
    searchParam?: string,
    limit: string = "1"
  ): Promise<AxiosResponse<RemoteGeolocation[]>> {
    const params = { q: searchParam, apiid: envObject.apiKey, limit };
    return await this.#axiosInstance.get("/geo/1.0/direct", { params });
  }
}
