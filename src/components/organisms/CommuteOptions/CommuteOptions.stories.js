import React from "react";
import CommuteOptions from "./CommuteOptions";

export default {
  title: "Organisms/CommuteOptions",
  component: CommuteOptions,
};

const Template = (args) => <CommuteOptions {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  commuteTypes: [
    {
      type: "bus",
      fare: "15$",
      time: "20 mins",
      description: "Catch a bus 38X at 3.42 PM to Secunderabad bus stand.",
      status: "2 mins",
      isLate: true,
    },
    {
      type: "walk",
      time: "5 mins",
      description: "Head north on St. Johns road.",
    },
    {
      type: "metro",
      fare: "56$",
      time: "38 mins",
      description: "Catch a blue line metro towards Raidurg.",
      isLate: false,
    },
  ],
};
