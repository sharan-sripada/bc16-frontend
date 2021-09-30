import React from "react";
import JobDetails from "./JobDetails";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Job Details renders correctly", () => {
  const JObDetailsComponent = (props) => {
    return (
      <JobDetails
        data-testid={props.dataTestid}
        description="Open Text is seeking a talented..."
        skills={[
          "Excellent written and oral communication and presentation skills",
        ]}
      />
    );
  };
  test("should match snapshot", () => {
    const { asFragment } = render(<JObDetailsComponent />);
    //debug();
    expect(asFragment()).toMatchSnapshot();
  });

  test("Should render Typography", () => {
    const { container } = render(
      <JObDetailsComponent dataTestid="textSample" />
    );
    //debug();
    screen.getAllByTestId("textSample");
    expect(container.querySelectorAll("h6").length).toBe(2);
  });
});
