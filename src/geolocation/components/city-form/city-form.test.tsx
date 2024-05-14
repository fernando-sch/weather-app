import { describe, it, expect } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CityForm } from "@/geolocation/components/city-form";
import { renderComponent, startIBGEMockServer } from "@/__tests__/helpers";

describe("CityForm", () => {
  let server: ReturnType<typeof startIBGEMockServer>;

  beforeEach(() => {
    server = startIBGEMockServer();
  });

  afterEach(() => {
    server.shutdown();
  });

  it("should render component", () => {
    renderComponent(<CityForm />);

    expect(screen.getByText(/Nome da cidade/)).toBeDefined();
    expect(screen.getByRole("combobox")).toBeDefined();
    expect(screen.getByRole("button", { name: /Buscar/ })).toBeDefined();
  });

  it("should validate city name input", async () => {
    const user = userEvent.setup();
    renderComponent(<CityForm />);

    const submitButton = screen.getByRole("button", { name: /Buscar/ });

    user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Selecione uma cidade válida/)).toBeDefined();
    });
  });

  it("should navigate to location weather page", async () => {
    const user = userEvent.setup();
    renderComponent(<CityForm />);

    const cityInput = screen.getByRole("combobox");
    const submitButton = screen.getByRole("button", { name: /Buscar/ });

    user.click(cityInput);
    user.keyboard("cab");

    await waitFor(() => {
      const selectOption = screen.getByText(/Cabixi\/RO/);
      user.click(selectOption);
      user.click(submitButton);
      expect(decodeURI(global.window.location.href)).toContain(
        "/weather/Rondônia/Cabixi"
      );
    });
  });
});
