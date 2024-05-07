import { Meta, StoryObj } from "@storybook/react";
import { LocateCityForm } from "@/geolocation/components/locate-city-form";

const meta: Meta<typeof LocateCityForm> = {
  component: LocateCityForm,
};

export default meta;
type Story = StoryObj<typeof LocateCityForm>;

export const Default: Story = {
  render: () => <LocateCityForm />,
};
