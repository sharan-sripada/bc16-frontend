import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Routes from './Routes'

describe("Routes component test", () => {
  it("Matches the snapshot",() => {
    const { container } = render(
      <Routes />
    );
    expect(container).toMatchSnapshot();
  });

  test("test Routes render",() => {
    const { getByTestId } = render( <Routes />);
    expect(getByTestId("Routes-placeholder")).toBeInTheDocument();
  });
});