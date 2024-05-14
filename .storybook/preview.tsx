import React from "react";
import type { Preview } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  startOpenWeatherMockServer,
  startIBGEMockServer,
} from "../src/__tests__/helpers";
import "../src/index.css";

startOpenWeatherMockServer();
startIBGEMockServer();
const client = new QueryClient();

const preview: Preview = {
  decorators: [
    (Story) => (
      <QueryClientProvider client={client}>
        <Story />
      </QueryClientProvider>
    ),
  ],
};

export default preview;
