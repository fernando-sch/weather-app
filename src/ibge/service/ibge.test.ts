import { describe, it, expect } from "vitest";
import { IBGEService } from "@/ibge/service";
import { startIBGEMockServer } from "@/__tests__/helpers";

describe("IBGEService", () => {
  let server: ReturnType<typeof startIBGEMockServer>;

  beforeEach(() => {
    server = startIBGEMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  suite("getAllCities", () => {
    it("should return a list of cities", async () => {
      const ibgeService = new IBGEService();

      const { data } = await ibgeService.getAllCities();

      expect(data).toHaveLength(5);
      expect(data[0].nome).toBe("Alta Floresta D'Oeste");
    });
  });
});
