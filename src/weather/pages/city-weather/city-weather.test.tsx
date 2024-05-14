import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import {
  renderComponent,
  startOpenWeatherMockServer,
} from "@/__tests__/helpers";
import { CityWeather } from "@/weather/pages/city-weather";

describe("CityWeather", () => {
  let server: ReturnType<typeof startOpenWeatherMockServer>;

  beforeEach(() => {
    server = startOpenWeatherMockServer();
  });

  afterEach(() => {
    server.shutdown();
    vi.clearAllMocks();
  });

  it("should render 'Carregando...' if data isn't fetched", () => {
    renderComponent(<CityWeather />);

    expect(screen.getByText(/Weather App/)).toBeDefined();
    expect(screen.getByText(/Carregando.../)).toBeDefined();
  });

  it("should render component with city weather", async () => {
    vi.mock("react-router-dom", async () => ({
      ...(await vi.importActual("react-router-dom")),
      useParams: () => ({ state: "Paraná", cityName: "Curitiba" }),
    }));

    renderComponent(<CityWeather />);

    await waitFor(() => {
      expect(screen.getByText(/Weather App/)).toBeDefined();
      expect(screen.getByText(/nublado/)).toBeDefined();
      expect(screen.getByText(/20°C/)).toBeDefined();
      expect(screen.getByText(/24°C/)).toBeDefined();
      expect(screen.getByText(/22°C/)).toBeDefined();
      expect(screen.getByText(/23°C/)).toBeDefined();
      expect(screen.getByText(/69%/)).toBeDefined();
      expect(screen.getByText(/Curitiba/)).toBeDefined();
    });
  });
});
