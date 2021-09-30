import React from "react";
import PropTypes from "prop-types";
import IconCommute from "../../atom/IconCommute/IconCommute";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  label: {
    fontSize: "13px",
    color: "#19293b",
    marginBottom: "10px",
  },
  flexDisplay: {
    display: "flex",
  },
  primaryMargin: {
    margin: "-3px",
  },
});

const CommuteIcons = ({ icons, isTextShown }) => {
  const classes = useStyles();

  const renderIcons = icons.map((obj) => {
    return <IconCommute iconName={obj.iconName} key={obj.iconName} />;
  });

  return (
    <div>
      {isTextShown ? (
        <Typography variant="h4" className={classes.label}>
          Commute routes available:
        </Typography>
      ) : (
        <div> </div>
      )}

      <div className={classes.flexDisplay}>{renderIcons}</div>
    </div>
  );
};

CommuteIcons.propTypes = {
  icons: PropTypes.array,
  isTextShown: PropTypes.bool,
};

export default CommuteIcons;
