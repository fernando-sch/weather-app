import { Meta, StoryObj } from "@storybook/react";
import { LocateCityPage } from "@/geolocation/pages/locate-city";

const meta: Meta<typeof LocateCityPage> = { component: LocateCityPage };

export default meta;
type Story = StoryObj<typeof LocateCityPage>;

export const Default: Story = { render: () => <LocateCityPage /> };
