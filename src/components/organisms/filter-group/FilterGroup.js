import { FormGroup, Grid, Typography, makeStyles } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBox from "../../atom/CheckBox/CheckBox";
import Button from "../../atom/button/Button";
import { connect } from "react-redux";
import actions from "../../../store/actions";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: "14px",
  },
  formLabel: {
    height: "2rem",
  },
  gridMargin: {
    marginTop: "1.5rem",
  },
  textMargin: {
    margin: "1rem 0",
    paddingRight: "13px",
  },
}));

const FilterGroup = (props) => {
  const {
    data,
    applyFilter,
    closeDialog,
    jobs,
    addAdvancedFilteredJobs,
    removeAdvancedFilterJobs,
    setSnackMessage,
    removeAdvancedFilters,
  } = props;
  const [value, setValue] = useState("Yes");
  const [filteredData, setFilteredData] = useState(data);
  const classes = useStyles();

  const handleOnChange = (label, group) => {
    const newData = filteredData.map((obj) => {
      if (obj.title === group && obj.title !== "Green Commute") {
        const newLabels = obj.labels.map((item) => {
          if (item.label === label) {
            return {
              ...item,
              isChecked: !item.isChecked,
            };
          }

          return { ...item };
        });

        return {
          ...obj,
          labels: [...newLabels],
        };
      }

      if (obj.title === group && obj.title === "Green Commute") {
        const newLabels = obj.labels.map((item) => {
          return {
            ...item,
            isChecked: item.label !== value,
          };
        });

        return {
          ...obj,
          labels: [...newLabels],
        };
      }

      return { ...obj };
    });

    setFilteredData(newData);
  };

  const handleOnApply = () => {
    applyFilter(filteredData);

    let keyLabelObjectsList = [];

    let filterInputObject = {
      experience: [],
      jobType: [],
      isGreenCommute: [],
    };

    let labelsArray = [];

    filteredData.map((obj) => {
      obj.labels.forEach((item) => {
        if (item.isChecked) {
          keyLabelObjectsList.push({
            ...obj.title,
            titleLabel: obj.title.label,
            ...item,
          });
          if (obj.title.key) {
            if (obj.title.key === "isGreenCommute") {
              labelsArray.push(item.isChecked);
            } else {
              labelsArray.push(item.label);
            }

            filterInputObject = {
              ...filterInputObject,
              [obj.title.key]: labelsArray,
            };
          }
        }
      });
      labelsArray = [];
    });

    keyLabelObjectsList = [...new Set(keyLabelObjectsList)];

    const getFilteredJobs = () => {
      // let greenJobs;
      // if (filterInputObject.isGreenCommute.length) {
      //   greenJobs = jobs.filter(
      //     (item) => item.isGreenCommute === filterInputObject.isGreenCommute[0]
      //   );
      // } else {
      //   greenJobs = jobs.filter((item) => item.isGreenCommute === false);
      // }

      const jobTypes = jobs.filter((item) =>
        filterInputObject.jobType.includes(item.jobType)
      );

      if (jobTypes.length !== 0) {
        jobTypes.filter((item) =>
          filterInputObject.experience.includes(item.experience)
        );
        return jobTypes;
      } else {
        const greenJobs = jobs.filter((item) =>
          filterInputObject.experience.includes(item.experience)
        );
        return greenJobs;
      }

      // if (jobtypes.length === 0) return jobTypes;

      // const finalFilter = jobtypes.filter((item) =>
      //   filterInputObject.experience.includes(item.experience)
      // );

      // if (finalFilter.length === 0) return jobtypes;

      // return finalFilter;
    };

    const filteredJobs = getFilteredJobs();
    console.log("jobTypes", filteredJobs);

    if (filteredJobs.length !== 0) {
      addAdvancedFilteredJobs(filteredJobs);
    } else {
      setSnackMessage("No Jobs Found based on the Advanced Filters");
    }
    closeDialog();
  };

  const handleOnClear = () => {
    removeAdvancedFilterJobs([]);
    removeAdvancedFilters();
    closeDialog();
  };

  return (
    <Grid container>
      <Grid container item direction="row" justify="space-evenly">
        {filteredData.slice(0, 3).map((obj, idx) => (
          <Grid item key={idx} justify="flex-start">
            <FormGroup>
              <Typography className={classes.textMargin}>
                {obj.title.label}
              </Typography>
              {obj.labels.map((item, innerIdx) => (
                <FormControlLabel
                  key={innerIdx}
                  control={
                    <CheckBox
                      checked={item.isChecked}
                      onChange={(event) =>
                        handleOnChange(event.target.name, obj.title)
                      }
                    />
                  }
                  label={
                    <Typography variant="h4" className={classes.label}>
                      {item.label}
                    </Typography>
                  }
                  className={classes.formLabel}
                  name={item.label}
                />
              ))}
            </FormGroup>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        item
        direction="row"
        className={classes.gridMargin}
        justify="space-evenly"
      >
        {filteredData.slice(3, 6).map((obj, idx) => (
          <Grid item key={idx}>
            <FormGroup>
              <Typography className={classes.textMargin}>
                {obj.title.label}
              </Typography>
              {obj.labels.map((item, innerIdx) => (
                <FormControlLabel
                  key={innerIdx}
                  control={
                    <CheckBox
                      checked={item.isChecked}
                      onChange={(event) =>
                        handleOnChange(event.target.name, obj.title)
                      }
                    />
                  }
                  label={
                    <Typography variant="h4" className={classes.label}>
                      {item.label}
                    </Typography>
                  }
                  variant="secondary"
                  name={item.label}
                  className={classes.formLabel}
                />
              ))}
            </FormGroup>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        item
        spacing={5}
        justify="flex-end"
        alignItems="center"
        className={classes.gridMargin}
      >
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            type="small"
            onClick={handleOnClear}
          >
            Clear all
          </Button>
        </Grid>
        <Grid item>
          <Button
            type="small"
            onClick={handleOnApply}
            data-testid="ApplyFilter"
          >
            Apply
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateTopProps = (state) => {
  return {
    data: state.advancedFilters.filters,
    jobs: state.jobReducer.jobs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    applyFilter: (payload) => dispatch(actions.applyAdvancedFilters(payload)),
    addAdvancedFilteredJobs: (payload) =>
      dispatch(actions.addAdvancedFilterJobs(payload)),
    removeAdvancedFilterJobs: (payload) =>
      dispatch(actions.removeAdvancedFilterJobs(payload)),
    removeAdvancedFilters: () => dispatch(actions.removeAdvancedFilters()),
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(FilterGroup);
