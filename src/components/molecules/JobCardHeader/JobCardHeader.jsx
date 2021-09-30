import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import CompanyLogo from "../../atom/CompanyLogo/CompanyLogo";
import JobCardLabel from "../../atom/JobCardLabel/JobCardLabel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  buttonsStyle: {
    width: "220px",
    marginTop: "12px",
  },

  columnMargin: {
    marginLeft: "20px",
  },

  root: {
    display: "flex",
  },
  smallMedia: {
    width: 50,
    height: 50,
  },

  primary: {
    fontSize: "16px",
    color: "#19293b",
    marginBottom: "6px",
    width: "17rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  secondary: {
    fontSize: "12px",
    color: "#5f7381",
    marginBottom: "6px",
    width: "17rem",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
});

const JobCardHeader = ({ src, alt, jobTitle, companyName, location }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid item>
        <CompanyLogo
          source={src}
          alt={alt}
          {...{ className: classes.smallMedia }}
        ></CompanyLogo>
      </Grid>

      <Grid container direction="column" className={classes.columnMargin}>
        <Grid item>
          <JobCardLabel label={jobTitle} {...{ className: classes.primary }} />
        </Grid>
        <Grid item>
          <JobCardLabel
            label={companyName}
            {...{ className: classes.secondary }}
          >
            {" "}
          </JobCardLabel>
        </Grid>
        <Grid item>
          <JobCardLabel label={location} {...{ className: classes.secondary }}>
            {" "}
          </JobCardLabel>
        </Grid>
      </Grid>
    </Grid>
  );
};

JobCardHeader.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  jobTitle: PropTypes.string,
  companyName: PropTypes.string,
  location: PropTypes.string,
};

export default JobCardHeader;
