import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import { LocateCityForm } from "@/geolocation/components/locate-city-form";

describe("LocateCityForm", () => {
  it("should render component", () => {
    render(<LocateCityForm />);

    expect(screen.getByPlaceholderText(/Nome da cidade/)).toBeDefined();
    expect(screen.getByRole("button", { name: /Buscar/ })).toBeDefined();
  });
});
