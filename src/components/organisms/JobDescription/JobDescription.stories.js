import { Grid } from "@material-ui/core";
import React from "react";
import JobDescription from "./JobDescription";

const JobDetailsHeaderStory = {
  title: "Organisms/DescriptionDetails",
  component: JobDescription,
  decorators: [
    (Story) => (
      <Grid style={{ margin: "1px" }}>
        <Story />
      </Grid>
    ),
  ],
};

const Template = (args) => <JobDescription {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  headerProps: {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    alt: "BMW company",
    jobTitle: "User Experience Designer",
    companyName: "BMW",
    location: "Hi-Tech City, Telangana",
  },

  description:
    "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
  skills: [
    "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.",
    "Excellent written and oral communication and presentation skills",
    "Excellent written and oral communication and presentation skills",
    "Excellent written and oral communication",
  ],
};

export default JobDetailsHeaderStory;
