import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CommuteRoutes from "./CommuteRoutes";

const src = "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg";
const alt = "BMW logo";
const jobTitle = "User Experience Designer";
const companyName = "BMW";
const location = "Hitech City, Telangana";
const from = "East Marredpally, E Marredpally";
const to = "Hitech City, Telangana, Secunderabad";
const commuteTypes = [
  {
    type: "bus",
    fare: "15$",
    time: "20 mins",
    description: "Catch a bus 38X at 3.42 PM to Secunderabad bus stand.",
    lateStatus: "2 mins",
    isLate: true,
  },
  {
    type: "walk",
    time: "5 mins",
    description: "Head north on St. Johns road.",
  },
  {
    type: "metro",
    fare: "56$",
    time: "38 mins",
    description: "Catch a blue line metro towards Raidurg.",
    isLate: false,
  },
];

describe("commute routes snapshot test", () => {
  const headerProps = {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    alt: "BMW company",
    jobTitle: "User Experience Designer",
    companyName: "BMW",
    location: "Hi-Tech City, Telangana",
  };

  const routeProps = { to: "hyderabad", from: "Hyderabd" };
  it("Matches the snapshot", () => {
    const { container } = render(
      <CommuteRoutes
        routeProps={routeProps}
        headerProps={headerProps}
        commuteTypes={commuteTypes}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("commute routes render correctly", () => {
    const { getByTestId } = render(
      <CommuteRoutes
        routeProps={routeProps}
        headerProps={headerProps}
        commuteTypes={commuteTypes}
      />
    );
    expect(getByTestId("job-commute-routes")).toBeInTheDocument();
  });
});
