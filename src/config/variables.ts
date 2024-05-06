type EnvObject = {
  openWeatherApi: string;
};

export const envObject: EnvObject = {
  openWeatherApi: import.meta.env.VITE_OPEN_WEATHER_API || "",
};
