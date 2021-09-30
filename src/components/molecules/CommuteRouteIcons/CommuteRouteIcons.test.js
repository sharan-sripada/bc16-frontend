import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommuteRouteIcons from './CommuteRouteIcons'

const icons = [
    {type : 'metro'},
    {type : 'bus'}
];

describe("CommuteRouteIcons component test", () => {
  it("Matches the snapshot", () => {
    const { container } = render(
      <CommuteRouteIcons icons={icons} />
    );
    expect(container).toMatchSnapshot();
  });

  test("test CommuteRouteIcons render", () => {
    const { getByTestId } = render(<CommuteRouteIcons icons={icons}/>);
    expect(getByTestId("commuteRoutes")).toBeInTheDocument();
  });
});