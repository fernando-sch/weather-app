import { LocateCityPage } from "@/geolocation/pages/locate-city";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const AppRouterProvider = () => {
  const router = createBrowserRouter([
    { path: "/", element: <LocateCityPage /> },
  ]);

  return <RouterProvider router={router} />;
};
