import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, render } from "@testing-library/react";
import React from "react";

export const renderHookWithQueryProvider = <THookProps, THookReturn>(
  hook: (props: THookProps) => THookReturn
) => {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return renderHook(hook, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    ),
  });
};

export const renderComponentWithQueryProvider = (
  component: React.ReactNode
) => {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(component, {
    wrapper: ({ children }) => (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    ),
  });
};
