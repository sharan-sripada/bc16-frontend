import types from "./types";

export const addYourLocation = (payload) => ({
  payload: payload,
  type: types.ADD_YOUR_LOCATION,
});

export const addJobLocations = (payload) => ({
  payload: payload,
  type: types.ADD_JOB_LOCATIONS,
});

export const addSkills = (payload) => ({
  payload: payload,
  type: types.ADD_SKILLS,
});

export const addJobs = (payload) => ({
  payload: payload,
  type: types.ADD_JOBS,
});

export const addAdvancedFilterJobs = (payload) => ({
  payload: payload,
  type: types.ADD_FILTERED_JOBS,
});

export const removeEachFilter = (payload) => ({
  payload,
  type: types.REMOVE_EACH_FILTER,
});

export const removeAdvancedFilterJobs = (payload) => ({
  payload: payload,
  type: types.REMOVE_FILTERED_JOBS,
});

export const addSavedJob = (payload) => ({
  payload,
  type: types.ADD_SAVED_JOB,
});

export const removeSavedJob = (payload) => ({
  payload,
  type: types.REMOVE_SAVED_JOB,
});

export const setSavedJobs = (payload) => ({
  payload,
  type: types.SET_SAVED_JOBS,
});

export const applyAdvancedFilters = (payload) => ({
  payload: payload,
  type: types.APPLY_FILTER,
});

export const removeAdvancedFilters = () => ({
  type: types.REMOVE_FILTER,
});

export default {
  addYourLocation,
  addJobLocations,
  addSkills,
  addJobs,
  addAdvancedFilterJobs,
  removeAdvancedFilterJobs,
  applyAdvancedFilters,
  removeAdvancedFilters,
  removeEachFilter,
  addSavedJob,
  removeSavedJob,
  setSavedJobs,
};
