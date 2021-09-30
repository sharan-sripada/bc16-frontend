import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RadioButton from "./RadioButton";

describe("Radio renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<RadioButton />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("RadioButton can be clicked", () => {
    let checked = false;
    const handleChange = jest.fn();

    const { container } = render(
      <RadioButton
        checked={checked}
        onChange={handleChange}
        data-testid="radioButton"
      />
    );
    screen.getByTestId("radioButton");
    userEvent.click(container.querySelector("input"));
    expect(handleChange).toHaveBeenCalled();
  });
});
