import { useQuery } from "@tanstack/react-query";
import { City, buildCityDTO } from "@/ibge/dto/city";
import { IBGEService } from "@/ibge/service";

export const useGetAllCities = () => {
  const ibgeService = new IBGEService();

  const getAllCities = async () => {
    return ibgeService
      .getAllCities()
      .then(({ data }) => data.map(buildCityDTO));
  };

  return useQuery<City[]>({ queryKey: ["getAllCities"], queryFn: getAllCities });
};
