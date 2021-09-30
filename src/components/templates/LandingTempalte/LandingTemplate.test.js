import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import LandingTemplate from "./LandingTemplate";

describe("Template renders correctly", () => {
  test("to match snapshot", () => {
    const { asFragment, container } = render(
      <LandingTemplate
        leftContainer={<h1>Hello</h1>}
        rightContainer={<h2>Right</h2>}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(container.getElementsByTagName("h1").length).toBe(1);
    expect(container.getElementsByTagName("h2").length).toBe(1);
  });
});
