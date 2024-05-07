import { describe, it, expect } from "vitest";
import { buildGeolocationDTO, Geolocation } from "@/geolocation/dto";

describe("buildGeolocationDTO", () => {
  it("should return new Geolocation instance", () => {
    const remoteGeolocation = {
      name: "Curitiba",
      local_names: {
        pt: "Curitiba",
      },
      lat: -25.4295963,
      lon: -49.2712724,
      country: "BR",
      state: "Paraná",
    };

    const geolocation = buildGeolocationDTO(remoteGeolocation);

    expect(geolocation).toBeInstanceOf(Geolocation);
    expect(geolocation.country).toBe(remoteGeolocation.country);
    expect(geolocation.lat).toBe(remoteGeolocation.lat);
    expect(geolocation.lon).toBe(remoteGeolocation.lon);
    expect(geolocation.name).toBe(remoteGeolocation.name);
    expect(geolocation.state).toBe(remoteGeolocation.state);
  });
});
