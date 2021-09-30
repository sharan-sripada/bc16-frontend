import React from "react";
import JobCardHeader from "./JobCardHeader";
export default {
  title: "Molecules/CardHeader",
  component: JobCardHeader,
};
const JobCardHeaderTemplate = (args) => <JobCardHeader {...args} />;

export const Primary = JobCardHeaderTemplate.bind({});

Primary.args = {
  src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
  alt: "BMW company",
  jobTitle: "User Experience Designer",
  companyName: "BMW",
  location: "Hi-Tech City, Telangana",
};
