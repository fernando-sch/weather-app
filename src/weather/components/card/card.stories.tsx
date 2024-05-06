import { Meta, StoryObj } from "@storybook/react";
import { WeatherCard } from ".";

const meta: Meta<typeof WeatherCard> = { component: WeatherCard };

export default meta;
type Story = StoryObj<typeof WeatherCard>;

export const Default: Story = { args: { temp: "25", tempmax: "30", description: "Chuva mediana" } }