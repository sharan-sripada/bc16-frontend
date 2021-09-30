import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  primary: {
    width: "250px",
    fontSize: "18px",
    color: "#19293b",
    marginBottom: "8px",
    whiteSpace: "nowrap",
    overflow: "hidden !important",
    textOverflow: "ellipsis",
  },
  secondary: {
    maxWidth: "250px",
    fontSize: "14px",
    color: "#5f7381",
    marginBottom: "8px",
    whiteSpace: "nowrap",
    overflow: "hidden !important",
    textOverflow: "ellipsis",
  },
});

const JobCardLabel = ({ label, style, ...rest }) => {
  const classes = useStyles();
  let textstyle = style ? classes.primary : classes.secondary;
  return (
    <Typography className={textstyle} variant="h4" {...rest}>
      {label}
    </Typography>
  );
};

JobCardLabel.propTypes = {
  label: PropTypes.string,
  style: PropTypes.bool,
};

export default JobCardLabel;
