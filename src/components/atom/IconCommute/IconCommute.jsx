import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import DriveEtaOutlinedIcon from "@material-ui/icons/DriveEtaOutlined";
import MotorcycleOutlinedIcon from "@material-ui/icons/MotorcycleOutlined";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";

const useStyles = makeStyles(() => ({
  root: {
    width: "24px",
    height: "24px",
    color: "#9bbdcb",
    paddingRight: "5px",
  },
}));

const IconCommute = ({ iconName }) => {
  const classes = useStyles();
  return (
    <div>
      {iconName === "metro" ? (
        <TrainOutlinedIcon
          data-testid="metro"
          className={[classes.root].join(" ")}
        />
      ) : iconName === "bus" ? (
        <DirectionsBusIcon
          data-testid="bus"
          className={[classes.root].join(" ")}
        />
      ) : iconName === "car" ? (
        <DriveEtaOutlinedIcon
          data-testid="car"
          className={[classes.root].join(" ")}
        />
      ) : (
        <MotorcycleOutlinedIcon
          data-testid="bike"
          className={[classes.root].join(" ")}
        />
      )}
    </div>
  );
};

IconCommute.propTypes = {
  type: PropTypes.string,

  onClick: PropTypes.func,

  selected: PropTypes.bool,
};

export default IconCommute;
