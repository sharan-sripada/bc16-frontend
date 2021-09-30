import React from "react";
import CommuteRoutes from "./CommuteRoutes";

export default {
  title: "Organisms/CommuteRoutes",
  component: CommuteRoutes,
};

const Template = (args) => <CommuteRoutes {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headerProps: {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    alt: "BMW company",
    jobTitle: "User Experience Designer",
    companyName: "BMW",
    location: "Hi-Tech City, Telangana",
  },
  routeProps: {
    from: "East Marredpally, E Marredpally",
    to: "Hitech City, Telangana, Secunderabad",
  },
  commuteTypes: [
    {
      type: "bus",
      fare: "15$",
      time: "20 mins",
      description: "Catch a bus 38X at 3.42 PM to Secunderabad bus stand.",
      lateStatus: "2 mins",
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
