import { describe, it, expect } from "vitest";
import { City, buildCityDTO } from "@/ibge/dto/city";

describe("buildCityDTO", () => {
  it("should return a new city instance", () => {
    const remoteCity = {
      nome: "Ariquemes",
      microrregiao: {
        mesorregiao: {
          UF: {
            sigla: "RO",
            nome: "Rondônia",
          },
        },
      },
    };

    const city = buildCityDTO(remoteCity);

    expect(city).toBeInstanceOf(City);
    expect(city.name).toBe(remoteCity.nome);
    expect(city.state).toBe(remoteCity.microrregiao.mesorregiao.UF.nome);
    expect(city.stateCode).toBe(remoteCity.microrregiao.mesorregiao.UF.sigla);
  });
});
