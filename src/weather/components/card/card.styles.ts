import styled from "styled-components";

export const WeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #81befc;
  border: 1px solid #40444c;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 202px;
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CurrentTemperature = styled.h4`
  font-size: 2.5rem;
  font-weight: 300;
`;

export const Description = styled.p`
  font-weight: bold;
`;

export const CityName = styled.p`
  font-weight: bold;
  margin: 10px 0;
`;

export const ExtraInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 0 0;
`;

export const ExtraInfoCard = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #40444c;
  border-right: 1px solid #40444c;
  border-left: 1px solid #40444c;
  font-size: 1.5rem;
  cursor: help;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
