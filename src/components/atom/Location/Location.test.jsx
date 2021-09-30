import React from "react";
import Location from "./Location";
import { render, screen } from "@testing-library/react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

describe("Location renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<Location />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("Location should not be empty", () => {
    const { container } = render(
      <Location
        label="East Maredupally,Hyderabad,Telangana"
        icon={<LocationOnOutlinedIcon color="disabled" />}
      />
    );
    expect(container.getElementsByTagName("h4").length).toBe(1);
  });
});
