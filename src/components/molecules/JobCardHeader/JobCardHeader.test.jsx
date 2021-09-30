import React from "react";
import JobCardHeader from "./JobCardHeader";
import { render } from "@testing-library/react";

describe("JobCardHeader renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<JobCardHeader />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("JobCardHeader should not be empty", () => {
    const { container } = render(
      <JobCardHeader
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
        alt="BMW company"
        jobTitle="User Experience Designer"
        companyName="BMW"
        location="Hi-Tech City, Telangana"
      />
    );
    expect(container.getElementsByTagName("img").length).toBe(1);
    expect(container.getElementsByTagName("h4").length).toBe(3);
  });
});
