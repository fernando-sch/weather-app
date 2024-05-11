import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import { renderComponent, startMockServer } from "@/__tests__/helpers";
import { CityWeather } from "@/weather/pages/city-weather";

describe("CityWeather", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
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
      useParams: () => ({ cityName: "Curitiba" }),
    }));

    renderComponent(<CityWeather />);

    await waitFor(() => {
      expect(screen.getByText(/Weather App/)).toBeDefined();
      expect(screen.getByText(/nublado/)).toBeDefined();
      expect(screen.getByText(/24.1°C/)).toBeDefined();
      expect(screen.getByText(/22.18°C/)).toBeDefined();
    });
  });
});
