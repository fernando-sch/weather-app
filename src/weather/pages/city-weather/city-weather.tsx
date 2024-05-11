import { useParams } from "react-router-dom";
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
  const { cityName } = useParams();
  const { data: cityData } = useGetCityLocation(cityName);
  const { data: locationWeather } = useGetLocationWeather(
    cityData?.lat,
    cityData?.lon
  );

  return (
    <MainWrapper>
      <HeaderWrapper>
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
            icon={locationWeather.icon}
          />
        ) : (
          <Loading>Carregando...</Loading>
        )}
      </WeatherCardWrapper>
    </MainWrapper>
  );
};
