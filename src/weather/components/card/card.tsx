import { IoLocationSharp } from "react-icons/io5";
import {
  FaTemperatureHalf,
  FaTemperatureArrowDown,
  FaTemperatureArrowUp,
  FaDroplet,
} from "react-icons/fa6";

import {
  WeatherCardWrapper,
  MainInfoWrapper,
  CurrentTemperature,
  Description,
  CityName,
  ExtraInfoWrapper,
  ExtraInfoCard,
  IconWrapper,
} from "@/weather/components/card/card.styles";

type WeatherCardProps = {
  temp: string;
  maxtemp: string;
  mintemp: string;
  fellsliketemp: string;
  cityname: string;
  description: string;
  humidity: string;
  icon: string;
};

export const WeatherCard = ({
  temp,
  maxtemp,
  mintemp,
  fellsliketemp,
  cityname,
  description,
  humidity,
  icon,
}: WeatherCardProps) => {
  const weatherIconSrc = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <WeatherCardWrapper>
      <MainInfoWrapper>
        <img src={weatherIconSrc} />
        <CurrentTemperature>{temp}</CurrentTemperature>
        <Description>{description}</Description>
        <IconWrapper>
          <IoLocationSharp />
          <CityName>{cityname}</CityName>
        </IconWrapper>
      </MainInfoWrapper>
      <ExtraInfoWrapper>
        <ExtraInfoCard title="Temperatura minima">
          <IconWrapper>
            <FaTemperatureArrowDown />
            <p>{mintemp}</p>
          </IconWrapper>
        </ExtraInfoCard>
        <ExtraInfoCard title="Temperatura maxima">
          <IconWrapper>
            <FaTemperatureArrowUp />
            <p>{maxtemp}</p>
          </IconWrapper>
        </ExtraInfoCard>
        <ExtraInfoCard title="Sensação Térmica">
          <IconWrapper>
            <FaTemperatureHalf />
            <p>{fellsliketemp}</p>
          </IconWrapper>
        </ExtraInfoCard>
        <ExtraInfoCard title="Umidade">
          <IconWrapper>
            <FaDroplet />
            <p>{humidity}</p>
          </IconWrapper>
        </ExtraInfoCard>
      </ExtraInfoWrapper>
    </WeatherCardWrapper>
  );
};
