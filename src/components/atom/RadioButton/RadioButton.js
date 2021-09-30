import React from "react";
import { Radio } from "@material-ui/core";
import PropTypes from "prop-types";

function RadioButton(props) {
  const { checked, handleChange, color, ...rest } = props;
  return (
    <Radio checked={checked} onChange={handleChange} color={color} {...rest} />
  );
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
};

RadioButton.defaultProps = {
  color: "primary",
};
export default RadioButton;
