import { Box } from "@material-ui/core";
import React from "react";
import JobDetailsMolecule from "./JobDetails";

const JobDetailsStory = {
  title: "Molecules/DetailsSection",
  component: JobDetailsMolecule,
  decorators: [
    (Story) => (
      <Box width="350px" style={{ margin: "20px" }}>
        <Story />
      </Box>
    ),
  ],
};

const Template = (args) => <JobDetailsMolecule {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  description:
    "Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.",
  skills: [
    "High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.",
    "Excellent written and oral communication and presentation skills",
    "Excellent written and oral communication and presentation skills",
  ],
};

export default JobDetailsStory;
