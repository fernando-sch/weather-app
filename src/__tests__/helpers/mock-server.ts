import { createServer } from "miragejs";
import { envObject } from "@/config";

export const startMockServer = () => {
  return createServer({
    environment: "test",
    routes() {
      this.urlPrefix = envObject.openWeatherApi;

      this.get("/geo/1.0/direct", () => {
        return [
          {
            name: "Curitiba",
            local_names: {
              pt: "Curitiba",
            },
            lat: -25.4295963,
            lon: -49.2712724,
            country: "BR",
            state: "Paraná",
          },
        ];
      });
    },
  });
};
