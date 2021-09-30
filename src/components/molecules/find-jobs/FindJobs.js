import { Divider, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import IconInputField from "../../molecules/icon-input-fiield/IconInputField";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import Button from "../../atom/button/Button";

const useStyles = makeStyles((theme) => ({
  halfButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    height: "50px",
  },
  itemMargin: {
    backgroundColor: "white",
    borderRadiusRight: "10px",
    borderLeft: "1px solid #9bbdcb ",
  },
  root: {
    width: "100%",
    height: "50px",
  },
  icon: {
    paddingTop: "10px",
    paddingLeft: "4px",
  },
}));

const FindJobs = (props) => {
  const classes = useStyles();
  const { defaultSkillValue, defaultLocationValue } = props;

  return (
    <Grid container direction="row">
      <Grid container item xs={12} className={classes.root}>
        <Grid
          item
          container
          direction="column"
          xs={5}
          style={{
            backgroundColor: "white",
            borderRadiusLeft: "10px",
          }}
        >
          <IconInputField
            placeholder="Search Skills"
            defaultValue={defaultSkillValue}
          />
        </Grid>
        <Grid item container xs={6} className={classes.itemMargin}>
          <IconInputField
            icon={<LocationOnIcon color="secondary" className={classes.icon} />}
            placeholder="Location"
            defaultValue={defaultLocationValue}
          />
        </Grid>
        <Grid item style={{ justify: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            type="long"
            className={classes.halfButton}
          >
            <SearchIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FindJobs;
