import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommuteOptions from "./CommuteOptions";

describe("Commute options", () => {
    it("Matches the snapshot", () => {
        const { container } = render(
            <CommuteOptions commuteTypes={[]}/>
        );
        expect(container).toMatchSnapshot();
    });

    test("test commute options render", () => {
        const { getByTestId } = render(<CommuteOptions  commuteTypes={[]}/>);
        expect(getByTestId("commute-options")).toBeInTheDocument();
    });
});