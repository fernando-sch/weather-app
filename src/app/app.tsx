import { AppQueryClientProvider, AppRouterProvider } from "@/app/providers";

export const App = () => {
  return (
    <AppQueryClientProvider>
      <AppRouterProvider />
    </AppQueryClientProvider>
  );
};
