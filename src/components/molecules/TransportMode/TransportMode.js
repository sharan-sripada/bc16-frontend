import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import DirectionsWalk from "@material-ui/icons/DirectionsWalk";
import TrainOutlinedIcon from "@material-ui/icons/TrainOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "20px",
    width: "20px",
    color: theme.typography.body2.color,
    marginTop: 3,
  },
  type: {
    display: "flex",
    alignItems: "flex-start",
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    color: theme.typography.body2.color,
  },
  desc: {
    paddingTop: theme.spacing(1),
    marginLeft: theme.spacing(0.5),
    color: theme.typography.body2.color,
  },
  status: {
    marginLeft: theme.spacing(1),
    color: theme.typography.overline.color,
  },
  onTimeStatus: {
    color: "#6bea9a",
    marginLeft: theme.spacing(1),
  },
  transitDesc: {
    marginBottom: theme.spacing(1),
    color: theme.typography.body2.color,
  },
  fare: {
    color: theme.typography.body2.color,
  },
}));

const TransportMode = (props) => {
  const classes = useStyles();
  const { type, description, fare, time, status, isLate } = props;
  return (
    <div className={classes.type} data-testid="transit-type">
      <div>
        {type === "metro" ? (
          <TrainOutlinedIcon className={classes.root} />
        ) : type === "bus" ? (
          <DirectionsBusIcon className={classes.root} />
        ) : (
          <DirectionsWalk className={classes.root} />
        )}
      </div>
      <div item className={classes.desc}>
        <Typography variant={"subtitle2"} className={classes.transitDesc}>
          {description}
          {!!time && type === "walk" ? (
            <span> {time}</span>
          ) : isLate ? (
            <span className={classes.status}>{status}</span>
          ) : (
            <span className={classes.onTimeStatus}>On time</span>
          )}
        </Typography>
        {!!fare && !!time && (
          <Typography variant={"subtitle2"} className={classes.fare}>
            {fare} &bull; {time}
          </Typography>
        )}
      </div>
    </div>
  );
};

TransportMode.propTypes = {
  type: PropTypes.string,
  fare: PropTypes.string,
  time: PropTypes.string,
  description: PropTypes.string.isRequired,
  status: PropTypes.string,
  isLate: PropTypes.bool,
};

export default TransportMode;
