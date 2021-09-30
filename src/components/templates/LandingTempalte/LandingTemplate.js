import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  aqiClass: {
    backgroundColor: " #e7fce0",
    //alignItems: "center",
    //border: "1px solid blue",
  },
  gridClass: {
    height: "100vh",
    margin: "0",
  },
}));

function LandingTemplate(props) {
  const { leftContainer, rightContainer } = props;

  const classes = useStyles();
  return (
    <Grid container className={classes.gridClass}>
      <Grid item xs={7}>
        {leftContainer}
      </Grid>
      <Grid
        container
        item
        xs={5}
        className={classes.aqiClass}
        alignItems="center"
      >
        {rightContainer}
      </Grid>
    </Grid>
  );
}

LandingTemplate.propTypes = {
  leftContainer: PropTypes.any.isRequired,
  rightContainer: PropTypes.element.isRequired,
};

LandingTemplate.defultProps = {};

export default LandingTemplate;
