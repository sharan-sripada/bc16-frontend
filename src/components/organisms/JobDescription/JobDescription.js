import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import JobDetails from "../../molecules/jobDetails/JobDetails";
import JobDetailsHeader from "../../molecules/JobDetailsHeader/JobDetialsHeader";
import PropTypes from "prop-types";
import Button from "../../atom/button/Button";

const useStyle = makeStyles({
  root: {
    position: "relative",
  },
  boxClass: {
    position: "absolute",
    left: "0",
    bottom: "3.2%",
    backgroundImage:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff, #ffffff)",
  },
  buttonClass: {
    position: "absolute",
    top: "55%",
    left: "15%",
    borderRadius: "10px",
    width: "208px",
    height: "50px",
    padding: " 16px 15.6px 16px 14.4px",
    marginRight: "10px",
  },
});
function JobDescription(props) {
  const classes = useStyle();

  const {
    headerProps,
    description,
    skills,
    handleOnSave,
    button1Label,
    onClick2,
    onClick3,
  } = props;
  return (
    <Box className={classes.root}>
      <Grid container direction="column" spacing={6}>
        <Grid item>
          <JobDetailsHeader
            {...{ headerProps, handleOnSave, onClick2, button1Label }}
          />
        </Grid>
        <Grid item>
          <Box marginLeft="0.2%">
            <JobDetails description={description} skills={skills} />
          </Box>
        </Grid>
        <Box height="17.5%" width="100%" className={classes.boxClass}>
          <Button
            label="Green Commute Routes"
            color="primary"
            type="long"
            variant="contained"
            onClick={onClick3}
            className={classes.buttonClass}
            classes
          />
        </Box>
      </Grid>
    </Box>
  );
}

JobDescription.propTypes = {
  headerProps: PropTypes.object,
  description: PropTypes.string,
  skills: PropTypes.array,
};

JobDescription.defaultProps = {};

export default JobDescription;
