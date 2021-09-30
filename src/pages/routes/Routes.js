import { Typography } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import JobSearch from "../../components/templates/jobs-search/JobSearch";

function Routes() {
  return (
    <Switch>
      <Route exact path="/jobsearch">
        {/* render jobSearch page */}
        <JobSearch shouldShowSearch={true} />
      </Route>
      <Route exact path="/savedjobs">
        {/* render job serach with only saved jobs */}
        <JobSearch shouldShowSearch={false} />
      </Route>
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="*">
        <Typography children="Page Not Found." />
      </Route>
    </Switch>
  );
}

export default Routes;
