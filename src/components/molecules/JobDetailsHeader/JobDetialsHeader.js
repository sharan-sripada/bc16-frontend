import JobCardHeader from "../JobCardHeader/JobCardHeader";
import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import Button from "../../atom/button/Button";
import PropTypes from "prop-types";

const useStyle = makeStyles({
  root: {
    display: "flex",
  },
  gridItem: {
    flexDirection: "column",
  },
});
function JobDetialsHeader(props) {
  const {
    headerProps,
    button1Label,
    button2Label,
    handleOnSave,
    onClick2,
  } = props;
  const { src, alt, jobTitle, companyName, location } = headerProps;

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item xs={12}>
        <JobCardHeader
          src={src}
          alt={alt}
          jobTitle={jobTitle}
          companyName={companyName}
          location={location}
        />
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12} sm={3}>
          <div style={{ display: "flex" }}>
            <Box marginLeft="18%" marginRight="15px">
              <Button
                label={button1Label}
                color="primary"
                type="small"
                variant="outlined"
                onClick={() => handleOnSave()}
              />
            </Box>
            <Box marginLeft="4.5%" marginRight="10px">
              <Button
                label={button2Label}
                color="primary"
                type="small"
                variant="contained"
                onClick={onClick2}
              />
            </Box>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

JobDetialsHeader.propTypes = {
  headerProps: PropTypes.object,
  button1Label: PropTypes.string,
  button2Label: PropTypes.string,
  onClick1: PropTypes.func,
  onClick2: PropTypes.func,
};

JobDetialsHeader.defaultProps = {
  button1Label: "Save",
  button2Label: "Apply",
};

export default JobDetialsHeader;
