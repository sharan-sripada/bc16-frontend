import React from "react";
import AQI from "./AQI";
import imageMap1 from "../../../assets/map1.png";
import imageMap2 from "../../../assets/map2.png";
import imageMap3 from "../../../assets/map3.png";

const AQIStory = {
  title: "Organisms/AQI",
  component: AQI,
};

const Template = (args) => <AQI {...args} />;

export const LandingVariation1 = Template.bind({});

LandingVariation1.args = {
  image: imageMap1,
  description: "Enter location to know Time Air Quality Index (AQI)",
};

export const LandingVariation1a = Template.bind({});

LandingVariation1a.args = {
  image: imageMap1,
  counters: [{ number: "894", showCity: false }],
  description: "Real - Time Air Quality Index (AQI) in this location",
};

export const LandingVariation2 = Template.bind({});

LandingVariation2.args = {
  image: imageMap2,
  description: "Enter location to know Time Air Quality Index (AQI)",
};

export const LandingVariation2a = Template.bind({});

LandingVariation2a.args = {
  image: imageMap2,
  counters: [
    { number: "894", showCity: true, city: "Hyderabad" },
    { number: "953", showCity: true, city: "Mumbai" },
  ],
  description: "Real - Time Air Quality Index (AQI) in this location",
};

export const LandingVariation3 = Template.bind({});

LandingVariation3.args = {
  image: imageMap3,
  description: "Enter your skills to know how many jobs are in this location",
};

export const LandingVariation3a = Template.bind({});

LandingVariation3a.args = {
  image: imageMap3,
  counters: [{ number: "953", showCity: false }],
  description: "Jobs found in these locations",
};

export default AQIStory;
