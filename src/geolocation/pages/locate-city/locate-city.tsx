import { LocateCityForm } from "@/geolocation/components/locate-city-form";
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
      <LocateCityForm />
    </MainWrapper>
  );
};
