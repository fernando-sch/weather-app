import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CityForm } from "@/geolocation/components/city-form";
import { renderComponent, startMockServer } from "@/__tests__/helpers";

describe("CityForm", () => {
  let server: ReturnType<typeof startMockServer>;

  beforeEach(() => {
    server = startMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should render component", () => {
    renderComponent(<CityForm />);

    expect(screen.getByPlaceholderText(/Nome da cidade/)).toBeDefined();
    expect(screen.getByRole("button", { name: /Buscar/ })).toBeDefined();
  });

  it("should navigate to location weather page", async () => {
    const user = userEvent.setup();
    renderComponent(<CityForm />);

    const cityInput = screen.getByPlaceholderText(/Nome da cidade/);
    const submitButton = screen.getByRole("button", { name: /Buscar/ });

    await user.type(cityInput, "Curitiba");
    user.click(submitButton);

    await waitFor(() => {
      expect(global.window.location.href).toContain("/weather/Curitiba");
    });
  });
});
