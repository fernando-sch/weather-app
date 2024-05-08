import { buildGeolocationDTO } from "@/geolocation/dto";
import { GeolocationService } from "@/geolocation/service";
import { useQuery } from "@tanstack/react-query";

export const useGetCityLocation = (cityName?: string) => {
  const hasCityName = !!cityName
  const geolocationService = new GeolocationService();

  const getCityLocation = async () => {
    return geolocationService
      .getCityLocation(cityName)
      .then(({ data: [cityGeolocation] }) =>
        buildGeolocationDTO(cityGeolocation)
      );
  };

  return useQuery({
    queryKey: ["getCityLocation", cityName],
    queryFn: getCityLocation,
    enabled: hasCityName,
  });
};
