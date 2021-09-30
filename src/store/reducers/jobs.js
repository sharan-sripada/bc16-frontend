import types from "../types";

const initialState = {
  jobs: [],
  advancedFilteredJobs: [],
  savedJobs: [],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case types.ADD_FILTERED_JOBS:
    case types.REMOVE_FILTERED_JOBS:
      return {
        ...state,
        advancedFilteredJobs: action.payload,
      };

    case types.SET_SAVED_JOBS:
    case types.REMOVE_SAVED_JOB:
      return {
        ...state,
        savedJobs: action.payload,
      };

    case types.ADD_SAVED_JOB:
      return {
        ...state,
        savedJobs: [...state.savedJobs, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

export default jobsReducer;
