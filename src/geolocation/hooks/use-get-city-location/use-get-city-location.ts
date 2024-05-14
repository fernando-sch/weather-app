import { useQuery } from "@tanstack/react-query";
import { Geolocation, buildGeolocationDTO } from "@/geolocation/dto";
import { GeolocationService } from "@/geolocation/service";

export const useGetCityLocation = (cityName?: string, state?: string) => {
  const hasLocationInfo = !!state && !!cityName;
  const geolocationService = new GeolocationService();

  const getCityLocation = async () => {
    return geolocationService
      .getCityLocation(cityName, state)
      .then(({ data: [cityGeolocation] }) =>
        buildGeolocationDTO(cityGeolocation)
      );
  };

  return useQuery<Geolocation>({
    queryKey: ["getCityLocation", state, cityName],
    queryFn: getCityLocation,
    enabled: hasLocationInfo,
  });
};
