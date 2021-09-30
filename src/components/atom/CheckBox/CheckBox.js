import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import PropTypes from "prop-types";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";

function DefaultCheckBox(props) {
  const { color, checked, handleChange, ...rest } = props;

  return (
    <>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        color={color}
        checkedIcon={<CheckBoxOutlinedIcon />}
        {...rest}
      />
    </>
  );
}

DefaultCheckBox.propTypes = {
  checked: PropTypes.bool,
  handleChange: PropTypes.func,
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
};

DefaultCheckBox.defaultProps = {
  color: "primary",
};

export default DefaultCheckBox;
