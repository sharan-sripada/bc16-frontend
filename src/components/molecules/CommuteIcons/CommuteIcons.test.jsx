import React from "react";
import CommuteIcons from "./CommuteIcons";
import { render } from "@testing-library/react";

const icons = [
  { iconName: "bus" },
  { iconName: "metro" },
  { iconName: "car" },
  { iconName: "bike" },
];

describe("Commute icons renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<CommuteIcons icons={icons} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Commute icons should not be empty", () => {
    const { container } = render(
      <CommuteIcons isTextShown={true} icons={icons} />
    );
    expect(container.getElementsByTagName("svg").length).toBe(4);
  });
});
