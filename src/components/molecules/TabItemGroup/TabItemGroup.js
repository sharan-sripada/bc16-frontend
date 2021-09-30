import React from "react";
import PropTypes from "prop-types";
import { Grid, Divider, Box } from "@material-ui/core";
import TabItem from "../TabItem/TabItem";

function TabItemGroup(props) {
  const { tabs } = props;
  return (
    <Grid container direction="column" spacing={5}>
      {tabs.map((tab, index) => (
        <Grid item xs={12} key={index}>
          {index === 5 && (
            <Box mt={1} mb={6}>
              <Divider variant="fullWidth" />
            </Box>
          )}
          <TabItem
            Icon={tab.Icon}
            isActive={tab.isActive}
            label={tab.label}
            tabOnClick={tab.tabOnClick}
            dataTestid={tab.dataTestid}
          />
        </Grid>
      ))}
    </Grid>
  );
}

TabItemGroup.propTypes = {
  tabs: PropTypes.array,
};

TabItemGroup.defaultProps = {};

export default TabItemGroup;
