import React from "react";
import CompanyLogo from "./CompanyLogo";
import { render, screen } from "@testing-library/react";

describe("company logo renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment, debug } = render(<CompanyLogo />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("image should not be empty", () => {
    render(
      <CompanyLogo
        source="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
        alt="test alt"
      />
    );

    expect(screen.getAllByAltText("test alt")).toHaveLength(1);
  });
});
