import React from "react";
import TabItem from "./TabItem";
import { render, screen } from "@testing-library/react";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("TabItem renders correctly", () => {
  const onClick = jest.fn();
  test("should match snapshot", () => {
    const { asFragment } = render(
      <TabItem
        Icon={WorkOutlineIcon}
        label="Find Jobs"
        isActive={true}
        tabOnClick={onClick}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("TabItem should have label and icon", () => {
    const { container } = render(
      <TabItem
        Icon={WorkOutlineIcon}
        label="Find Jobs"
        isActive={true}
        tabOnClick={onClick}
        dataTestid="Tab1"
      />
    );
    expect(container.getElementsByTagName("svg").length).toBe(1);
    expect(container.getElementsByTagName("p").length).toBe(1);
    expect(screen.getByText("Find Jobs")).toHaveTextContent("Find Jobs");
    userEvent.click(screen.getByTestId("Tab1"));
    expect(onClick).toHaveBeenCalled();
  });
});
