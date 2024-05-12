import { useNavigate, useParams } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useGetCityLocation } from "@/geolocation/hooks/use-get-city-location";
import { WeatherCard } from "@/weather/components/card";
import { useGetLocationWeather } from "@/weather/hooks/use-get-location-weather";
import {
  MainWrapper,
  HeaderWrapper,
  Title,
  WeatherCardWrapper,
  Loading,
} from "@/weather/pages/city-weather/city-weather.styles";

export const CityWeather = () => {
  const navigate = useNavigate();
  const { cityName } = useParams();
  const { data: cityLocation } = useGetCityLocation(cityName);
  const { data: locationWeather } = useGetLocationWeather(
    cityLocation?.lat,
    cityLocation?.lon
  );

  const handleGoBack = () => navigate(-1);

  return (
    <MainWrapper>
      <HeaderWrapper>
        <RiArrowLeftSLine onClick={handleGoBack} />
        <Title>Weather App</Title>
      </HeaderWrapper>
      <WeatherCardWrapper>
        {locationWeather ? (
          <WeatherCard
            description={locationWeather.description}
            temp={locationWeather.formattedTemp}
            maxtemp={locationWeather.formattedMaxTemp}
            mintemp={locationWeather.formattedMinTemp}
            fellsliketemp={locationWeather.formattedFeelsLikeTemp}
            humidity={locationWeather.formattedHumidity}
            cityname={locationWeather.cityName}
            iconSrc={locationWeather.iconSrc}
          />
        ) : (
          <Loading>Carregando...</Loading>
        )}
      </WeatherCardWrapper>
    </MainWrapper>
  );
};
