import styled from "styled-components";

export const WeatherCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eaedf3;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 180px;
`;

export const CurrentTemperature = styled.h4`
  font-size: 2rem;
`;

export const MoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const MaxTemperature = styled.p``;

export const Description = styled.p``;
