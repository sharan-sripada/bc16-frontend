import types from "../types";

const intialState = {
  filters: [
    {
      title: { label: "Distance", key: "" },
      labels: [
        { isChecked: false, label: "0 - 10 kms" },
        { isChecked: false, label: "11 - 20 kms" },
        { isChecked: false, label: "21 - 30 kms" },
        { isChecked: false, label: "31 - 40 kms" },
      ],
    },
    {
      title: { label: "Date Posted", key: "" },
      labels: [
        { isChecked: false, label: "Past 24 Hours" },
        { isChecked: false, label: "Past Week" },
        { isChecked: false, label: "Past month" },
        { isChecked: false, label: "Anytime" },
      ],
    },
    {
      title: { label: "Green Commute", key: "isGreenCommute" },
      labels: [{ isChecked: false, label: "Yes" }],
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
  ],
};

const advancedFilters = (state = intialState, action) => {
  switch (action.type) {
    case types.APPLY_FILTER:
    case types.REMOVE_EACH_FILTER:
      return {
        ...state,
        filters: [...action.payload],
      };

    case types.REMOVE_FILTER:
      return {
        ...intialState,
      };

    default:
      return state;
  }
};

export default advancedFilters;
