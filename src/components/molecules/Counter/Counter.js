/* eslint-disable no-unused-vars */
import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  textClass: {
    textAlign: "center",
  },
}));
function Counter(props) {
  const { number, city, showCity, ...rest } = props;
  const classes = useStyles();

  return (
    <>
      <Typography variant="h1" className={classes.textClass} {...rest}>
        {number}
      </Typography>
      {showCity && (
        <Typography variant="h3" {...rest}>
          {city}
        </Typography>
      )}
    </>
  );
}

Counter.propTypes = {
  number: PropTypes.string.isRequired,
  city: PropTypes.string,
  showCity: PropTypes.bool,
};

Counter.defaultProps = {
  city: "",
  showCity: true,
};

export default Counter;
