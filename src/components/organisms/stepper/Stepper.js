import React, { useState } from "react";
import { Box, Divider, Grid, makeStyles } from "@material-ui/core";
import MStepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Typography from "@material-ui/core/Typography";
import Button from "../../atom/button/Button";
import BackArrow from "../../atom/BackArrow/BackArrow";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  textFieldStyle: {
    borderRadius: "10px",
  },
  step: {
    width: "100%",
  },
  headline: {
    width: "30rem",
    fontWeight: 500,
    margin: "1rem 0",
    fontSize: "32px",
  },
  subHeadline: {
    fontWeight: 500,
    margin: "1rem 0",
    fontSize: "20px",
  },
  viewText: {
    fontSize: "20px",
  },
  buttonMargin: {
    margin: "1rem 0.5rem",
  },
  gridContainerMargin: {
    margin: "1rem 0",
  },
  gridItemMargin: {
    margin: "0 1rem",
  },
  autoComplete: {
    borderRadius: "10px",
    width: "30rem",
  },
  chipStyle: {
    borderRadius: "6px",
  },
  inputIcon: {
    margin: "0 0.5rem",
  },
}));

const cities = [
  { city: "Hyderabad" },
  { city: "Banglore" },
  { city: "Mumbai" },
  { city: "Delhi" },
  { city: "Chennai" },
  { city: "Vizag" },
];

const skills = [
  { skill: "User Experience Designer" },
  { skill: "Production Designer" },
  { skill: "ReactJS Dev" },
  { skill: "Java Dev" },
  { skill: "Scrum Master" },
];

const getSteps = () => ["Your Location", "Job Location", "Your Skills"];

const StepperInput = (props) => {
  const classes = useStyles();
  const {
    isMulitple = false,
    accessKey,
    options,
    placeholder,
    handleChange,
    isHomeLocation = false,
    defaultValue,
  } = props;

  const getParams = (params) => {
    const { InputProps } = params;

    if (isMulitple === false) {
      return {
        ...params,
        InputProps: {
          ...InputProps,
          startAdornment: (
            <LocationOnOutlinedIcon
              color="secondary"
              className={classes.inputIcon}
            />
          ),
          classes: { root: classes.textFieldStyle },
        },
      };
    }

    return {
      ...params,
      InputProps: {
        ...InputProps,
        startAdornment: (
          <>
            <LocationOnOutlinedIcon
              color="secondary"
              className={classes.inputIcon}
            />
            {InputProps.startAdornment}
          </>
        ),
        classes: { root: classes.textFieldStyle },
      },
    };
  };

  return (
    <Autocomplete
      data-testid="autocomplete"
      id="autocomplete"
      multiple={isMulitple}
      defaultValue={defaultValue}
      className={classes.autoComplete}
      classes={{ ...classes.root }}
      variant="primary"
      options={options}
      limitTags={2}
      popupIcon={null}
      onChange={(event, value) =>
        handleChange(value, accessKey, isHomeLocation)
      }
      getOptionLabel={(option) => option[accessKey]}
      renderTags={(value, getTagProps) => {
        return value.map((option, index) => {
          return (
            <Chip
              key={index}
              classes={{
                root: classes.chipStyle,
              }}
              variant="outlined"
              color="primary"
              label={option[accessKey]}
              {...getTagProps({ index })}
            />
          );
        });
      }}
      renderInput={(params) => {
        const newParams = getParams(params);

        return (
          <TextField
            {...newParams}
            variant="outlined"
            placeholder={placeholder}
          />
        );
      }}
    />
  );
};

const renderView = (activeStep, handleChange, defaultValue) => {
  const classes = useStyles();

  if (activeStep === 0) {
    return (
      <div>
        <Typography variant="body1" className={classes.subHeadline}>
          Where do you stay?
        </Typography>
        <StepperInput
          options={cities}
          accessKey="city"
          placeholder="Your Location"
          isHomeLocation={true}
          handleChange={handleChange}
          defaultValue={defaultValue}
        />
      </div>
    );
  }

  if (activeStep === 1) {
    return (
      <>
        <Typography variant="body1" className={classes.subHeadline}>
          Where do you want to work?
        </Typography>
        <StepperInput
          isMulitple={true}
          options={cities}
          accessKey="city"
          isHomeLocation={false}
          placeholder="Job Location"
          handleChange={handleChange}
          defaultValue={defaultValue}
        />
      </>
    );
  }

  return (
    <div>
      <Typography variant="body1" className={classes.subHeadline}>
        What do you want to do?
      </Typography>
      <StepperInput
        isMulitple={true}
        options={skills}
        accessKey="skill"
        placeholder="Skills"
        handleChange={handleChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

const Stepper = ({ handleChange, handleClick, handleRoute, defaultValue }) => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const classes = useStyles();

  const handleSteps = (step) => {
    if (step >= 0 && step <= 2) {
      setActiveStep(step);
      handleClick(step);
    }
  };

  return (
    <Grid container direction="column">
      <Grid item xs={12} className={classes.step}>
        <MStepper nonLinear connector={null} activeStep={activeStep}>
          {steps.map((label, idx) => (
            <Step
              key={label}
              color={idx <= activeStep ? "primary" : "secondary"}
              className={classes.step}
            >
              <StepButton completed={idx <= activeStep}>
                <Typography
                  variant="h4"
                  color={idx <= activeStep ? "primary" : "secondary"}
                >
                  {label}
                </Typography>
              </StepButton>
            </Step>
          ))}
        </MStepper>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>

      <Box marginTop="7%" marginLeft="9.5%" marginBottom="4%">
        <Grid item>
          <Typography variant="h2" className={classes.headline}>
            More than 2000 people are using Green Commute
          </Typography>
        </Grid>
      </Box>
      <Box marginLeft="9.5%">
        <Grid item>
          {activeStep !== 0 && (
            <BackArrow
              className={{ ...classes.gridContainerMargin }}
              label="Back"
              onClick={() => handleSteps(activeStep - 1)}
            />
          )}
        </Grid>
        <Grid item>{renderView(activeStep, handleChange, defaultValue)}</Grid>
        <Box marginTop="2%">
          <Grid container className={classes.gridContainerMargin}>
            {activeStep !== 2 ? (
              <>
                <Grid item className={{ ...classes.gridItemMargin, margin: 0 }}>
                  <Button
                    variant="contained"
                    label="Next"
                    type="small"
                    onClick={() => handleSteps(activeStep + 1)}
                  />
                </Grid>
                <Grid item className={classes.gridItemMargin}>
                  <Button
                    variant="outlined"
                    label="Skip"
                    type="small"
                    onClick={() => handleSteps(activeStep + 1)}
                  />
                </Grid>
              </>
            ) : (
              <Grid item className={{ ...classes.gridItemMargin, margin: 0 }}>
                <Button
                  variant="contained"
                  label="Finish"
                  type="small"
                  onClick={() => handleRoute()}
                />
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

Stepper.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleRoute: PropTypes.func,
};
export default Stepper;
