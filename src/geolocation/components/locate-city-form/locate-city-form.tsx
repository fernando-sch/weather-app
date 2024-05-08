import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { useGetCityLocation } from "@/geolocation/hooks/use-get-city-location";
import {
  FormWrapper,
  CityNameInput,
  SearchButton,
} from "@/geolocation/components/locate-city-form/locate-city-form.styles";

type LocateCitySchema = {
  cityName: string;
};

export const LocateCityForm = () => {
  const [cityName, setCityName] = useState<string | undefined>(undefined);
  const { data } = useGetCityLocation(cityName);
  const { register, handleSubmit } = useForm<LocateCitySchema>();

  const onSubmit: SubmitHandler<LocateCitySchema> = ({ cityName }) => {
    setCityName(cityName);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <CityNameInput placeholder="Nome da cidade" {...register("cityName")} />
      <SearchButton>Buscar</SearchButton>
      {data && <p>{data.name}</p>}
    </FormWrapper>
  );
};
