import { render, screen } from "@testing-library/react";
import React from "react";
import JobDescription from "./JobDescription";
import userEvent from "@testing-library/user-event";

describe("JobDescription renders correctly", () => {
  const headerProps = {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    alt: "BMW company",
    jobTitle: "User Experience Designer",
    companyName: "BMW",
    location: "Hi-Tech City, Telangana",
  };
  const description =
    "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.";

  const skills = [
    "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.",
    "Excellent written and oral communication and presentation skills",
    "Excellent written and oral communication and presentation skills",
  ];
  test("should match snapshot", () => {
    const { asFragment } = render(
      <JobDescription
        headerProps={headerProps}
        description={description}
        skills={skills}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("JobDescription should render logo and buttons should have onClick", () => {
    const onClick1 = jest.fn();
    const onClick2 = jest.fn();
    const onClick3 = jest.fn();
    const { container } = render(
      <JobDescription
        headerProps={headerProps}
        description={description}
        skills={skills}
        handleOnSave={onClick1}
        onClick2={onClick2}
        onClick3={onClick3}
      />
    );
    expect(container.getElementsByTagName("img").length).toBe(1);
    expect(container.getElementsByTagName("h4").length).toBe(3);
    expect(container.getElementsByTagName("button").length).toBe(3);
    userEvent.click(screen.getByText("Save"));
    expect(onClick1).toHaveBeenCalled();
    userEvent.click(screen.getByText("Apply"));
    expect(onClick2).toHaveBeenCalled();
    userEvent.click(screen.getByText("Green Commute Routes"));
    expect(onClick2).toHaveBeenCalled();
  });
});
