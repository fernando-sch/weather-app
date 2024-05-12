import { createServer } from "miragejs";
import { envObject } from "@/config";

export const startOpenWeatherMockServer = () => {
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
            temp: 23,
            feels_like: 22,
            temp_min: 20,
            temp_max: 24,
            humidity: 69,
          },
          name: "Curitiba",
        };
      });
    },
  });
};

export const startIBGEMockServer = () => {
  return createServer({
    environment: "test",
    routes() {
      this.urlPrefix = envObject.ibgeApi;

      this.get("/localidades/municipios", () => {
        return [
          {
            nome: "Alta Floresta D'Oeste",
            microrregiao: {
              nome: "Cacoal",
              mesorregiao: {
                nome: "Leste Rondoniense",
                UF: {
                  sigla: "RO",
                  nome: "Rondônia",
                },
              },
            },
          },
          {
            nome: "Ariquemes",
            microrregiao: {
              nome: "Ariquemes",
              mesorregiao: {
                nome: "Leste Rondoniense",
                UF: {
                  sigla: "RO",
                  nome: "Rondônia",
                },
              },
            },
          },
          {
            nome: "Cabixi",
            microrregiao: {
              nome: "Colorado do Oeste",
              mesorregiao: {
                nome: "Leste Rondoniense",
                UF: {
                  sigla: "RO",
                  nome: "Rondônia",
                },
              },
            },
          },
          {
            nome: "Cacoal",
            microrregiao: {
              nome: "Cacoal",
              mesorregiao: {
                nome: "Leste Rondoniense",
                UF: {
                  sigla: "RO",
                  nome: "Rondônia",
                },
              },
            },
          },
          {
            nome: "Cerejeiras",
            microrregiao: {
              nome: "Colorado do Oeste",
              mesorregiao: {
                nome: "Leste Rondoniense",
                UF: {
                  sigla: "RO",
                  nome: "Rondônia",
                },
              },
            },
          },
        ];
      });
    },
  });
};
