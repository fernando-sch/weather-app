import {
  WeatherCardWrapper,
  CurrentTemperature,
  MoreInfoWrapper,
  MaxTemperature,
  Description,
} from "@/weather/components/card/card.styles";

type WeatherCardProps = {
  temp: string;
  tempmax: string;
  description: string;
};

export const WeatherCard = ({
  temp,
  tempmax,
  description,
}: WeatherCardProps) => {
  return (
    <WeatherCardWrapper>
      <CurrentTemperature>{temp}°C</CurrentTemperature>
      <MoreInfoWrapper>
        <Description>{description}</Description>
        <MaxTemperature>Max Temp: {tempmax}°C</MaxTemperature>
      </MoreInfoWrapper>
    </WeatherCardWrapper>
  );
};
