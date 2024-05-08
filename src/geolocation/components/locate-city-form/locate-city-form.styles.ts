import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #f2f2f2;
  border-radius: 4px;
  width: 300px;
  height: 150px;
`;

export const CityNameInput = styled.input`
  color: #bababa;
  font-size: 1.3rem;
  background-color: #f2f2f2;
  border: 2px solid #bababa;
  border-raidus: 4px;
  width: 250px;
  height: 40px;

  &::placeholder {
    font-weight: bold;
    text-align: center;
  }
`;

export const SearchButton = styled.button`
  color: #f2f2f2;
  font-size: 1.3rem;
  background-color: #62acf5;
  border: none;
  border-raidus: 4px;
  width: 250px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`;
