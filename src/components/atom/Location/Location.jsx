import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  label: {
    fontSize: "16px",
    paddingLeft: "10px",
    display: "inline",
    position: "absolute",
  },
}));

const Location = (props) => {
  const { label, icon } = props;
  const classes = useStyles();

  return (
    <div>
      {icon}
      <Typography className={classes.label} variant="h4">
        {label}
      </Typography>
    </div>
  );
};

Location.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
};

Location.defaultProps = {
  label: "label",
};

export default Location;
