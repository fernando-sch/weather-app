import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export const renderCustomHook = <THookProps, THookReturn>(
  hook: (props: THookProps) => THookReturn
) => {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return renderHook(hook, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </BrowserRouter>
    ),
  });
};

export const renderComponent = (component: React.ReactNode) => {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });

  return render(component, {
    wrapper: ({ children }) => (
      <BrowserRouter>
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      </BrowserRouter>
    ),
  });
};
