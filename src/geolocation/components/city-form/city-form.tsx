import Select from "react-select";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FormWrapper,
  CityNameInput,
  SearchButton,
} from "@/geolocation/components/city-form/city-form.styles";
import { useGetAllCities } from "@/ibge/hooks/use-get-all-cities";

type Option = {
  label: string;
  value: string;
};

type LocateCitySchema = {
  cityName: string;
};

export const CityForm = () => {
  const { register, handleSubmit } = useForm<LocateCitySchema>();
  const navigate = useNavigate();
  const { data: cityOptions } = useGetAllCities((data): Option[] =>
    data.map(({ name, state, stateCode }) => {
      return { label: `${name}/${stateCode}`, value: `${name},${state}` };
    })
  );

  const filterOption = (
    option: { label: string; value: string },
    rawInput: string
  ) => {
    const isLessThanTwo = (n: number) => n < 2;

    if (isLessThanTwo(rawInput.length)) {
      return false;
    }

    const trimString = (str: string) => str.replace(/^\s+|\s+$/g, "");
    const stringify = (option: { label: string; value: string }) =>
      `${option.label} ${option.value}`;

    const input = trimString(rawInput).toLowerCase();
    const candidate = trimString(stringify(option)).toLowerCase();

    return candidate.indexOf(input) > -1;
  };

  const onSubmit: SubmitHandler<LocateCitySchema> = ({ cityName }) => {
    navigate(`/weather/${cityName}`);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <CityNameInput placeholder="Nome da cidade" {...register("cityName")} />
      <Select
        placeholder="Nome da cidade"
        options={cityOptions}
        styles={{
          container: (base) => ({
            ...base,
            width: "250px",
            height: "40px",
          }),
        }}
        filterOption={filterOption}
      />
      <SearchButton>Buscar</SearchButton>
    </FormWrapper>
  );
};
