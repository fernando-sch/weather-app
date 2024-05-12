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
  position: relative;
  color: #62acf5;

  svg {
    position: absolute;
    left: 0;
    width: 40px;
    height: 45px;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const WeatherCardWrapper = styled.div`
  margin-top: 20px;
`;

export const Loading = styled.p`
  color: #62acf5;
`;
