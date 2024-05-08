import { buildGeolocationDTO } from "@/geolocation/dto";
import { GeolocationService } from "@/geolocation/service";
import { useQuery } from "@tanstack/react-query";

export const useGetCityLocation = () => {
  const geolocationService = new GeolocationService();

  const getCityLocation = async () => {
    return geolocationService
      .getCityLocation("")
      .then(({ data: [cityGeolocation] }) =>
        buildGeolocationDTO(cityGeolocation)
      )
  };

  return useQuery({ queryKey: ["getCityLocation"], queryFn: getCityLocation });
};
