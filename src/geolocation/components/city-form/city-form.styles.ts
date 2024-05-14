import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 4px;
  gap: 15px;
  width: 300px;
  margin-top: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60px;

  span {
    color: #c43232;
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
