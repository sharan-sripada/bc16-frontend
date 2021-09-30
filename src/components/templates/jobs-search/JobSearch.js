import React, { useEffect, useState } from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import Header from "../../organisms/Header/TopHeader";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import profileImg from "../../../assets/profileImg.png";
import SideNav from "../../organisms/SideNav/SideNav";
import FindJobs from "../../molecules/find-jobs/FindJobs";
import FilterBlock from "../../molecules/filter-block/FilterBlock";
import Card from "../../organisms/JobCard/JobCard";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FilterGroup from "../../organisms/filter-group/FilterGroup";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import JobDescription from "../../organisms/JobDescription/JobDescription";
import CommuteRoutes from "../../organisms/CommuteRoutes/CommuteRoutes";
import { connect } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Chip from "@material-ui/core/Chip";
import actions from "../../../store/actions";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import SvgIcon from "@material-ui/core/SvgIcon";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { useHistory } from "react-router-dom";
import {
  saveJob,
  removeJob,
  getAllJobs,
  getAllSavedJobs,
} from "../../../service/JobService";

const TestIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M 8 16 h 8 v 2 H 8 v -2 Z m 0 -4 h 8 v 2 H 8 v -2 Z m 6 -10 H 6 c -1.1 0 -2 0.9 -2 2 v 16 c 0 1.1 0.89 2 1.99 2 H 18 c 1.1 0 2 -0.9 2 -2 V 8 l -6 -6 Z m 4 18 H 6 V 4 h 7 v 5 h 5 v 11 Z" />
    </SvgIcon>
  );
};

const ContactIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z" />
      <path d="M9 14c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zM15 14c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" />
      <path d="M 18 11.03 C 17.52 8.18 15.04 6 12.05 6 c -3.03 0 -6.29 2.51 -6.03 6.45 c 2.47 -1.01 4.33 -3.21 4.86 -5.89 c 1.31 2.63 4 4.44 7.12 4.47 Z" />
    </SvgIcon>
  );
};

const routeProps = {
  from: "East Marredpally, E Marredpally",
  to: "Hitech City, Telangana, Secunderabad",
};

const commuteTypes = [
  {
    type: "bus",
    fare: "15$",
    time: "20 mins",
    description: "Catch a bus 38X at 3.42 PM to Secunderabad bus stand.",
    lateStatus: "2 mins",
    isLate: true,
  },
  {
    type: "walk",
    time: "5 mins",
    description: "Head north on St. Johns road.",
  },
  {
    type: "metro",
    fare: "56$",
    time: "38 mins",
    description: "Catch a blue line metro towards Raidurg.",
    isLate: false,
  },
];

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    height: "30rem",
    width: "40rem",
    padding: "0 1rem",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  text: {
    height: "26px",
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.3,
    letterSpacing: "0.2px",
    textAlign: "left",
    color: "#324552",
  },
  chipStyle: {
    borderRadius: "6px",
    margin: "0.5rem 0.5rem 0.5rem 0",
  },
  snackbarColor: {
    color: theme.palette.primary.main,
  },
}));

export const JobSearch = (props) => {
  const [toggle, setToggle] = useState(true);
  const [isJobDescVisible, setJobDescVisible] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [jobDescView, setJobDescView] = useState("JobDescription");
  const [jobIndex, setJobIndex] = useState(-1);
  const [snackMessage, setSnackMessage] = useState();
  const classes = useStyles();
  const [isFindJobActive, setFindJobActive] = useState(true);
  const [isSavedJobActive, setSavedJobActive] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (!props.jobs.length) {
      const query = localStorage.getItem("jobsQuery");
      getAllJobs(query, (res) => {
        const jobsFromAPI = res;
        addJobs(jobsFromAPI);
      });
    }

    getAllSavedJobs((res) => {
      props.setSavedJobs(res);
    });
  }, []);

  const {
    jobs,
    advancedFilteredJobs,
    advancedFilters,
    removeEachFilter,
    removeAdvancedFilterJobs,
    userLocation,
    skillValue,
    jobLocation,
    addSavedJob,
    savedJobs,
    shouldShowSearch,
    removeSavedJob,
    addJobs,
  } = props;

  const findJobsClick = () => {
    setFindJobActive(true);
    setSavedJobActive(false);
    history.push("/jobsearch");
  };
  const savedJobsClick = () => {
    setFindJobActive(false);
    setSavedJobActive(true);
    history.push("/savedjobs");
  };

  const tabs = [
    { Icon: DashboardOutlinedIcon, label: "Dashboard", isActive: false },
    {
      Icon: WorkOutlineIcon,
      label: "Find Jobs",
      isActive: isFindJobActive,
      tabOnClick: findJobsClick,
      dataTestid: "findJobsTab",
    },
    {
      Icon: BookmarkBorderOutlinedIcon,
      label: "Saved Jobs",
      isActive: isSavedJobActive,
      tabOnClick: savedJobsClick,
      dataTestid: "savedJobsTab",
    },
    { Icon: TestIcon, label: "Practice Test", isActive: false },
    { Icon: DateRangeOutlinedIcon, label: "News & Events", isActive: false },
    { Icon: HelpOutlineOutlinedIcon, label: "Need Help", isActive: false },
    { Icon: ContactIcon, label: "Contact Us", isActive: false },
    { Icon: SettingsOutlinedIcon, label: "Settings", isActive: false },
  ];

  let keyLabelObjectsList = [];

  advancedFilters.forEach((obj) => {
    obj.labels.forEach((item) => {
      if (item.isChecked) {
        keyLabelObjectsList.push({
          ...obj.title,
          titleLabel: obj.title.label,
          ...item,
        });
      }
    });
  });

  const jobsToDisplay =
    advancedFilteredJobs.length === 0 ? jobs : advancedFilteredJobs;
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };

  const handleRemoveChip = (key, label) => {
    const newAdvacedFilters = advancedFilters.map((obj) => {
      if (obj.title.key === key) {
        const newLabels = obj.labels.map((item) => {
          if (item.label === label) {
            return {
              ...item,
              isChecked: false,
            };
          }
          return item;
        });

        return {
          ...obj,
          labels: newLabels,
        };
      }
      return obj;
    });

    let count = 0;
    newAdvacedFilters.forEach((obj) => {
      if (obj.labels.filter((item) => item.isChecked).length) count += 1;
    });

    if (count === 0) {
      removeAdvancedFilterJobs([]);
    }

    removeEachFilter(newAdvacedFilters);
  };

  const getSaveButtonLabel = () => {
    const jobIds = savedJobs.map((item) => Object.keys(item)[0]);
    if (jobIds.includes(jobIndex)) {
      return "Remove";
    } else return "Save";
  };

  const handleOnSave = () => {
    const jobIds = savedJobs.map((item) => Object.keys(item)[0]);
    if (jobIds.includes(jobIndex)) {
      const newSavedJobs = savedJobs.filter(
        (item) => Object.keys(item)[0] !== jobIndex
      );
      removeSavedJob(newSavedJobs);
      const removeSaveJobId = savedJobs.filter(
        (item) => Object.keys(item)[0] === jobIndex
      )[0];
      const saveJobId = Object.values(removeSaveJobId)[0];
      removeJob(saveJobId);
      setSnackMessage("Job Removed");
    } else {
      setSnackMessage("Job Saved");
      saveJob(jobIndex, (res) => {
        addSavedJob({
          [jobIndex]: res,
        });
      });
    }
  };

  const getJobGridCard = (job) => {
    const locationObj = job.organization.addresses.filter((address) => {
      return address.id === job.addressId;
    })[0];
    const location = `${locationObj.city}, ${locationObj.state}`;
    return (
      <Grid
        item
        xs={toggle ? 3 : 12}
        style={{
          marginLeft: "2rem",
          marginRight: "2rem",
          marginBottom: "1rem",
        }}
      >
        <Card
          isGrid={toggle ? true : false}
          source={job.organization.logoUrl}
          alt={job.organization.org_name}
          jobTitle={job.jobTitle}
          companyName={job.organization.org_name}
          location={location}
          commuteIcons={[
            { iconName: "bus" },
            { iconName: "metro" },
            { iconName: "car" },
            { iconName: "bike" },
          ]}
          onClick={() => {
            setToggle(!toggle);
            setJobDescVisible(!isJobDescVisible);
            setJobIndex(job.id);
          }}
          isHighlight={jobIndex === job.id}
        />
      </Grid>
    );
  };

  return (
    <Grid container direction="row" style={{ width: "100%" }}>
      <Grid item xs={2}>
        <SideNav tabs={tabs} />
      </Grid>
      <Grid container item xs={10} direction="column">
        <Grid item style={{ height: "80px" }}>
          <Header
            locationLabel={userLocation}
            profileName="Sara Joseph"
            icon={<LocationOnOutlinedIcon color="disabled" />}
            profile={profileImg}
          />
        </Grid>
        <Grid
          container
          item
          alignItems="flex-start"
          style={{
            paddingLeft: "1rem",
            backgroundColor: "#fafafa",
            minHeight: "49rem",
          }}
        >
          <Grid item xs={toggle ? 12 : 9}>
            {shouldShowSearch && (
              <>
                <Box marginTop={"2rem"} marginLeft={"2rem"}>
                  <Typography className={classes.text}>Find Jobs</Typography>
                </Box>
                <Box marginTop={"2rem"} marginLeft={"2rem"}>
                  <FindJobs
                    defaultSkillValue={skillValue}
                    defaultLocationValue={jobLocation}
                  />
                </Box>
                <Box
                  marginTop={"2rem"}
                  marginLeft={"2rem"}
                  marginRight={"2.5rem"}
                >
                  <FilterBlock onClick={handleOpenDialog} />

                  {keyLabelObjectsList.length !== 0 && (
                    <Grid container direction="row" justify="flex-start">
                      {keyLabelObjectsList.map((item, idx) => {
                        if (item.key !== "isGreenCommute")
                          return (
                            <Grid item>
                              <Chip
                                key={idx}
                                classes={{
                                  root: classes.chipStyle,
                                }}
                                onDelete={() =>
                                  handleRemoveChip(item.key, item.label)
                                }
                                variant="outlined"
                                color="primary"
                                label={item.label}
                                name={item.label}
                              />
                            </Grid>
                          );
                      })}
                    </Grid>
                  )}

                  <Dialog open={openDialog} onClose={closeDialog} maxWidth="md">
                    <DialogTitle>
                      <IconButton
                        className={classes.closeButton}
                        data-testid="closeFilter"
                      >
                        <CloseIcon onClick={closeDialog} />
                      </IconButton>
                    </DialogTitle>
                    <DialogContent classes={{ root: classes.dialogContent }}>
                      <FilterGroup
                        closeDialog={closeDialog}
                        setSnackMessage={setSnackMessage}
                      />
                    </DialogContent>
                  </Dialog>
                </Box>
              </>
            )}

            <Grid item container style={{ marginTop: "1rem" }} justify="start">
              {shouldShowSearch
                ? jobsToDisplay.map((job) => getJobGridCard(job))
                : jobsToDisplay
                    .filter((item) =>
                      savedJobs
                        .map((jobSave) => Object.keys(jobSave)[0])
                        .includes(item.id)
                    )
                    .map((job) => getJobGridCard(job))}
            </Grid>
          </Grid>

          {shouldShowSearch && isJobDescVisible && (
            <Grid
              item
              style={{
                backgroundColor: "#ffffff",
                padding: jobDescView === "JobDescription" ? "30px" : 0,
              }}
              xs={3}
            >
              {jobs
                .filter((job) => job.id === jobIndex)
                .map((jobDesc) => {
                  const locationObj = jobDesc.organization.addresses.filter(
                    (address) => address.id === jobDesc.addressId
                  )[0];
                  const location = `${locationObj.city}, ${locationObj.state}`;
                  const headerProps = {
                    src: jobDesc.organization.logoUrl,
                    alt: jobDesc.organization.org_name,
                    jobTitle: jobDesc.jobTitle,
                    companyName: jobDesc.organization.org_name,
                    location: location,
                  };
                  if (jobDescView === "JobDescription") {
                    return (
                      <JobDescription
                        headerProps={headerProps}
                        description={jobDesc.description}
                        skills={jobDesc.jobRequirements}
                        handleOnSave={handleOnSave}
                        button1Label={getSaveButtonLabel()}
                        onClick3={() => {
                          setJobDescView("GreenCommute");
                        }}
                      />
                    );
                  }
                  return (
                    <CommuteRoutes
                      headerProps={headerProps}
                      routeProps={routeProps}
                      commuteTypes={commuteTypes}
                      handleOnSave={handleOnSave}
                      buttonLabel={getSaveButtonLabel()}
                      onBackClick={() => {
                        setJobDescView("JobDescription");
                      }}
                    />
                  );
                })}
            </Grid>
          )}
        </Grid>
      </Grid>

      <Snackbar
        open={snackMessage}
        autoHideDuration={1000}
        onClose={() => setSnackMessage("")}
      >
        <MuiAlert
          variant="filled"
          elevation={6}
          onClose={() => setSnackMessage("")}
          style={{
            backgroundColor: "#5AC568",
          }}
        >
          {snackMessage}
        </MuiAlert>
      </Snackbar>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    jobs: state.jobReducer.jobs,
    advancedFilteredJobs: state.jobReducer.advancedFilteredJobs,
    advancedFilters: state.advancedFilters.filters,
    userLocation: state.onBoardingFilter.yourLocation.yourLocation[0].city,
    skillValue: state.onBoardingFilter.skills.skills[0].skill,
    jobLocation: state.onBoardingFilter.jobLocations.jobLocation[0].city,
    savedJobs: state.jobReducer.savedJobs,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeEachFilter: (payload) => dispatch(actions.removeEachFilter(payload)),
    removeAdvancedFilterJobs: (payload) =>
      dispatch(actions.removeAdvancedFilterJobs(payload)),
    addSavedJob: (payload) => dispatch(actions.addSavedJob(payload)),
    removeSavedJob: (payload) => dispatch(actions.removeSavedJob(payload)),
    addJobs: (payload) => dispatch(actions.addJobs(payload)),
    setSavedJobs: (payload) => dispatch(actions.setSavedJobs(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobSearch);
