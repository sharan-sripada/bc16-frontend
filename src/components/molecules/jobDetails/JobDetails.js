import React from "react";
import { Divider, Grid, Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

function JobDetails(props) {
  const useStyle = makeStyles((theme) => ({
    headingClass: {
      ...theme.navTabs,
    },
    ulClass: {
      listStylePosition: "initial",
      paddingLeft: "4%",
    },
    liClass: {
      paddingBottom: "3%",
    },
    descClass: {
      width: "20.5rem",
    },
    hrTop: {
      marginTop: "3%",
    },
    hrBottom: {
      marginBottom: "3%",
    },
  }));

  const { description, skills, ...rest } = props;

  const classes = useStyle();

  return (
    <Grid container spacing={4} style={{ width: "390px" }}>
      <Grid item xs={12}>
        <Divider variant="fullWidth" className={classes.hrBottom} />
      </Grid>
      <Grid item xs={12}>
        {/* <hr /> */}
        <Typography className={classes.headingClass} {...rest}>
          Description
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className={classes.descClass}>
          {description}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Divider variant="fullWidth" className={classes.hrTop} />
      </Grid>
      <Grid item xs={12}>
        <Typography className={classes.headingClass}>What it takes</Typography>
        <ul className={classes.ulClass}>
          {skills &&
            skills.map((skill, index) => (
              <li key={index} className={classes.liClass}>
                <Typography variant="h6" className={classes.descClass}>
                  {skill}
                </Typography>
              </li>
            ))}
        </ul>
      </Grid>
    </Grid>
  );
}

JobDetails.propTypes = {
  description: PropTypes.string,
  skills: PropTypes.array,
};

export default JobDetails;
