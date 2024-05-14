import Select from "react-select";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  FormWrapper,
  SearchButton,
  InputWrapper,
} from "@/geolocation/components/city-form/city-form.styles";
import { useGetAllCities } from "@/ibge/hooks/use-get-all-cities";

type Option = {
  label: string;
  value: string;
};

type CityFormSchema = {
  cityName: Option | null;
};

export const CityForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CityFormSchema>({
    defaultValues: { cityName: null },
  });
  const navigate = useNavigate();
  const { data: cityOptions } = useGetAllCities<Option[]>((data) =>
    data.map(({ name, stateCode }) => {
      return { label: `${name}/${stateCode}`, value: `${name}` };
    })
  );

  const filterOption = (option: Option, rawInput: string) => {
    const isLessThanTwo = (n: number) => n < 2;

    if (isLessThanTwo(rawInput.length)) {
      return false;
    }

    const trimString = (str: string) => str.replace(/^\s+|\s+$/g, "");
    const stringify = (option: Option) => `${option.label} ${option.value}`;

    const input = trimString(rawInput).toLowerCase();
    const candidate = trimString(stringify(option)).toLowerCase();

    return candidate.indexOf(input) > -1;
  };

  const handleFormSubmit: SubmitHandler<CityFormSchema> = ({ cityName }) => {
    navigate(`/weather/${cityName?.value}`);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <InputWrapper>
        <Controller
          name="cityName"
          control={control}
          rules={{ required: "Selecione uma cidade válida" }}
          render={({ field }) => {
            return (
              <Select
                {...field}
                filterOption={filterOption}
                options={cityOptions}
                placeholder="Nome da cidade"
                styles={{
                  container: (base) => ({
                    ...base,
                    width: "250px",
                    height: "40px",
                  }),
                }}
              />
            );
          }}
        />
        {errors.cityName && <span>{errors.cityName.message}</span>}
      </InputWrapper>
      <SearchButton>Buscar</SearchButton>
    </FormWrapper>
  );
};
