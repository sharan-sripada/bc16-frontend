import React from 'react';
import BackArrow from './BackArrow'
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("arrow renders correctly", () => {
    test("should match snapshot", () => {
      const { asFragment, debug } = render(<BackArrow />);
      expect(asFragment()).toMatchSnapshot();
    });
    test("render back arrow",()=>{
      const{getByTestId} = render(<BackArrow label="Back Arrow" />);
      expect(getByTestId("arrow-icon")).toBeInTheDocument();
      expect(getByTestId("arrow-label")).toBeInTheDocument();
    })
});
