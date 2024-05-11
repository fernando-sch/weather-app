import { Meta, StoryObj } from "@storybook/react";
import { WeatherCard } from ".";

const meta: Meta<typeof WeatherCard> = { component: WeatherCard };

export default meta;
type Story = StoryObj<typeof WeatherCard>;

export const Default: Story = {
  args: {
    temp: "20°C",
    mintemp: "19°C",
    maxtemp: "25°C",
    fellsliketemp: "24°C",
    description: "Chuva moderada",
    cityname: "Curitiba",
    humidity: "56%",
    icon: "10n",
  },
};
