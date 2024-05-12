import { describe, it, expect } from "vitest";
import { WeatherService } from "@/weather/service";
import { startMockServer } from "@/__tests__/helpers";

describe("WeatherService", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  suite("getLocationWeather", () => {
    it("should return location weather", async () => {
      const [lat, lon] = ["-25.4295963", "-49.2712724"];
      const weatherService = new WeatherService();

      const { data } = await weatherService.getLocationWeather(lat, lon);

      expect(data.name).toBe("Curitiba");
      expect(data.weather[0].description).toBe("nublado");
      expect(data.weather[0].icon).toBe("04n");
      expect(data.main.temp).toBe(23);
      expect(data.main.feels_like).toBe(22);
      expect(data.main.temp_min).toBe(20);
      expect(data.main.temp_max).toBe(24);
      expect(data.main.humidity).toBe(69);
    });
  });
});
