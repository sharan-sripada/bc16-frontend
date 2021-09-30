import React from "react";
import FilterGroup from "./FilterGroup";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../../store/configStore";

describe("component renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment, debug } = render(
      <Provider store={store}>
        <FilterGroup />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("block should not be empty", () => {
    const { debug, container } = render(
      <Provider store={store}>
        <FilterGroup />
      </Provider>
    );

    expect(container.getElementsByTagName("div").length).toBe(18);
  });
});
