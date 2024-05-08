import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LocateCityForm } from "@/geolocation/components/locate-city-form";
import {
  renderComponentWithQueryProvider,
  startMockServer,
} from "@/__tests__/helpers";

describe("LocateCityForm", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should render component", () => {
    renderComponentWithQueryProvider(<LocateCityForm />);

    expect(screen.getByPlaceholderText(/Nome da cidade/)).toBeDefined();
    expect(screen.getByRole("button", { name: /Buscar/ })).toBeDefined();
  });

  it("should call get city location hook on form submit", async () => {
    vi.spyOn(server, "get");
    server.get("/geo/1.0/direct", () => {
      return [
        {
          name: "Curitiba",
          lat: -25.4295963,
          lon: -49.2712724,
          state: "Paraná",
        },
      ];
    });

    const user = userEvent.setup();

    renderComponentWithQueryProvider(<LocateCityForm />);

    const cityInput = screen.getByPlaceholderText(/Nome da cidade/);
    const submitButton = screen.getByRole("button", { name: /Buscar/ });

    await user.type(cityInput, "Curitiba");

    expect(cityInput).toHaveProperty("value", "Curitiba");

    user.click(submitButton);

    await waitFor(() => {
      expect(server.get).toHaveBeenCalledOnce();
    });
  });
});
