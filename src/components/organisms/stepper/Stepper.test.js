import React from "react";
import Stepper from "./Stepper";
import { render } from "@testing-library/react";

describe("component renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment, debug } = render(<Stepper />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("block should not be empty", () => {
    const { debug, container } = render(<Stepper />);

    // expect(container.getElementsByTagName("div").length).toBe(20);
  });
});
