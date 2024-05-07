type EnvObject = {
  openWeatherApi: string;
  apiKey: string;
};

export const envObject: EnvObject = {
  openWeatherApi: import.meta.env.VITE_OPEN_WEATHER_API || "",
  apiKey: import.meta.env.VITE_API_KEY || "",
};
