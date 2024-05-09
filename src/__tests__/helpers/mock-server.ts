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

      this.get("/data/2.5/weather", () => {
        return {
          weather: [
            {
              description: "nublado",
              icon: "04n",
            },
          ],
          main: {
            temp: 22.18,
            feels_like: 22.26,
            temp_min: 20.05,
            temp_max: 24.1,
            humidity: 69,
          },
          name: "Curitiba",
        }
      })
    },
  });
};
