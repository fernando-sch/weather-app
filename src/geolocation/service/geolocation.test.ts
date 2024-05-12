import { describe, it, expect } from "vitest";
import { startOpenWeatherMockServer } from "@/__tests__/helpers";
import { GeolocationService } from "@/geolocation/service";

describe("GeolocationService", () => {
  let server: ReturnType<typeof startOpenWeatherMockServer>;

  beforeEach(() => {
    server = startOpenWeatherMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  suite("getCityLocation", () => {
    it("should return the location of a city", async () => {
      const geolocationService = new GeolocationService();

      const {
        data: [remoteGeolocation],
      } = await geolocationService.getCityLocation("Curitiba,BR");

      expect(remoteGeolocation.lat).toBe(-25.4295963);
      expect(remoteGeolocation.lon).toBe(-49.2712724);
      expect(remoteGeolocation.name).toBe("Curitiba");
      expect(remoteGeolocation.state).toBe("Paraná");
    });
  });
});
