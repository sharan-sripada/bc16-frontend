import React from "react";
import IconInputField from "./IconInputField";
import { render, screen } from "@testing-library/react";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';


describe("component renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment, debug } = render(<IconInputField />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("icon and placeholder should not be empty", () => {
    const { debug, container } = render(
      <IconInputField
        icon={<WorkOutlineIcon />}
      />
    );

    expect(container.getElementsByTagName("input").length).toBe(1);
  });
});
