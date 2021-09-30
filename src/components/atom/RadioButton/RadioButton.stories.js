import React from "react";
import RadioButton from "./RadioButton";

const RadioButtonStory = {
  title: "Atoms/RadioButton",
  component: RadioButton,
};

const Template = (args) => <RadioButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  handleChange: { action: "Checked!" },
  checked: true,
  color: "primary",
};

export default RadioButtonStory;
