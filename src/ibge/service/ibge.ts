import { AxiosInstance, AxiosResponse } from "axios";
import { ibgeAxiosInstance } from "@/config";
import { RemoteCity } from "@/ibge/dto/city";

export class IBGEService {
  #axiosInstance: AxiosInstance = ibgeAxiosInstance;

  async getAllCities(): Promise<AxiosResponse<RemoteCity[]>> {
    return await this.#axiosInstance.get("/localidades/municipios");
  }
}
