import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FormWrapper,
  CityNameInput,
  SearchButton,
} from "@/geolocation/components/city-form/city-form.styles";

type LocateCitySchema = {
  cityName: string;
};

export const CityForm = () => {
  const { register, handleSubmit } = useForm<LocateCitySchema>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LocateCitySchema> = ({ cityName }) => {
    navigate(`/weather/${cityName}`);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <CityNameInput placeholder="Nome da cidade" {...register("cityName")} />
      <SearchButton>Buscar</SearchButton>
    </FormWrapper>
  );
};
