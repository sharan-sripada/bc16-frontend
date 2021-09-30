import React from "react";
import SideNav from "./SideNav";
import { render, screen } from "@testing-library/react";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("SideNav renders correctly", () => {
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
    const { asFragment } = render(<SideNav tabs={tabs} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("SideNav should have labels, icon and heading", () => {
    const { container } = render(<SideNav tabs={tabs} />);
    expect(container.getElementsByTagName("svg").length).toBe(2);
    expect(container.getElementsByTagName("p").length).toBe(3);
    expect(screen.getByText("Green Commute")).toHaveTextContent(
      "Green Commute"
    );
    expect(screen.getByText("Find Jobs")).toHaveTextContent("Find Jobs");
    expect(screen.getByText("Save Jobs")).toHaveTextContent("Save Jobs");
    userEvent.click(screen.getByTestId("tab1"));
    expect(onClick).toHaveBeenCalledTimes(1);
    userEvent.click(screen.getByTestId("tab2"));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
