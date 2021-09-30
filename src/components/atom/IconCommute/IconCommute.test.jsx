import React from "react";
import IconCommute from "./IconCommute";
import { render } from "@testing-library/react";

describe("Icon renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<IconCommute />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Icon commute should not be empty", () => {
    const { container } = render(<IconCommute iconName="bus" />);
    expect(container.getElementsByTagName("svg").length).toBe(1);
  });
});
