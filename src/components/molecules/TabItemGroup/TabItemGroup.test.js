import React from "react";
import TabItemGroup from "./TabItemGroup";
import { render, screen } from "@testing-library/react";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("TabItemGroup renders correctly", () => {
  const onClick = jest.fn();
  const tabs = [
    {
      Icon: WorkOutlineIcon,
      label: "Find Jobs",
      isActive: true,
      dataTestid: "tab1",
      tabOnClick: onClick,
    },
    {
      Icon: WorkOutlineIcon,
      label: "Save Jobs",
      isActive: true,
      dataTestid: "tab2",
      tabOnClick: onClick,
    },
  ];

  test("should match snapshot", () => {
    const { asFragment } = render(<TabItemGroup tabs={tabs} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("TabItem should have label and icon", () => {
    const { container } = render(<TabItemGroup tabs={tabs} />);
    expect(container.getElementsByTagName("svg").length).toBe(2);
    expect(container.getElementsByTagName("p").length).toBe(2);
    expect(screen.getByText("Find Jobs")).toHaveTextContent("Find Jobs");
    expect(screen.getByText("Save Jobs")).toHaveTextContent("Save Jobs");
    userEvent.click(screen.getByTestId("tab1"));
    expect(onClick).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByTestId("tab2"));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
