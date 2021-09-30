import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CabList from './CabList';
import options from './CabList';

describe("CabList test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <CabList options={options} />
      );
      expect(container).toMatchSnapshot();
    });
  
    test("CabList render correctly", () => {
      const { getByTestId } = render(<CabList options={options} />);
      expect(getByTestId("cablist-placeholder")).toBeInTheDocument();
    });
});