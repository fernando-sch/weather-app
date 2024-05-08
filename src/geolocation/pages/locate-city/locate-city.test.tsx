import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { LocateCityPage } from "@/geolocation/pages/locate-city";
import { renderComponentWithQueryProvider } from "@/__tests__/helpers";

describe("LocateCity", () => {
  it("should render component", () => {
    renderComponentWithQueryProvider(<LocateCityPage />);

    expect(screen.getByText(/Weather App/)).toBeDefined();
    expect(screen.getByPlaceholderText(/Nome da cidade/)).toBeDefined();
    expect(screen.getByRole("button", { name: /Buscar/ })).toBeDefined();
  });
});
