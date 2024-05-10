import { buildWeatherDTO } from "@/weather/dto";
import { WeatherService } from "@/weather/service";
import { useQuery } from "@tanstack/react-query";

export const useGetLocationWeather = (lat: number, lon: number) => {
  const weatherService = new WeatherService();

  const getLocationWeather = async () => {
    return weatherService
      .getLocationWeather(lat, lon)
      .then(({ data }) => buildWeatherDTO(data));
  };

  return useQuery({
    queryKey: ["locationWeather", lat, lon],
    queryFn: getLocationWeather,
  });
};
