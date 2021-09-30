import React from "react";
import TabItemsGroup from "../../molecules/TabItemGroup/TabItemGroup";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  textClass: {
    fontFamily: theme.typography.h1.fontFamily,
    fontSize: "20px",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.3",
    letterSpacing: "0.2px",
    textAlign: "left",
    color: "#5ac568",
    cursor: "pointer",
  },
}));

function SideNav(props) {
  const { tabs } = props;
  const classes = useStyle();

  return (
    <Box>
      <Grid container direction="column" spacing={4}>
        <Grid item xs={12}>
          <Box mx={12} my={4}>
            <Typography className={classes.textClass}>Green Commute</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box mx={4}>
            <TabItemsGroup tabs={tabs} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SideNav;
