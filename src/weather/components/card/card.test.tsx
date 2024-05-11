import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WeatherCard } from "@/weather/components/card";

describe("WeatherCard", () => {
  it("should render component", () => {
    render(<WeatherCard temp="20°C" tempmax="25°C" description="Chuva moderada" />);

    expect(screen.getByText(/20°C/)).toBeDefined();
    expect(screen.getByText(/25°C/)).toBeDefined();
    expect(screen.getByText(/Chuva moderada/)).toBeDefined();
  });
});
