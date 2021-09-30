import React from "react";
import { Button as MButton, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  base: {
    borderRadius: "10px",
    fontWeight: "bold",
    fontSize: "14px",
    textTransform: "none",
    fontFamily: theme.typography.h5.fontFamily,
  },
  small: {
    width: "101px",
    height: "38px",
    padding: theme.spacing(1, 4),
  },
  medium: {
    width: "138px",
    height: "50px",
    padding: theme.spacing(2, 4),
  },
  xMedium: {
    width: "151px",
    height: "50px",
    padding: theme.spacing(1, 4),
  },
  long: {
    width: "208px",
    height: "50px",
    padding: theme.spacing(1, 4),
  },
  smallBorder: {
    borderRadius: "6px",
    width: "101px",
    height: "40px",
    padding: theme.spacing(1, 4),
  },
}));

const Button = ({
  variant,
  type,
  onClick,
  label,
  color,
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <MButton
      variant={variant}
      color={color}
      className={`${classes.base} ${classes[type]}`}
      onClick={onClick}
      {...rest}
    >
      {label || children}
    </MButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined"]),
  type: PropTypes.string,
  color: PropTypes.string
};

Button.defaultProps = {
  variant: "contained",
  type: "medium",
  color: "primary",
};

export default Button;
