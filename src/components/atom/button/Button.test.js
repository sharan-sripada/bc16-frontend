import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Button from './Button'

describe("Button renders correctly", () => {
    test("should match snapshot", () => {
      const { asFragment } = render(<Button />);
      expect(asFragment()).toMatchSnapshot();
    });
  
    test("Button can be clicked", () => {
      let checked = false;
      const onClick = jest.fn();
  
      const { container } = render(
        <Button
          onClick={onClick}
          data-testid="button"
        />
      );
      screen.getByTestId("button");
      userEvent.click(container.querySelector("button"));
      expect(onClick).toHaveBeenCalled();
    });
  });
  