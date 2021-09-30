import React from "react";
import JobCard from "./JobCard";
import imageFile from "../../../assets/hp.png";
export default {
  title: "Organisms/Card",
  component: JobCard,
};
const JobCardTemplate = (args) => <JobCard {...args} />;

export const Primary = JobCardTemplate.bind({});

Primary.args = {
  isGrid: true,
  source: imageFile,
  alt: "HP logo",
  jobTitle: "User Experience Designer",
  companyName: "HP",
  location: "Hitech City, Telangana",
  commuteIcons: [
    { iconName: "bus" },
    { iconName: "metro" },
    { iconName: "car" },
    { iconName: "bike" },
  ],
};

export const Secondary = JobCardTemplate.bind({});

Secondary.args = {
  isGrid: false,
  source: imageFile,
  alt: "HP logo",
  jobTitle: "User Experience Designer",
  companyName: "HP",
  location: "Hitech City, Telangana",
  commuteIcons: [
    { iconName: "bus" },
    { iconName: "metro" },
    { iconName: "car" },
    { iconName: "bike" },
  ],
};

