import React from 'react';
import type { Preview } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { startMockServer } from "../src/__tests__/helpers";
import "../src/index.css";

startMockServer();
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
