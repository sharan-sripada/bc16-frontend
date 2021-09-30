import React from "react";
import PropTypes from "prop-types";
import { Grid, Box } from "@material-ui/core";
import CompanyLogo from "../../atom/CompanyLogo/CompanyLogo";
import JobCardLabel from "../../atom/JobCardLabel/JobCardLabel";
import CommuteIcons from "../../molecules/CommuteIcons/CommuteIcons";
import { makeStyles } from "@material-ui/core";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

const useStyles = makeStyles({
  iconsCardLarge: {
    marginTop: "10px",
  },

  boxStyle: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    minWidth: "3rem",
  },
  iconsCardSmall: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginLeft:"23px"
  },

  dateInfo: {
    position: "absolute",
    right: "38px",
    display: "flex",
  },

  largeCard: {
    height: "308px",
    padding: "25px",
    border: "solid 2px #e3f3f6",
    borderRadius: "4px",
    position: "relative",
    background: "white",
    cursor: "pointer",
  },

  smallCard: {
    width: "100%",
    height: "138px",
    padding: "30px",
    border: "solid 2px #e3f3f6",
    borderRadius: "10px",
    position: "relative",
    background: "white",
    cursor:"pointer",
  },

  cardHilight:{
    border: "solid 2px #5AC568"
  },

  moreIcon: {
    color: "#5f7381",
    margin: "-3px",
    paddingLeft: "24px",
  },

  smallCardInfo: {
    marginLeft: "15px",
    width: "420px",
  },
});
const JobCard = ({
  isGrid,
  source,
  alt,
  jobTitle,
  companyName,
  location,
  commuteIcons,
  isHighlight,
  ...rest
}) => {
  const classes = useStyles();
  const MainIconsStyle = isGrid ? "" : classes.iconsCardSmall;
  const IconsStyle = isGrid ? classes.iconsCardLarge : "";

  const getClassName = () => {
    if(isGrid && isHighlight) {
      return `${classes.largeCard} ${classes.cardHilight}`
    }
    if(isGrid === false && isHighlight){
      return `${classes.smallCard} ${classes.cardHilight}`
    }
    if(isGrid){
      return `${classes.largeCard}`
    }
    return `${classes.smallCard}`
  }

  return (
    <Grid
      container
      direction={isGrid ? "column" : "row"}
      className={getClassName()}
      data-testid="jobCard"
      {...rest}
    >
      <div className={classes.dateInfo}>
        <JobCardLabel label="2d" />
        <MoreHorizOutlinedIcon className={classes.moreIcon} />
      </div>
      <Grid item>
        <CompanyLogo source={source} alt={alt} isGrid={isGrid}></CompanyLogo>
      </Grid>
      <Grid item style={{width:"81%"}}>
        <Grid
          item
          container
          direction="column"
          justify="space-between"
          className={` ${isGrid ? "" : classes.smallCardInfo}`}
        >
          <Grid item>
            <JobCardLabel label={jobTitle} style={true} />
          </Grid>
          <Grid item>
            <JobCardLabel label={companyName} />
          </Grid>
          <Grid item>
            <JobCardLabel label={location} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item className={MainIconsStyle}>
        {isGrid ? (
          <div className={IconsStyle}>
            <CommuteIcons icons={commuteIcons} isTextShown={isGrid} />
          </div>
        ) : (
          <Box className={classes.boxStyle} width="6.9rem">
            <CommuteIcons icons={commuteIcons} isTextShown={isGrid} />
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

JobCard.propTypes = {
  isGrid: PropTypes.bool,
  source: PropTypes.string,
  alt: PropTypes.string,
  jobTitle: PropTypes.string,
  companyName: PropTypes.string,
  location: PropTypes.string,
  commuteIcons: PropTypes.array,
};

export default JobCard;
