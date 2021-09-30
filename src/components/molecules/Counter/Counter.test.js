import React from "react";
import Counter from "./Counter";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Counter renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Counter number="153" />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render Typography", () => {
    const { container } = render(
      <Counter number="953" city="Hyderabad" data-testid="AQI" />
    );
    screen.getAllByTestId("AQI");
    expect(container.querySelector("h1")).toBeInTheDocument();
  });
});
