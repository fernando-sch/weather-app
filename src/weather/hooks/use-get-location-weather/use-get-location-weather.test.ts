import { describe, expect, it } from "vitest";
import { waitFor } from "@testing-library/react";
import {
  renderHookWithQueryProvider,
  startMockServer,
} from "@/__tests__/helpers";
import { useGetLocationWeather } from "@/weather/hooks/use-get-location-weather";

describe("useGetLocationWeather", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should return the location weather", async () => {
    const { result } = renderHookWithQueryProvider(() =>
      useGetLocationWeather(-25.4295963, -49.2712724)
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data?.cityName).toBe("Curitiba");
    });
  });
});
