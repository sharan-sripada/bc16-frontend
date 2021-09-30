import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LandingPage from "./LandingPage";
import { Provider } from "react-redux";
import store from "../../store/configStore";
import { BrowserRouter as Router } from "react-router-dom";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

describe("LandinPage renders correctly", () => {
  const page = () => {
    return render(
      <Router>
        <Provider store={store}>
          <LandingPage />
        </Provider>
      </Router>
    );
  };

  const data = [
    {
      id: "0ba7f099-31af-4405-8e93-649ef50c74d5",
      jobTitle: "Java Dev",
      orgId: "70c56e1c-0484-47c4-a27c-5b27a1e8891b",
      description:
        "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
      experience: "Executive",
      jobType: "Remote",
      jobRequirements: [
        "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.",
        "Excellent written and oral communication and presentation skills",
        "Excellent written and oral communication and presentation skills",
        "Excellent written and oral communication",
      ],
      addressId: "e6747251-66c7-4b63-a1fe-141a71cabadd",
      jobRole: {
        id: "11bb417e-1b5a-436b-91ac-9701ccab52c6",
        name: "Java Dev",
      },
      organization: {
        id: "70c56e1c-0484-47c4-a27c-5b27a1e8891b",
        name: "BMW",
        logoUrl:
          "https://logodownload.org/wp-content/uploads/2014/04/bmw-logo-2.png",
        description: "BMW company",
        websiteUrl: "https://www.bmw.in/en/index.html",
        memberSince: "2004-10-19 13:53:54+05:30",
        addresses: [
          {
            id: "5a3b22ef-db5a-4cef-8799-ab522b0115e2",
            addressLine1: "8-1-329/A,Tolichowki",
            addressLine2: "Shaikpet",
            city: "Hyderabad",
            state: "Telangana",
            country: "India",
            zipcode: "500008",
            location: "(17.38714,78.491684)",
          },
          {
            id: "dea3ab81-2067-481e-b7e3-674c3e246094",
            addressLine1: "9-2-29A,South Block",
            addressLine2: "Rajaji Nagar",
            city: "Bangalore",
            state: "Karnataka",
            country: "India\n",
            zipcode: "600008",
            location: "(12.972442,77.580643)",
          },
          {
            id: "e6747251-66c7-4b63-a1fe-141a71cabadd",
            addressLine1:
              "6-3-569, Khairatabad Rd, opp. RTA Office, Somajiguda",
            addressLine2: "Secunderabad",
            city: "Hyderabad",
            state: "Telangana",
            country: "India",
            zipcode: "500082",
            location: "(17.38714,78.491684)",
          },
        ],
      },
      saved: true,
      greenCommute: true,
    },
  ];

  var mock = new MockAdapter(axios);
  var baseurl = "http://localhost:9000";d
  mock.onGet(baseurl + "/jobs").reply(200, data);

  test("To match snapshot", () => {
    const { asFragment } = page();
    expect(asFragment()).toMatchSnapshot();
  });

  test("Able to enter a values in autocomplete:", () => {
    const { debug } = page();
    debug();

    // Select the home city

    const autocomplete = screen.getByTestId("autocomplete");
    const input = autocomplete.querySelector("input");

    autocomplete.focus();
    // assign value to input field
    fireEvent.change(input, { target: { value: "Hyderabad" } });
    expect(input.value).toEqual("Hyderabad");
    // navigate to the first item in the autocomplete box
    fireEvent.keyDown(autocomplete, { key: "ArrowDown" });
    // select the first item
    fireEvent.keyDown(autocomplete, { key: "Enter" });
    fireEvent.click(screen.getByText("Next"));

    // Select the JOb Cities

    const autocomplete2 = screen.getByTestId("autocomplete");
    const input2 = autocomplete2.querySelector("input");

    autocomplete2.focus();
    // assign value to input field
    fireEvent.change(input2, { target: { value: "Banglore" } });
    expect(input2.value).toEqual("Banglore");
    // navigate to the first item in the autocomplete box
    fireEvent.keyDown(autocomplete2, { key: "ArrowDown" });
    // select the first item
    fireEvent.keyDown(autocomplete2, { key: "Enter" });
    fireEvent.change(input2, { target: { value: "Hyderabad" } });
    expect(input2.value).toEqual("Hyderabad");
    fireEvent.keyDown(autocomplete2, { key: "ArrowDown" });
    // select the first item
    fireEvent.keyDown(autocomplete2, { key: "Enter" });
    fireEvent.click(screen.getByText("Next"));

    // Select the Skill
    const autocomplete3 = screen.getByTestId("autocomplete");
    const input3 = autocomplete3.querySelector("input");

    autocomplete3.focus();
    // assign value to input field
    fireEvent.change(input3, { target: { value: "Production Designer" } });
    expect(input3.value).toEqual("Production Designer");
    // navigate to the first item in the autocomplete box
    fireEvent.keyDown(autocomplete3, { key: "ArrowDown" });
    // select the first item
    fireEvent.keyDown(autocomplete3, { key: "Enter" });

    fireEvent.click(screen.getByText("Finish"));
  });
});
