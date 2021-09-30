import React from "react";
import JobDetialsHeader from "./JobDetialsHeader";

const JobDetailsHeaderStory = {
  title: "Molecules/DetailsHeader",
  component: JobDetialsHeader,
};

const Template = (args) => <JobDetialsHeader {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  headerProps: {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    alt: "BMW company",
    jobTitle: "User Experience Designer",
    companyName: "BMW",
    location: "Hi-Tech City, Telangana",
  },
};

export default JobDetailsHeaderStory;
