import { describe, it, expect } from "vitest";
import { Weather, buildWeatherDTO } from "@/weather/dto";

describe("buildWeatherDTO", () => {
  it("should return a new weather instance", () => {
    const remoteWeather = {
      weather: [
        {
          description: "nublado",
          icon: "04n",
        },
      ],
      main: {
        temp: 22,
        feels_like: 22,
        temp_min: 20,
        temp_max: 24,
        humidity: 69,
      },
      name: "Curitiba",
    };

    const weather = buildWeatherDTO(remoteWeather);

    expect(weather).toBeInstanceOf(Weather);
    expect(weather.formattedTemp).toBe(`${remoteWeather.main.temp}°C`);
    expect(weather.formattedFeelsLikeTemp).toBe(
      `${remoteWeather.main.feels_like}°C`
    );
    expect(weather.formattedMinTemp).toBe(`${remoteWeather.main.temp_min}°C`);
    expect(weather.formattedMaxTemp).toBe(`${remoteWeather.main.temp_max}°C`);
    expect(weather.formattedHumidity).toBe(`${remoteWeather.main.humidity}%`);
    expect(weather.description).toBe(remoteWeather.weather[0].description);
    expect(weather.icon).toBe(remoteWeather.weather[0].icon);
    expect(weather.cityName).toBe(remoteWeather.name);
    expect(weather.iconSrc).toBe(
      `https://openweathermap.org/img/wn/${remoteWeather.weather[0].icon}@2x.png`
    );
  });
});
