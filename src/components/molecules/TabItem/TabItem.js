import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const useStyle = makeStyles((theme) => ({
  tabActive: {
    width: "240px",
    height: "50px",
    borderRadius: "10px",
    backgroundColor: "rgba(90, 197, 104, 0.15)",
    display: "flex",
    cursor: "pointer",
  },
  tabInActive: {
    width: "240px",
    height: "50px",
    display: "flex",
    cursor: "pointer",
  },
  inActiveTextClass: {
    ...theme.typography.navtabs,
    paddingLeft: "10%",
    alignSelf: "center",
    color: theme.typography.h4.color,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  activeTextClass: {
    ...theme.typography.navtabs,
    paddingLeft: "10%",
    alignSelf: "center",
    color: theme.palette.primary.main,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  inActiveIcon: {
    paddingLeft: "8%",
    alignSelf: "center",
    color: theme.typography.h4.color,
  },
  activeIcon: {
    paddingLeft: "8%",
    alignSelf: "center",
    color: theme.palette.primary.main,
  },
}));

function TabItem({ isActive, Icon, label, tabOnClick, dataTestid }) {
  const classes = useStyle();
  let divClass = isActive ? classes.tabActive : classes.tabInActive;

  return (
    <div className={divClass} onClick={tabOnClick} data-testid={dataTestid}>
      {isActive && (
        <>
          <Icon className={classes.activeIcon} />
          <Typography className={classes.activeTextClass}>{label}</Typography>
        </>
      )}
      {!isActive && (
        <>
          <Icon className={classes.inActiveIcon} />
          <Typography className={classes.inActiveTextClass}>{label}</Typography>
        </>
      )}
    </div>
  );
}

TabItem.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string,
  Icon: PropTypes.object,
  tabOnClick: PropTypes.func,
  dataTestid: PropTypes.string,
};

TabItem.defaultProps = {};

export default TabItem;
