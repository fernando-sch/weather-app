import axios from "axios";
import { envObject } from "@/config";

export const openWeatherAxiosInstance = axios.create({
  baseURL: envObject.openWeatherApi,
});

export const ibgeAxiosInstance = axios.create({
  baseURL: envObject.ibgeApi,
});
