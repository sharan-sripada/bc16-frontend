import { Typography, makeStyles, Grid } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import Counter from "../../molecules/Counter/Counter";

const useStyle = makeStyles((theme) => ({
  descClass: {
    fontSize: "20px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "nomral",
    lineHeight: 1.23,
    letterSpacing: "0.2px",
  },
  gridClass: {},
  gridItem: {},
  textClass: {
    width: "25rem",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: 600,
  },
  margin: {
    marginTop: "3%",
  },
}));

function AQI(props) {
  const { image, counters, description, ...rest } = props;
  const classes = useStyle();

  return (
    <Grid
      container
      direction="column"
      spacing={6}
      alignItems="center"
      justify="center"
      className={classes.gridClass}
    >
      <Grid item xs={12} className={classes.gridItem} align="center">
        <img alt="map" src={image} {...rest} />
      </Grid>
      <Grid
        item
        container
        xs={12}
        alignItems="center"
        justify="center"
        className={classes.margin}
        // spacing={4}
      >
        {counters &&
          counters.map((aqi, index) => (
            <Grid item xs={5} key={index}>
              <Counter
                city={aqi.city}
                number={aqi.number}
                showCity={aqi.showCity}
              />
            </Grid>
          ))}
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" className={classes.textClass}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
}

AQI.propTypes = {
  image: PropTypes.string,
  counters: PropTypes.array,
  description: PropTypes.string,
};

AQI.defaultProps = {
  counters: [],
};

export default AQI;
