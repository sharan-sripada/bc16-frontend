import { render, screen } from "@testing-library/react";
import React from "react";
import JobDetailsHeader from "./JobDetialsHeader";
import userEvent from "@testing-library/user-event";

describe("JobDetailsHeader renders correctly", () => {
  const headerProps = {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    alt: "BMW company",
    jobTitle: "User Experience Designer",
    companyName: "BMW",
    location: "Hi-Tech City, Telangana",
  };
  test("should match snapshot", () => {
    const { asFragment } = render(
      <JobDetailsHeader headerProps={headerProps} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("JobDetailsHeader should render logo and buttons should have onClick", () => {
    const onClick1 = jest.fn();
    const onClick2 = jest.fn();
    const { container } = render(
      <JobDetailsHeader
        headerProps={headerProps}
        handleOnSave={onClick1}
        onClick2={onClick2}
      />
    );
    expect(container.getElementsByTagName("img").length).toBe(1);
    expect(container.getElementsByTagName("h4").length).toBe(3);
    expect(container.getElementsByTagName("button").length).toBe(2);
    userEvent.click(screen.getByText("Save"));
    expect(onClick1).toHaveBeenCalled();
    userEvent.click(screen.getByText("Apply"));
    expect(onClick2).toHaveBeenCalled();
  });
});
