import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import CommuteIcon from "../../atom/CommuteIcons/CommuteIcons";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "13px",
    color: theme.typography.h2.color,
    marginTop: "20px",
    marginBottom: "8px",
  },
  display: {
    display: "flex",
  },
}));

const CommuteRoutes = (props) => {
  const classes = useStyles();
  const { icons, onClick } = props;

  return (
    <div data-testid="commuteRoutes">
      <div className={classes.display}>
        {icons.map((item) => {
          return (
            <CommuteIcon
              type={item.type}
              key={item.type}
              selected={item.selected}
              onClick={onClick}
            />
          );
        })}
      </div>
    </div>
  );
};

CommuteRoutes.propTypes = {
  icons: PropTypes.array,
  onClick: PropTypes.func,
};

export default CommuteRoutes;
