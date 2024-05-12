import { AxiosInstance, AxiosResponse } from "axios";
import { ibgeAxiosInstance } from "@/config";

export class IBGEService {
  #axiosInstance: AxiosInstance = ibgeAxiosInstance;

  async getAllCities(): Promise<AxiosResponse> {
    return await this.#axiosInstance.get("/localidades/municipios");
  }
}
