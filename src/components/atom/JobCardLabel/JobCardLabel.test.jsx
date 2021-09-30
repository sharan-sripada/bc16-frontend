import React from "react";
import JobCardLabel from "./JobCardLabel";
import { render } from "@testing-library/react";

describe("JobCardLabel renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<JobCardLabel />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("JobCardLabel should not be empty", () => {
    const { container } = render(
      <JobCardLabel label="Hi-tech City, Telangana" style={true} />
    );

    expect(container.getElementsByTagName("h4").length).toBe(1);
  });
});
