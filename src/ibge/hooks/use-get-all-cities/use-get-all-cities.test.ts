import { describe, it, expect } from "vitest";
import { waitFor } from "@testing-library/react";
import { useGetAllCities } from "@/ibge/hooks/use-get-all-cities";
import { renderCustomHook, startIBGEMockServer } from "@/__tests__/helpers";

describe("useGetAllCities", () => {
  let server: ReturnType<typeof startIBGEMockServer>;

  beforeEach(() => {
    server = startIBGEMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should return a list of cities", async () => {
    const { result } = renderCustomHook(useGetAllCities);

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toHaveLength(5);
    });
  });
});
