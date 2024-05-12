type EnvObject = {
  openWeatherApi: string;
  apiKey: string;
  ibgeApi: string;
};

export const envObject: EnvObject = {
  openWeatherApi: import.meta.env.VITE_OPEN_WEATHER_API || "",
  apiKey: import.meta.env.VITE_API_KEY || "",
  ibgeApi: import.meta.env.VITE_IBGE_API || "",
};
