import { useQuery, DefaultError } from "@tanstack/react-query";
import { City, buildCityDTO } from "@/ibge/dto/city";
import { IBGEService } from "@/ibge/service";

export const useGetAllCities = <TData = City[]>(
  select?: (data: City[]) => TData
) => {
  const ibgeService = new IBGEService();

  const getAllCities = async () => {
    return ibgeService
      .getAllCities()
      .then(({ data }) => data.map(buildCityDTO));
  };

  return useQuery<City[], DefaultError, TData, string[]>({
    queryKey: ["getAllCities"],
    queryFn: getAllCities,
    select,
  });
};
