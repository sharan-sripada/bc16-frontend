import React from "react";
import SideNav from "./SideNav";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";

import SvgIcon from "@material-ui/core/SvgIcon";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";

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

export const tabs = [
  { Icon: DashboardOutlinedIcon, label: "Dashboard", isActive: false },
  { Icon: WorkOutlineIcon, label: "Find Jobs", isActive: true },
  { Icon: BookmarkBorderOutlinedIcon, label: "Saved Jobs", isActive: false },
  { Icon: TestIcon, label: "Practice Test", isActive: false },
  { Icon: DateRangeOutlinedIcon, label: "News & Events", isActive: false },
  { Icon: HelpOutlineOutlinedIcon, label: "Need Help", isActive: false },
  { Icon: ContactIcon, label: "Contact Us", isActive: false },
  { Icon: SettingsOutlinedIcon, label: "Settings", isActive: false },
];

const SideNavStory = {
  title: "Organisms/SideNav",
  component: SideNav,
};

const Template = (args) => <SideNav {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  tabs: tabs,
};
export default SideNavStory;
