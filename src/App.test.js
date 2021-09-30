import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("company logo renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment, debug } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
