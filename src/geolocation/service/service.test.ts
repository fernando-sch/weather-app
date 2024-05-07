import { describe, it, expect } from "vitest";
import { startMockServer } from "@/__tests__/helpers";
import { GeolocationService } from "@/geolocation/service";

describe("GeolocationService", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
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
