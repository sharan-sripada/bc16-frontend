import React from "react";
import IconCommute from "./IconCommute";
export default {
  title: "Atoms/Icon",
  component: IconCommute,
};
const IconCommuteTemplate = (args) => <IconCommute {...args} />;

const Primary = IconCommuteTemplate.bind({});

Primary.args = {
  iconName: "metro",
};
