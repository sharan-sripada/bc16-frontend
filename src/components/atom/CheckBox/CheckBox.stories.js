import React from "react";
import Checkbox from "./CheckBox";

const CheckboxStory = {
  title: "Atoms/CheckBox",
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  handleChange: { action: "Checked!" },
  checked: true,
  color: "primary",
};

export default CheckboxStory;
