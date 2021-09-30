import React, { useState } from "react";
import AQI from "../../components/organisms/AQI/AQI";
import LandingTemplate from "../../components/templates/LandingTempalte/LandingTemplate";
import Stepper from "../../components/organisms/stepper/Stepper";
import { connect } from "react-redux";
import actions from "../../store/actions";
import { useHistory } from "react-router-dom";
import * as jobService from "../../service/JobService";
import { jobResource } from "../../service/JobService";

function LandingPage(props) {
  const [view, setView] = useState("yourLocation");
  const history = useHistory();

  const {
    yourLocation,
    jobLocations,
    skills,
    addYourLocation,
    addJobLocations,
    addSkills,
    addJobs,
  } = props;

  const aqiValues = {
    Hyderabad: "793",
    Banglore: "982",
    Mumbai: "999",
    Delhi: "676",
    Chennai: "876",
    Vizag: "545",
  };

  const handleClick = (step) => {
    if (step === 0) {
      setView("yourLocation");
    }

    if (step === 1) {
      setView("jobLocations");
    } else if (step === 2) {
      setView("skills");
    }
  };

  const handleChange = (value, accessKey, isHomeLocation) => {
    if (accessKey === "city" && isHomeLocation) {
      const newObj = {
        number: aqiValues[value.city],
        showCity: false,
      };

      const newYourLocation = {
        ...yourLocation,
        counters: [...yourLocation.counters, newObj],
        description: "Real - Time Air Quality Index (AQI) in this location",
        yourLocation: [value],
      };

      addYourLocation(newYourLocation);
    }

    if (accessKey === "city" && isHomeLocation === false) {
      const newCounters = value.map((item) => ({
        number: aqiValues[item.city],
        showCity: true,
        city: item.city,
      }));

      const newJobLocations = {
        ...jobLocations,
        counters: newCounters,
        description: "Real - Time Air Quality Index (AQI) in this location",
        jobLocation: value,
      };

      addJobLocations(newJobLocations);
    }

    if (accessKey === "skill") {
      const jobRoles = value.map((item) => item.skill);

      const jobLocation = jobLocations.jobLocation
        .map((item) => item.city)
        .toString();

      const url = new URL(jobResource);
      const params = new URLSearchParams(url.search);
      params.set("city", jobLocation);
      params.set("jobTitle", jobRoles);

      const actionDispatcher = (res) => {
        const jobsFromAPI = res;

        const newSkills = {
          ...skills,
          counters: [{ number: jobsFromAPI.length, showCity: false }],
          description: "Jobs found in these locations",
          skills: value,
        };

        addSkills(newSkills);
        addJobs(jobsFromAPI);
        localStorage.setItem("jobsQuery", params.toString());
      };

      jobService.getAllJobs(params.toString(), actionDispatcher);
    }
  };

  const handleRoute = () => {
    history.push("/jobsearch");
  };

  const getDefaultValue = () => {
    if (view === "yourLocation") {
      return props[view].yourLocation[0];
    }
    if (view === "jobLocations") {
      return props[view].jobLocation;
    }
    return props[view].skills;
  };

  return (
    <LandingTemplate
      leftContainer={
        <Stepper
          handleChange={handleChange}
          handleClick={handleClick}
          handleRoute={handleRoute}
          defaultValue={getDefaultValue()}
        />
      }
      rightContainer={
        <AQI
          image={props[view].image}
          description={props[view].description}
          counters={props[view].counters}
        />
      }
    />
  );
}

const mapStateToProps = (state) => {
  return {
    yourLocation: state.onBoardingFilter.yourLocation,
    jobLocations: state.onBoardingFilter.jobLocations,
    skills: state.onBoardingFilter.skills,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addYourLocation: (payload) => dispatch(actions.addYourLocation(payload)),
    addJobLocations: (payload) => dispatch(actions.addJobLocations(payload)),
    addSkills: (payload) => dispatch(actions.addSkills(payload)),
    addJobs: (payload) => dispatch(actions.addJobs(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
