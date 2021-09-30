import React from "react";
import CommuteIcons from "./CommuteIcons";
export default {
  title: "Molecules/IconsList",
  component: CommuteIcons,
};
const CommuteIconsTemplate = (args) => <CommuteIcons {...args} />;

export const Primary = CommuteIconsTemplate.bind({});

Primary.args = {
  isTextShown: true,
  icons: [
    { iconName: "bus" },
    { iconName: "metro" },
    { iconName: "car" },
    { iconName: "bike" },
  ],
};
