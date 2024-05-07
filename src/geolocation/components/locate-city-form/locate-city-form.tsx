import {
  FormWrapper,
  CityNameInput,
  SearchButton,
} from "@/geolocation/components/locate-city-form/locate-city-form.styles";

export const LocateCityForm = () => {
  return (
    <FormWrapper>
      <CityNameInput placeholder="Nome da cidade" />
      <SearchButton>Buscar</SearchButton>
    </FormWrapper>
  );
};
