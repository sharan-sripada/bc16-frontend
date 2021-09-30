import { Grid, makeStyles, Typography, SvgIcon } from "@material-ui/core";
import Button from "../../atom/button/Button";

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: "20px",
    fontWeight: 600,
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.3",
    letterSpacing: "0.2px",
    textSlign: "left",
    color: theme.typography.subtitle2.color,
  },
  filterButton: {
    marginRight: "6rem",
    marginTop: "5px",
    backgroundColor: theme.palette.primary.contrastText,
  },
}));

const FilterBlock = (props) => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="space-between">
      <Grid item direction="column" xs={11}>
        <Grid item>
          <Typography className={classes.text}>Recommended for you</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            Based on your profile, skills and search history
          </Typography>
        </Grid>
      </Grid>
      <Grid contianer item xs={1} justify="flex-end">
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            type="smallBorder"
            onClick={props.onClick}
            className={classes.filterButton}
          >
            <SvgIcon {...props}>
              <path
                fill="#000"
                d="M7 6h10l-5.01 6.3L7 6zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"
              />
            </SvgIcon>
            Filter
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FilterBlock;
