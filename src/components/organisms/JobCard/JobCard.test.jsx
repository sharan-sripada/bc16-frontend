import React from "react";
import JobCard from "./JobCard";
import { render } from "@testing-library/react";
const icons = [
  { iconName: "bus" },
  { iconName: "metro" },
  { iconName: "car" },
  { iconName: "bike" },
];
describe("JobCard renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<JobCard commuteIcons={icons} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("JobCard should not be empty", () => {
    const { container } = render(
      <JobCard
        isGrid={true}
        source="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
        alt="HP logo"
        jobTitle="User Experience Designer"
        companyName="BMW"
        location="Hi-Tech City, Telangana"
        commuteIcons={icons}
      />
    );
    expect(container.getElementsByTagName("img").length).toBe(1);
    expect(container.getElementsByTagName("h4").length).toBe(5);
  });
});
