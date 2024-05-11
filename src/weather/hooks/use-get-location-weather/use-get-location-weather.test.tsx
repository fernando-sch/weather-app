import { describe, expect, it } from "vitest";
import { waitFor } from "@testing-library/react";
import { renderCustomHook, startMockServer } from "@/__tests__/helpers";
import { useGetLocationWeather } from "@/weather/hooks/use-get-location-weather";

describe("useGetLocationWeather", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("shouldn't fetch data if lat and lon are undefined", () => {
    const { result } = renderCustomHook(useGetLocationWeather);

    expect(result.current.data).toBeUndefined();
    expect(result.current.fetchStatus).toBe("idle");
  });

  it("should return the location weather", async () => {
    const [lat, lon] = ["-25.4295963", "-49.2712724"];
    const { result } = renderCustomHook(() => useGetLocationWeather(lat, lon));

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data?.cityName).toBe("Curitiba");
    });
  });
});
