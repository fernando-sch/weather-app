import { useQuery } from "@tanstack/react-query";
import { WeatherService } from "@/weather/service";
import { Weather, buildWeatherDTO } from "@/weather/dto";

export const useGetLocationWeather = (lat?: string, lon?: string) => {
  const isEnabled = !!lat && !!lon;
  const weatherService = new WeatherService();

  const getLocationWeather = async () => {
    return weatherService
      .getLocationWeather(lat, lon)
      .then(({ data }) => buildWeatherDTO(data));
  };

  return useQuery<Weather>({
    queryKey: ["locationWeather", lat, lon],
    queryFn: getLocationWeather,
    enabled: isEnabled,
  });
};
