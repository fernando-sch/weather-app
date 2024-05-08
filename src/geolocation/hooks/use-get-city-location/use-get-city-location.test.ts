import { describe, it, expect } from "vitest";
import { waitFor } from "@testing-library/react";
import {
  renderHookWithQueryProvider,
  startMockServer,
} from "@/__tests__/helpers";
import { useGetCityLocation } from "@/geolocation/hooks/use-get-city-location";
import { act } from "react";

describe("useGetCityLocation", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("shouldn't fetch data if city name is undefined", async () => {
    const { result } = renderHookWithQueryProvider(() => useGetCityLocation(undefined));

    expect(result.current.data).toBeUndefined();
    expect(result.current.fetchStatus).toBe("idle");
  });

  it("should return city geolocation if city name is defined", async () => {
    const { result } = renderHookWithQueryProvider(() =>
      useGetCityLocation("Curitiba")
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toMatchObject({
        country: "BR",
        lat: -25.4295963,
        lon: -49.2712724,
        name: "Curitiba",
        state: "Paraná",
      });
    });
  });
});
