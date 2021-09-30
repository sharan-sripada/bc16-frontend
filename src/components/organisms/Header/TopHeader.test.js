import React from 'react';
import TopHeader from './TopHeader'
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("TopHeader placeholder test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <TopHeader locationLabel="Hyderabad" profileName="Bob" />
      );
      expect(container).toMatchSnapshot();
    });
  
    test("test TopHeader render", () => {
      const { getByTestId } = render(<TopHeader  locationLabel="hyderabad" profileName="Bob"/>);
      expect(getByTestId("topheader-placeholder")).toBeInTheDocument();
    });
  });