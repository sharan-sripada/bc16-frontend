import React from "react";
import TabItem from "./TabItem";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";

const TabItemStory = {
  title: "Molecules/TabItem",
  component: TabItem,
};

const Template = (args) => <TabItem {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  Icon: WorkOutlineIcon,
  label: "Find Jobs",
  isActive: true,
};
export default TabItemStory;
