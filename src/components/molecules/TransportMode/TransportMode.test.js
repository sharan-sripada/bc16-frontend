import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TransportMode from "./TransportMode";

describe("TransportMode", () => {
    it("Matches the snapshot", () => {
        const { container } = render(
            <TransportMode description={"Walk for 5 mins"}/>
        );
        expect(container).toMatchSnapshot();
    });

    test("component renders correctly", () => {
        const { getByTestId } = render(<TransportMode description={"Walk for 5 mins"}/>);
        expect(getByTestId("transit-type")).toBeInTheDocument();
    });
});