import React from "react";
import FindJobs from "./FindJobs";
import { render } from "@testing-library/react";

describe("component renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment, debug } = render(<FindJobs />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("icon and placeholder should not be empty", () => {
    const { debug, container } = render(<FindJobs />);

    expect(container.getElementsByTagName("div").length).toBe(15);
  });
});
