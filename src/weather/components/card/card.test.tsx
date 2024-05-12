import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { WeatherCard } from "@/weather/components/card";

describe("WeatherCard", () => {
  it("should render component", () => {
    render(
      <WeatherCard
        temp="20°C"
        mintemp="19°C"
        maxtemp="25°C"
        fellsliketemp="24°C"
        description="Chuva moderada"
        cityname="Curitiba"
        humidity="56%"
        iconSrc="https://openweathermap.org/img/wn/10n@2x.png"
      />
    );

    expect(screen.getByText(/20°C/)).toBeDefined();
    expect(screen.getByText(/25°C/)).toBeDefined();
    expect(screen.getByText(/19°C/)).toBeDefined();
    expect(screen.getByText(/24°C/)).toBeDefined();
    expect(screen.getByText(/56%/)).toBeDefined();
    expect(screen.getByText(/Curitiba/)).toBeDefined();
    expect(screen.getByText(/Chuva moderada/)).toBeDefined();
    expect(screen.getByRole("img")).toBeDefined();
  });
});
