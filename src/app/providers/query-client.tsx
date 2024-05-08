import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type AppQueryClientProviderProps = {
  children: React.ReactNode;
};

export const AppQueryClientProvider = ({
  children,
}: AppQueryClientProviderProps) => {
  const client = new QueryClient();

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
