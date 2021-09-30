import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Divider, Grid, Paper } from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import JobCardHeader from "../../molecules/JobCardHeader/JobCardHeader";
import Routes from "../../molecules/Routes/Routes";
import CommuteOptions from "../CommuteOptions/CommuteOptions";
import Button from "../../atom/button/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "390px",
  },
  divider: {
    marginTop: "30px",
    marginLeft: 15,
    marginBottom: "30px",
    width: 360,
  },
  backIcon: {
    color: theme.palette.secondary.main,
    paddingRight: theme.spacing(1),
    marginTop: -3.5,
    cursor: "pointer",
  },
  buttonLabel: {
    fontFamily: theme.typography.h1.fontFamily,
    height: "8px",
    fontWeight: 500,
    marginTop: 10,
    color: theme.palette.text.primary,
  },
  CommuteRoutes: {
    marginTop: 15,
    marginLeft: 25,
  },
  CommuteOptions: {
    marginTop: -6,
    marginBottom: 5,
    marginLeft: 25,
  },
  BackButton: {
    marginTop: -6,
    marginLeft: 25,
  },
  JobHeader: {
    marginTop: 30,
    marginLeft: 25,
    marginBottom: -10,
  },
  Paper: {
    width: 390,
    border: 0,
    borderTop: "solid 1px #e3f3f6",
    height: "calc(100vh - 75px)",
  },
  buttonsStyle: {
    width: "350px",
    display: "flex",
    marginTop: theme.spacing(4),
    marginBottom: 10,
  },
  LastDivider: {
    width: 390,
    marginTop: 10,
    marginBottom: 10,
    color: "#e3f3f6",
  },
}));

const CommuteRoutes = (props) => {
  const classes = useStyles();
  const {
    headerProps,
    onBackClick,
    routeProps,
    commuteTypes,
    buttonLabel,
    handleOnSave,
  } = props;
  const { src, alt, jobTitle, companyName, location } = headerProps;
  const { to, from } = routeProps;
  return (
    <Box data-testid="job-commute-routes">
      {/* <Paper className={classes.Paper} elevation={0} variant="outlined" square> */}
      <Grid container direction="column" className={classes.root}>
        <Grid item className={classes.JobHeader}>
          <JobCardHeader
            src={src}
            alt={alt}
            jobTitle={jobTitle}
            companyName={companyName}
            location={location}
          />
        </Grid>
        <Grid item>
          <Divider variant="middle" className={classes.divider}></Divider>
        </Grid>
        <Grid container direction="row" className={classes.BackButton}>
          <Grid item>
            <ArrowBack
              className={classes.backIcon}
              onClick={onBackClick}
              data-testid="arrowBack"
            />
          </Grid>
          <Grid item>
            <span className={classes.buttonLabel}>Commute Routes</span>
          </Grid>
        </Grid>
        <Grid item className={classes.CommuteRoutes}>
          <Routes to={to} from={from} />
        </Grid>
        <Grid item>
          <Divider variant="middle" className={classes.divider}></Divider>
        </Grid>
        <Grid item className={classes.CommuteOptions}>
          <CommuteOptions commuteTypes={commuteTypes} selectedCommute="metro" />
        </Grid>
        <Grid item>
          <Divider className={classes.LastDivider}></Divider>
        </Grid>
        <Grid item>
          <Grid
            container
            justify="space-around"
            alignItems="center"
            className={classes.buttonsStyle}
          >
            <Button
              label={buttonLabel}
              type="medium"
              variant="outlined"
              onClick={handleOnSave}
            />
            <Button label="Apply" type="medium" variant="contained" />
          </Grid>
        </Grid>
      </Grid>
      {/* </Paper> */}
    </Box>
  );
};

export default CommuteRoutes;
