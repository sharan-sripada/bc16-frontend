import React from "react";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { makeStyles } from "@material-ui/core";
import BaseIconInputField from "./BaseIconInputField";

const useStyles = makeStyles((theme) => ({
  text: {
    paddingTop: "8px",
    margin: "0 0.5rem",
    fontColor: theme.palette.secondary.main,
    fontWeight: theme.typography.h5.fontSize,
  },
  icon: {
    paddingTop: "12px",
    paddingLeft: "10px",
  },
}));

const IconInputField = (props) => {
  const { variant } = props;
  const classes = useStyles();

  return (
    <BaseIconInputField
      icon={
        props.icon || (
          <WorkOutlineIcon color={variant} className={classes.icon} />
        )
      }
      {...props}
      classes={classes}
    />
  );
};

IconInputField.defaultProps = {
  variant: "secondary",
};

export default IconInputField;
