import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LocateCityPage } from "@/geolocation/pages/locate-city";

describe("LocateCity", () => {
  it("should render component", () => {
    render(<LocateCityPage />);

    expect(screen.getByText(/Weather App/)).toBeDefined();
    expect(screen.getByPlaceholderText(/Nome da cidade/)).toBeDefined();
    expect(screen.getByRole("button", { name: /Buscar/ })).toBeDefined();
  });
});
