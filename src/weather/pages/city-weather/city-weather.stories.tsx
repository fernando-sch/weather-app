import { Meta, StoryObj } from "@storybook/react";
import { CityWeather } from "@/weather/pages/city-weather";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const meta: Meta<typeof CityWeather> = { component: CityWeather };

export default meta;
type Story = StoryObj<typeof CityWeather>;

export const Default: Story = {
  render: () => (
    <MemoryRouter initialEntries={["/weather/curitiba"]}>
      <Routes>
        <Route path="/weather/:cityName" element={<CityWeather />} />
      </Routes>
    </MemoryRouter>
  ),
};
