import { describe, it, expect } from "vitest";
import { waitFor } from "@testing-library/react";
import {
  renderHookWithQueryProvider,
  startMockServer,
} from "@/__tests__/helpers";
import { useGetCityLocation } from "@/geolocation/hooks/use-get-city-location";

describe("useGetCityLocation", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should return city geolocation", async () => {
    const { result } = renderHookWithQueryProvider(() => useGetCityLocation());

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
