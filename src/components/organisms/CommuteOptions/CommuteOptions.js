import React, { useState } from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import CabList from "../../molecules/CabList/CabList";
import TransportMode from "../../molecules/TransportMode/TransportMode";
import CommuteRouteIcon from "../../molecules/CommuteRouteIcons/CommuteRouteIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "350px",
  },
  optionsLabel: {
    fontSize: "16px",
    color: theme.typography.body1.color,
  },
  routeLabel: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: theme.typography.body1.color,
  },
  mapText: {
    paddingTop: theme.spacing(4),
    color:theme.palette.primary.main,
    textAlign: "left",
    cursor: "pointer"
  },
  details: {
    paddingTop: theme.spacing(2),
    fontSize: theme.typography.subtitle2.fontSize,
    color: theme.typography.body1.color,
  },

}));

const defaultCommutes = [
  { 
    type: "metro" 
  },
  { 
    type: "bus" 
  },
  { 
    type: "car" 
  },
  { 
    type: "bike" 
  },
];

const selectCommute = (type) => {
  return defaultCommutes.map((item) => {
    item.type === type ? (item.selected = true) : (item.selected = false);
    return item;
  });
};

const CommuteOptions = ({ commuteTypes, selectedCommute }) => {
  const [commute, setCommute] = useState(selectedCommute);
  const icons = selectCommute(commute);

  const classes = useStyles();

  const changeCommute = (type) => {
    setCommute(type);
  };

  return (
    <Grid container  direction="column"  className={classes.root} data-testid="commute-options" >
      <Grid item container justify="space-between" alignItems='center'>
        <Typography variant={"h4"} className={classes.optionsLabel}>
          Your Options
        </Typography>
        <CommuteRouteIcon  icons={icons} onClick={changeCommute}/>
      </Grid>   
      
      {commute !== "car" ? (
        <div>
          <Grid item container justify="space-between">
            <Typography variant="h6" className={classes.routeLabel}>
              Maredpally - Hitech City
            </Typography>
            <Typography variant={"subtitle2"} className={classes.details}>
              $50 &bull; 56 mins
            </Typography>
          </Grid>
          <Grid item>
            {commuteTypes.map((item) => (
              <TransportMode
                description={item.description}
                type={item.type}
                fare={item.fare}
                isLate={item.isLate}
                status={item.status}
                time={item.time}
              />
            ))}
          </Grid>
          <Grid item>
            <Typography  variant="h5" className={classes.mapText} >
            View in google maps
            </Typography> 
          </Grid>
        </div>
      ) : (
        <Grid item>
          <CabList/>
        </Grid>
      )}
    </Grid>
  );
};

CommuteOptions.propTypes = {
  commuteTypes: PropTypes.array.isRequired,
};

export default CommuteOptions;
