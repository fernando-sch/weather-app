import { CityForm } from "@/geolocation/components/city-form";
import {
  MainWrapper,
  HeaderWrapper,
  Title,
} from "@/geolocation/pages/locate-city/locate-city.styles";

export const LocateCityPage = () => {
  return (
    <MainWrapper>
      <HeaderWrapper>
        <Title>Weather App</Title>
      </HeaderWrapper>
      <CityForm />
    </MainWrapper>
  );
};
