import { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { CityForm } from "@/geolocation/components/city-form";

const meta: Meta<typeof CityForm> = {
  component: CityForm,
};

export default meta;
type Story = StoryObj<typeof CityForm>;

export const Default: Story = {
  render: () => (
    <MemoryRouter>
      <CityForm />
    </MemoryRouter>
  ),
};
