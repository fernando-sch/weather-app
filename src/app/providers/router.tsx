import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocateCityPage } from "@/geolocation/pages/locate-city";
import { CityWeather } from "@/weather/pages/city-weather";

export const AppRouterProvider = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LocateCityPage />,
    },
    {
      path: "weather/:state/:cityName",
      element: <CityWeather />,
    },
  ]);

  return <RouterProvider router={router} />;
};
