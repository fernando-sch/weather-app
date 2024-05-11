import styled from "styled-components";

export const MainWrapper = styled.main`
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 2px solid #bababa;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #62acf5;
  font-size: 2rem;
`;

export const WeatherCardWrapper = styled.div`
  margin-top: 20px;
`;

export const Loading = styled.p`
  color: #62acf5;
`;
