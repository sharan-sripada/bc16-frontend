import React from "react";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import CommuteIcons from './CommuteIcons'

describe("CommuteIcons placeholder test", () => {
    it("Matches the snapshot", () => {
      const { container } = render(
        <CommuteIcons type="metro"/>
      );
      expect(container).toMatchSnapshot();
    });
  
    test("test metro CommuteIcons render", () => {
      const { getByTestId } = render(<CommuteIcons type="metro"/>);
      expect(getByTestId("metro")).toBeInTheDocument();
    });

    test("test bus CommuteIcons render", () => {
      const { getByTestId } = render(<CommuteIcons type="bus"/>);
      expect(getByTestId("bus")).toBeInTheDocument();
    });

    test("test car CommuteIcons render", () => {
      const { getByTestId } = render(<CommuteIcons type="car"/>);
      expect(getByTestId("car")).toBeInTheDocument();
    });

    const handleEvent = jest.fn()
     test("test bike CommuteIcons click test", () => {
      const { getByTestId } = render(<CommuteIcons type="bike" onClick={handleEvent}/>);
      expect(getByTestId("bike")).toBeInTheDocument();

      userEvent.click(screen.getByTestId("bike"))
      expect(handleEvent).toHaveBeenCalled()
    });

  });