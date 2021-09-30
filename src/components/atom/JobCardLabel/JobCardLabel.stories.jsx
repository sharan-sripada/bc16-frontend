import React from "react";
import JobCardLabel from "./JobCardLabel";

export default {
  title: "Atoms/CardLabel",
  component: JobCardLabel,
};
const JobCardLabelTemplate = (args) => <JobCardLabel {...args} />;

export const Primary = JobCardLabelTemplate.bind({});

Primary.args = {
  label: "User Experience Designer",
  style: true,
};

export const Secondary = JobCardLabelTemplate.bind({});

Secondary.args = {
  label: "Hi-tech City, Telangana",
  style: false,
};
