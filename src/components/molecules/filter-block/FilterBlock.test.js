import React from "react";
import FilterBlock from "./FilterBlock";
import { render } from "@testing-library/react";

describe("component renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<FilterBlock />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("block should not be empty", () => {
    const { container } = render(<FilterBlock />);

    expect(container.getElementsByTagName("div").length).toBe(6);
  });
});
