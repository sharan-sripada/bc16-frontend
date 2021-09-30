//import reducers here
import { combineReducers } from "redux";
import onBoardingFilter from "./reducers/onBoardingFilter";
import jobReducer from "./reducers/jobs";
import advancedFilters from "./reducers/advancedFilter";

const rootReducer = combineReducers({
  //add reduceres here
  onBoardingFilter,
  jobReducer,
  advancedFilters,
});

export default rootReducer;
