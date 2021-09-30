import React from "react";
import AQI from "./AQI";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("AQI renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<AQI />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should reder Image", () => {
    render(
      <AQI
        image={"Dummmy"}
        description="Enter location to know Time Air Quality Index (AQI)"
        data-testid="AQI"
      />
    );
    screen.getAllByTestId("AQI");
  });
});
