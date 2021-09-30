import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { JobSearch } from "./JobSearch";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/configStore";

describe("Job Search page renders correctly", () => {
  const page = (props) => {
    return render(
      <Router>
        <Provider store={store}>
          <JobSearch {...props} />
        </Provider>
      </Router>
    );
  };

  const jobs = [
    {
      id: "f9282546-9250-4001-8296-035ad0292b17",
      jobTitle: "Production Designer",
      description:
        "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
      experience: "SENIOR_LEVEL",
      jobType: "FULL_TIME",
      isGreenCommute: true,
      jobRequirements: [
        "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.",
        "Excellent written and oral communication and presentation skills",
        "Excellent written and oral communication and presentation skills",
        "Excellent written and oral communication",
      ],
      organization: {
        id: "70c56e1c-0484-47c4-a27c-5b27a1e8891b",
        org_name: "BMW",
        logoUrl:
          "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-2.png",
        description: "BMW company",
        websiteUrl: "https://www.bmw.in/en/index.html",
      },
      address: {
        addressLine1: "6-3-569, Khairatabad Rd, opp. RTA Office, Somajiguda",
        addressLine2: "",
        city: "Hyderabad",
        state: "Telangana",
        country: "India",
        zipcode: "500082",
        location: "17.3850-78.4867",
      },
      jobRoles: ["", "", ""],
    },
  ];

  const advancedFilteredJobs = [];
  const advancedFilters = [
    {
      title: { label: "Distance", key: "" },
      labels: [
        { isChecked: false, label: "0 - 10 kms" },
        { isChecked: true, label: "11 - 20 kms" },
        { isChecked: true, label: "21 - 30 kms" },
        { isChecked: false, label: "31 - 40 kms" },
      ],
    },
    {
      title: { label: "Date Posted", key: "" },
      labels: [
        { isChecked: true, label: "Past 24 Hours" },
        { isChecked: true, label: "Past Week" },
        { isChecked: false, label: "Past month" },
        { isChecked: false, label: "Anytime" },
      ],
    },
    {
      title: { label: "Green Commute", key: "isGreenCommute" },
      labels: [
        { isChecked: true, label: "Yes" },
        { isChecked: false, label: "No" },
      ],
    },
    {
      title: { label: "Job Type", key: "jobType" },
      labels: [
        { isChecked: false, label: "Full-Time" },
        { isChecked: false, label: "Internship" },
        { isChecked: false, label: "Contract" },
        { isChecked: false, label: "Remote" },
      ],
    },
    {
      title: { label: "Experience Level", key: "experience" },
      labels: [
        { isChecked: false, label: "Fresher" },
        { isChecked: false, label: "Mid-Level" },
        { isChecked: false, label: "Director" },
        { isChecked: false, label: "Executive" },
      ],
    },
    {
      title: { label: "Transport", key: "" },
      labels: [
        { isChecked: false, label: "Metro" },
        { isChecked: false, label: "Motor - Cycle" },
        { isChecked: false, label: "Bus" },
        { isChecked: false, label: "Car Pooling" },
      ],
    },
  ];

  const savedJobs = [];
  const shouldShowSearch = true;

  const removeEachFilter = jest.fn();
  const removeAdvancedFilterJobs = jest.fn();

  const skillValue = "Production Designer";
  const jobLocation = "Hyderabad";
  const addSavedJob = jest.fn();

  const removeSavedJob = jest.fn();

  const pageProps = {
    jobs,
    advancedFilteredJobs,
    advancedFilters,
    userLocation: "Hyderabad",
    savedJobs,
    shouldShowSearch,
    removeEachFilter,
    removeAdvancedFilterJobs,
    skillValue,
    jobLocation,
    addSavedJob,
    removeSavedJob,
  };

  test("to match snapshot", () => {
    const { asFragment } = page(pageProps);
    expect(asFragment()).toMatchSnapshot();
  });

  test("it renders job cards", () => {
    const { container } = page(pageProps);

    fireEvent.click(screen.getByTestId("jobCard"));
    fireEvent.click(screen.getByText("Green Commute Routes"));
    fireEvent.click(screen.getByTestId("arrowBack"));

    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByText("Clear all"));
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByTestId("ApplyFilter"));
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByTestId("closeFilter"));
    fireEvent.click(screen.getByText("Filter"));
    fireEvent.click(screen.getByText("Full-Time"));
    fireEvent.click(screen.getByTestId("ApplyFilter"));
    const element = container.getElementsByClassName("MuiChip-deleteIcon");
    fireEvent.click(element[0]);
    fireEvent.click(screen.getByTestId("findJobsTab"));
    fireEvent.click(screen.getByTestId("savedJobsTab"));
  });

  test("it renders filtered job cards", () => {
    const pageProps1 = {
      jobs: [],
      advancedFilteredJobs: jobs,
      advancedFilters,
      userLocation: "hyderabad",
      savedJobs,
      shouldShowSearch,
      removeEachFilter,
      removeAdvancedFilterJobs,
      skillValue,
      jobLocation,
      addSavedJob,
      removeSavedJob,
    };
    page(pageProps1);
  });
});
